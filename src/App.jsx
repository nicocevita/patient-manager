import React from "react";
import PatientsList from "./components/PatientsList";
import Header from "./components/Header";
import ModalDelete from "./components/ModalDelete";

function App() {
  return (
    <>
      <ModalDelete />
      <Header />
      <PatientsList />
    </>
  );
}

export default App;
