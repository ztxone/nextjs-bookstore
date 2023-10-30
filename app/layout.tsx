import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import Head from "next/head";

import Navbar from "@/components/Navbar";
import Contacts from "@/components/Contacts";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <body>
        <Navbar />
        <div className="py-20">{children}</div>
        <Contacts />
      </body>
    </>
  );
}
