import { Header15, Header15Props } from "@/components/hero/header15";
import Image from "next/image";

const Header15Defaults: Header15Props = {
  heading: "Transform Your Online Presence with Net Guru Solutions",
  description:
    "At Net Guru Solutions, we specialize in creating stunning websites that captivate your audience and drive results. With our expert team of designers and developers, we bring your vision to life, ensuring a seamless user experience and a strong online presence.",
  buttons: [
    { title: "Learn More" },
    { title: "Get started", variant: "secondary-alt", size: "sm" },
  ],
  image: {
    src: "/hero1.jpg", // Update with your actual logo URL
    alt: "Net Guru Solutions Logo",
    width: 1000,
    height: 1000,
  },
};

export default function Home() {
  return (
    <>
      <Header15 {...Header15Defaults} />
      {/* <Layout22 {...Layout22Defaults} />
      <Layout7 {...Layout7Defaults} /> */}
    </>
  );
}
