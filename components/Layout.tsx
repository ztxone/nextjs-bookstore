import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full bg-[url('/images/auth_bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <Navbar />
      <div className="py-20 px-4 md:px-12 ">{children}</div>
      <Contacts />
    </div>
  );
}
