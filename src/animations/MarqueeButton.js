import React from "react";

function MarqueeButton({ label, onClick, hasMarquee }) {
  return (
    <button
      type="button"
      className="btn btn-transparent border rounded-pill text-uppercase"
      onClick={onClick}
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
    </button>
  );
}

export default MarqueeButton;
