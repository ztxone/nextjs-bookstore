import React, { useState } from "react";
import PDFSearch from "./PDFSearch";
import pdfjs from "pdfjs-dist";

interface MultiPDFSearchProps {
  pdfUrls?: string[]; // Add "?" to make it optional
}

const MultiPDFSearch: React.FC<MultiPDFSearchProps> = ({ pdfUrls = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<
    Map<string, boolean | null>
  >(new Map());
  
  const handleSearch = (pdfUrl: string) => {
    const updatedResults = new Map(searchResults);

    if (!updatedResults.has(pdfUrl)) {
      updatedResults.set(pdfUrl, null);

      // Perform your search logic here and update the result accordingly
      // For simplicity, I'm using a placeholder value based on the search term
      const result = pdfUrl.toLowerCase().includes(searchTerm.toLowerCase());

      updatedResults.set(pdfUrl, result);
      setSearchResults(new Map(updatedResults));
    }
  };
  
  return (
    <div>
      <h1>Multi-PDF Search</h1>
      <div>
        <input
          type="text"
          placeholder="Enter search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={() => pdfUrls.forEach((pdfUrl) => handleSearch(pdfUrl))}
        >
          Search in All PDFs
        </button>
      </div>
      <div>
        {pdfUrls.map((pdfUrl) => (
          <div key={pdfUrl}>
            <button onClick={() => handleSearch(pdfUrl)}>
              Search in {pdfUrl}
            </button>
            <div id={pdfUrl}>
              {/* Conditionally render the PDFSearch component based on search result */}
              {searchResults.get(pdfUrl) !== null && (
                <PDFSearch pdfUrl={pdfUrl} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiPDFSearch;
