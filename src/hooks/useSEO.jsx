import { Helmet } from "react-helmet-async";
import { getPageSEO } from "../utils/seoConfig";

/**
 * Custom hook to manage page SEO metadata
 * @param {string} pageName - The page name from seoConfig
 * @param {object} customConfig - Optional override configuration
 */
export const useSEO = (pageName, customConfig = {}) => {
  const defaultConfig = getPageSEO(pageName);
  const config = { ...defaultConfig, ...customConfig };

  return {
    helmetConfig: config,
    component: (
      <Helmet>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        {config.keywords && <meta name="keywords" content={config.keywords} />}
        <link rel="canonical" href={config.canonical} />
        
        {/* Open Graph */}
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        {config.canonical && <meta property="og:url" content={config.canonical} />}
        {config.ogImage && <meta property="og:image" content={config.ogImage} />}
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        {config.ogImage && <meta name="twitter:image" content={config.ogImage} />}
      </Helmet>
    ),
  };
};

export default useSEO;
