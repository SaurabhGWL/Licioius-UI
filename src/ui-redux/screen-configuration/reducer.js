import * as screenActionTypes from "./actionTypes";
import { prepareFinalObject } from "./utils";

const intialState = {
  preparedFinalObject: {
    snackbar: {
      open: false,
      variant: "success",
      message: "",
    },
    spinner: false,
    feedback: {
      hover: 0,
      value: 0,
      name: "",
      description: "",
    },
    savepatient: {
      profile: {},
    },
    saveClinician: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      status: "",
      gender: "",
    },
    pages: {
      patient: {
        home: {
          tab: 0,
          filters: {
            patients: "all",
            priority: "all",
            types: "all",
            disease: "all",
          },
          searchFilter: "",
        },
        details: {
          tab: 0,
          showChat: false,
          showNotification: false,
        },
        therapy: {
          tab: 1,
          historyModal: false,
          addPrescriptionModal: false,
          editPrescriptionModal: [],
          collapsible: "collapsible0",
          logDetailsModal: false,
          editColumnModal: false,
          prescriptionDropDown: false,
          therapyOpen: false,
          addMore: false,
          addMore2: false,
          deviatedTherapyModal: false,
        },
        diet: {
          MealDetailsModal: false,
        },
        overview: {
          editPatientModal: false,
        },
        medication: {
          tab: 0,
          approvalModal: false,
          prescriptionModal: false,
        },
        vitals: {
          tab: 1,
          rangeModal: false,
          graphModal: false,
          patientVitals: [],
          columns: {
            date: true,
            wieght: true,
            body_temperature: true,
            body_pressure: true,
            body_pressure_dia: true,
            heart_rate: true,
            respiratory_rate: true,
            spo2: true,
            blood_glucose: true,
          },
          vitalLimits: {
            wieght: {
              min: "58",
              max: "62",
            },
            body_temperature: {
              min: "36.6",
              max: "36.6",
            },
            body_pressure: {
              min: "145",
              max: "145",
            },
            body_pressure_dia: {
              min: "86",
              max: "86",
            },
            heart_rate: {
              min: "150",
              max: "150",
            },
            respiratory_rate: {
              min: "18",
              max: "18",
            },
            spo2: {
              min: "96",
              max: "96",
            },
            blood_glucose: {
              min: "230",
              max: "230",
            },
          },
        },
        symptoms: {
          editColumnModal: false,
          daysFilter: "",
          tab: 0,
          columns: {
            reportingLimits: true,
            date: true,
            fatigue: true,
            sleeplessness: true,
            swelling: true,
            breath: true,
            muscle_cramps: true,
            nausea: true,
            apetite: true,
            itching: false,
            constipation: false,
            dizziness: false,
            stress: false,
          },
          reportingLimits: {
            fatigue: { min: "0", max: "3" },
            sleeplessness: { min: "0", max: "5" },
            swelling: {
              min: { label: "Feet", value: "Feet" },
              max: { label: "Eyes", value: "Eyes" },
            },
            breath: { min: "0", max: "6" },
            muscle_cramps: { min: "0", max: "7" },
            nausea: {
              min: { label: "None", value: "None" },
              max: { label: "Severe", value: "Severe" },
            },
            apetite: {
              min: { label: "None", value: "None" },
              max: { label: "Severe", value: "Severe" },
            },
            itching: { min: "0", max: "7" },
            constipation: { min: "0", max: "8" },
            dizziness: { min: "0", max: "9" },
            stress: { min: "0", max: "3" },
          },
        },
        notes: {
          filters: {
            types: "all",
          },
          attachmentModal: false,
          filterd_data: [],
          notesList: [],
          datePoints: [],
          monthFilter: [],
          selected_date: "",
          index: 0,
        },
      },
      admin: {
        actualPatientSearch: "",
        draftPatientSearch: "",
        clinicianSearch: "",
        adminSearch:"",
        filters:{
          type:"all"
        }
      },
      dashboard: {
        statistics: {
          patient_type: {
            pd: 27,
            ckd: 73,
          },
          patient_ckd_stage: {
            CKD_1: 0,
            CKD_2: 0,
            CKD_3: 0,
          },
          total_no_of_clinicians: 0,
          total_no_of_clinics: 0,
          total_no_of_patients: 0,
          totla_no_of_tickets: {
            mobile_tickets: {
              open: 124,
              closed: 1024,
            },
            web_tickets: {
              open: 142,
              closed: 1300,
            },
          },
        },
      },
    },
    communication: {
      chat_key: "",
    },
    adminPortal:{
      editAdmindialog:false
    },
    clinicPortal: {
      clinic_table: [],
      searchFilter: "",
      backup_clinic_table: []
    },
    clinicianPortal: {
      clinician_search: "",
      clinician_table: [],
      clinicianData: [],
      status_filter: null,
      job_title_filter: null
    },
    patientPortal: {
      patient_search: "",
      patient_table: [],
      patient_index: 0,
      patient_view: {},
      savepatient: {
        profile: {},
      },
      save_patient: {},
      savedraftpatient: {},
      edit_physician: {},
    },
    administratorSummary: {
      clinicId: "",
      clinicInfo: {},
      piechart: {
        ckd: 10,
        pd: 10,
      },
      clinicstats: [],
      addClinician: [],
    },
    mdmsData: {
      vitalmdms: {
        vitalsmdmsUnits: {
          weight: { label: "Pound", value: "pound" },
          body_temperature: { label: "°C", value: "°C" },
          body_pressure: { label: "mmHg", value: "mmHg" },
          blood_pressure: { label: "mmHg", value: "mmHg" },
          diastolic_blood_pressure: { label: "mmHg", value: "mmHg" },
          heart_rate: { label: "bpm", value: "bpm" },
          respiratory_rate: { label: "bpm", value: "bpm" },
          spo2: { label: "%", value: "%" },
          blood_glucose: { label: "mmol/L", value: "mmol/L" },
        },
        temp_vital_limits: {
          weight_limit: {
            min: "58",
            max: "62",
          },
          body_temperature_limit: {
            min: "36",
            max: "37",
          },
          blood_pressure_limit: {
            min: "145",
            max: "145",
          },
          diastolic_blood_pressure_limit: {
            min: "140",
            max: "142",
          },
          body_pressure_limit: {
            min: "86",
            max: "86",
          },
          heart_rate_limit: {
            min: "150",
            max: "150",
          },
          respiratory_rate_limit: {
            min: "18",
            max: "18",
          },
          spo2_limit: {
            min: "96",
            max: "96",
          },
          blood_glucose_limit: {
            min: "230",
            max: "230",
          },
        },
        vital_limits: {
          weight_limit: {
            min: "58",
            max: "62",
          },
          body_temperature_limit: {
            min: "36",
            max: "37",
          },
          blood_pressure_limit: {
            min: "145",
            max: "145",
          },
          diastolic_blood_pressure_limit: {
            min: "140",
            max: "142",
          },
          body_pressure_limit: {
            min: "86",
            max: "86",
          },
          heart_rate_limit: {
            min: "150",
            max: "150",
          },
          respiratory_rate_limit: {
            min: "18",
            max: "18",
          },
          spo2_limit: {
            min: "96",
            max: "96",
          },
          blood_glucose_limit: {
            min: "230",
            max: "230",
          },
        },
      },
    },
    selectedLanguage: window.localStorage.getItem("selectedLanguage") || "en",
  },
};

const screenConfiguration = (state = intialState, action) => {
  switch (action.type) {
    case screenActionTypes.PREPARE_FINAL_OBJECT:
      const updatedPreparedFinalObject = prepareFinalObject(
        state.preparedFinalObject,
        action.jsonPath,
        action.value
      );
      return {
        ...state,
        preparedFinalObject: updatedPreparedFinalObject,
      };
    default:
      return state;
  }
};

export default screenConfiguration;
