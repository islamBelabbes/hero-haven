import Image from "next/image";
import Link from "next/link";

const HEROS = [
  { href: "/folders", title: "folders", image: "/folders/folders-figma.png" },
  {
    href: "/soultravel",
    title: "soulTravel",
    image: "/soultravel/soul-travel-figma.png",
  },
  {
    href: "/nft",
    title: "nft",
    image: "/nft/nft-figma.png",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#252526]">
      <div className="app mx-auto max-w-7xl px-3 py-12">
        <ul className="mt-9 grid grid-cols-1 gap-4  ">
          {HEROS.map((hero) => (
            <li key={hero.href}>
              <Link
                href={`${hero.href}`}
                className="relative block aspect-video w-full"
              >
                <Image
                  src={hero.image}
                  alt={hero.title}
                  className="rounded-3xl object-cover object-top"
                  fill
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
