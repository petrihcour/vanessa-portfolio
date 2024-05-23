import React from "react";

// resuable animation component for buttons

function MarqueeButton({ type, label, href, onClick, hasMarquee, style, textColor }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }; 

  return (
    <a
      type={type}
      className="btn btn-transparent border rounded-pill text-uppercase m-1"
      role="button"
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noreferrer"
      style={style}
      aria-label={label}
    >
      <span className="default-text">{label}</span>
      {hasMarquee && (
        <div className="marquee-btn" aria-hidden="true">
          <div className="marquee-btn-inner" style={{color: textColor}}>
            <span>{label}</span>
            <span>{label}</span>
            <span>{label}</span>
            <span>{label}</span>
            <span>{label}</span>
            <span>{label}</span>
          </div>
        </div>
      )}
    </a>
  );
}

export default MarqueeButton;
