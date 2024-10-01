import React from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';

const WhatsAppIcon = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5519971455802&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.";

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="d-flex align-items-center justify-content-center position-fixed text-white rounded-circle"
      style={iconStyle}
      aria-label="Contact us on WhatsApp"
    >
      <IconBrandWhatsapp size={30} color="white" />
    </a>
  );
};

const iconStyle = {
  bottom: '20px',
  right: '20px',
  width: '50px',
  height: '50px',
  zIndex: '1000',
  cursor: 'pointer',
  transition: '.4s',
  backgroundColor: '#21b88f'
};

export default WhatsAppIcon;
