import { Navigation } from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClinicMedical,
  faUserEdit,
  faFile,
  faFileAlt,
  faFileMedical,
  faFileMedicalAlt,
  faUserNurse,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import illus1 from "../images/illus1.svg";
import illus2 from "../images/illus2.svg";
import {
  fetchDoctor,
  fetchPatient,
  useAuthDispatch,
  useAuthState,
  logout,
} from "../Context";

export const PatientDashboard = (props) => {
  const { token } = useAuthState(),
    dispatch = useAuthDispatch(),
    [state, setState] = useState({ name: "" });
  useEffect(async () => {
    const data = await fetchPatient(dispatch, token);
    if (data.err) logout(dispatch);
    setState({ name: data.name });
  }, []);

  return (
    <div>
      <Navigation
        homelink="/patient"
        username={state.name}
        active="dashboard"
      />
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1 mt-3">
            <div className="alert alert-info" role="alert">
              This is a warning alert—check it out!
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="row m-3">
              <div className="col-md-12">
                <div className="card text-center">
                  <div className="card-body">
                    <h1 className="card-title dashboard-icon">
                      <FontAwesomeIcon icon={faUserEdit} size="3x" />
                    </h1>
                    <a
                      href="/patient/account"
                      className="card-link"
                      style={{ color: "brow m-3n" }}
                    >
                      Account
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-3">
              <div className="col-md-12">
                <div className="card text-center">
                  <div className="card-body">
                    <h1 className="card-title dashboard-icon">
                      <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                    </h1>
                    <a
                      href="/reception"
                      className="card-link"
                      style={{ color: "brow m-3n" }}
                    >
                      Reception
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-3">
              <div className="col-md-12">
                <div className="card text-center">
                  <div className="card-body">
                    <h1 className="card-title dashboard-icon">
                      <FontAwesomeIcon icon={faFileMedicalAlt} size="3x" />
                    </h1>
                    <a
                      href="/report"
                      className="card-link"
                      style={{ color: "brow m-3n" }}
                    >
                      Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-3">
              <div className="col-md-12">
                <div className="card text-center">
                  <div className="card-body">
                    <h1 className="card-title dashboard-icon">
                      <FontAwesomeIcon icon={faUserMd} size="3x" />
                    </h1>
                    <a
                      href="/choosedoctor"
                      className="card-link"
                      style={{ color: "brow m-3n" }}
                    >
                      Choose Doctor
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-none d-md-block col-md-7">
            <div className="row m-5">
              <div className="col-12">
                <img src={illus2} className="img-fluid" />
              </div>
            </div>
            <div className="row m-5">
              <div className="col-12">
                <img src={illus1} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DoctorDashboard = (props) => {
  const { token } = useAuthState(),
    dispatch = useAuthDispatch(),
    [state, setState] = useState({ name: "" });

  useEffect(async () => {
    const data = await fetchDoctor(dispatch, token);
    if (data.err) logout(dispatch);
    else setState({ ...data });
  }, []);
  return (
    <div>
      <Navigation homelink="/doctor" username={state.name} />
      <div className="container">
        <div className="row m-3">
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card text-center">
              <div className="card-body">
                <h1 className="card-title dashboard-icon">
                  <FontAwesomeIcon icon={faClinicMedical} size="3x" />
                </h1>
                <a
                  href="#"
                  className="card-link"
                  style={{ color: "brow m-3n" }}
                >
                  Kuchh
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
