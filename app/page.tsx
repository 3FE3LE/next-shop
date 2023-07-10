import React from "react";
import GridItem from "@components/GridItem";
import Navbar from "@components/Navbar";
import ShoppingCart from "@components/ShoppingCart";
import { sushiPlates } from "./constants";
import ContentWrapper from "@components/ContentWrapper";

export default function Home() {
  return (
    <main className="">
      <section>
        <Navbar />
        <ContentWrapper>
            {sushiPlates.map((item) => (
              <GridItem key={item.img} item={item} />
            ))}
        </ContentWrapper>
      </section>
      <ShoppingCart />
    </main>
  );
}
