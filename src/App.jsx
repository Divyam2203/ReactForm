import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Submitted from "./components/Submited";

export default function App() {
  let enteredData = {};

  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  function onSubmittedSuccessfully(data) {
    enteredData = data;
    console.log(enteredData);
    setSubmittedSuccessfully((editing) => !editing);
  }

  return (
    <div className="app">
      <Header />
      {submittedSuccessfully && <Submitted receivedData={enteredData}/>}
      {!submittedSuccessfully && (
        <Form onSubmittedSuccessfully={onSubmittedSuccessfully} />
      )}
    </div>
  );
}
