import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Profile from "./components/Profile";
import { useEffect } from "react";

const BASE_URL = "https://api.github.com/users";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState("octocat");

  const updateUser = (newUser) => {
    setCurrentUser(newUser);
  };

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setLoading(true);
      console.log("fetching:", currentUser);
      try {
        const response = await fetch(`${BASE_URL}/${currentUser}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUser]);
  return (
    <>
      <Header></Header>
      <div className="container">
        <SearchBar onApply={updateUser} errorMessage={error}></SearchBar>
      </div>
      <div className="container">
        {error ? (
          <div className="card">
            <h2>No results found!</h2>
            <p>
              We couldn’t find any GitHub users matching your search. Please
              double-check the username and try again.
            </p>
            <p>log: {error}</p>
          </div>
        ) : (
          <>
            {loading ? (
              <div className="card">
                <h2>Loading...</h2>{" "}
              </div>
            ) : (
              <Profile userData={data}></Profile>
            )}
          </>
        )}
      </div>
    </>
  );
}
