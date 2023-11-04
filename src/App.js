import React from "react";
import { Toaster } from 'react-hot-toast';
import "./assets/App.css"
import { Form } from "./components/Form"

export default function App() {
  return (<div className="App">
    <Toaster />
    <header className="App-header"><h1 className="font-bold text-md">Export and Search for Repos and Organization</h1></header>

    <Form />
  </div>
  )
}
