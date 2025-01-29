import "./globals.css";

import { space_Grotesk } from "./fonts";

export const metadata = {
  title: "Presh | devlinks",
  description: "Links sharing app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={space_Grotesk.className}>
      <body className="min-[768px]:bg-light-grey">{children}</body>
    </html>
  );
}
