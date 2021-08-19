import React from "react";
import "../style/skeletonCard.css";

const SkeletonCard = () => {
  return (
    <>
      <div className="skeleton_container">
        <div className="skeleton_image"></div>
        <div className="skeleton_name"></div>
      </div>
    </>
  );
};

export default SkeletonCard;
