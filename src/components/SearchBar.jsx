import styles from "./SearchBar.module.css";
import searchIcon from "../assets/icons/icon-search.svg";

export default function SearchBar() {
  return (
    <form className={`${styles.searchBar} row`}>
      <img src={searchIcon} alt="" aria-hidden="true" />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search GitHub username..."
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
