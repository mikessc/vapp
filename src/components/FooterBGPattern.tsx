import React from 'react';

const FooterBGPattern: React.FC<{ position?: string; bottom?: string }> = (props) => {
  const containerStyle = props.bottom ? { bottom: props.bottom } : { bottom: '60px' };

  return (
    <div className={`footer_bg_pattern mx-auto max-w-screen-lg px-8 ${props.position ?? 'fixed'}`} style={containerStyle}>
      <div className="images_container"></div>
    </div>
  );
};

export default FooterBGPattern;
