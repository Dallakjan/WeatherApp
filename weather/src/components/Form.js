import React from "react";

export default function Form(props) {
  return (
    <form className="form" onSubmit={props.submit}>
      <input
        type="text"
        value={props.value}
        placeholder="Wpisz miasto"
        onChange={props.change}
      />
      {/* <button>Wyszukaj</button> */}
    </form>
  );
}
