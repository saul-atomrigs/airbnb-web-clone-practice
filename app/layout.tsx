import ClientOnly from "./components/ClientOnly";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import RegisterModal from "./components/modals/RegisterModal";

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
          <ToasterProvider />
          <NavBar />
          <RegisterModal />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
