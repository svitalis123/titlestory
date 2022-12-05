import React, { useState } from 'react';
import styles from '../css/EndTop.module.css';
import Popup from './Popup';

export default function EndTop() {
  // sets the initial state of showing popup as false
  const [popup, setPopup] = useState(false);
  // sets the functionality of changing paragraph to heading to initial state of false
  const [heading, setHeading] = useState(false);
  // sets value from input as empty as the initial state
  const [value, setValue] = useState();
  // Holds the text typed through text and displayed on pressing enter
  const [text, setText] = useState([]);

  // fired when the user types in values
  const handleType = (e) => {
    const x = e.target.value;
    const s = x === '/1';
    setValue(x);
    setPopup(s);
  };

  // Fired when the user presses enter and the heading is a heading
  const handleKey = (e) => {
    if (e.code === 'Enter' && heading === true) {
      setText([...text, value]);
      setValue('');
      setHeading(false);
    }
  };

  // Default styling of heading tag
  const styling = {
    display: 'block',
    fontSize: '2em',
    marginTop: '0.67em',
    marginLeft: '0',
    marginRight: '0',
    fontWeight: 'bold',
    outline: 'none',
    border: 'none',
  };

  // styling of paragraph text
  const alternate = {
    width: '100%',
    padding: '0.5rem 0',
    outline: 'none',
    border: 'none',
    fontSize: '16px',
    color: '#6a707b',
  };
  return (
    <div className={styles.endtopcontaainer}>
      <div>
        {
          // displays values of heading
          /* eslint-disable */
          text.length > 0 && text.map((it, key) => (
            <h2 key={key}>{it} </h2>
          ))
        }
      </div>
      <input type="text" value={value} style={heading === true ? styling : alternate} onKeyDown={handleKey} className={styles.endtopcontaainer_input1} onInput={handleType} placeholder={heading === true ? 'Heading 1' : 'Type / for bocks, @ to link docs or people'} />
      {
        // displays popup if the popup is true 
        popup === true ? <Popup setHeading={setHeading} setPopup={setPopup} setValue={setValue} /> : ''
      }
    </div>
  );
}
