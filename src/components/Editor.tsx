import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import lang from '@/lib/lang-model';

interface InputProps {
  onChange : Function, 
  code : string
}

const Editor:React.FC<InputProps> = ({ onChange, code })=> {
  return (
    <CodeMirror
      value={code}
      height="200px"
      onChange={(e) => {onChange(e)}}
    />
  );
}

export default Editor;