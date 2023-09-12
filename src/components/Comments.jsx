import React, { useState } from "react";

function Comments() {
  let [text, setText] = useState("");
  let handleChange = (e) => {
    setText((text = e.target.value));
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Напишите комментарий!");
    } else {
      console.log(text);
    }
  };

  return (
    <div className="container">
      <h1>Сервис комментариев со спам фильтром</h1>
      <div className="comments"></div>
      <form onSubmit={handleSubmit}>
        <textarea onChange={handleChange} value={text} />
        <br />
        <button>Отправить</button>
      </form>
    </div>
  );
}

export default Comments;
