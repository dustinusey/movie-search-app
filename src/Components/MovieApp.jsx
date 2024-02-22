import { useState } from "react";
import ErrorScreen from "./ErrorScreen";
import Preview from "./Preview";
import SearchForm from "./SearchForm";

const MovieApp = () => {
  const [currentSelection, setCurrentSelection] = useState([]);
  const [hasError, setHasError] = useState(false);

  return (
    <>
      {hasError ? (
        <ErrorScreen />
      ) : (
        <div className="w-full flex flex-col justify-between h-screen">
          <SearchForm
            setHasError={setHasError}
            setCurrentSelection={setCurrentSelection}
          />
          <Preview currentSelection={currentSelection} />
        </div>
      )}
    </>
  );
};
export default MovieApp;
