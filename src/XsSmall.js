import React from "react";
import "./styles.css";

const IMG_WIDTH = 1000;
const IMG_HEIGHT = (IMG_WIDTH * 500) / 800;

const TOP_OFFSET = 100;
const WIDTH = IMG_WIDTH;
const HEIGHT = IMG_HEIGHT - TOP_OFFSET;

const STROKE_WIDTH = IMG_WIDTH / 400;
const STROKE_OFFSET = 4 * STROKE_WIDTH;
const FONT_SIZE = IMG_WIDTH / 80;

const ICON_SIZE = 0.015 * IMG_WIDTH;

const BACKGROUND_COLOR = "#ffffffdd";
const TEXT_COLOR = "#1D0F68";
const CIRCLE_COLOR = "#3E21DE22";
const ICON_COLOR = "#3E21DE";

// if hidden part > 0.056 * width => this template, if smaller don't render the text

export default function App() {
  return (
    <div
      className="App"
      style={{ minWidth: IMG_WIDTH, maxWidth: IMG_WIDTH, width: IMG_WIDTH }}
    >
      <img
        className="Image"
        src="http://2.85.194.190:8000/accounts/d1bce440-abb6-46b8-b386-ec84f9ce108e/image/att_b0adff0e36d011eaa44a0242ac130004.png"
      />

      <svg
        className="Svg"
        viewBox={`0 0 ${IMG_WIDTH} ${IMG_HEIGHT}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points={`0,${TOP_OFFSET} ${WIDTH},${TOP_OFFSET} ${WIDTH},${HEIGHT +
            TOP_OFFSET}  0,${HEIGHT + TOP_OFFSET}`}
          fill={BACKGROUND_COLOR}
        />
        <line
          x1={0}
          y1={TOP_OFFSET + STROKE_WIDTH / 2}
          x2={IMG_WIDTH}
          y2={TOP_OFFSET + STROKE_WIDTH / 2}
          stroke={ICON_COLOR}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={`${STROKE_OFFSET} ${STROKE_OFFSET}`}
        />

        <circle
          cx={IMG_WIDTH / 2}
          cy={TOP_OFFSET}
          r={ICON_SIZE}
          fill="#fff"
          stroke={ICON_COLOR}
          strokeWidth={STROKE_WIDTH / 2}
        />

        <g
          clip-path="url(#lock-icon)"
          style={{
            transform: `translateX(${IMG_WIDTH / 2 -
              ICON_SIZE / 2}px) translateY(${TOP_OFFSET -
              ICON_SIZE / 2}px) scale(${ICON_SIZE / 100})`
          }}
        >
          <path
            d="M77.0834 41.8791V27.0832C77.0834 12.15 64.9334 0 50 0C35.0666 0 22.9166 12.15 22.9166 27.0834V41.8793C18.1666 42.8459 14.5832 47.0584 14.5832 52.0834V89.5834C14.5834 95.325 19.2541 100 25 100H75C80.7459 100 85.4166 95.325 85.4166 89.5834V52.0834C85.4166 47.0541 81.8334 42.8459 77.0834 41.8791ZM27.0834 27.0834C27.0834 14.4459 37.3668 4.1668 50 4.1668C62.6332 4.1668 72.9166 14.4459 72.9166 27.0834V41.6668H68.75V27.0834C68.75 16.7459 60.3375 8.3334 50 8.3334C39.6625 8.3334 31.25 16.7459 31.25 27.0834V41.6668H27.0834V27.0834ZM64.5834 27.0834V41.6668H35.4166V27.0834C35.4166 19.0416 41.9584 12.5 50 12.5C58.0416 12.5 64.5834 19.0416 64.5834 27.0834ZM81.25 89.5834C81.25 93.0293 78.4459 95.8334 75 95.8334H25C21.5541 95.8334 18.75 93.0293 18.75 89.5834V52.0834C18.75 48.6375 21.5541 45.8334 25 45.8334H75C78.4459 45.8334 81.25 48.6375 81.25 52.0834V89.5834Z"
            fill={ICON_COLOR}
          />
          <path
            d="M50 54.1666C44.2541 54.1666 39.5834 58.8416 39.5834 64.5832C39.5834 68.5416 41.8959 72.1373 45.3793 73.8791L43.7709 85.125C43.6834 85.7209 43.8625 86.3291 44.2584 86.7834C44.6543 87.2375 45.2293 87.5 45.8334 87.5H54.1668C54.7709 87.5 55.3459 87.2334 55.7418 86.7791C56.1377 86.325 56.3168 85.7207 56.2293 85.1207L54.6209 73.8748C58.1043 72.1373 60.4168 68.5414 60.4168 64.5832C60.4166 58.8416 55.7459 54.1666 50 54.1666ZM51.7416 70.5459C50.75 70.8375 50.1207 71.8168 50.2666 72.8418L51.7666 83.3334H48.2332L49.7332 72.8418C49.8832 71.8168 49.2498 70.8377 48.2582 70.5459C45.5625 69.7584 43.75 67.3625 43.75 64.5834C43.75 61.1375 46.5541 58.3334 50 58.3334C53.4459 58.3334 56.25 61.1375 56.25 64.5834C56.25 67.3625 54.4375 69.7584 51.7416 70.5459Z"
            fill={ICON_COLOR}
          />
        </g>
        <clipPath id="lock-icon">
          <rect width="100" height="100" fill="black" />
        </clipPath>
      </svg>
    </div>
  );
}
