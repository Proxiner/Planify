import React, { useState } from "react";

import "@styles/new_component.scss";

export default function new_labels() {
  const [isMesssageOpen, setIsMessageOpen] = useState(false);
  const [label_title, set_label_title] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const colors = [
    {
      id: 1,
      color: "#db4035",
    },
    {
      id: 2,
      color: "#14aaf5",
    },
    {
      id: 3,
      color: "#7ecc49",
    },
  ];

  const update_selected = (event) => {
    const clickedId = event.target.id;
    setSelectedId(clickedId);
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
                id="label_title"
                value={label_title}
                className="label-input"
                onInput={(event) => set_label_title(event.target.value)}
                placeholder="Enter your label name"
              />
            </div>
            <ul className="colors">
              {colors.map((colors) => (
                <li
                  key={colors.id}
                  id={colors.id}
                  style={{
                    backgroundColor: colors.color,
                  }}
                  onClick={update_selected}
                  className={
                    selectedId === colors.id.toString() ? "selected" : ""
                  }
                ></li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <button className="toggle_task" onClick={() => setIsMessageOpen(true)}>
        <img src="/add.png" alt="add task icon" />
      </button>
    </div>
  );
}
