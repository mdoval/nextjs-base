import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MiSessionProvider } from "./components/MiSessionProvider";

export const metadata: Metadata = {
  title: "Aplicacion Base con NextJs",
  description: "Aplicacion creada con Nextjs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <MiSessionProvider>
        <body>{children}</body>
      </MiSessionProvider>
    </html>
  );
}
