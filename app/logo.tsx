"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Logo() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <span className="text-md md:text-lg whitespace-nowrap font-bold">
      {isHomePage ? (
        <span className="cursor-default pr-2">Guillaume Slevan-Tremblay</span>
      ) : (
        <Link
          href="/"
          className="hover:text-[#d6ab00] active:bg-gray-300 dark:active:bg-[#242424] p-2 rounded-sm -ml-2 transition-colors"
        >
          Guillaume Slevan-Tremblay
        </Link>
      )}
    </span>
  );
}
