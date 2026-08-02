export default function SearchBar() {
  return (
    <div>
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
