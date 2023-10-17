import React from "react";

import { BookInterface } from "@/types";
import BookCard from "@/components/BookCard";
import { isEmpty } from "lodash";

interface BookListProps {
  data: BookInterface[];
  title: string;
}

const BookList: React.FC<BookListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((book) => (
            <BookCard key={book.id} data={book} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
