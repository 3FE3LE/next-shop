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
          <div className="grid grid-flow-row grid-cols-3">
            {sushiPlates.map((item) => (
              <GridItem key={item.img} item={item} />
            ))}
          </div>
        </ContentWrapper>
      </section>
      <ShoppingCart />
    </main>
  );
}
