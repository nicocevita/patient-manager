import create from "zustand";

const useGlobalStore = create((set) => ({
  patients: [],
  patientsData: [],
  deletePatient: (id) => {
    set((state) => ({
      patients: state.patients.filter((patient) => patient.id !== id),
    }));
  },
  setPatientsData: (data) => {
    set((state) => ({
        patientsData: data,
        patients: data,
    }));
  },
  searchPatient: (name) => {
    set((state) => ({
      patients: state.patientsData.filter((patient) =>
        patient.name.toLowerCase().includes(name.toLowerCase()),
      ),
    }));
  },
  patientInitialValue: {
    name: "",
    description: "",
    url: "",
  },
  setpatientInitialValue: (data) => {
    set((state) => ({
      patientInitialValue: data,
    }));
  },
  addPatient: (patient) => {
    set((state) => ({
      patients: [...state.patients, patient],
      patientsData: [...state.patients, patient],
    }));
  },
  editPatient: (patient) => {
    set((state) => ({
      patients: state.patients.map((p) => {
        if (p.id === patient.id) {
          return patient;
        }
        return p;
      }),
    }));
  }
}));

export default useGlobalStore;
