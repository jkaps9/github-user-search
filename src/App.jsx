import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
export default function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <SearchBar></SearchBar>
      </div>
      <div className="container">
        <Profile></Profile>
      </div>
    </>
  );
}
