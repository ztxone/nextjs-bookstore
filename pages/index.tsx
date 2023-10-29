import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import BookList from "@/components/Books/BookList";
import InfoModal from "@/components/InfoModal";
import useBookList from "@/hooks/useBookList";
import useFavorites from "@/hooks/useFavorites";
import useInfoModalStore from "@/hooks/useInfoModalStore";
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

const Home = () => {
  const { data: books = [] } = useBookList();
  const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModalStore();

  return (
    <>
      <InfoModal visible={isOpen} onClose={closeModal} />
      <Navbar />
      {/* <Billboard /> */}
      <div className="py-20">
        <BookList title="Last books" data={books} />
        <BookList title="My List" data={favorites} />
      </div>
      <Contacts />
    </>
  );
};

export default Home;
