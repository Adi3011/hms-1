import {
  registerPatient,
  loginPatient,
  registerDoctor,
  loginDoctor,
  logout,
  fetchDoctor,
  fetchPatient,
  changePassword,
  updateAccount,
  reception,
  chooseDoctor,
  patientList,
  report,
  visit,
  loginAdmin,
  changePasswordAdmin,
  doctorReport
} from "./actions";
import { AuthProvider, useAuthDispatch, useAuthState } from "./context";

export {
  AuthProvider,
  useAuthState,
  useAuthDispatch,
  registerPatient,
  loginPatient,
  registerDoctor,
  loginDoctor,
  logout,
  fetchDoctor,
  fetchPatient,
  changePassword,
  updateAccount,
  reception,
  chooseDoctor,
  report,
  visit,
  loginAdmin,
  changePasswordAdmin,
  patientList,
  doctorReport
};
