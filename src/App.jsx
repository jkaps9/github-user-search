import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";

export default function App() {
  const [currentUser, setCurrentUser] = useState("octocat");

  const updateUser = (newUser) => {
    setCurrentUser(newUser);
  };

  return (
    <>
      <Header></Header>
      <div className="container">
        <SearchBar onApply={updateUser}></SearchBar>
      </div>
      <div className="container">
        <Profile></Profile>
      </div>
    </>
  );
}
