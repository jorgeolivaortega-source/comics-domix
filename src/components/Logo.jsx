import React from 'react';
const Logo = ({
  className = "",
  imageClassName = "h-16 md:h-28",
  textClassName = "text-xl md:text-2xl"
}) => {
  return <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      <img src="https://horizons-cdn.hostinger.com/ef296409-c903-4393-a4ac-dfb989128487/logo-solo-sin-fondo-QpLqJ.png" alt="DOMI X Logo" className={`w-auto object-contain transition-all duration-300 ${imageClassName}`} />
      <span className={`text-white italic font-medium tracking-wide transition-all duration-300 ${textClassName}`}>
        Danilo Oliva
      </span>
    </div>;
};
export default Logo;
