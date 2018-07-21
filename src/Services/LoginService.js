import axios from "axios";

const DEV_API_BASE_URL= "" ;
export function LogIn(email,password) {
  console.log(email  +  " " + password);
  const url = `${DEV_API_BASE_URL}/api/publisher/location?startDate`;
  return axios.get(url)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log('error', err);
     
      if (err.status === 401) {
       
      }
    })
}


