import { Link } from "react-router";
import { Logo } from "~/components/logo";

const socials = [
  {
    label: "Discord",
    href: "/",
    icon: (
      <path
        fill="currentColor"
        d="M11.8689 2.84C10.9563 2.44667 9.987 2.16 8.97528 2C8.84792 2.20667 8.70642 2.48666 8.60736 2.70667C7.53128 2.56 6.46295 2.56 5.4017 2.70667C5.30265 2.48666 5.15407 2.20667 5.03379 2C4.01501 2.16 3.04574 2.44667 2.13944 2.84C0.307023 5.38665 -0.188226 7.87331 0.0593979 10.3266C1.27629 11.16 2.45075 11.6667 3.60467 12C3.88767 11.64 4.14237 11.2533 4.3617 10.8467C3.94427 10.7 3.54808 10.52 3.16603 10.3066C3.26508 10.24 3.36413 10.1667 3.45611 10.0933C5.76254 11.0867 8.26072 11.0867 10.5388 10.0933C10.6379 10.1667 10.7299 10.24 10.8289 10.3066C10.4469 10.52 10.0507 10.7 9.63324 10.8467C9.85257 11.2533 10.1073 11.64 10.3903 12C11.5435 11.6667 12.725 11.16 13.9355 10.3266C14.2397 7.48667 13.4537 5.02001 11.8689 2.84ZM4.68007 8.81331C3.98671 8.81331 3.42072 8.21999 3.42072 7.49334C3.42072 6.76668 3.97256 6.17332 4.68007 6.17332C5.38048 6.17332 5.95353 6.76668 5.93938 7.49334C5.93938 8.21999 5.38048 8.81331 4.68007 8.81331ZM9.32905 8.81331C8.63567 8.81331 8.06896 8.21999 8.06896 7.49334C8.06896 6.76668 8.62151 6.17332 9.32905 6.17332C10.0295 6.17332 10.6025 6.76668 10.5884 7.49334C10.5884 8.21999 10.0365 8.81331 9.32905 8.81331Z"
      />
    ),
  },
  {
    label: "X",
    href: "/",
    icon: (
      <path
        d="M10.4507 1H12.2908L8.27076 6.08308L13 13H9.29704L6.39675 8.80492L3.07815 13H1.23696L5.53678 7.56308L1 1H4.79697L7.41858 4.83446L10.4507 1ZM9.8049 11.7815H10.8245L4.24294 2.15446H3.1488L9.8049 11.7815Z"
        fill="currentColor"
      />
    ),
  },
  {
    label: "Telegram",
    href: "/",
    icon: (
      <path
        fill="currentColor"
        d="M7 0C5.61557 0 4.26215 0.410541 3.11101 1.17971C1.95987 1.94888 1.06266 3.04213 0.532848 4.32121C0.00303584 5.60026 -0.135591 7.00778 0.134504 8.3656C0.404599 9.72352 1.07129 10.9707 2.05026 11.9498C3.02922 12.9287 4.2765 13.5954 5.63439 13.8655C6.99221 14.1356 8.39974 13.9969 9.67881 13.4671C10.9579 12.9373 12.0511 12.0402 12.8203 10.889C13.5895 9.73786 14 8.3845 14 6.99999C14 5.14348 13.2625 3.36301 11.9498 2.05025C10.637 0.737493 8.85649 0 7 0ZM10.4388 4.795L9.2925 10.2112C9.205 10.5962 8.9775 10.6837 8.65375 10.5087L6.90375 9.21374L6.02875 10.0275C5.98754 10.0813 5.9346 10.1251 5.87396 10.1554C5.81333 10.1857 5.74656 10.2018 5.67875 10.2025L5.80125 8.45249L9.03875 5.52125C9.1875 5.39875 9.03875 5.32874 8.82875 5.45124L4.85625 7.94499L3.10625 7.40249C2.73 7.28874 2.72125 7.02624 3.185 6.85124L9.93125 4.22625C10.2638 4.13 10.5438 4.3225 10.4388 4.795Z"
      />
    ),
  },
  {
    label: "Github",
    href: "/",
    icon: (
      <path
        fill="currentColor"
        d="M7 0C3.13235 0 0 3.21153 0 7.17695C0 10.3529 2.00383 13.0352 4.78617 13.9857C5.13617 14.0487 5.26704 13.8334 5.26704 13.6449C5.26704 13.4746 5.25852 12.9098 5.25852 12.3082C3.5 12.6402 3.0453 11.8688 2.9053 11.4656C2.82617 11.2591 2.4853 10.6219 2.18704 10.4515C1.94235 10.3167 1.59235 9.98469 2.17852 9.97596C2.73 9.96722 3.12383 10.4964 3.2553 10.7117C3.8853 11.7977 4.89148 11.4919 5.29383 11.3034C5.3547 10.8372 5.53852 10.5233 5.74 10.3435C4.18235 10.1644 2.5553 9.54534 2.5553 6.8C2.5553 6.0199 2.82617 5.37397 3.27235 4.87159C3.20235 4.69185 2.95765 3.95606 3.34235 2.96938C3.34235 2.96938 3.92852 2.78091 5.26765 3.70518C5.82765 3.54354 6.42235 3.46303 7.01765 3.46303C7.61235 3.46303 8.20765 3.54416 8.76765 3.70518C10.1068 2.77217 10.6923 2.96938 10.6923 2.96938C11.0777 3.95606 10.8323 4.69185 10.7623 4.87159C11.2085 5.37397 11.48 6.01054 11.48 6.8C11.48 9.55408 9.84383 10.1638 8.28617 10.3435C8.54 10.5682 8.75852 10.9988 8.75852 11.6716C8.75852 12.6314 8.75 13.4028 8.75 13.6449C8.75 13.8334 8.88148 14.0581 9.23087 13.9863C11.9968 13.0352 14 10.3435 14 7.17695C14 3.21153 10.8677 0 7 0Z"
      />
    ),
  },
];

export function Footer() {
  return (
    <footer className="p-6 border border-b-0 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Link to="/" prefetch="intent">
          <Logo className="h-5 shrink-0" />
        </Link>
        <p className="uppercase text-xs leading-none">
          For those who <br /> Move the world
        </p>
      </div>
      <ul className="flex items-center justify-end text-neutral-400">
        {socials.map((item) => (
          <li key={item.label}>
            <Link to={item.href} className="px-2 block">
              <svg
                fill="none"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 size-3.5"
              >
                {item.icon}
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
