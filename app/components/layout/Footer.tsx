import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-wrap gap-5 pb-7 text-gray-1 text-center justify-center text-xs leading-[8px]">
      <a href="/home" className="text-center">
        Home
      </a>
      <a href="/we">We</a>
      <a href="/team">Team</a>
      <a href="/community">Community</a>
      <a href="/">Pre-Sell</a>
      <a href="/">Advertising with us</a>
      <a href="/">Be part of our team</a>
      <a href="/contact">Contact us</a>
      <a href="/">API</a>
      <a href="/">Privacy, terms and conditions</a>
      <p className="w-full text-gray-1">© 2024 Minhoo.app</p>
    </footer>
  );
}
