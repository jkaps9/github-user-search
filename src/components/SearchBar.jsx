import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={`${styles.searchBar} row`}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Search GitHub username..."
      />
      <button className="btn btn--solid">Search</button>
    </div>
  );
}
