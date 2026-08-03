import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import { useEffect } from "react";

const BASE_URL = "https://api.github.com/users";

export default function App() {
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState("octocat");

  const updateUser = (newUser) => {
    setCurrentUser(newUser);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/${currentUser}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [currentUser]);
  return (
    <>
      <Header></Header>
      <div className="container">
        <SearchBar onApply={updateUser}></SearchBar>
      </div>
      <div className="container">
        <Profile userData={data}></Profile>
      </div>
    </>
  );
}
