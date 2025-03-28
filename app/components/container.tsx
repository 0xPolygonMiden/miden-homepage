import type { HtmlHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export function Container(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section
      {...props}
      className={cn("my-12 px-6 flex-1 w-miden", props.className)}
    >
      {props.children}
    </section>
  );
}

export function Header(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <header
      {...props}
      className={cn(
        "w-miden flex flex-col gap-6 [&_p]:text-muted-foreground [&_h2]:text-4xl [&_h2]:text-balance",
        props.className,
      )}
    >
      {props.children}
    </header>
  );
}

export function Wrapper(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <div {...props} className={cn("w-wrapper", props.className)}>
      {props.children}
    </div>
  );
}
