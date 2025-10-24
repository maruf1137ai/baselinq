import Header from "@/component/Home/Header";
import Image from "next/image";
import Record from "@/component/Home/record";
import Document from "@/component/Home/document";
import Performance from "@/component/Home/Performance";
import Workflows from "@/component/Home/workflows";
import Works from "@/component/Home/works";
import Delivery from "@/component/Home/delivery";
import Platform from "@/component/Home/platform";
import Construction from "@/component/Home/Construction";

export default function Home() {
  return (
    <>
      <Header />
      <Record />
      <Document />
      <Performance />
      <Workflows />
      <Works />
      <Delivery />
      <Platform />
      <Construction />
    </>
  );
}
