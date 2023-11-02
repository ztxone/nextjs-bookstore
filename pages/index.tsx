import React from "react";
import BookList from "@/components/Books/BookList";
import useBookList from "@/hooks/useBookList";
import useFavorites from "@/hooks/useFavorites";
import Layout from "@/components/Layout";

const Home = () => {
  const { data: books = [] } = useBookList();
  const { data: favorites = [] } = useFavorites();

  return (
    <Layout>
      <BookList title="Last books" data={books} type="list" />
      <BookList title="My List" data={favorites} type="fav" />
    </Layout>
  );
};

export default Home;
