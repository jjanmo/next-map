interface Props {
  size: number
}
export default function Spinner({ size }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <g transform="translate(80 50)">
        <circle r="6" fill="#00c362">
          <animateTransform
            attributeName="transform"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.875s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(45 -50.355 121.569)">
        <circle r="6" fill="#00c362" fillOpacity=".875">
          <animateTransform
            attributeName="transform"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.75s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(90 -15 65)">
        <circle r="6" fill="#00c362" fillOpacity=".75">
          <animateTransform
            attributeName="transform"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.625s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(135 -.355 41.569)">
        <circle r="6" fill="#00c362" fillOpacity=".625">
          <animateTransform
            attributeName="transform"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.5s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(180 10 25)">
        <circle r="6" fill="#00c362" fillOpacity=".5">
          <animateTransform
            attributeName="transform"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.375s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(-135 20.355 8.431)">
        <circle r="6" fill="#00c362" fillOpacity=".375">
          <animateTransform
            attributeName="transform"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.25s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(-90 35 -15)">
        <circle r="6" fill="#00c362" fillOpacity=".25">
          <animateTransform
            attributeName="transform"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="-0.125s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
      <g transform="rotate(-45 70.355 -71.569)">
        <circle r="6" fill="#00c362" fillOpacity=".125">
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="scale"
            values="1.5 1.5;1 1"
          />
          <animate
            attributeName="fill-opacity"
            begin="0s"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            values="1;0"
          />
        </circle>
      </g>
    </svg>
  )
}
