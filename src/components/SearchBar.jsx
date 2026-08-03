import styles from "./SearchBar.module.css";
import searchIcon from "../assets/icons/icon-search.svg";
import { useState } from "react";

export default function SearchBar({ onApply, errorMessage }) {
  const [draftUser, setDraftUser] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    const sanitizedValue = (value || "").replace(/[^a-zA-Z0-9-]/g, "");
    setDraftUser(sanitizedValue);
  };

  const validateForm = () => {
    const sanitizedUser = (draftUser || "").replace(/[^a-zA-Z0-9-]/g, "");
    let isValid = sanitizedUser.trim().length !== 0;
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
        aria-invalid={errorMessage !== null ? "true" : "false"}
        aria-describedby="search-error"
      />
      {errorMessage !== null ? (
        <p id="search-error" className={styles.searchError}>
          No results
        </p>
      ) : (
        <></>
      )}
      <button className="btn btn--solid" type="submit">
        Search
      </button>
    </form>
  );
}
