import type { HtmlHTMLAttributes } from "react";

export function Container(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section className="p-6 py-3 border-x flex-1">{props.children}</section>
  );
}

export function Header(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <header className="flex items-center justify-between gap-4 border-b py-3 leading-none uppercase">
      {props.children}
    </header>
  );
}
