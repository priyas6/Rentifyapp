import axios from 'axios';

export async function Client(url, method, data, headers) {
  const config = {
    method: method, 
    url: `https://rentify-p7mb.onrender.com/${url}`,
    data: data, 
    headers:{ 'Content-Type': 'application/json', // Specify the content type of the request body
    'Accept': 'application/json' ,
    'Access-Control-Allow-Origin': '*',
     ...headers}

  };
  const response=await axios(config);
  return response;

}
