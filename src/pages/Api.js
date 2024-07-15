import axios from 'axios';
const API_URL = 'https://crudcrud.com/api/8e24488edc7a4e548738524ca3d0ffd6';

// Create
export const PostData = async (payLoad,subUrl) => {
    try {
        const response = await axios.post(`${API_URL}/${subUrl}`, payLoad);
        if(response.status===201){
            return true;
        }
        return false;
    } catch (error) {
        console.error('Error saving data', error);
        throw error;
    }
};

// Read
export const getApiCall = async (subUrl) => {
    return await axios.get(`${API_URL}/${subUrl}`)
};

// get by id
export const getDetail = async (id,subUrl) => {
    try{
            return await axios.get(`${API_URL}/${subUrl}/${id}`)
    }
 catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Response error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Request error:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error:', error.message);
    }
}
};


 
// update data
export const putApiData=async(id,subUrl,payLoad)=>{
    return await axios.put(`${API_URL}/${subUrl}/${id}`,payLoad)
}

// delete some one
export const getDelete = async (subUrl,id) => {
    return await axios.delete(`${API_URL}/${subUrl}/${id}`)
};