import { type SVGProps } from "react";

export function IconPaper(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line y1="1" x2="14" y2="1" stroke="currentColor" strokeWidth={2} />
      <line y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth={2} />
      <line y1="13" x2="9" y2="13" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}

export function IconTalk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M10.0107 6.04762C10.7438 6.4709 10.7438 7.5291 10.0107 7.95238L4.64957 11.0476C3.91643 11.4709 3 10.9418 3 10.0952L3 3.90476C3 3.0582 3.91643 2.5291 4.64957 2.95238L10.0107 6.04762Z"
      />
    </svg>
  );
}
