import React, { useEffect, useState, useContext } from "react";

import { AddContext } from "@context/AddContext";

import "@styles/new_component.scss";
import axios from "axios";
import { base_url } from "../api/url";

export default function NewTask() {
  const { fetch_tasks } = useContext(AddContext);

  const [isMesssageOpen, setIsMessageOpen] = useState(false);
  const [task_title, set_task_title] = useState("");
  const [task_body, set_task_body] = useState("");

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "T" || event.key === "t") {
        setIsMessageOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const add_task = async () => {
    if (task_title !== "" && task_body !== "") {
      try {
        const response = await axios.post(`${base_url}/todo`, {
          title: task_title,
          body: task_body,
        });
        console.log(response.data);
        setIsMessageOpen(false);
        fetch_tasks();
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="new_task_container">
      {isMesssageOpen && (
        <div className="popup_wrapper">
          <div className="popup_container">
            <button
              onClick={() => setIsMessageOpen(false)}
              className="close_task"
            >
              <img src="/close.png" alt="close task icon" />
            </button>
            <div className="popup_box">
              <input
                type="text"
                placeholder="To-do name"
                value={task_title}
                className="input_task"
                onInput={(title) => set_task_title(title.target.value)}
              />
              <div className="line"></div>
              <textarea
                className="text_box"
                placeholder="Add a discription"
                value={task_body}
                onInput={(body) => set_task_body(body.target.value)}
              ></textarea>
              <div className="row">
                <button className="schedule">
                  <img src="/calender.png" alt="schedule calender ico" />
                  Schedule
                </button>
                <ul>
                  <li>
                    <img src="/label.png" alt="label icon" />
                  </li>
                  <li>
                    <img src="/pin.png" alt="pin icon" />
                  </li>
                </ul>
              </div>
            </div>
            <button onClick={add_task} className="add_task">
              Add To-Do
            </button>
          </div>
        </div>
      )}
      <button className="toggle_task" onClick={() => setIsMessageOpen(true)}>
        <img src="/add.png" alt="add task icon" />
      </button>
    </div>
  );
}
