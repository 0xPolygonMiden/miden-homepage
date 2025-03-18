export default function Scribble({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex xl:flex-row flex-col gap-2 !max-w-full">
      <div className="flex flex-shrink-0 items-center">{children}</div>
      <div className="xl:py-[1.25em] w-full xl:!max-w-[146px] font-script !text-blue-500">
        <span className="block relative pt-2 xl:pt-0 xl:pl-4 border-t xl:border-t-0 !border-blue-500 xl:border-l h-full !text-xl text-balance !leading-tight">
          <span className="top-0 left-0 absolute bg-blue-500 w-[1px] xl:w-1 h-1 xl:h-[1px] -translate-y-full xl:-translate-x-full xl:-translate-y-0" />
          <span className="top-0 xl:top-auto right-0 xl:bottom-0 left-auto xl:left-0 absolute bg-blue-500 w-[1px] xl:w-1 h-1 xl:h-[1px] -translate-y-full xl:-translate-x-full xl:-translate-y-0" />
          {text}
        </span>
      </div>
    </div>
  );
}
