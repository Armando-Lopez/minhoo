import Link from "next/link";
import React from "react";

export default function Footer({ className }: { className: string }) {
  return (
    <footer className={className}>
      <Link href="/" className="text-center">
        Home
      </Link>
      <Link href="/about-us">About Us</Link>
      <Link href="/team">Team</Link>
      <Link href="/community">Community</Link>
      {/* <Link href="/subscription">Pre-Sell</Link> */}
      <Link href="/advertising-with-us">Advertising with us</Link>
      <Link href="/be-part-of-our-team">Be part of our team</Link>
      <Link href="/newsletter">Subscription</Link>
      <Link href="/contact">Contact us</Link>
      <Link href="/api">API</Link>
      <Link href="/terms-and-conditions">Privacy, terms and conditions</Link>
      <p className="w-full text-gray-1">© 2024 Minhoo.app</p>
    </footer>
  );
}
