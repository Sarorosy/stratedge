import React from 'react'
import { FloatingWhatsApp } from "react-floating-whatsapp";
function WhatsappFloat() {
    const WA = "https://wa.me/919361110910";
    return (
        <>
        
        {/* <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            position: "fixed", bottom: 32, right: 32, zIndex: 200,
            width: 54, height: 54,
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "var(--color-shadow)",
            transition: "transform 0.2s, box-shadow 0.2s",
            textDecoration: "none",
        }}
        className='rounded-xl'
            onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "var(--color-shadow)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "var(--color-shadow)"; }}
        >
            <img src='/whatsapp.svg' className='w-20 ' />
        </a> */}
        <FloatingWhatsApp
        phoneNumber="919361110910"
        accountName="Stratedge"
        avatar="/s-logo.png"
        statusMessage="Typically replies in minutes"
        chatMessage="Hi 👋! How can we help?"
        placeholder="Type your message here..."
        allowClickAway={false}
        notification
        notificationSound
        darkMode={false}
        allowEsc={false}
      />
        </>
    )
}

export default WhatsappFloat