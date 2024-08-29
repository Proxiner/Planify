import axios from "axios";
import React, { useState, createContext } from "react";

export const AddContext = createContext();

import { base_url } from "../api/url";

export default function AddProvider({ children }) {
  const [tasks, set_tasks] = useState([]);
  const [labels, set_labels] = useState([]);

  const fetch_tasks = async () => {
    try {
      const response = await axios.get(`${base_url}/todo`);
      set_tasks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetch_labels = async () => {
    try {
      const response = await axios.get(`${base_url}/labels`);
      set_labels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AddContext.Provider
      value={{
        tasks,
        set_tasks,
        fetch_tasks,
        labels,
        set_labels,
        fetch_labels,
      }}
    >
      {children}
    </AddContext.Provider>
  );
}
