import { type HtmlHTMLAttributes } from "react";
import { cn } from "~/lib/utils";

export function Container(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("py-3 flex-1", props.className)} {...props}>
      {props.children}
    </section>
  );
}

export function Header(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <header className={cn("px-6 w-miden py-3", props.className)} {...props}>
      <Wrapper className="flex flex-col gap-6 [&_p]:text-neutral-600 [&_h2]:text-4xl [&_h2]:text-balance">
        {props.children}
      </Wrapper>
    </header>
  );
}

export function Wrapper(props: HtmlHTMLAttributes<HTMLElement>) {
  return (
    <div
      {...props}
      className={cn("w-full max-w-[600px] mx-0", props.className)}
    >
      {props.children}
    </div>
  );
}
