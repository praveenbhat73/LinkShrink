import { useState } from 'react';
import './App.css';
import Background from '../src/components/Background';
import Input from './components/Input';
import Linkresult from './components/Linkresult'

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <Input setInputValue={setInputValue} />
      <Background />
      <Linkresult inputValue={inputValue} />
    </div>
  );
}

export default App;