import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="container">
          <SearchBar></SearchBar>
        </div>
      </main>
    </>
  );
}
