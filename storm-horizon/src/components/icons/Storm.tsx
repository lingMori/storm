import React, { useEffect } from "react";
import "./style.css"; // 引入你的 CSS 文件

const RainAnimation: React.FC = () => {
  useEffect(() => {
    const rain = () => {
      const cloud = document.querySelector(".cloud") as HTMLElement;
      if (!cloud) return;

      const drop = document.createElement("div");
      const left = Math.floor(Math.random() * 310);
      const width = Math.random() * 5;
      const height = Math.random() * 50;
      const duration = Math.random() * 0.5;

      drop.classList.add("drop");
      cloud.appendChild(drop);

      drop.style.left = `${left}px`;
      drop.style.width = `${0.5 + width}px`;
      drop.style.height = `${0.5 + height}px`;
      drop.style.animationDuration = `${1 + duration}s`;

      setTimeout(() => {
        if (cloud.contains(drop)) {
          cloud.removeChild(drop);
        }
      }, 2000);
    };

    const interval = setInterval(rain, 20);

    return () => clearInterval(interval); // 清除定时器
  }, []);

  return (
    <div className="container">
      <div className="cloud"></div>
    </div>
  );
};

export default RainAnimation;
