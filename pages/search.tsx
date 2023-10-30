import React, { useState } from "react";
import { searchPlugin, SearchPlugin } from "@react-pdf-viewer/search";
import "@react-pdf-viewer/search/lib/styles/index.css";
import useBookList from "@/hooks/useBookList";

const SearchPage: React.FC = () => {
  const { data: books = [] } = useBookList();
  const [searchText, setSearchText] = useState("");
  const [searchPluginInstance, setSearchPluginInstance] =
    useState<SearchPlugin | null>(null);

  const handleSearch = (text: string) => {
    setSearchText(text);
    if (searchPluginInstance) {
      searchPluginInstance.searchText(text);
    }
  };

  return (
    <div>
      <div>
        <input
          type="search"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div>
        {books.map((book, index) => (
          <div key={index}>
            <div>{book.title}</div>
          </div>
        ))}
      </div>
      {/* Render a hidden Viewer for search functionality */}
      {searchPluginInstance && (
        <div style={{ display: "none" }}>
          <Viewer
            fileUrl={books[0]?.fileUrl}
            plugins={[searchPluginInstance]}
          />
        </div>
      )}
    </div>
  );
};

export default SearchPage;
