import React from 'react';
import Modal from 'react-modal';
import Form from './Form';

Modal.setAppElement('#root');

const PatientModal = ({ isOpen, onClose, initialValues, onSubmit }) => {

  return (
    isOpen && (<div
      className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
    >
      <div className="container mx-auto mt-6 p-6 rounded bg-gray-200">
        <Form onSubmit={onSubmit} initialValues={initialValues} />
        <button onClick={() => onClose(false)} className="bg-red-500 text-white py-2 px-4 rounded mt-4 hover:bg-red-600">
          Cerrar
        </button>
      </div>
    </div>)
  );
};

export default PatientModal;
