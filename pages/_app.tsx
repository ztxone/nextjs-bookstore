import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import RootLayout from "@/app/layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  );
}
