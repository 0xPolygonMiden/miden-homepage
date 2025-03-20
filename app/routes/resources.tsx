import { type Route } from ".react-router/types/app/routes/+types/resources";
import { getFeaturedPosts } from "~/lib/posts.server";
import { PageResources } from "~/pages/resources";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Resources – Miden" }];
}

export function loader({}: Route.LoaderArgs) {
  const posts = getFeaturedPosts();

  return {
    posts,
  };
}

export const papers = [
  {
    label:
      "Generalized Indifferentiable Sponge and its Application to Polygon Miden VM",
    link: "https://eprint.iacr.org/2024/911",
  },
  {
    label: "XHash: Efficient STARK-friendly Hash Function",
    link: "https://eprint.iacr.org/2023/1045",
  },
  {
    label: "Rescue-Prime Optimized",
    link: "https://eprint.iacr.org/2022/1577",
  },
  {
    label: "Lattice-Based Cryptography in Miden VM",
    link: "https://eprint.iacr.org/2022/1041",
  },
  {
    label: "STARK-based Signatures from the RPO Permutation",
    link: "https://eprint.iacr.org/2024/1553",
  },
  {
    label: "A note on adding zero-knowledge to STARKs",
    link: "https://eprint.iacr.org/2024/1037",
  },
  {
    label: "Arithmetization Oriented Encryption",
    link: "https://eprint.iacr.org/2023/1668",
  },
];

export const talks = [
  {
    label:
      "ZK Day at SBC - Workshop by Paul-Henry Kajfasz, Senior Protocol Engineer at Polygon Miden",
    link: "https://www.youtube.com/watch?v=RdeIx4LHb2A",
  },
  {
    label:
      "Polygon Miden: A New VM for the ZK Future | Avail Whiteboard Series",
    link: "https://www.youtube.com/watch?v=QuLhkaszLtA&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=1&t=1s",
  },
  {
    label:
      "ZK8: The power of multiset checks in STARK-based VMs - grjte - Polygon Miden",
    link: "https://www.youtube.com/watch?v=PA8jT_POYUo&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=2",
  },
  {
    label:
      "ZK9: AirScript - a simple and efficient way to write AIR constraints",
    link: "https://www.youtube.com/watch?v=PA8jT_POYUo&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=2",
  },
  {
    label: "ZK10: Optimizing recursive STARK verification in Polygon Miden VM",
    link: "https://www.youtube.com/watch?v=uL2J31dQfLI&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=4",
  },
  {
    label: "zkStudyClub: AirScript presented by Bobbin Threadbare",
    link: "/phklive/awesome-miden/blob/main",
  },
  {
    label:
      "ZK Whiteboard Sessions - Module Four: SNARKs vs STARKs with Bobbin Threadbare",
    link: "https://www.youtube.com/watch?v=qUrA97TG2YU&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=6",
  },
  {
    label:
      "ZK HACK IV - Provable State Changes: Polygon Miden Transaction Kernel",
    link: "https://www.youtube.com/watch?v=V4fzsti11qU&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=7",
  },
  {
    label:
      "ZK Whiteboard Sessions – Module Nine: Introduction to zkRollups with Barry Whitehat",
    link: "https://www.youtube.com/watch?v=lJS4z2n4P1E&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=8",
  },
  {
    label:
      "ZK Whiteboard Sessions – Module Eight: Achieving Decentralised Private Computation",
    link: "https://www.youtube.com/watch?v=_oW29AOKWTs&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=9",
  },
  {
    label:
      "ZK Whiteboard Sessions – Module Seven: Zero Knowledge Virtual Machines (zkVM) with grjte",
    link: "https://www.youtube.com/watch?v=GRFPGJW0hic&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=10",
  },
  {
    label:
      "AirScript: a DSL for writing AIR constraints | Bobbin Threadbare | PROGCRYPTO",
    link: "https://www.youtube.com/watch?v=UxCW33hvnfc&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=11",
  },
  {
    label:
      "StarkWare Sessions 23 | AirScript: A DSL for Writing AIR Constraints | Bobbin Threadbare",
    link: "https://www.youtube.com/watch?v=8Rk2DOD4ba8&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=12",
  },
  {
    label:
      "Miden & the Future of Privacy Preserving Protocols presented by Paul-Henry Kajfasz of Polygon Miden",
    link: "https://www.youtube.com/watch?v=GC4jR2rh-5U&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=13&t=3s",
  },
  {
    label: "Recursion in the Miden VM, by Augusto Hack of Polygon Miden",
    link: "https://www.youtube.com/watch?v=P1ZM6Ead6fo&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=14",
  },
  {
    label:
      "Polygon Miden VM | Avail's Hot Take Series: The Execution Race (EthDenver)",
    link: "https://www.youtube.com/watch?v=fl51Cer7-bY&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=15",
  },
  {
    label:
      "ZK7: Miden VM: a STARK-friendly VM for blockchains - Bobbin Threadbare – Polygon",
    link: "https://www.youtube.com/watch?v=81UAaiIgIYA&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=16",
  },
  {
    label: "09 Miden VM architecture overview",
    link: "https://www.youtube.com/watch?v=mO5ZDrjtb3I&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=17",
  },
  {
    label: "Bobbin Threadbare - Miden VM: the heart of Polygon Miden",
    link: "https://www.youtube.com/watch?v=S2NfpC8cJog&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=18&t=1137s",
  },
  {
    label:
      "Polygon Miden: Extending Ethereum’s Feature Set | Dominik Schmid (April 2023)",
    link: "https://www.youtube.com/watch?v=jMTMidok9sA&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=19",
  },
  {
    label:
      "Using a Hybrid UTXO and Account-based State Model in a ZK Rollup by Bobbin Threadbare",
    link: "https://www.youtube.com/watch?v=TEPY19-hie4&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=20",
  },
  {
    label: "Miden: Ethereum Extended",
    link: "https://www.youtube.com/watch?v=FEh7mYASia4&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=21",
  },
  {
    label: "Polygon Miden - a STARK based ZK Rollup",
    link: "https://www.youtube.com/watch?v=pLu7XeEN-f4&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=22",
  },
  {
    label: "Episode 210: The Road to STARKs and Miden with Bobbin Threadbare",
    link: "https://www.youtube.com/watch?v=cpGb6daIKm4&list=PLslsfan1R_z20bEgUU_ZyY64AHx5C6vgg&index=23",
  },
  {
    label:
      "Provable Compliance on Polygon Miden and beyond / Anne-Grace Kleczewski",
    link: "https://www.youtube.com/watch?v=t6NQ8nFDMvg",
  },
  {
    label: "LAMBDA Class: How Polygon Miden works by Ignacio Amigo",
    link: "https://www.youtube.com/watch?v=CtBTOw5385Y",
  },
  {
    label: "Privacy Scales Better by Dominik Schmid, Polygon | L2con Brussels",
    link: "https://www.youtube.com/watch?v=gmamoa8N_N0",
  },
  {
    label:
      "Mass adoption with private and asynchronous blockchains, by Bobbin Threadbare of Polygon Miden",
    link: "https://www.youtube.com/watch?v=pfX6T29TolY",
  },
];

export default function RouteResources({
  loaderData: { posts },
}: Route.ComponentProps) {
  return <PageResources posts={posts} papers={papers} talks={talks} />;
}
