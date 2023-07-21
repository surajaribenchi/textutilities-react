import React, {useState} from 'react'


export default function TextForm(props) {
   const handlecopy = ()=>{
    var copyText = document.getElementById("mybox");
    navigator.clipboard.writeText(copyText.value);
   }
    const handleUpclick =()=>{
        // console.log("upper case was clicked" + text);
        let newtext= text.toUpperCase();
        setText(newtext)
        props.showalert(" converted to uppercase","success");
    }
    const handleDownclick =()=>{
        // console.log("upper case was clicked" + text);
        let newtext= text.toLowerCase();
        setText(newtext)
        props.showalert(" converted to lowercase","success");
    }
    const handleclear =()=>{
        // console.log("upper case was clicked" + text);
        let newtext= ' ';
        setText(newtext)
    }
    const handleOnChange =(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const [text,setText] = useState("");
    // setText("new Text"); correct way to change the state
  return (
    <><div className='container'>
    <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} value={text} id="mybox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpclick}>convert to Uppercase</button>
<button className='btn btn-primary mx-2' onClick={handleDownclick}>convert to Lowercase</button>
<button className='btn btn-primary mx-2' onClick={handleclear}>Clear Text</button>
<button className='btn btn-primary mx-2' onClick={handlecopy}>copy Text</button>
  </div>
  <div className="container my-3">
    <h2>your text summary</h2>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{text.split(" ").length*0.008} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div></>
  )
}
