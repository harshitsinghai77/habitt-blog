import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="py-11 px-10 flex flex-column justify-between	items-center mx-auto">
      <div className="flex justify-center">
        <a href="/">
          <Image
            className="mr-1 align-text-top"
            src="/habitt1.png"
            alt="Site logo"
            width="180px"
            height="42px"
          />
        </a>
      </div>
      <div className="flex justify-center p-3">
        <ul className="flex items-baseline my-2">
          <li className="px-2.5	text-base font-bold cursor-pointer">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="px-2.5	text-base font-bold cursor-pointer">
            <a href="/en-us/about-us">About us</a>
          </li>
          <li className="px-2.5	text-base font-bold cursor-pointer">
            <a href="/en-us/about-us">Get Started</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
