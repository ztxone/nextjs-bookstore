import React from "react";
import BookList from "@/components/Books/BookList";
import useBookList from "@/hooks/useBookList";
import useFavorites from "@/hooks/useFavorites";

const Home = () => {
  const { data: books = [] } = useBookList();
  const { data: favorites = [] } = useFavorites();

  return (
    <>
      <BookList title="Last books" data={books} type="list" />
      <BookList title="My List" data={favorites} type="fav" />
    </>
  );
};

export default Home;
