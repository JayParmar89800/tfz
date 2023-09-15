import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState(''); // Initialize text state with an empty string

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext); // Update the text state
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext); // Update the text state
  };
  const handleClearClick = () => {
    let newtext = '';
    setText(newtext); // Update the text state
  };
  const handlerevClick = () => {
    let newtext = text.split("").reverse().join("");
    setText(newtext); // Update the text state
  };
  const handleChange = (event) => {
    setText(event.target.value); // Update the text state as the user types
  };

  return (
    <div className="container my-4">
      <h1>{props.heading}</h1>
      <div className="mb-3 d-flex column-gap-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange} // Use handleChange to update text as the user types
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>    
           <textarea
            className="form-control"
            value={text}
            onChange={handleChange} // Use handleChange to update text as the user types
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>        
      </div>
      <div className="bg-secondary p-3 my-3 rounded-3 fw-bold h5 border border-black">
        <div>{text.split(" ").length} Words</div>
        <div>{text.length} Characters</div>
        <div>{(0.008 * text.split(" ").length).toFixed(2)} Minutes Read</div>
      </div>
      <div className='grid_link'>
      <button
        type="button"
        className="btn btn-outline-warning fw-bold"
        onClick={handleUpClick}
      >
        UpperCase
      </button>
      <button
        type="button"
        className="btn btn-outline-warning fw-bold mx-2"
        onClick={handleLoClick}
      >
        LowerCase
      </button>
      <button
        type="button"
        className="btn btn-outline-warning fw-bold mx-2"
        onClick={handlerevClick}
      >
        Reverse
      </button>
      <button
        type="button"
        className="btn btn-outline-warning fw-bold mx-2"
        onClick={handleClearClick}
      >
        Clear
      </button>
      </div>
    </div>
  );
}