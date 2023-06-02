import ToasterContext from "./context/ToastContext";
import AuthContext from "./context/AuthContext";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveStatus from "./conversations/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger clone",
  description: "Connect with your friends!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
