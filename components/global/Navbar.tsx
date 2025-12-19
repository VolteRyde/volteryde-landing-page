'use client';
import CardNav, { CardNavItem } from './CardNav';

export default function Navbar() {
  const items: CardNavItem[] = [
    {
      label: "Menu",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Volteryde", ariaLabel: "Volteryde Home", href: "/" },
        { label: "How it Works", ariaLabel: "How Volteryde Works", href: "/#how-it-works" }
      ]
    },
    {
      label: "App",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Get Volteryde", ariaLabel: "Download Volteryde App", href: "/#get-volteryde" },
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us", href: "mailto:info@volteryde.com" },
        { label: "Phone", ariaLabel: "Call us", href: "tel:+233534544454" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/logotextgreen.png"
      logoAlt="Volteryde Logo"
      items={items}
      baseColor="bg-white"
      menuColor="text-black"
      buttonBgColor="bg-primary-700"
      buttonTextColor="text-white"
      ease="power3.out"
      ctaHref="/#get-volteryde"
      ctaLabel="Get App"
    />
  );
}