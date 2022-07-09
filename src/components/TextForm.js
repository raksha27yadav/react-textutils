import React, {useState} from 'react'

import '../App.css';


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("converted to uppercase !","success")
    }

    const handlelowClick=()=>{
        let newtext=text.toLowerCase();
        setStyle("form-control")
        setText(newtext)
        props.showAlert("converted to lowercase !","success")

        
    }

    const handleinverseClick=()=>{
        let newtext=text.split(" ").reverse()
        setText(newtext.join(" "))
        props.showAlert("converted to inversecase !","success")

    }


    const handleclearClick=()=>{
        let newtext=""
        setText(newtext)
        props.showAlert("cleared text !","danger")

    }

    const handlecapitalizeClick=()=>{
        setStyle("form-control capital")
        props.showAlert("converted to title case !","success")

    }


    const handlecopyclick=()=>{
        let copytext=text
        navigator.clipboard.writeText(copytext);
        alert("Copied the text: " + copytext);
        props.showAlert("text is copied !","success")


    }

    const handleOnChange=(event)=>{
         setText(event.target.value)
    }
    const [text,setText]=useState('Enter text here');
    const [style,setStyle]=useState('form-control')
    
  return (
    <>
    <div className='container'>
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className={style} id="myBox" rows="8" style={{background:props.bg, color:props.textcol}} onChange={handleOnChange}value={text} ></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-secondary mx-1" onClick={handlelowClick}>Convert to LowerCase</button>
<button className="btn btn-success mx-1" onClick={handleinverseClick}>Inverse the text</button>
<button className="btn btn-danger mx-1" onClick={handleclearClick}>Clear</button>
<button className="btn btn-warning mx-1" onClick={handlecopyclick}>Copy to Clipboard</button>
<button className="btn btn-dark mx-1" onClick={handlecapitalizeClick}>Capitalize</button>


    </div>
    </div>
    <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the text box above to preview it here!!"}</p>

    </div>
    </>
  )
}
