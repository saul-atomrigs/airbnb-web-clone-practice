import ClientOnly from "./components/ClientOnly";
import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "Airbnb",
  description: "Create Airbnb clone with Next.js",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <NavBar currentUser={currentUser} />
          <RegisterModal />
          <LoginModal />
          {children}
        </ClientOnly>
      </body>
    </html>
  );
}
