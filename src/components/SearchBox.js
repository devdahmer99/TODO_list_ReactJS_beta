import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const InputText = styled.input`
  border:2px solid #000;
  border-radius:5px;
  padding:15px;
  font-size:17px;
  width:300px
`;

function SearchBox(props) {
  const [text, setText] = useState('');

  function handleKeyUp(e) {
    if(e.keyCode == 13) {
      if(props.onEnter) {
        props.onEnter(text);
      }
      setText('');
    }
  }


  return (
    <InputText 
      type="text"
      value={text}
      onChange={(e)=>setText(e.target.value)}
      onKeyUp={handleKeyUp}
      placeholder={props.frasePadrao ?? "Digite Alguma coisa"}
    />
  );
}

export default SearchBox;