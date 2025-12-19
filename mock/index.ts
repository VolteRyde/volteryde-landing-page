import { NavLink, Step } from "@/types";

export const steps: Step[] = [
  {
    number: "1",
    title: "Download The Volteryde App",
    description: "Get Volteryde on Google Play or the App Store and sign up in minutes to start your electric bus journey.",
  },
  {
    number: "2",
    title: "Book Your Trip",
    description: "Open the app, choose your route, and reserve your seat instantly – no waiting, no hassle.",
  },
  {
    number: "3",
    title: "Enjoy the Ride",
    description: "Track your bus in real time, pay securely, and enjoy a smooth, comfortable, and eco-friendly trip.",
  },
];

export const navLinks: NavLink[] = [
  { label: 'Volteryde', href: '/' },
  { label: 'How Volteryde Works', href: '/#how-it-works' },
  { label: 'Get Volteryde', href: '/#get-volteryde' },
];