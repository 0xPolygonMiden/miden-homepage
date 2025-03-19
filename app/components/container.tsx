import  { type HtmlHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export function Container(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-3 flex-1", props.className)}>
      {props.children}
    </section>
  );
}

export function Header(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <header
      className={cn(
        "flex px-6 w-miden items-center justify-between gap-4 border-b py-3 leading-none uppercase",
        props.className
      )}
    >
      {props.children}
    </header>
  );
}
