import React from "react";
import "./App.css";
import reducer from "redux";

const initialActivity = [
  {
    activity: "Rearrange and organize your room",
    type: "busywork",
    participants: 1,
  },
];
const initialState = {
  activity: initialActivity,
};

function App() {
  return (
    <div className="App">
      Async Redux Project
      <h1>What is going on</h1>
    </div>
  );
}

export default App;
