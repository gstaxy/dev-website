import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guillaume Slevan-Tremblay website",
  description:
    "Guillaume Slevan-Tremblay is a machine learning engineer and biologist.",
  openGraph: {
    title: "Guillaume Slevan-Tremblay website",
    description:
      "Guillaume Slevan-Tremblay is a machine learning engineer and biologist.",
    url: "https://slevan.dev",
    siteName: "Guillaume Slevan-Tremblay website",
    images: ["/opengraph-image"],
  },
  x: {
    card: "summary_large_image",
    site: "@slevanature",
    creator: "@slevanature",
  },
  metadataBase: new URL("https://slevan.dev"),
};

export const viewport = {
  themeColor: "transparent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto min-h-screen flex flex-col">
        <main className="p-6 pt-3 md:pt-6 flex-1 w-full">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
