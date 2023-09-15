import React, { useState } from "react";

function Comments() {
  let [text, setText] = useState("");
  const [arrComments, setArrComments] = useState([]);

  let handleChange = (e) => {
    setText((text = e.target.value));
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Напишите комментарий!");
    } else {
      setArrComments([...arrComments, text]);
      setText("");
    }
  };

  return (
    <div className="container">
      <h1>Сервис комментариев со спам фильтром</h1>
      <div className="comments">
        {arrComments.map((el, index) => {
          return (
            <p
              key={index}
              className={
                index % 3 === 0 ? "green" : index % 2 === 0 ? "blue" : "purple"
              }
            >
              {el}
            </p>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} value={text} />
        <br />
        <button>Отправить</button>
      </form>
    </div>
  );
}

export default Comments;
