let patient = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).patient
  : false;
let doctor = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).doctor
  : false;
let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : false;

export const initialState = {
  patient: false || patient,
  doctor: false || doctor,
  token: false || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        patient: action.payload.patient,
        doctor: action.payload.doctor,
        token: action.payload.token,
        loading: false,
      };
    case "LOGOUT":
      return {
        ...initialState,
        patient: "",
        doctor: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "REQUEST_REGISTER":
      return {
        ...initialState,
        loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...initialState,
        patient: action.payload.patient,
        doctor: action.payload.doctor,
        token: action.payload.token,
        loading: false,
      };
    case "REGISTER_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    case "PATIENT_FETCH_SUCCESS":
      return {
        ...initialState,
        patient: action.payload,
      };

    case "DOCTOR_FETCH_SUCCESS":
      return {
        ...initialState,
        doctor: action.payload.doctor,
      };

    case "REQUEST_CHANGE_PASSWORD":
      return {
        ...initialState,
        loading: true,
      };

    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...initialState,
        patient: action.payload.patient,
        doctor: action.payload.doctor,
        token: action.payload.token,
        loading: false,
      };

    case "CHANGE_PASSWORD_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    case "REQUEST_UPDATE_ACCOUNT":
      return {
        ...initialState,
        loading: true,
      };

    case "UPDATE_ACCOUNT_SUCCESS":
      return {
        ...initialState,
        loading: false,
      };

    case "UPDATE_ACCOUNT_ERROR":
      return {
        ...initialState,
        loading: false,
      };

    case "REQUEST_RECEPTION":
      return {
        ...initialState,
        loading: true,
      };

    case "RECEPTION_SUCCESS":
      return {
        ...initialState,
        loading: false,
      };

    case "RECEPTION_ERROR":
      return {
        ...initialState,
        loading: false,
      };

    case "REQUEST_CHOOSE_DOCTOR":
      return {
        ...initialState,
        loading: true,
      };
    case "CHOOSE_DOCTOR_SUCCESS":
      return {
        ...initialState,
        loading: false,
      };
    case "CHOOSE_DOCTOR_ERROR":
      return {
        ...initialState,
        loading: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
