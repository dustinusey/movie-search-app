import axios from "axios";
import { useState } from "react";

const searchAPI = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_API
}&s=`;

const SearchForm = (props) => {
  const [currentValue, setCurrentValue] = useState("");

  async function getData() {
    let data = await axios.get(`${searchAPI}${currentValue}`);
    props.setCurrentSelection(data.data.Search);
  }

  function handleAPIRequest(e) {
    e.preventDefault();
    getData();
  }

  return (
    <form
      onSubmit={(e) => {
        handleAPIRequest(e);
      }}
      className="w-4/5 m-auto max-w-[400px] py-10"
    >
      <label htmlFor="search" className="text-white text-3xl">
        Let&apos;s have some fun! What do you want to see?
      </label>
      <input
        onChange={(e) => setCurrentValue(e.target.value)}
        className="mt-5 block w-full rounded-full px-5 text-lg"
        value={currentValue}
        type="text"
        id="search"
      />
    </form>
  );
};
export default SearchForm;
