import type { SVGProps } from "react";
import { Container, Header } from "~/components/container";
import { IconC, IconE, IconI, IconO } from "~/components/icons";

export function PageRoadmap() {
  return (
    <div className="relative flex-1 gap-6 xl:grid grid-cols-[1fr_800px_1fr] w-full w-miden max-w-[calc(800px+256px+256px) xl:max-w-full">
      <div className="hidden xl:block top-0 sticky mt-[168px] ml-auto pt-6 w-full max-w-3xs h-fit">
        <ul className="flex flex-col p-6 border !border-neutral-100 rounded-md font-medium text-muted-foreground text-sm">
          <li className="flex items-center gap-4 py-2 text-[#00AC96]">
            <IconE className="size-5" /> Ecosystem partner
          </li>
          <li className="flex items-center gap-4 py-2 text-[#8F8F8F]">
            <IconO className="size-5" /> Optional feature
          </li>
          <li className="flex items-center gap-4 py-2 text-[#A000F8]">
            <IconI className="size-5" /> Important feature
          </li>
          <li className="flex items-center gap-4 py-2 text-[#FC0036]">
            <IconC className="size-5" /> Critical feature
          </li>
        </ul>
      </div>
      <Container>
        <Header>
          <h2>
            Miden: Road to Mainnet
          </h2>
        </Header>
        <ul className="xl:hidden flex md:flex-row flex-col gap-4 mx-auto py-6 w-miden font-medium text-xs">
          <li className="flex items-center gap-2 text-[#00AC96]">
            <IconE className="size-5" /> Ecosystem partner
          </li>
          <li className="flex items-center gap-2 text-[#8F8F8F]">
            <IconO className="size-5" /> Optional feature
          </li>
          <li className="flex items-center gap-2 text-[#A000F8]">
            <IconI className="size-5" /> Important feature
          </li>
          <li className="flex items-center gap-2 text-[#FC0036]">
            <IconC className="size-5" /> Critical feature
          </li>
        </ul>
        <div className="mx-auto mt-0 xl:mt-16 w-miden">
          <SvgComponent className="w-full font-mono" />
        </div>
      </Container>
    </div>
  );
}

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 856 3089"
      className="!font-mono"
      {...props}
    >
      <title>Roadmap</title>
      <g clipPath="url(#a)">
        <path fill="#fff" d="M0 0h856v3089H0V0Z" />
        <path
          fill="#fff"
          d="M846 1575.5H10c-5.247 0-9.5 4.25-9.5 9.5v633c0 5.25 4.253 9.5 9.5 9.5h836c5.247 0 9.5-4.25 9.5-9.5v-633c0-5.25-4.253-9.5-9.5-9.5Z"
        />
        <path
          stroke="color(display-p3 .9617 .9617 .9617)"
          d="M846 1575.5H10c-5.247 0-9.5 4.25-9.5 9.5v633c0 5.25 4.253 9.5 9.5 9.5h836c5.247 0 9.5-4.25 9.5-9.5v-633c0-5.25-4.253-9.5-9.5-9.5Z"
        />
        <text
          xmlSpace="preserve"
          fill="#363636"
          fontFamily="IBM Plex Mono"
          fontSize={16}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={40.094} y={1624}>
            {"User experience"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9255 .9922 .9608)"
          d="M606 1647.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .0353 .6157 .251)"
          d="M609 1647.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={1680}>
            {"Computing deltas in \n"}
          </tspan>
          <tspan x={630} y={1696}>
            {"kernel"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9255 .9922 .9608)"
          d="M606 1761.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .0353 .6157 .251)"
          d="M609 1761.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={1802}>
            {"Storage arrays"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9255 .9922 .9608)"
          d="M606 1875.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .7255 .9686 .8078)"
          d="M606 1875h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .0353 .6157 .251)"
          d="M609 1875.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={1916}>
            {"Account-ID size"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .902 .9882 .902)"
          d="M799.5 1853h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={740.018} y={1863.5}>
            {"COMPLETED"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9255 .9922 .9608)"
          d="M358 1647.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .7255 .9686 .8078)"
          d="M358 1647h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .0353 .6157 .251)"
          d="M361 1647.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={1680}>
            {"Transaction recency \n"}
          </tspan>
          <tspan x={382} y={1696}>
            {"conditions"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .902 .9882 .902)"
          d="M551.5 1627h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={492.018} y={1637.25}>
            {"COMPLETED"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9255 .9922 .9608)"
          d="M358 1761.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .7255 .9686 .8078)"
          d="M358 1761h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .0353 .6157 .251)"
          d="M361 1761.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={1794}>
            {"Foreign procedure \n"}
          </tspan>
          <tspan x={382} y={1810}>
            {"invocation"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .902 .9882 .902)"
          d="M551.5 1739h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={492.018} y={1749.5}>
            {"COMPLETED"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9255 .9922 .9608)"
          d="M606 1989.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .7255 .9686 .8078)"
          d="M606 1989h30v72h-30v-72Z"
        />
        <path
          fill="color(display-p3 .0353 .6157 .251)"
          d="M609 1989.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={2030}>
            {"Fees"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M763.5 1967h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={698.021} y={1977.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M799.5 1967h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={782.006} y={1977.5}>
            {"15%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9255 .9922 .9608)"
          d="M606 2103.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .7255 .9686 .8078)"
          d="M606 2103h140v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .0353 .6157 .251)"
          d="M609 2103.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={2136}>
            {"STARK-based \n"}
          </tspan>
          <tspan x={630} y={2152}>
            {"signatures"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M763.5 2081h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={698.021} y={2091.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M799.5 2081h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={782.006} y={2091.5}>
            {"70%"}
          </tspan>
        </text>
        <path
          stroke="color(display-p3 .0353 .6157 .251)"
          d="M582 1682v116h-12"
        />
        <path
          fill="#fff"
          d="M.5 450.5c0-5.523 4.477-10 10-10h835c5.523 0 10 4.477 10 10v1090c0 5.52-4.477 10-10 10h-835c-5.523 0-10-4.48-10-10v-1090Z"
        />
        <path
          stroke="color(display-p3 .9617 .9617 .9617)"
          d="M.5 450.5c0-5.523 4.477-10 10-10h835c5.523 0 10 4.477 10 10v1090c0 5.52-4.477 10-10 10h-835c-5.523 0-10-4.48-10-10v-1090Z"
        />
        <text
          xmlSpace="preserve"
          fill="#363636"
          fontFamily="IBM Plex Mono"
          fontSize={16}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={40.063} y={494}>
            {"Developer "}
          </tspan>
        </text>
        <text
          xmlSpace="preserve"
          fill="#363636"
          fontFamily="IBM Plex Mono"
          fontSize={16}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={40.063} y={515}>
            {"experience"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M346.354 1347.65c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19ZM322 1347.5h24v1h-24v-1Zm272.354-391.146a.5.5 0 0 0 .146-.354.5.5 0 0 0-.146-.354l-3.182-3.182a.5.5 0 0 0-.354-.146.5.5 0 0 0-.354.146.5.5 0 0 0-.146.354.5.5 0 0 0 .146.354l2.829 2.828-2.829 2.828a.5.5 0 0 0-.146.354.5.5 0 0 0 .854.354l3.182-3.182ZM582 956.5h12v-1h-12v1Zm12.354 499.15c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19ZM570 1455.5h24v1h-24v-1Z"
        />
        <path
          fill="color(display-p3 .0353 .6157 .251)"
          d="M594.354 1467.65c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19Zm-12.854-.15H594v1h-12.5v-1Z"
        />
        <path
          fill="color(display-p3 .0353 .6157 .251)"
          d="M582 1351h-.5v-.5h.5v.5Zm12.354-.35c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19ZM582 1682.5h.5v.5h-.5v-.5Zm0-332h12v1h-12v-1Zm.5.5v331.5h-1V1351h1ZM570 1682h12v1h-12v-1Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M594.354 1234.65c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19ZM570 1234.5h24v1h-24v-1Z"
        />
        <path stroke="color(display-p3 0 .3765 .949)" d="M570 1345h12v-110" />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M594.354 666.354a.5.5 0 0 0 .146-.354.5.5 0 0 0-.146-.354l-3.182-3.182a.5.5 0 0 0-.354-.146.5.5 0 0 0-.354.146.5.5 0 0 0-.146.354.5.5 0 0 0 .146.354l2.829 2.828-2.829 2.828a.5.5 0 0 0-.146.354.5.5 0 0 0 .854.354l3.182-3.182ZM570 666.5h24v-1h-24v1Z"
        />
        <path
          stroke="color(display-p3 0 .3765 .949)"
          d="M570 550h12v116m-12 112h12v110m0 0h-12m12 0v116m0 0h-12m12 0v116h-12"
        />
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M358 514.139h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M358 514h100v72H358v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M361 514.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1ZM358.5 583v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 358.5 583h-1c0 .928.369 1.818 1.025 2.475A3.502 3.502 0 0 0 361 586.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 558.5 583h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 557.5 517h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 555 513.5v1Zm-194-1c-.928 0-1.819.369-2.475 1.025A3.503 3.503 0 0 0 357.5 517h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 361 514.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={555}>
            {"Decorator refactoring"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 494h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={504.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 494h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={504.5}>
            {"50%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M606 514.139h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M606 514h100v72H606v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M609 514.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1ZM606.5 583v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 606.5 583h-1c0 .928.369 1.818 1.025 2.475A3.503 3.503 0 0 0 609 586.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 806.5 583h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 805.5 517h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 803 513.5v1Zm-194-1c-.928 0-1.818.369-2.475 1.025A3.503 3.503 0 0 0 605.5 517h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 609 514.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={555}>
            {"Developer playground"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M763.5 494h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={698.021} y={504.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M799.5 494h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={782.006} y={504.5}>
            {"50%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M606 920.139h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M606 920h140v72H606v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M609 920.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1ZM606.5 989v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 606.5 989h-1c0 .928.369 1.818 1.025 2.475A3.503 3.503 0 0 0 609 992.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 806.5 989h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 805.5 923h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 803 919.5v1Zm-194-1c-.928 0-1.818.369-2.475 1.025A3.503 3.503 0 0 0 605.5 923h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 609 920.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={961}>
            {"Rust compiler"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M763.5 900h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={698.021} y={910.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M799.5 900h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={782.006} y={910.5}>
            {"70%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M606 1198.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M606 1198h140v72H606v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M609 1198.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={1239}>
            {"Packaging"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M763.5 1178h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={698.021} y={1188.25}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M799.5 1178h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={782.006} y={1188.25}>
            {"70%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M358 628.139h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M361 628.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1ZM358.5 697v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 358.5 697h-1c0 .928.369 1.818 1.025 2.475A3.502 3.502 0 0 0 361 700.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 558.5 697h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 557.5 631h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 555 627.5v1Zm-194-1c-.928 0-1.819.369-2.475 1.025A3.503 3.503 0 0 0 357.5 631h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 361 628.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={669}>
            {"Source-code mapping"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M606 628.139h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M609 628.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1ZM606.5 697v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 606.5 697h-1c0 .928.369 1.818 1.025 2.475A3.503 3.503 0 0 0 609 700.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 806.5 697h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 805.5 631h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 803 627.5v1Zm-194-1c-.928 0-1.818.369-2.475 1.025A3.503 3.503 0 0 0 605.5 631h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 609 628.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={669}>
            {"Debugging"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M606 1312.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M609 1312.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={1353}>
            {"Rate limits"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M358 742.139h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M358 742h100v72H358v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M361 742.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1ZM358.5 811v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 358.5 811h-1c0 .928.369 1.818 1.025 2.475A3.502 3.502 0 0 0 361 814.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 558.5 811h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 557.5 745h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 555 741.5v1Zm-194-1c-.928 0-1.819.369-2.475 1.025A3.503 3.503 0 0 0 357.5 745h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 361 742.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={783}>
            {"Miden SDK"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 722h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={732.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 722h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={732.5}>
            {"50%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M358 856.139h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M358 856h100v72H358v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M361 856.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1ZM358.5 925v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 358.5 925h-1c0 .928.369 1.818 1.025 2.475A3.502 3.502 0 0 0 361 928.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 558.5 925h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 557.5 859h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 555 855.5v1Zm-194-1c-.928 0-1.819.369-2.475 1.025A3.503 3.503 0 0 0 357.5 859h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 361 856.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={897}>
            {"Miden Rust bindings"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 836h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={846.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 836h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={846.5}>
            {"50%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M358 970.139h200v72.001H358v-72.001Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M358 970h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M361 970.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 557.5 973h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 555 969.5v1Zm-194-1c-.928 0-1.819.369-2.475 1.025A3.503 3.503 0 0 0 357.5 973h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 361 970.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={1003}>
            {"Element-addressable \n"}
          </tspan>
          <tspan x={382} y={1019}>
            {"memory"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .902 .9882 .902)"
          d="M551.5 950h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={492.018} y={960.5}>
            {"COMPLETED"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M358 1312.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M358 1312h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M361 1312.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={1353}>
            {"Account components"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .902 .9882 .902)"
          d="M551.5 1292h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={492.018} y={1302.5}>
            {"COMPLETED"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M110 1312.14h200v72H110v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M110 1312h200v72H110v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M113 1312.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={134} y={1353}>
            {"Offset-based storage"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M303.5 1292h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={244.018} y={1302.25}>
            {"COMPLETED"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M358 1084.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M358 1084h30v72h-30v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M361 1084.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={1125}>
            {"Read-only memory"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 1064h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={1074.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 1064h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={1074.5}>
            {"15%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M358 1198.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M358 1198h170v72H358v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M361 1198.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={1231}>
            {"Account component \n"}
          </tspan>
          <tspan x={382} y={1247}>
            {"templates"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 1178h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={1188.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 1178h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={1188.5}>
            {"85%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M358 1426.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M361 1426.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={1459}>
            {"Efficient ECDSA \n"}
          </tspan>
          <tspan x={382} y={1475}>
            {"signatures"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9373 .9647 1)"
          d="M606 1426.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .749 .8824 1)"
          d="M606 1426h60v72h-60v-72Z"
        />
        <path
          fill="color(display-p3 0 .3765 .949)"
          d="M609 1426.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#0060F2"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={1467}>
            {"Oracles"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M763.5 1406h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#005A72"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={698.021} y={1416.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M799.5 1406h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={782.006} y={1416.5}>
            {"30%"}
          </tspan>
        </text>
        <path
          fill="#fff"
          d="M846 .5H10A9.5 9.5 0 0 0 .5 10v396a9.5 9.5 0 0 0 9.5 9.5h836a9.5 9.5 0 0 0 9.5-9.5V10A9.5 9.5 0 0 0 846 .5Z"
        />
        <path
          stroke="color(display-p3 .9617 .9617 .9617)"
          d="M846 .5H10A9.5 9.5 0 0 0 .5 10v396a9.5 9.5 0 0 0 9.5 9.5h836a9.5 9.5 0 0 0 9.5-9.5V10A9.5 9.5 0 0 0 846 .5Z"
        />
        <text
          xmlSpace="preserve"
          fill="#363636"
          fontFamily="IBM Plex Mono"
          fontSize={16}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={40.094} y={49}>
            {"User experience"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9137 .2941 0)"
          d="M592.354 104.354a.5.5 0 0 0 .146-.354.5.5 0 0 0-.146-.354l-3.182-3.182a.5.5 0 0 0-.354-.146.5.5 0 0 0-.354.146.5.5 0 0 0-.146.354.5.5 0 0 0 .146.354l2.829 2.828-2.829 2.828a.5.5 0 0 0-.146.354.5.5 0 0 0 .854.354l3.182-3.182ZM568 104.5h24v-1h-24v1Z"
        />
        <path stroke="color(display-p3 .9137 .2941 0)" d="M579 104v111h-11" />
        <path
          fill="color(display-p3 1 .9686 .9294)"
          d="M356 68.139h200v72H356v-72Z"
        />
        <path
          fill="color(display-p3 1 .898 .7843)"
          d="M356 68.139h140v72H356v-72Z"
        />
        <path
          fill="color(display-p3 .9137 .2941 0)"
          d="M359 68.5h194v-1H359v1ZM555.5 71v66h1V71h-1Zm-2.5 68.5H359v1h194v-1ZM356.5 137V71h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 356.5 137h-1c0 .928.369 1.818 1.025 2.475A3.502 3.502 0 0 0 359 140.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 556.5 137h-1ZM553 68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-.928-.369-1.819-1.025-2.475A3.502 3.502 0 0 0 553 67.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#E94B00"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={380} y={109}>
            {"Transcript sdk"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M513.5 49h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={448.021} y={59.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M549.5 49.001h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={532.006} y={59.501}>
            {"70%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M514.5 160h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={449.021} y={170.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M549.5 160h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={532.006} y={170.5}>
            {"80%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 1 .9686 .9294)"
          d="M356 179.139h200v72H356v-72Z"
        />
        <path
          fill="color(display-p3 .9961 .8275 .6392)"
          d="M356 179h160v72H356v-72Z"
          opacity={0.5}
        />
        <path
          fill="color(display-p3 .9137 .2941 0)"
          d="M359 179.5h194v-1H359v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H359v1h194v-1ZM356.5 248v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 356.5 248h-1c0 .928.369 1.818 1.025 2.475A3.502 3.502 0 0 0 359 251.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 556.5 248h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 555.5 182h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 553 178.5v1Zm-194-1c-.928 0-1.819.369-2.475 1.025A3.503 3.503 0 0 0 355.5 182h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 359 179.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#E94B00"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={380} y={220}>
            {"WebGPU Proving"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M762.5 49h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={697.021} y={59.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M797.5 49h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={780.006} y={59.5}>
            {"70%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 1 .9686 .9294)"
          d="M604 68.139h200v72H604v-72Z"
        />
        <path
          fill="color(display-p3 .9961 .8275 .6392)"
          d="M604 68h140v72H604V68Z"
          opacity={0.5}
        />
        <path
          fill="color(display-p3 .9137 .2941 0)"
          d="M607 68.5h194v-1H607v1ZM803.5 71v66h1V71h-1Zm-2.5 68.5H607v1h194v-1ZM604.5 137V71h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 604.5 137h-1c0 .928.369 1.818 1.025 2.475A3.503 3.503 0 0 0 607 140.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 804.5 137h-1ZM801 68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-.928-.369-1.819-1.025-2.475A3.502 3.502 0 0 0 801 67.5v1Zm-194-1c-.928 0-1.818.369-2.475 1.025A3.502 3.502 0 0 0 603.5 71h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#E94B00"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={628} y={109}>
            {"Wallet"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M762.5 271h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={697.021} y={281.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M797.5 271h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={780.006} y={281.5}>
            {"60%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 1 .9686 .9294)"
          d="M604 290.139h200v72H604v-72Z"
        />
        <path
          fill="color(display-p3 .9961 .8275 .6392)"
          d="M604 290h120v72H604v-72Z"
          opacity={0.5}
        />
        <path
          fill="color(display-p3 .9137 .2941 0)"
          d="M607 290.5h194v-1H607v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H607v1h194v-1ZM604.5 359v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 604.5 359h-1c0 .928.369 1.819 1.025 2.475A3.503 3.503 0 0 0 607 362.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.502 3.502 0 0 0 804.5 359h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 803.5 293h1c0-.928-.369-1.819-1.025-2.475A3.503 3.503 0 0 0 801 289.5v1Zm-194-1c-.928 0-1.818.369-2.475 1.025A3.502 3.502 0 0 0 603.5 293h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 607 290.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#E94B00"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={628} y={331}>
            {"Block explorer"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .902 .9882 .902)"
          d="M797.5 160h-53a6.5 6.5 0 1 0 0 13h53a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#099D40"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={744.018} y={170.5}>
            {"COMPLETED"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 1 .9686 .9294)"
          d="M604 179.139h200v72H604v-72Z"
        />
        <path
          fill="color(display-p3 1 .898 .7843)"
          d="M604 179h200v72H604v-72Z"
          opacity={0.5}
        />
        <path
          fill="color(display-p3 .9137 .2941 0)"
          d="M607 179.5h194v-1H607v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H607v1h194v-1ZM604.5 248v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-1.768-.732A2.5 2.5 0 0 1 604.5 248h-1c0 .928.369 1.818 1.025 2.475A3.503 3.503 0 0 0 607 251.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-.732 1.768 2.5 2.5 0 0 1-1.768.732v1c.928 0 1.818-.369 2.475-1.025A3.503 3.503 0 0 0 804.5 248h-1Zm-2.5-68.5a2.5 2.5 0 0 1 1.768.732A2.5 2.5 0 0 1 803.5 182h1c0-.928-.369-1.818-1.025-2.475A3.503 3.503 0 0 0 801 178.5v1Zm-194-1c-.928 0-1.818.369-2.475 1.025A3.503 3.503 0 0 0 603.5 182h1a2.5 2.5 0 0 1 .732-1.768A2.5 2.5 0 0 1 607 179.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#E94B00"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={628} y={212}>
            {"Delegated transaction\n"}
          </tspan>
          <tspan x={628} y={228}>
            {"proving "}
          </tspan>
        </text>
        <path
          fill="#fff"
          d="M846 2252.5H10c-5.247 0-9.5 4.25-9.5 9.5v817c0 5.25 4.253 9.5 9.5 9.5h836c5.247 0 9.5-4.25 9.5-9.5v-817c0-5.25-4.253-9.5-9.5-9.5Z"
        />
        <path
          stroke="color(display-p3 .9617 .9617 .9617)"
          d="M846 2252.5H10c-5.247 0-9.5 4.25-9.5 9.5v817c0 5.25 4.253 9.5 9.5 9.5h836c5.247 0 9.5-4.25 9.5-9.5v-817c0-5.25-4.253-9.5-9.5-9.5Z"
        />
        <text
          xmlSpace="preserve"
          fill="#363636"
          fontFamily="IBM Plex Mono"
          fontSize={16}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={40} y={2301}>
            {"ZKL2"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M606 2453.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M609 2453.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={2494}>
            {"Node performance"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M606 2567.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M609 2567.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={2608}>
            {"Execution proofs"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M606 2681.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M609 2681.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={2722}>
            {"Network transaction"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M606 2795.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M609 2795.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={2836}>
            {"Agglayer integration"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M606 2909.14h200v72H606v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M609 2909.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={630} y={2950}>
            {"LxLy-Bridge / DA"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M358 2453.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .6275 0 .9725)"
          fillOpacity={0.1}
          d="M358 2453h80v72h-80v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M361 2453.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={2486}>
            {"Parallel state \n"}
          </tspan>
          <tspan x={382} y={2502}>
            {"updates"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 2431h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={2441.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 2431h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={2441.5}>
            {"40%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M358 2795.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .6275 0 .9725)"
          fillOpacity={0.1}
          d="M358 2795h100v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M361 2795.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={2836}>
            {"Block kernel"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 2775h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={2785.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 2775h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={2785.5}>
            {"50%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M358 2909.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .6275 0 .9725)"
          fillOpacity={0.1}
          d="M358 2909h20v72h-20v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M361 2909.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={2950}>
            {"Efficient keccak"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 2887h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={2897.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 2887h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={2897.5}>
            {"10%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M110 2511.14h200v72H110v-72Z"
        />
        <path
          fill="color(display-p3 .6275 0 .9725)"
          fillOpacity={0.1}
          d="M110 2511h50v72h-50v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M113 2511.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={134} y={2544}>
            {"Circuit evaluation \n"}
          </tspan>
          <tspan x={134} y={2560}>
            {"chiplet"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M267.5 2491h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={202.021} y={2501.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M303.5 2491h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={286.006} y={2501.5}>
            {"25%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M110 2653.14h200v72H110v-72Z"
        />
        <path
          fill="color(display-p3 .6275 0 .9725)"
          fillOpacity={0.1}
          d="M110 2653h120v72H110v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M113 2653.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={134} y={2686}>
            {"Recursive proof \n"}
          </tspan>
          <tspan x={134} y={2702}>
            {"verification"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M267.5 2633h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={202.021} y={2643.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M303.5 2633h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={286.006} y={2643.5}>
            {"60%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M110 2795.14h200v72H110v-72Z"
        />
        <path
          fill="color(display-p3 .6275 0 .9725)"
          fillOpacity={0.1}
          d="M110 2795h100v72H110v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M113 2795.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={134} y={2836}>
            {"Batch kernel"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M267.5 2775h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={202.021} y={2785.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M303.5 2775h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={286.006} y={2785.5}>
            {"50%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M358 2681.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .6275 0 .9725)"
          fillOpacity={0.1}
          d="M358 2681h180v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M361 2681.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={2722}>
            {"CUDA accerlerat-ion"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 2661h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={2671.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 2661h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={2671.5}>
            {"90%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M110 2369.14h200v72H110v-72Z"
        />
        <path
          fill="color(display-p3 .6275 0 .9725)"
          fillOpacity={0.1}
          d="M110 2369h160v72H110v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M113 2369.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={134} y={2410}>
            {"AirScript"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M267.5 2349h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={202.021} y={2359.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M303.5 2349h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={286.006} y={2359.5}>
            {"80%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .9804 .9608 1)"
          d="M358 2567.14h200v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .6275 0 .9725)"
          fillOpacity={0.1}
          d="M358 2567h140v72H358v-72Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M361 2567.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.494 2.494 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.494 2.494 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.494 2.494 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.494 2.494 0 0 1 2.5-2.5v-1Z"
        />
        <text
          xmlSpace="preserve"
          fill="#9434EA"
          fontFamily="IBM Plex Mono"
          fontSize={12}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={382} y={2608}>
            {"Distributed provers"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .698 .9412 1)"
          d="M515.5 2547h-65a6.5 6.5 0 1 0 0 13h65a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#166D84"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={450.021} y={2557.5}>
            {"IN PROGRESS"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .0863 .4275 .5176)"
          d="M551.5 2547h-17a6.5 6.5 0 1 0 0 13h17a6.5 6.5 0 1 0 0-13Z"
        />
        <text
          xmlSpace="preserve"
          fill="#B2F0FF"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={534.006} y={2557.5}>
            {"70%"}
          </tspan>
        </text>
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M594.354 2944.65c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19ZM570 2944.5h24v1h-24v-1Zm24.354-113.85c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19ZM570 2830.5h24v1h-24v-1Zm-225.646.15c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19ZM320 2830.5h24v1h-24v-1Zm-109.646-69.15c-.196.2-.512.2-.708 0l-3.182-3.18a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l2.828 2.83 2.828-2.83a.515.515 0 0 1 .708 0c.195.2.195.52 0 .71l-3.182 3.18Zm.146-24.35v24h-1v-24h1Zm-.146-117.65c-.196.2-.512.2-.708 0l-3.182-3.18a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l2.828 2.83 2.828-2.83a.515.515 0 0 1 .708 0c.195.2.195.52 0 .71l-3.182 3.18Zm.146-24.35v24h-1v-24h1Zm-.146-117.65c-.196.2-.512.2-.708 0l-3.182-3.18a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l2.828 2.83 2.828-2.83a.515.515 0 0 1 .708 0c.195.2.195.52 0 .71l-3.182 3.18Zm.146-24.35v24h-1v-24h1Zm383.854 149.65c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19ZM570 2602.5h24v1h-24v-1Zm24.354-113.85c.195.19.195.51 0 .7l-3.182 3.19a.515.515 0 0 1-.708 0 .488.488 0 0 1-.146-.35c0-.14.052-.27.146-.36l2.829-2.83-2.829-2.83a.495.495 0 0 1-.146-.36.488.488 0 0 1 .5-.49c.132 0 .259.05.354.14l3.182 3.19ZM570 2488.5h24v1h-24v-1Z"
        />
        <path
          stroke="color(display-p3 .5804 .2039 .9176)"
          d="M582.5 2489v456"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M332.5 2688.5h.5v-.5h-.5v.5Zm0 256.5h-.5v.5h.5v-.5Zm11.854.35a.477.477 0 0 0 .146-.35.477.477 0 0 0-.146-.35l-3.183-3.19a.514.514 0 0 0-.353-.14.488.488 0 0 0-.5.49c0 .14.052.27.146.36l2.829 2.83-2.828 2.83a.529.529 0 0 0-.109.16.528.528 0 0 0 0 .39c.025.06.062.11.109.16a.515.515 0 0 0 .707 0l3.182-3.19ZM332 2688.5V2945h1v-256.5h-1Zm-13 .5h13.5v-1H319v1Zm13.5 256.5H344v-1h-11.5v1Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M332.5 2139.5v-.5h-.5v.5h.5Zm261.854.35a.477.477 0 0 0 .146-.35.477.477 0 0 0-.146-.35l-3.182-3.19a.515.515 0 0 0-.354-.14.488.488 0 0 0-.5.49c0 .14.052.27.146.36l2.829 2.83-2.829 2.83a.495.495 0 0 0-.146.36c0 .13.052.26.146.35.196.19.512.19.708 0l3.182-3.19ZM332 2139.5v549h1v-549h-1Zm262-.5H332.5v1H594v-1Z"
        />
        <path
          fill="color(display-p3 .5804 .2039 .9176)"
          d="M332.5 1461v-.5h-.5v.5h.5Zm13.354.35a.477.477 0 0 0 .146-.35.477.477 0 0 0-.146-.35l-3.182-3.19a.515.515 0 0 0-.354-.14.488.488 0 0 0-.5.49c0 .14.052.27.146.36l2.829 2.83-2.829 2.83a.495.495 0 0 0-.146.36c0 .13.052.26.146.35.196.19.512.19.708 0l3.182-3.19ZM332 1461v733h1v-733h-1Zm13.5-.5h-13v1h13v-1Z"
        />
        <path stroke="color(display-p3 .5804 .2039 .9176)" d="M570 2716.5h12" />
        <rect
          width={17}
          height={12}
          x={628.5}
          y={49.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={634} y={58.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={380.5}
          y={49.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={386} y={58.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={380.5}
          y={160.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={386} y={169.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={628.5}
          y={160.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={634} y={169.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={628.5}
          y={271.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={634} y={280.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={722.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={731.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={836.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={845.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={950.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={959.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={1064.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={1073.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={1178.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={1187.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={1178.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={1187.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={1853.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={1862.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={1741.5}
          stroke="color(display-p3 .5608 .5608 .5608)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#8F8F8F"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={1750.98}>
            {"O"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={900.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={909.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={1292.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={1301.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={110.5}
          y={1292.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={116} y={1301.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={604.5}
          y={49.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={610} y={58.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={356.5}
          y={49.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={362} y={58.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={356.5}
          y={160.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={362} y={169.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={604.5}
          y={160.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={610} y={169.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={604.5}
          y={271.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={610} y={280.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={494.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={503.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={630.5}
          y={494.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={636} y={503.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={1406.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={1415.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={630.5}
          y={1406.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={636} y={1415.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={494.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={503.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={609.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={618.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={609.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={618.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={1292.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={1301.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={1406.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={1415.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={1627.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={1636.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={1740.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={1749.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={1627.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={1636.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={1967.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={1976.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={2081.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={2090.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={134.5}
          y={2349.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={140} y={2358.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={110.5}
          y={2491.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={116} y={2500.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={110.5}
          y={2633.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={116} y={2642.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={110.5}
          y={2775.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={116} y={2784.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={2887.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={2896.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={2887.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={2896.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={2775.5}
          stroke="color(display-p3 .9882 0 .2118)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#FC0036"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={2784.98}>
            {"C"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={110.5}
          y={2349.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={116} y={2358.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={2431.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={2440.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={382.5}
          y={2431.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={388} y={2440.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={2661.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={2670.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={382.5}
          y={2661.5}
          stroke="color(display-p3 0 .6745 .5882)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#00AC96"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={388} y={2670.98}>
            {"E"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={2547.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={2556.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={2433.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={2442.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={2547.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={2556.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={358.5}
          y={2775.5}
          stroke="color(display-p3 .6275 0 .9725)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#A000F8"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={364} y={2784.98}>
            {"I"}
          </tspan>
        </text>
        <rect
          width={17}
          height={12}
          x={606.5}
          y={2661.5}
          stroke="color(display-p3 .5608 .5608 .5608)"
          rx={6}
        />
        <text
          xmlSpace="preserve"
          fill="#8F8F8F"
          fontFamily="IBM Plex Mono"
          fontSize={10}
          fontWeight={500}
          letterSpacing="0em"
          style={{
            whiteSpace: "pre",
          }}
        >
          <tspan x={612} y={2670.98}>
            {"O"}
          </tspan>
        </text>
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h856v3089H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
