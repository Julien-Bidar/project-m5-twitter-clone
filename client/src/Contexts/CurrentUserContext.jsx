import React, { useContext, createContext, useState, useEffect } from "react";

const CurrentUserContext = createContext(null);
export const UseCurrentUser = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState("loading");

  // fetch data
  useEffect(() => {
    fetch("/api/me/profile")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentUser(data);
        setStatus("idle");
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser, status }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
