import { Link, type LinkProps } from "react-router";
import { cn } from "~/lib/utils";

export function ListItem(props: LinkProps) {
  return (
    <Link
      className={cn(
        "flex hover:bg-secondary py-1.5 transition-colors duration-300 hover:duration-100",
        props.className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3 truncate">{props.children}</div>
    </Link>
  );
}

export function Item(props: LinkProps & { children: React.ReactNode }) {
  return (
    <Link
      className="group flex flex-col justify-between py-6 border-t"
      {...props}
    >
      {props.children}
    </Link>
  );
}

export function ItemHeader(props: { children: React.ReactNode }) {
  return <span className="flex items-center gap-3">{props.children}</span>;
}

export function ItemTitle(props: { children: React.ReactNode }) {
  return (
    <h4 className="group-hover:text-primary transition-colors">
      {props.children}
    </h4>
  );
}

export function ItemDescription(props: { children: React.ReactNode }) {
  return <p className="mt-4 text-muted-foreground">{props.children}</p>;
}
