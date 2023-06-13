import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    //Variable can be updated with set text
    let newtext = text.toUpperCase()
    setText(newtext)
  }

  const handlelowClick = ()=>{
    console.log("Lowerrcase was clicked" + text);
    //Variable can be updated with set text
    let newtext = text.toLowerCase()
    setText(newtext)
  }

  const handleclearClick = ()=>{
    console.log("clear was clicked" + text);
    //Variable can be updated with set text
    let newtext = ''
    setText(newtext)
  }

  const handleonChange = (event)=>{
    console.log("On change")
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
<div className="mb-3">
  <label for="myBox" className="form-label"></label>
  <textarea className="form-control" value = {text} onChange={handleonChange} style={{backgroundColor:props.mode === 'light'?'white':'light grey'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick = {handleUpClick} >Convert to UperCase</button>
<button className="btn btn-primary mx-1" onClick = {handlelowClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick = {handleclearClick}>Clear</button>

    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(" ").length} Words, {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Words Per Min.</p>
    <h2>Preview</h2>
    <p> {text} </p>
    </div>
    </>
  )
}
 