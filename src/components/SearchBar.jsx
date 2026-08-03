import styles from "./SearchBar.module.css";
import searchIcon from "../assets/icons/icon-search.svg";
import { useState } from "react";

export default function SearchBar({ onApply }) {
  const [draftUser, setDraftUser] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setDraftUser(value);
  };

  const validateForm = () => {
    let isValid = true;
    if (draftUser === "") {
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onApply(draftUser);
    }
  };

  return (
    <form className={`${styles.searchBar} row`} onSubmit={handleSubmit}>
      <img
        src={searchIcon}
        alt=""
        aria-hidden="true"
        className={styles.searchImage}
      />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search GitHub username..."
        value={draftUser}
        onChange={handleChange}
        aria-describedby="search-error"
      />
      <p id="search-error" className={styles.searchError}>
        No results
      </p>
      <button className="btn btn--solid" type="submit">
        Search
      </button>
    </form>
  );
}
