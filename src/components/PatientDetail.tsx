import { usePatientStore } from "../store/store";
import PatientDetailItem from "./PatientDetailItem";
import type { Patient } from "../types";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
  const { deletePatient, getPatientById } = usePatientStore();

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="Id" content={patient.id} />
      <PatientDetailItem label="Nombre" content={patient.name} />
      <PatientDetailItem label="Propietario" content={patient.caretaker} />
      <PatientDetailItem label="Email" content={patient.email} />
      <PatientDetailItem label="Fecha Alta" content={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" content={patient.symptoms} />

      <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
          onClick={() => getPatientById(patient.id)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
