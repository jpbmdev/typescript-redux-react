import React from 'react';
import './App.css';
import Recorder from '../Recorder/Recorder';
import Calendar from '../Calendar/Calendar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Recorder />
      <Calendar />
    </div>
  );
}

export default App;
