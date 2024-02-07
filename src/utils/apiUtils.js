
import axios from 'axios';
import { toast } from 'react-toastify';
import { convertJSONToObjectLiteral } from './convertUtils'
import { removeEmptyObjValues } from "./objectUtils"

export function generateBookApi ( jsonData, setState ){
  const rawData = convertJSONToObjectLiteral(jsonData);
  const postData = removeEmptyObjValues(rawData);
  const apiUrl = process.env.REACT_APP_API_URL;
  
  axios.post(`${apiUrl}/api/generate-book`, postData)
  .then(response => {
      setState(response.data.data)
      toast.success('An generated AI book has downloaded on the server.', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
      });
    })
  .catch((error) => {
    toast.error(error, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      closeButton: false,
    });
    console.error('Error:', error);
  });
}

export function checkStatusApi () {
  const apiUrl = process.env.REACT_APP_API_URL;
  
  axios.get(`${apiUrl}`)
  .then((response) => {
    if(response.status === 200 ) console.log('The status of server is alive');
    else 
    {
      toast.error('The status of server is not running!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000,
        closeButton: false,
      });
      console.log('The status of server is not running!');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
    toast.error(error, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      closeButton: false,
    });
  });
}