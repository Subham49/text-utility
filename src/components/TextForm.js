import React, { useState } from 'react'

export default function TextForm(props) {

  const handleUpClick = () => {
    // console.log("Upper case is click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowerClick = () => {
    // console.log("Upper case is click" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    // console.log("changing");
    setText(event.target.value);
  }

  const handleCapClick = () => {
    // console.log(text);
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      if (i === 0 || text[i - 1] === ' ') {
        newText += text.charAt(i).toUpperCase();
      }
      else {
        newText += text.charAt(i).toLowerCase();
      }
    }
    setText(newText)
  }

  const handleCopyClick = () => {
    var copyText = document.getElementById("exampleFormControlTextarea1");

    // Select the text field
    copyText.select();

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  }

  const handleClearClick = () => {
    // console.log(text);
    let newText = "";
    setText(newText)
  }

    const handleallternateClick = ()=>{
      let newText = "";
      for (let i = 0; i < text.length; i++) {
        if (i%2 !== 0) {
          newText += text.charAt(i).toUpperCase();
        }
        else {
          newText += text.charAt(i).toLowerCase();
        }
      }
      setText(newText)
    }
  const [text, setText] = useState('Enter text here');
  //text = "new text"; //wrong
  // setText("abc");

  function countWords(sentence) {
    sentence = sentence.trim();
    if (sentence === '') {
      return 0;
    }
    return sentence.split(/\s+/).length;
  }

  return (
    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>To UpperCase</button>
        <button type="button" className="btn btn-warning mx-2" onClick={handleLowerClick}>To LowerCase</button>
        <button type="button" className="btn btn-success mx-2" onClick={handleCapClick}>Capitalise Text</button>
        <button type="button" className="btn btn-danger mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button type="button" className="btn btn-info mx-2" onClick={handleallternateClick}>aLtErNaTe tExT</button>
        <button type="button" className="btn btn-secondary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Text Summaary</h2>
        <p>Words : {countWords(text)} | Characters : {text.length} | Line count : {text.split("\n").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  )
}
