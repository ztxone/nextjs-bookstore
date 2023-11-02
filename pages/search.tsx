import Layout from "@/components/Layout";
import MultiPDFSearch from "@/components/Search/MultiPDFSearch";
import useBookList from "@/hooks/useBookList";
import { BookInterface } from "@/types";

const SearchPage: React.FC = () => {
  const { data: books = [] } = useBookList();

  const pdfUrls = books.map((book: BookInterface) => book.fileUrl);
  //console.log(pdfUrls);
  return (
    <Layout>
      <MultiPDFSearch pdfUrls={pdfUrls} />
    </Layout>
  );
};

export default SearchPage;
