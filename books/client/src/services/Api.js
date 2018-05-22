import axios from 'axios'; // library for http requests to backend

//connector
export default () => {
  //creates an axios object that points to backend URL
  return axios.create({
    baseURL: 'http: //localhost:8081/'
  })
};
