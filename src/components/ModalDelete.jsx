import React from "react";

const ModalDelete = ({ isOpen, onClose, onDelete }) => {
  return (
    isOpen && (
      <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
        <div className="relative w-auto max-w-3xl mx-auto my-6">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="relative p-6 flex-auto">
              <h3 className="text-xl font-semibold">Confirmation delete</h3>
              <p className="mt-2 mb-4 text-gray-600">
                Are you sure you want to delete this patient?
              </p>
            </div>
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="text-gray-700 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={onClose}
              >
                No, cancel
              </button>
              <button
                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={onDelete}
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalDelete;
