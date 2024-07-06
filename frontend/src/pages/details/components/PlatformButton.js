import React from "react";
import "./PlatformButton.css";

const Platform = ({game}) => {
  return (
    <div>
      {game.platforms.map((platformInfo, index) => (
        <div className="platformButton"  key={index}>
          {platformInfo.platform.name}
        </div>
      ))}
    </div>
  );
};

export default Platform;
