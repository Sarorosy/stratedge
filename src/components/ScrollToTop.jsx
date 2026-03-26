import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollContainer = document.getElementById("scroll-container");
        if (scrollContainer) {
          scrollContainer.scrollTo(0, 0);
        } else {
          window.scrollTo(0, 0);
        }
      }, [pathname]);
      

    return null;
};

export default ScrollToTop;
