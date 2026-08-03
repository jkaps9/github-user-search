import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="container">
          <SearchBar></SearchBar>
          <Profile></Profile>
        </div>
      </main>
    </>
  );
}
