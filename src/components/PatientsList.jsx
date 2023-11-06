import React from "react";
import Card from "./Card";
import Paginator from "./Paginator";
import useGlobalStore from "../store/useGlobalStore";
import PatientModal from "./PatientModal";
import ModalDelete from "./ModalDelete";

const PatientsList = () => {
  const {
    patients,
    setPatientsData,
    patientInitialValue,
    addPatient,
    editPatient,
    setpatientInitialValue,
    deletePatient,
  } = useGlobalStore();
  const [patientsList, setPatientsList] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = React.useState(false);

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  React.useEffect(() => {}, []);

  React.useEffect(() => {
    const slicedPatients = patients.slice(
      (currentPage - 1) * 10,
      currentPage * 10,
    );
    setPatientsList(slicedPatients);
    setTotalPages(patients.length / 10);
  }, [currentPage, patients, patientInitialValue]);

  function onSubmit(patient) {
    if (patientInitialValue.id) {
      console.log(patient);
      editPatient({ ...patient, id: patientInitialValue.id });
    } else {
      addPatient({ ...patient, id: patients.length + 1 });
    }
    setOpen(false);
  }

  React.useEffect(() => {
    fetch("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        setPatientsData(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <PatientModal
        isOpen={open}
        initialValues={patientInitialValue}
        onClose={setOpen}
        onSubmit={onSubmit}
      />
      <ModalDelete
        isOpen={modalDeleteOpen}
        onDelete={() => {
          deletePatient(patientInitialValue.id);
          setModalDeleteOpen(false);
        }}
        onClose={() => setModalDeleteOpen(false)}
      />
      <div className="flex justify-between mt-5 mr-2">
        <div>
          <h1 class="font-bold text-xl m-2">List of patients</h1>
        </div>
        <div>
          <button
            className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setOpen(true);
              setpatientInitialValue({
                name: "",
                description: "",
                website: "",
              });
            }}
          >
            Add Patient
          </button>
        </div>
      </div>
      <div class="mt-5 rounded-md">
        {patientsList.map((patient) => (
          <Card
            {...patient}
            setOpen={setOpen}
            setModalDeleteOpen={setModalDeleteOpen}
          />
        ))}
      </div>
      <Paginator
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default PatientsList;
