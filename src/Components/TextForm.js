import React from 'react'
import {useState} from 'react';
export default function TextForm(props) {
    const [text, setText] = useState(''); 
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleLowCase =()=>{
        setText(text.toLowerCase());
        props.showAlert('Text converted to lowercase','success');
    }
    const handleUpCase = ()=>{
        setText(text.toUpperCase());
        props.showAlert('Text converted to uppercase','success');
    }
    const clear = ()=>{
        setText('');
        props.showAlert('Text clear successfully','success');
    }

    const copyText= ()=>{
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard", "success");
    }
    
  return (
    <>
        <div className="container mb-3" >
            <h4  className="form-label my-3" style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h4>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#546773':'white',color:props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="10"></textarea>
            <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleLowCase}>Convert To LowerCase</button>
            <button type="button" className="btn btn-primary my-3 mx-3" onClick={handleUpCase}>Convert To UpperCase</button>
            <button type="button" className="btn btn-primary my-3 mx-3" onClick={clear}>Clear</button>
            <button type="button" className="btn btn-primary my-3 mx-3" onClick={copyText}>Copy Text</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary : </h2>
            <p >{text.length} character and {text.length===0?'0':text.split(' ').length-1} words</p>
            <p>If avarage reading speed is 4 word per second</p>
            <p>{(((text.length===0?0:text.split(' ').length-1)/4)/60).toString().substring(0,4)} minutes need to read</p>

        </div>
    </>
   
    
  )
}
