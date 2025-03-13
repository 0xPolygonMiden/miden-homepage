import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <>
      <h1 className="sr-only">Miden</h1>
      <svg
        fill="none"
        viewBox="0 0 100 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <rect width="100" height="20" fill="#F3F3F3" />
      </svg>
    </>
  );
}
