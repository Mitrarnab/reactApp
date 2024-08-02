import React, { useState } from 'react'

export default function TextForms(props) {

  const [text, setText] = useState('')


  const ChangeHandel = (event) => {
    setText(event.target.value)
  }

  const uppercase = () => {
    let newText = text.toUpperCase()
    setText(newText);
    props.alertChanger('text chenged to upper case.', 'success');
  }

  const lowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.alertChanger('text chenged to lower case.', 'success');
  }

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.alertChanger('text cleared.', 'success');
  }

  const copyText = () => {
    const copyContent = async () => {
      try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
    copyContent();
    props.alertChanger('text copied to clipboard.', 'success');
  }

  const removeSpace = () => {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.alertChanger('removed extra spaces.', 'success');
  }

  const capWord = () => {
    setText(text.replace(/\b\w/g, l => l.toUpperCase()));
    props.alertChanger('capitalize each words.', 'success');
  }



  return (
    <>
      <div className='darkMode' style={{ color: props.mode === 'dark' ? 'white' : 'Black' }}>
        <div className='container' >
          <div className="my-4 ">
            <label htmlFor="textAreaId " className={`textAreaId  text-${props.mode === 'dark' ? 'light' : 'dark'} mb-3`}>Type Below</label>
            <textarea className={`form-control text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode} td`} value={text} onChange={ChangeHandel} id="textAreaId" placeholder='Type text Here..'></textarea>
          </div>
          <hr />
          <div className='text-left'>
            <button type="button" className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={uppercase} disabled={text.length === 0}>Upper case</button>
            <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={lowercase} disabled={text.length === 0}>Lower case</button>
            <button type="button" className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={removeSpace} disabled={text.length === 0}>Remove extra spaces</button>
            <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={capWord} disabled={text.length === 0}>Capitalize words</button>
            <button type="button" className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={copyText} disabled={text.length === 0}>Copy text</button>
            <button type="button" className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} m-2`} onClick={clearText} disabled={text.length === 0}>Clear text</button>
          </div>
          <hr />
          <div className='' >
            <h2 className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Text Summery</h2>
            <p className={`text-${props.mode === 'dark' ? 'info' : 'primary'}`}> <strong>{text.length}</strong> Letters and <strong>{text.split(/\s+/).filter((e) => { return e.length }).length}</strong> Words</p>
            <hr />
            <h2 className={`my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview</h2>
            <p >{text.length > 0 ? text : 'Nothing to preview here.'}</p>
          </div>
        </div>

      </div>
    </>
  )
}
