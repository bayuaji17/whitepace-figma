import React from "react";
import { cn } from "@/app/lib/utils";

const CircleSVGAnimation = ({ className }: { className?: string }) => {
  return (
    <svg
      width="583"
      height="568"
      viewBox="0 0 583 544"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto overflow-visible", className)}
    >
      {/* Outer Circle - Clockwise Rotation */}
      <g className="origin-center animate-spin [animation-duration:11s]">
        <circle
          cx="300.122"
          cy="271.772"
          r="270.382"
          stroke="#A7CEFC"
          strokeWidth="2"
          strokeDasharray="15 15"
        />
      </g>

      {/* Inner Circle - Counterclockwise Rotation */}
      <g className="origin-center animate-spin [animation-duration:15s]">
        <circle
          cx="300.122"
          cy="271.772"
          r="157.888"
          stroke="#A7CEFC"
          strokeWidth="2"
          strokeDasharray="15 15"
        />
      </g>

      {/* Other Circles (Static) */}
      <circle
        cx="28.7394"
        cy="272.183"
        r="28.7394"
        fill="#FF5758"
        className="origin-center animate-spin [animation-duration:15s]"
      />
      <circle
        cx="459.011"
        cy="272.183"
        r="28.7394"
        fill="#37A3FF"
        className="origin-center animate-spin [animation-duration:15s]"
      />
      <circle
        cx="300.532"
        cy="430.66"
        r="28.7394"
        fill="#FFBF60"
        className="origin-center animate-spin [animation-duration:15s]"
      />
      <circle
        cx="141.234"
        cy="272.183"
        r="28.7394"
        fill="#37A3FF"
        className="origin-center animate-spin [animation-duration:15s]"
      />
      <circle
        cx="141.234"
        cy="495.529"
        r="28.7394"
        fill="#37A3FF"
        className="origin-center animate-spin [animation-duration:15s]"
      />
      <circle
        cx="491.855"
        cy="87.4291"
        r="28.7394"
        fill="#37A3FF"
        className="origin-center animate-spin [animation-duration:15s]"
      />
      <circle
        cx="554.26"
        cy="358.401"
        r="28.7394"
        fill="#00CA75"
        className="origin-center animate-spin [animation-duration:15s]"
      />

      {/* Masks and Other Elements */}
      <mask
        id="mask0_9_7867"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="525"
        y="329"
        width="58"
        height="59"
      >
        <circle
          cx="554.26"
          cy="358.401"
          r="28.7394"
          fill="#C4C4C4"
          className="origin-center animate-spin [animation-duration:15s]"
        />
      </mask>
      <g mask="url(#mask0_9_7867)"></g>

      <circle
        cx="301.354"
        cy="112.884"
        r="28.7394"
        fill="#00CA75"
        className="origin-center animate-spin [animation-duration:15s]"
      />
      <mask
        id="mask1_9_7867"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="272"
        y="84"
        width="59"
        height="58"
      >
        <circle cx="301.354" cy="112.884" r="28.7394" fill="#C4C4C4" />
      </mask>
      <g mask="url(#mask1_9_7867)"></g>

      <circle
        cx="143.698"
        cy="48.0151"
        r="28.7394"
        fill="#FFDC4D"
        className="origin-center animate-spin [animation-duration:15s]"
      />

      {/* Rect and Paths */}
      <g filter="url(#filter0_d_9_7867)">
        <rect
          x="259"
          y="231"
          width="82.1127"
          height="82.1127"
          rx="10"
          fill="white"
        />
      </g>
      <g clipPath="url(#clip0_9_7867)">
        <path
          d="M274 255.262V264.577C274 267.414 277.59 268.927 279.784 266.941L290.254 257.626C292.548 255.593 291.052 252 287.911 252H277.44C275.546 252 274 253.466 274 255.262Z"
          fill="#5986EF"
        />
        <path
          d="M323.56 252H313.089C309.998 252 308.452 255.593 310.746 257.626L321.216 266.941C323.41 268.879 327 267.414 327 264.577V255.262C327 253.466 325.454 252 323.56 252Z"
          fill="#5986EF"
        />
        <path
          d="M302.868 274.742L321.216 291.102C323.41 293.04 327 291.575 327 288.738V279.329C327 278.43 326.601 277.579 325.903 276.965L302.868 256.397C301.522 255.215 299.478 255.215 298.132 256.397L275.097 276.965C274.399 277.579 274 278.43 274 279.329V288.738C274 291.575 277.59 293.088 279.784 291.102L298.132 274.742C299.478 273.56 301.522 273.56 302.868 274.742Z"
          fill="#5986EF"
        />
      </g>

      {/* Filters and Clip Paths */}
      <defs>
        <filter
          id="filter0_d_9_7867"
          x="220"
          y="196"
          width="160.113"
          height="160.113"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="11"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_9_7867"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="25" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_9_7867"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_9_7867"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_9_7867">
          <rect
            width="53"
            height="40"
            fill="white"
            transform="translate(274 252)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CircleSVGAnimation;
