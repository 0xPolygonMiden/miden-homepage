import type { ReactNode, SVGProps } from "react";

export function Banner({ message }: { message: ReactNode }) {
  return (
    <div className="flex items-center p-6 border-b w-miden [&_a]:text-accent">
      <IconInfo className="mr-2 size-5 text-accent" />
      {message}
    </div>
  );
}

function IconInfo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Info</title>
      <path
        d="M9.99999 13.3333V9.99999M9.99999 6.66666H10.0083M18.3333 9.99999C18.3333 14.6024 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6024 1.66666 9.99999C1.66666 5.39762 5.39762 1.66666 9.99999 1.66666C14.6024 1.66666 18.3333 5.39762 18.3333 9.99999Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
