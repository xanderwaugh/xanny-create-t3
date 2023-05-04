import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { DefaultSeo } from "next-seo";
import { SEOConfig } from "~/utils/seoConfig";

import { api } from "~/utils/api";

import { Inter } from "next/font/google";
import "~/styles/globals.css";

const inter = Inter({
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={inter.className}>
      <DefaultSeo {...SEOConfig} />

      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  );
};

export default api.withTRPC(MyApp);
