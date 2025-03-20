import { type SVGProps } from "react";
import { Container, Header } from "~/components/container";
import { IconC, IconE, IconI, IconO } from "~/components/icons";

export function PageRoadmap() {
  return (
    <Container>
      <Header>
        <h2>Miden road to mainnet</h2>
        <span className="font-bold">H1 2025</span>
      </Header>
      <ul className="flex md:flex-row flex-col gap-4 mx-auto p-6 w-miden font-medium text-xs uppercase">
        <li className="flex items-center gap-2">
          <IconE className="size-5" /> Ecosystem partner
        </li>
        <li className="flex items-center gap-2">
          <IconO className="size-5" /> Optional feature
        </li>
        <li className="flex items-center gap-2">
          <IconI className="size-5" /> Important feature
        </li>
        <li className="flex items-center gap-2">
          <IconC className="size-5" /> Critical feature
        </li>
      </ul>
      <div className="mx-auto w-miden">
        <SvgComponent className="w-full font-mono" />
      </div>
    </Container>
  );
}

function SvgComponent(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 856 3089"
      {...props}
    >
      <path fill="#fff" d="M0 0h856v3089H0z" />
      <rect width={855} height={652} x={0.5} y={1575.5} fill="#fff" rx={9.5} />
      <rect
        width={855}
        height={652}
        x={0.5}
        y={1575.5}
        stroke="#F5F5F5"
        rx={9.5}
      />
      <text
        xmlSpace="preserve"
        fill="#363636"
        fontSize={16}
        fontWeight={600}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={40.094} y={1623.5}>
          {"User experience"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={1625.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={1635.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#D2FAD2" d="M606 1647.14h200v72H606z" />
      <path
        fill="#0F7E32"
        d="M609 1647.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={1679.5}>
          {"Computing deltas in "}
        </tspan>
        <tspan x={630} y={1695.5}>
          {"kernel"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={1739.5}
        stroke="#8F8F8F"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#8F8F8F"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={1749.25}>
          {"O"}
        </tspan>
      </text>
      <path fill="#D2FAD2" d="M606 1761.14h200v72H606z" />
      <path
        fill="#0F7E32"
        d="M609 1761.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={1801.5}>
          {"Storage arrays"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={1853.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={1863.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#D2FAD2" d="M606 1875.14h200v72H606z" />
      <path fill="#82EC8D" fillOpacity={0.5} d="M606 1875h200v72H606z" />
      <path
        fill="#0F7E32"
        d="M609 1875.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={1915.5}>
          {"Account-ID size"}
        </tspan>
      </text>
      <rect width={78} height={13} x={728} y={1853} fill="#E6FCE6" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={740.018} y={1863.25}>
          {"COMPLETED"}
        </tspan>
      </text>
      <path fill="#D2FAD2" d="M358 1647.14h200v72H358z" />
      <path fill="#82EC8D" fillOpacity={0.5} d="M358 1647h200v72H358z" />
      <path
        fill="#0F7E32"
        d="M361 1647.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={1679.5}>
          {"Transaction recency "}
        </tspan>
        <tspan x={382} y={1695.5}>
          {"conditions"}
        </tspan>
      </text>
      <rect width={78} height={13} x={480} y={1625} fill="#E6FCE6" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={492.018} y={1635.25}>
          {"COMPLETED"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={1625.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={1635.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#D2FAD2" d="M358 1761.14h200v72H358z" />
      <path fill="#82EC8D" fillOpacity={0.5} d="M358 1761h200v72H358z" />
      <path
        fill="#0F7E32"
        d="M361 1761.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={1793.5}>
          {"Foreign procedure "}
        </tspan>
        <tspan x={382} y={1809.5}>
          {"invocation"}
        </tspan>
      </text>
      <rect width={78} height={13} x={480} y={1739} fill="#E6FCE6" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={492.018} y={1749.25}>
          {"COMPLETED"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={1739.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={1749.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#D2FAD2" d="M606 1989.14h200v72H606z" />
      <path fill="#82EC8D" fillOpacity={0.5} d="M606 1989h30v72h-30z" />
      <path
        fill="#0F7E32"
        d="M609 1989.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={2029.5}>
          {"Fees"}
        </tspan>
      </text>
      <rect width={78} height={13} x={692} y={1967} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={698.021} y={1977.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={776} y={1967} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={782.006} y={1977.25}>
          {"15%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={1967.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={1977.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#D2FAD2" d="M606 2103.14h200v72H606z" />
      <path fill="#82EC8D" fillOpacity={0.5} d="M606 2103h140v72H606z" />
      <path
        fill="#0F7E32"
        d="M609 2103.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={2135.5}>
          {"STARK-based "}
        </tspan>
        <tspan x={630} y={2151.5}>
          {"signatures"}
        </tspan>
      </text>
      <rect width={78} height={13} x={692} y={2081} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={698.021} y={2091.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={776} y={2081} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={782.006} y={2091.25}>
          {"70%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={2081.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={2091.25}>
          {"I"}
        </tspan>
      </text>
      <path stroke="#0F7E32" d="M582 1682v116h-12" />
      <path fill="#fff" d="M.5 440.5h855v1110H.5z" />
      <path stroke="#F5F5F5" d="M.5 440.5h855v1110H.5z" />
      <text
        xmlSpace="preserve"
        fill="#363636"
        fontSize={16}
        fontWeight={600}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={40.063} y={493.5}>
          {"Developer \u2028"}
        </tspan>
        <tspan x={40.063} y={514.5}>
          {"experience"}
        </tspan>
      </text>
      <path
        fill="#0060F2"
        d="M346.354 1347.65c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19ZM322 1347.5h24v1h-24v-1Zm272.354-391.146a.502.502 0 0 0 0-.708l-3.182-3.182a.502.502 0 0 0-.708 0 .502.502 0 0 0 0 .708l2.829 2.828-2.829 2.828a.502.502 0 0 0 0 .708.502.502 0 0 0 .708 0l3.182-3.182ZM582 956.5h12v-1h-12v1Zm12.354 499.15c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19ZM570 1455.5h24v1h-24v-1Z"
      />
      <path
        fill="#0F7E32"
        d="M594.354 1467.65c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19Zm-12.854-.15H594v1h-12.5v-1Z"
      />
      <path
        fill="#0F7E32"
        d="M582 1351h-.5v-.5h.5v.5Zm12.354-.35c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19ZM582 1682.5h.5v.5h-.5v-.5Zm0-332h12v1h-12v-1Zm.5.5v331.5h-1V1351h1ZM570 1682h12v1h-12v-1Z"
      />
      <path
        fill="#0060F2"
        d="M594.354 1234.65c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19ZM570 1234.5h24v1h-24v-1Z"
      />
      <path stroke="#0060F2" d="M570 1345h12v-110" />
      <path
        fill="#0060F2"
        d="M594.354 666.354a.502.502 0 0 0 0-.708l-3.182-3.182a.502.502 0 0 0-.708 0 .502.502 0 0 0 0 .708l2.829 2.828-2.829 2.828a.502.502 0 0 0 0 .708.502.502 0 0 0 .708 0l3.182-3.182ZM570 666.5h24v-1h-24v1Z"
      />
      <path
        stroke="#0060F2"
        d="M570 550h12v116m-12 112h12v110h-12m0 0h12v116h-12m0 0h12v116h-12"
      />
      <rect
        width={17}
        height={12}
        x={358.5}
        y={492.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={502.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M358 514.139h200v72H358z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M358 514h100v72H358z" />
      <path
        fill="#0060F2"
        d="M361 514.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1ZM358.5 583v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={554.5}>
          {"Decorator refactoring"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={492} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={502.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={492} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={502.25}>
          {"50%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={492.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={502.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M606 514.139h200v72H606z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M606 514h100v72H606z" />
      <path
        fill="#0060F2"
        d="M609 514.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1ZM606.5 583v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={554.5}>
          {"Developer playground"}
        </tspan>
      </text>
      <rect width={78} height={13} x={692} y={492} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={698.021} y={502.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={776} y={492} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={782.006} y={502.25}>
          {"50%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={630.5}
        y={492.5}
        stroke="#00AC96"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={636.002} y={502.25}>
          {"E"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M606 920.139h200v72H606z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M606 920h140v72H606z" />
      <path
        fill="#0060F2"
        d="M609 920.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1ZM606.5 989v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={960.5}>
          {"Rust compiler"}
        </tspan>
      </text>
      <rect width={78} height={13} x={692} y={898} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={698.021} y={908.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={776} y={898} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={782.006} y={908.25}>
          {"70%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={898.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={908.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M606 1198.14h200v72H606z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M606 1198h140v72H606z" />
      <path
        fill="#0060F2"
        d="M609 1198.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={1238.5}>
          {"Packaging"}
        </tspan>
      </text>
      <rect width={78} height={13} x={692} y={1176} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={698.021} y={1186.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={776} y={1176} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={782.006} y={1186.25}>
          {"70%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={1176.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={1186.25}>
          {"C"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={606.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={616.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M358 628.139h200v72H358z" />
      <path
        fill="#0060F2"
        d="M361 628.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1ZM358.5 697v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={668.5}>
          {"Source-code mapping"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={606.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={616.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M606 628.139h200v72H606z" />
      <path
        fill="#0060F2"
        d="M609 628.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1ZM606.5 697v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={668.5}>
          {"Debugging"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={1290.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={1300.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M606 1312.14h200v72H606z" />
      <path
        fill="#0060F2"
        d="M609 1312.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={1352.5}>
          {"Rate limits"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={720.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={730.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M358 742.139h200v72H358z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M358 742h100v72H358z" />
      <path
        fill="#0060F2"
        d="M361 742.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1ZM358.5 811v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={782.5}>
          {"Miden SDK"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={720} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={730.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={720} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={730.25}>
          {"50%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={834.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={844.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M358 856.139h200v72H358z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M358 856h100v72H358z" />
      <path
        fill="#0060F2"
        d="M361 856.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1ZM358.5 925v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={896.5}>
          {"Miden Rust bindings"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={834} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={844.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={834} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={844.25}>
          {"50%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={948.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={958.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M358 970.139h200v72H358z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M358 970h200v72H358z" />
      <path
        fill="#0060F2"
        d="M361 970.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={1002.5}>
          {"Element-addressable "}
        </tspan>
        <tspan x={382} y={1018.5}>
          {"memory"}
        </tspan>
      </text>
      <rect width={78} height={13} x={480} y={948} fill="#E6FCE6" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={492.018} y={958.25}>
          {"COMPLETED"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={1290.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={1300.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M358 1312.14h200v72H358z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M358 1312h200v72H358z" />
      <path
        fill="#0060F2"
        d="M361 1312.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={1352.5}>
          {"Account components"}
        </tspan>
      </text>
      <rect width={78} height={13} x={480} y={1290} fill="#E6FCE6" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={492.018} y={1300.25}>
          {"COMPLETED"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={110.5}
        y={1290.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={116.002} y={1300.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M110 1312.14h200v72H110z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M110 1312h200v72H110z" />
      <path
        fill="#0060F2"
        d="M113 1312.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={134} y={1352.5}>
          {"Offset-based storage"}
        </tspan>
      </text>
      <rect width={78} height={13} x={232} y={1290} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={244.018} y={1300.25}>
          {"COMPLETED"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={1062.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={1072.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M358 1084.14h200v72H358z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M358 1084h30v72h-30z" />
      <path
        fill="#0060F2"
        d="M361 1084.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={1124.5}>
          {"Read-only memory"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={1062} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={1072.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={1062} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={1072.25}>
          {"15%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={1176.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={1186.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M358 1198.14h200v72H358z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M358 1198h170v72H358z" />
      <path
        fill="#0060F2"
        d="M361 1198.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={1230.5}>
          {"Account component "}
        </tspan>
        <tspan x={382} y={1246.5}>
          {"templates"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={1176} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={1186.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={1176} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={1186.25}>
          {"85%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={1404.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={1414.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M358 1426.14h200v72H358z" />
      <path
        fill="#0060F2"
        d="M361 1426.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={1458.5}>
          {"Efficient ECDSA "}
        </tspan>
        <tspan x={382} y={1474.5}>
          {"signatures"}
        </tspan>
      </text>
      <path fill="#E9F4FF" d="M606 1426.14h200v72H606z" />
      <path fill="#94CDFF" fillOpacity={0.5} d="M606 1426h60v72h-60z" />
      <path
        fill="#0060F2"
        d="M609 1426.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#0060F2"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={1466.5}>
          {"Oracles"}
        </tspan>
      </text>
      <rect width={78} height={13} x={692} y={1404} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#005A72"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={698.021} y={1414.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={776} y={1404} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={782.006} y={1414.25}>
          {"30%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={1404.5}
        stroke="#00AC96"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={1414.25}>
          {"E"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={630.5}
        y={1404.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={636.002} y={1414.25}>
          {"I"}
        </tspan>
      </text>
      <rect width={855} height={415} x={0.5} y={0.5} fill="#fff" rx={9.5} />
      <rect
        width={855}
        height={415}
        x={0.5}
        y={0.5}
        stroke="#F5F5F5"
        rx={9.5}
      />
      <text
        xmlSpace="preserve"
        fill="#363636"
        fontSize={16}
        fontWeight={600}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={40.094} y={48.5}>
          {"User experience"}
        </tspan>
      </text>
      <path
        fill="#561A00"
        d="M592.354 104.354a.502.502 0 0 0 0-.708l-3.182-3.182a.502.502 0 0 0-.708 0 .502.502 0 0 0 0 .708l2.829 2.828-2.829 2.828a.502.502 0 0 0 0 .708.502.502 0 0 0 .708 0l3.182-3.182ZM568 104.5h24v-1h-24v1Z"
      />
      <path stroke="#561A00" d="M579 104v111h-11" />
      <rect width={17} height={12} x={380.5} y={44.5} stroke="#FC0036" rx={6} />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={386.002} y={54.25}>
          {"C"}
        </tspan>
      </text>
      <rect width={17} height={12} x={356.5} y={44.5} stroke="#00AC96" rx={6} />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={362.002} y={54.25}>
          {"E"}
        </tspan>
      </text>
      <path fill="#FFF4CF" d="M356 68.139h200v72H356z" />
      <path fill="#FFAE00" fillOpacity={0.5} d="M356 68.139h140v72H356z" />
      <path
        fill="#561A00"
        d="M359 68.5h194v-1H359v1ZM555.5 71v66h1V71h-1Zm-2.5 68.5H359v1h194v-1ZM356.5 137V71h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1ZM553 68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#561A00"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={380} y={108.5}>
          {"Transcript sdk"}
        </tspan>
      </text>
      <rect width={78} height={13} x={442} y={45.999} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={448.021} y={56.249}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={526} y={46} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={532.006} y={56.25}>
          {"70%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={356.5}
        y={160.5}
        stroke="#00AC96"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={362.002} y={170.25}>
          {"E"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={380.5}
        y={160.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={386.002} y={170.25}>
          {"C"}
        </tspan>
      </text>
      <rect width={78} height={13} x={443} y={160} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={449.021} y={170.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={526} y={160} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={532.006} y={170.25}>
          {"80%"}
        </tspan>
      </text>
      <path fill="#FFF4CF" d="M356 179.139h200v72H356z" />
      <path fill="#FFAE00" d="M356 179h160v72H356z" opacity={0.5} />
      <path
        fill="#561A00"
        d="M359 179.5h194v-1H359v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H359v1h194v-1ZM356.5 248v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#561A00"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={380} y={219.5}>
          {"WebGPU Proving"}
        </tspan>
      </text>
      <rect width={17} height={12} x={604.5} y={49.5} stroke="#00AC96" rx={6} />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={610.002} y={59.25}>
          {"E"}
        </tspan>
      </text>
      <rect width={17} height={12} x={628.5} y={49.5} stroke="#FC0036" rx={6} />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={634.002} y={59.25}>
          {"C"}
        </tspan>
      </text>
      <rect width={78} height={13} x={691} y={49} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={697.021} y={59.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={774} y={49} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={780.006} y={59.25}>
          {"70%"}
        </tspan>
      </text>
      <path fill="#FFF4CF" d="M604 68.139h200v72H604z" />
      <path fill="#FFAE00" d="M604 68h140v72H604z" opacity={0.5} />
      <path
        fill="#561A00"
        d="M607 68.5h194v-1H607v1ZM803.5 71v66h1V71h-1Zm-2.5 68.5H607v1h194v-1ZM604.5 137V71h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1ZM801 68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#561A00"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={628} y={108.5}>
          {"Wallet"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={604.5}
        y={271.5}
        stroke="#00AC96"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={610.002} y={281.25}>
          {"E"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={628.5}
        y={271.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={634.002} y={281.25}>
          {"C"}
        </tspan>
      </text>
      <rect width={78} height={13} x={691} y={271} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={697.021} y={281.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={774} y={271} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={780.006} y={281.25}>
          {"60%"}
        </tspan>
      </text>
      <path fill="#FFF4CF" d="M604 290.139h200v72H604z" />
      <path fill="#FFAE00" d="M604 290h120v72H604z" opacity={0.5} />
      <path
        fill="#561A00"
        d="M607 290.5h194v-1H607v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H607v1h194v-1ZM604.5 359v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#561A00"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={628} y={330.5}>
          {"Block explorer"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={604.5}
        y={160.5}
        stroke="#00AC96"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={610.002} y={170.25}>
          {"E"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={628.5}
        y={160.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={634.002} y={170.25}>
          {"C"}
        </tspan>
      </text>
      <rect width={66} height={13} x={738} y={160} fill="#E6FCE6" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#0F7E32"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={744.018} y={170.25}>
          {"COMPLETED"}
        </tspan>
      </text>
      <path fill="#FFF4CF" d="M604 179.139h200v72H604z" />
      <path fill="#FFAE00" d="M604 179h200v72H604z" opacity={0.5} />
      <path
        fill="#561A00"
        d="M607 179.5h194v-1H607v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H607v1h194v-1ZM604.5 248v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1a3.5 3.5 0 0 0 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1a3.5 3.5 0 0 0-3.5-3.5v1Zm-194-1a3.5 3.5 0 0 0-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#561A00"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={628} y={211.5}>
          {"Delegated transaction "}
        </tspan>
        <tspan x={628} y={227.5}>
          {"proving"}
        </tspan>
      </text>
      <rect width={855} height={836} x={0.5} y={2252.5} fill="#fff" rx={9.5} />
      <rect
        width={855}
        height={836}
        x={0.5}
        y={2252.5}
        stroke="#F5F5F5"
        rx={9.5}
      />
      <text
        xmlSpace="preserve"
        fill="#363636"
        fontSize={16}
        fontWeight={600}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={40} y={2300.5}>
          {"ZKL2"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={2431.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={2441.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M606 2453.14h200v72H606z" />
      <path
        fill="#C31562"
        d="M609 2453.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={2493.5}>
          {"Node performance"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={2545.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={2555.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M606 2567.14h200v72H606z" />
      <path
        fill="#C31562"
        d="M609 2567.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={2607.5}>
          {"Execution proofs"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M606 2681.14h200v72H606z" />
      <path
        fill="#C31562"
        d="M609 2681.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={2721.5}>
          {"Network transaction"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={2659.5}
        stroke="#8F8F8F"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#8F8F8F"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={2669.25}>
          {"O"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M606 2795.14h200v72H606z" />
      <path
        fill="#C31562"
        d="M609 2795.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={2835.5}>
          {"Agglayer integration"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={2773.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={2783.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M606 2909.14h200v72H606z" />
      <path
        fill="#C31562"
        d="M609 2909.5h194v-1H609v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H609v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={630} y={2949.5}>
          {"LxLy-Bridge / DA"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={606.5}
        y={2887.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={612.002} y={2897.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M358 2453.14h200v72H358z" />
      <path fill="#FDB3CC" fillOpacity={0.5} d="M358 2453h80v72h-80z" />
      <path
        fill="#C31562"
        d="M361 2453.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={2485.5}>
          {"Parallel state "}
        </tspan>
        <tspan x={382} y={2501.5}>
          {"updates"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={2431} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={2441.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={2431} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={2441.25}>
          {"40%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={2431.5}
        stroke="#00AC96"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={2441.25}>
          {"E"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={382.5}
        y={2431.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={388.002} y={2441.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M358 2795.14h200v72H358z" />
      <path fill="#FDB3CC" fillOpacity={0.5} d="M358 2795h100v72H358z" />
      <path
        fill="#C31562"
        d="M361 2795.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={2835.5}>
          {"Block kernel"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={2773} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={2783.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={2773} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={2783.25}>
          {"50%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={2773.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={2783.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M358 2909.14h200v72H358z" />
      <path fill="#FDB3CC" fillOpacity={0.5} d="M358 2909h20v72h-20z" />
      <path
        fill="#C31562"
        d="M361 2909.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={2949.5}>
          {"Efficient keccak"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={2887} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={2897.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={2887} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={2897.25}>
          {"10%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={2887.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={2897.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M110 2511.14h200v72H110z" />
      <path fill="#FDB3CC" fillOpacity={0.5} d="M110 2511h50v72h-50z" />
      <path
        fill="#C31562"
        d="M113 2511.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={134} y={2543.5}>
          {"Circuit evaluation "}
        </tspan>
        <tspan x={134} y={2559.5}>
          {"chiplet"}
        </tspan>
      </text>
      <rect width={78} height={13} x={196} y={2489} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={202.021} y={2499.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={280} y={2489} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={286.006} y={2499.25}>
          {"25%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={110.5}
        y={2489.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={116.002} y={2499.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M110 2653.14h200v72H110z" />
      <path fill="#FDB3CC" fillOpacity={0.5} d="M110 2653h120v72H110z" />
      <path
        fill="#C31562"
        d="M113 2653.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={134} y={2685.5}>
          {"Recursive proof "}
        </tspan>
        <tspan x={134} y={2701.5}>
          {"verification"}
        </tspan>
      </text>
      <rect width={78} height={13} x={196} y={2631} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={202.021} y={2641.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={280} y={2631} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={286.006} y={2641.25}>
          {"60%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={110.5}
        y={2631.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={116.002} y={2641.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M110 2795.14h200v72H110z" />
      <path fill="#FDB3CC" fillOpacity={0.5} d="M110 2795h100v72H110z" />
      <path
        fill="#C31562"
        d="M113 2795.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={134} y={2835.5}>
          {"Batch kernel"}
        </tspan>
      </text>
      <rect width={78} height={13} x={196} y={2773} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={202.021} y={2783.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={280} y={2773} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={286.006} y={2783.25}>
          {"50%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={110.5}
        y={2773.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={116.002} y={2783.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M358 2681.14h200v72H358z" />
      <path fill="#FDB3CC" fillOpacity={0.5} d="M358 2681h180v72H358z" />
      <path
        fill="#C31562"
        d="M361 2681.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={2721.5}>
          {"CUDA accerlerat-ion"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={2659} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={2669.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={2659} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={2669.25}>
          {"90%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={2659.5}
        stroke="#00AC96"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={2669.25}>
          {"E"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={382.5}
        y={2659.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={388.002} y={2669.25}>
          {"I"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M110 2369.14h200v72H110z" />
      <path fill="#FDB3CC" fillOpacity={0.5} d="M110 2369h160v72H110z" />
      <path
        fill="#C31562"
        d="M113 2369.5h194v-1H113v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H113v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={134} y={2409.5}>
          {"AirScript"}
        </tspan>
      </text>
      <rect width={78} height={13} x={196} y={2347} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={202.021} y={2357.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={280} y={2347} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={286.006} y={2357.25}>
          {"80%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={110.5}
        y={2347.5}
        stroke="#00AC96"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#00AC96"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={116.002} y={2357.25}>
          {"E"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={134.5}
        y={2347.5}
        stroke="#FC0036"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#FC0036"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={140.002} y={2357.25}>
          {"C"}
        </tspan>
      </text>
      <path fill="#FFDFEB" d="M358 2567.14h200v72H358z" />
      <path fill="#FDB3CC" fillOpacity={0.5} d="M358 2567h140v72H358z" />
      <path
        fill="#C31562"
        d="M361 2567.5h194v-1H361v1Zm196.5 2.5v66h1v-66h-1Zm-2.5 68.5H361v1h194v-1Zm-196.5-2.5v-66h-1v66h1Zm2.5 2.5a2.5 2.5 0 0 1-2.5-2.5h-1c0 1.93 1.567 3.5 3.5 3.5v-1Zm196.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1c1.933 0 3.5-1.57 3.5-3.5h-1Zm-2.5-68.5a2.5 2.5 0 0 1 2.5 2.5h1c0-1.93-1.567-3.5-3.5-3.5v1Zm-194-1c-1.933 0-3.5 1.57-3.5 3.5h1a2.5 2.5 0 0 1 2.5-2.5v-1Z"
      />
      <text
        xmlSpace="preserve"
        fill="#C31562"
        fontSize={12}
        fontWeight={600}
        letterSpacing="-.02em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={382} y={2607.5}>
          {"Distributed provers"}
        </tspan>
      </text>
      <rect width={78} height={13} x={444} y={2545} fill="#B2F0FF" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#166D84"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={450.021} y={2555.25}>
          {"IN PROGRESS"}
        </tspan>
      </text>
      <rect width={30} height={13} x={528} y={2545} fill="#166D84" rx={6.5} />
      <text
        xmlSpace="preserve"
        fill="#B2F0FF"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={534.006} y={2555.25}>
          {"70%"}
        </tspan>
      </text>
      <rect
        width={17}
        height={12}
        x={358.5}
        y={2545.5}
        stroke="#A000F8"
        rx={6}
      />
      <text
        xmlSpace="preserve"
        fill="#A000F8"
        fontSize={10}
        fontWeight={500}
        letterSpacing="0em"
        style={{
          whiteSpace: "pre",
        }}
      >
        <tspan x={364.002} y={2555.25}>
          {"I"}
        </tspan>
      </text>
      <path
        fill="#C31562"
        d="M594.354 2944.65c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19ZM570 2944.5h24v1h-24v-1Zm24.354-113.85c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19ZM570 2830.5h24v1h-24v-1Zm-225.646.15c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19ZM320 2830.5h24v1h-24v-1Zm-109.646-69.15c-.196.2-.512.2-.708 0l-3.182-3.18a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l2.828 2.83 2.828-2.83a.511.511 0 0 1 .708 0c.195.2.195.52 0 .71l-3.182 3.18Zm.146-24.35v24h-1v-24h1Zm-.146-117.65c-.196.2-.512.2-.708 0l-3.182-3.18a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l2.828 2.83 2.828-2.83a.511.511 0 0 1 .708 0c.195.2.195.52 0 .71l-3.182 3.18Zm.146-24.35v24h-1v-24h1Zm-.146-117.65c-.196.2-.512.2-.708 0l-3.182-3.18a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l2.828 2.83 2.828-2.83a.511.511 0 0 1 .708 0c.195.2.195.52 0 .71l-3.182 3.18Zm.146-24.35v24h-1v-24h1Zm383.854 149.65c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19ZM570 2602.5h24v1h-24v-1Zm24.354-113.85c.195.19.195.51 0 .7l-3.182 3.19a.511.511 0 0 1-.708 0 .504.504 0 0 1 0-.71l2.829-2.83-2.829-2.83a.504.504 0 0 1 0-.71.511.511 0 0 1 .708 0l3.182 3.19ZM570 2488.5h24v1h-24v-1Z"
      />
      <path stroke="#C31562" d="M582.5 2489v456" />
      <path
        fill="#C31562"
        d="M332.5 2688.5h.5v-.5h-.5v.5Zm0 256.5h-.5v.5h.5v-.5Zm11.854.35a.492.492 0 0 0 0-.7l-3.183-3.19a.51.51 0 0 0-.707 0 .504.504 0 0 0 0 .71l2.829 2.83-2.828 2.83a.502.502 0 0 0 0 .71.51.51 0 0 0 .707 0l3.182-3.19ZM332 2688.5V2945h1v-256.5h-1Zm-13 .5h13.5v-1H319v1Zm13.5 256.5H344v-1h-11.5v1Z"
      />
      <path
        fill="#C31562"
        d="M332.5 2139.5v-.5h-.5v.5h.5Zm261.854.35a.492.492 0 0 0 0-.7l-3.182-3.19a.511.511 0 0 0-.708 0 .504.504 0 0 0 0 .71l2.829 2.83-2.829 2.83a.504.504 0 0 0 0 .71c.196.19.512.19.708 0l3.182-3.19ZM332 2139.5v549h1v-549h-1Zm262-.5H332.5v1H594v-1Z"
      />
      <path
        fill="#C31562"
        d="M332.5 1461v-.5h-.5v.5h.5Zm13.354.35a.492.492 0 0 0 0-.7l-3.182-3.19a.511.511 0 0 0-.708 0 .504.504 0 0 0 0 .71l2.829 2.83-2.829 2.83a.504.504 0 0 0 0 .71c.196.19.512.19.708 0l3.182-3.19ZM332 1461v733h1v-733h-1Zm13.5-.5h-13v1h13v-1Z"
      />
      <path stroke="#C31562" d="M570 2716.5h12" />
    </svg>
  );
}
