'use client'
import React from "react";

const Offer = () => {
  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <span className="countdown">
        <span style={{ "--value": 55 } as React.CSSProperties}></span>
      </span>
      <div className="flex flex-col p-5 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 15 } as React.CSSProperties}></span>
        </span>
        days
      </div>
      <div className="flex flex-col p-5 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 10 } as React.CSSProperties}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-5 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 24 } as React.CSSProperties}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-5 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": 52 } as React.CSSProperties}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Offer;
