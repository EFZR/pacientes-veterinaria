import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "../types";

//#region Store

type PatientState = {
  patients: Patient[];
  activeId: Patient["id"];
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
};

export const usePatientStore = create<PatientState>()(
  devtools((set, _) => ({
    patients: [],

    activeId: "",

    addPatient: (data) => {
      const newPatient: Patient = createPatient(data);

      set((state) => ({
        patients: [...state.patients, newPatient],
      }));
    },

    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }));
    },

    getPatientById: (id) => {
      set(() => ({
        activeId: id,
      }));
    },
  }))
);

//#endregion

//#region Functions

function createPatient(data: DraftPatient): Patient {
  return { ...data, id: uuidv4() };
}

//#endregion
