import { useState } from "react";
import Preview from "./Preview";
import SearchForm from "./SearchForm";

const MovieApp = () => {
  const [currentSelection, setCurrentSelection] = useState([]);
  return (
    <div className="w-full">
      <SearchForm setCurrentSelection={setCurrentSelection} />
      <Preview currentSelection={currentSelection} />
    </div>
  );
};
export default MovieApp;
