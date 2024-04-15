import React from "react";

// resuable animation component for buttons

function MarqueeButton({ label, href, hasMarquee }) {
  return (
    <a
      type="button"
      className="btn btn-transparent border rounded-pill text-uppercase m-1"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="default-text">{label}</span>
      {hasMarquee && (
        <div className="marquee-btn" aria-hidden="true">
          <div className="marquee-btn-inner">
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
