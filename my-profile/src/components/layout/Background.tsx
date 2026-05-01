import React from "react";

const Background: React.FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    {/* Grid */}
    <div className="absolute inset-0 grid-bg opacity-100" />

    {/* Glow orbs */}
    <div className="absolute top-[-15%] right-[-8%] w-[650px] h-[650px] rounded-full bg-cyan-500/[0.04] blur-[130px]" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[550px] h-[550px] rounded-full bg-violet-500/[0.04] blur-[110px]" />
    <div className="absolute top-[45%] left-[40%] w-[350px] h-[350px] rounded-full bg-blue-500/[0.03] blur-[100px]" />
  </div>
);

export default Background;
