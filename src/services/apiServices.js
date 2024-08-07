import axios from 'axios';
 
// Base URL for your Flask API
const API_BASE_URL = 'http://127.0.0.1:5000'; // Adjust the URL if needed
 
// Function to generate a response from the model
export const generateResponse = async (messages) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate`, { messages });
    return response.data;
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
};
 
// Function to upload an image and get its base64 representation
export const uploadImage = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
 
    const response = await axios.post(`${API_BASE_URL}/upload_image`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};
 
// Function to upload a PDF and get images
export const uploadPDF = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
 
    const response = await axios.post(`${API_BASE_URL}/upload_pdf`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (error) {
    console.error('Error uploading PDF:', error);
    throw error;
  }
};