import React from "react";
import type { Metadata } from "next";
import Layout from "@components/Layout";

export const metadata: Metadata = {
  title: "Sushi Shop",
  description: "A Sushi menu with delicious dishes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      {children}
    </Layout>
  );
}
