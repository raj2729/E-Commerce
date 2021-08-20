import React from "react";

const Rating = ({ value, text }) => {
  return (
    <div>
      <span>
        <i
          className={
            value >= 1
              ? "fas fa-star star-icon"
              : value >= 0.5
              ? "fas fa-star-half-alt star-icon"
              : "far fa-star star-icon"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 2
              ? "fas fa-star star-icon"
              : value >= 1.5
              ? "fas fa-star-half-alt star-icon"
              : "far fa-star star-icon"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 3
              ? "fas fa-star star-icon"
              : value >= 2.5
              ? "fas fa-star-half-alt star-icon"
              : "far fa-star star-icon"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 4
              ? "fas fa-star star-icon"
              : value >= 3.5
              ? "fas fa-star-half-alt star-icon"
              : "far fa-star star-icon"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            value >= 5
              ? "fas fa-star star-icon"
              : value >= 4.5
              ? "fas fa-star-half-alt star-icon"
              : "far fa-star star-icon"
          }
        ></i>
      </span>
      <span>{text}</span>
    </div>
  );
};

export default Rating;
