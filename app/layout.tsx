import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";

export const metadata = {
  title: "Airbnb",
  description: "Create Airbnb clone with Next.js",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <NavBar />
          <Modal isOpen />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
