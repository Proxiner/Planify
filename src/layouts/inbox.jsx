import React, { useEffect,useContext } from "react";

import "@styles/inbox.scss";
import NewTask from "@components/new_task";
import { AddContext } from "@context/AddContext";

export default function Inbox() {
  const { fetch_tasks, tasks } = useContext(AddContext);

  useEffect(() => {
    fetch_tasks();
  }, []);

  return (
    <div className="inbox_container">
      <div className="tasks_wrapper">
        {tasks.length !== 0 ? (
          tasks.map((task) => (
            <div className="tasks_container" key={task.id}>
              <input type="checkbox" id={task.id} />
              <label htmlFor={task.id}> {task.title} </label>
            </div>
          ))
        ) : (
          <div className="empty_tasks_container">
            <img src="/check-icon.svg" alt="Add Some Tasks" />
            <h3>Add Some Tasks</h3>
            <span>Press 'T' to create a new task</span>
          </div>
        )}
      </div>
      <NewTask />
    </div>
  );
}
