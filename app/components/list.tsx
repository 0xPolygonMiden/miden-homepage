import { Link, type LinkProps } from "react-router";
import { cn } from "~/lib/utils";

export function ListItem(props: LinkProps) {
  return (
    <Link
      className={cn(
        "flex hover:bg-secondary py-1.5 transition-colors duration-300 hover:duration-100",
        props.className
      )}
      {...props}
    >
      <div className="flex items-center gap-3 truncate">{props.children}</div>
    </Link>
  );
}
