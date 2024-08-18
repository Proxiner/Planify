import axios from "axios";
import React, { useState, createContext } from "react";

export const AddContext = createContext();

export default function AddProvider({ children }) {
  const [tasks, set_tasks] = useState([]);

  const fetch_tasks = async () => {
    try {
      const response = await axios.get(
        "https://66b2b22d7fba54a5b7ea4774.mockapi.io/api/todo"
      );
      set_tasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddContext.Provider value={{ tasks, set_tasks, fetch_tasks }}>
      {children}
    </AddContext.Provider>
  );
}
