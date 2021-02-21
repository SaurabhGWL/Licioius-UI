import { prepareFinalObject } from "../ui-redux/screen-configuration/actions";
import store from "../ui-redux/store";
import { get } from "lodash";

export const addQueryArg = (url, queries = []) => {
  const urlParts = url.split("?");
  const path = urlParts[0];
  let queryParts = urlParts.length > 1 ? urlParts[1].split("&") : [];
  queries.forEach(query => {
    const key = query.key;
    const value = query.value;
    const newQuery = `${key}=${value}`;
    queryParts.push(newQuery);
  });
  const newUrl = path + "?" + queryParts.join("&");
  return newUrl;
};


export const getUrlParameterValue = (key) => {
  let params = (new URL(document.location)).searchParams;
  let value = params.get(key);
  return value;
}

export const age = (dateString) => {
  let birth = new Date(dateString);
  let now = new Date();
  let beforeBirth = ((() => { birth.setDate(now.getDate()); birth.setMonth(now.getMonth()); return birth.getTime() })() < birth.getTime()) ? 0 : 1;
  return now.getFullYear() - birth.getFullYear() - beforeBirth;
}
const svgToDataUri = (svgStr) => {
  const encoded = encodeURIComponent(svgStr)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');

  const header = 'data:image/svg+xml;charset=utf8,';
  const dataUrl = header + encoded;

  return dataUrl;
};
export const svgReplaceColor = (svgStr, color) => {
  return svgToDataUri(svgStr.replace(/#xxxxxx/g, color));
};

export const showDevelopment = () => {
  store.dispatch(prepareFinalObject("snackbar", {
    open: true,
    variant: "info",
    message:
      "Feature Under Development"
  }));

}
const getUserDetails = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  return userInfo.User;
};
const getAuthDetails = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
  return userInfo.OAuthDetails;
};
export const wrapRequestBody = (requestBody, action) => {
  const userDetail = getUserDetails();
  const authDetails = getAuthDetails();
  const { authToken } = authDetails;
  const { uuid } = userDetail;
  let RequestInfo = {
    apiId: "AWAK_WEB",
    ver: "V1",
    ts: `${getDateInEpoch()}`,
    action: action,
    did: "1",
    key: "",
    msgId: "string",
    requesterId: uuid,
    authToken: authToken,
  };

  return Object.assign(
    {},
    {
      RequestInfo
    },
    requestBody
  );
};

export const getDateInEpoch = () => {
  return new Date().toUTCString();
};
// export const getQueryArg = (url, name) => {
//   if (!url) url = window.location.href;
//   name = name.replace(/[\[\]]/g, "\\$&");
//   var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
//     results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return "";
//   return decodeURIComponent(results[2].replace(/\+/g, " "));
// };
export const backendHosts = () => {
  let backendHosts = {};
  const hostname = window && window.location && window.location.hostname;
  if (
    hostname.includes("staging") || (hostname === "localhost")
  ) {
    backendHosts.AUTH_SERVICE =
      "https://awak-wk-auth-micro-service-staging.awakpd.com";
    backendHosts.USER_SERVICE =
      "https://awak-wk-user-micro-service-staging.awakpd.com";
    backendHosts.PATIENT_SERVICE =
      "https://awak-wk-patient-micro-service-staging.awakpd.com";
    backendHosts.CLINIC_SERVICE =
      "https://awak-wk-clinic-micro-service-staging.awakpd.com";
    backendHosts.CLINICIAN_SERVICE =
    "https://awak-wk-clinician-micro-service-staging.awakpd.com";
  }
  else {
    backendHosts.AUTH_SERVICE =
      "https://awak-wk-auth-micro-service.awakpd.com";
    backendHosts.USER_SERVICE =
      "https://awak-wk-user-micro-service.awakpd.com";
    backendHosts.PATIENT_SERVICE =
      "https://awak-wk-patient-micro-service.awakpd.com";
    backendHosts.CLINIC_SERVICE =
      "https://awak-wk-clinic-micro-service.awakpd.com";
    backendHosts.CLINICIAN_SERVICE =
    "https://awak-wk-clinician-micro-service.awakpd.com";
  }
  return backendHosts;
}

export const getadminTableData = (datas = []) => {
  console.log('in the datasss', datas);
  let tableData = [];
  let roledata = [];
  let roleObj = [];
  datas.length > 0 &&
    datas.forEach((clinician, key) => {
      if (clinician.userInfo) {
        const {
          uuid = "",
          firstname = "",
          lastname = "",
          roles = [],
          email = "",
          phone = "",
        } = clinician.userInfo || {};
        let arr1 = roles.filter((item) => item.uuid === "123456789018");
        let arr2 = [];
        if (arr1.length === 0) {
          arr2 = roles.filter((item) => item.name !== "123456789018");
          arr2.forEach((role, key) => {
            switch (role.uuid) {
              case `${role.uuid}`:
                if (
                  role.uuid !== "123456789018" ||
                  role.uuid !== "123456789012"
                ) {
                  if (!roleObj[clinician.uuid]) {
                    roledata.push({
                      label: firstname + " " + lastname,
                      value: clinician.uuid,
                    });
                    roleObj[clinician.uuid] = {
                      ...roleObj[clinician.uuid],
                      ...clinician,
                    };
                  }
                }
                break;
              default:
            }
          });
        } else {
          roles.forEach((role, key) => {
            switch (role.uuid) {
              case "123456789018":
                tableData[tableData.length] = [
                  clinician.clinician_id ? clinician.clinician_id : uuid,
                  firstname,
                  lastname,
                  role.name,
                  email,
                  phone,
                ];
                break;
              case "123456789012":
                tableData[tableData.length] = [
                  clinician.clinician_id ? clinician.clinician_id : uuid,
                  firstname,
                  lastname,
                  role.name,
                  email,
                  phone,
                ];
                break;
              default:
            }
          });
        }
      }
    });
  return {
    tableData: [...tableData],
    roleData: roledata,
    clinicans_array: roleObj,
  };
};

export const localStorageGet = (key, path) => {
  let value = null;
  if (path) {
    const data = JSON.parse(window.localStorage.getItem(key)) || null;
    value = get(data, path);
  } else {
    value = window.localStorage.getItem(key) || null;
  }
  
  return value;
};

export const formatCalendarDateSimple = (createdTime) => {
  if (!createdTime) return null;
  const date = new Date(Number(createdTime));
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()];
};
export const mapDispatchToProps = (dispatch) => {
  return {
    setAppData: (jsonPath, data) => {
      dispatch(prepareFinalObject(jsonPath, data))
    }
  }
};
export const getPercentage=(data,total)=>{
  let data_label=Number(data)/Number(total);
  const result=data_label * 100;
  return Math.round(result);
}
export const checkAdmin = (roles = []) => {
  const isAdmin = roles.find(role => role.uuid === "123456789018")
  return isAdmin ? 'Admin' : ""
}
export let snackbarObj = {};
snackbarObj.open = true;
snackbarObj.variant = "error";
