import Layout from "@/components/Layout";
import MultiPDFSearch from "@/components/Search/MultiPDFSearch";
import useBookList from "@/hooks/useBookList";

const SearchPage: React.FC = () => {
  const { data: books = [] } = useBookList();

  const pdfUrls = books.map((book) => book.fileUrl);
  //console.log(pdfUrls);
  return (
    <Layout>
      <MultiPDFSearch pdfUrls={pdfUrls} />
    </Layout>
  );
};

export default SearchPage;
