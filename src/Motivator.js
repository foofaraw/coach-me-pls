import React, { useState, useEffect } from 'react';
import './Motivator.css';
import axios from 'axios';

function Motivator() {
  const [image, setImage] = useState(0);
  const [caption, setCaption] = useState(null);
  const random = arr => arr[Math.floor(Math.random() * arr.length)];

  function createNewMotivator() {
    handleNewImage();
    handleNewCaption();
  }

  function handleNewImage() {
    axios.get('https://picsum.photos/300')
    .then(res => {
      const id = res.headers['picsum-id'];
      setImage(`https://picsum.photos/id/${id}/300`);
    });
  }

  function handleNewCaption() {
    axios.get('https://type.fit/api/quotes')
    .then(res => {
      setCaption(random(res.data).text);
    });
  }

  useEffect(() => {
    createNewMotivator();
  }, []);

  const styles = {
    width: '300px',
    height: '300px',
    backgroundImage: `url("${image}")`,
    display: 'flex',
    alignItems: 'flex-end'
  }

  return (
    <div className='motivator'>
      <div style={ styles }>
        <p className='caption'>{caption}</p>
      </div>
      <button onClick={createNewMotivator} className='btn'>
        NEXT
      </button>
    </div>
  );
}

export default Motivator;