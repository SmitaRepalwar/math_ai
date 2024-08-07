import React, { useState } from 'react';
import SideBar from "./sidebar";
import { generateResponse, uploadImage, uploadPDF } from '../services/apiServices';
import { BsSendFill } from "react-icons/bs"
import "./home.css"
 


export const Home = () =>{
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [pdfFile, setPdfFile] = useState(null);

    const [isExpanded, setExpand] = useState(false)

    const onChangesidebar=()=>{
        setExpand(!isExpanded)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await generateResponse([{ role: 'user', content: [{ type: 'text', text: input }] }]);
          setResponse(res.response);
        } catch (error) {
          console.error('Error generating response:', error);
        }
      };
     
      const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
          try {
            const res = await uploadImage(file);
            console.log('Image base64:', res.image_base64);
          } catch (error) {
            console.error('Error uploading image:', error);
          }
        }
      };
     
      const handlePDFUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
          try {
            const res = await uploadPDF(file);
            console.log('PDF images base64:', res.images_base64);
          } catch (error) {
            console.error('Error uploading PDF:', error);
          }
        }
      };

        console.log(isExpanded)
        let sideClassName=isExpanded ? "sidebar-opened" : "sidebar-closed"
        let containerClassName=isExpanded ? "body-container-with-full-sidebar" : "body-container-without-full-sidebar"
     
      return (
        <div className='home-con'>
            <div  className={sideClassName}>
              <SideBar onChangesidebar={onChangesidebar} isExpanded = {isExpanded} />
            </div>
            <div className={containerClassName}>
                <form onSubmit={handleSubmit}>
          <div className='input-container' >        
              <textarea
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message"
                className='text-input'
              />
              <button className='input-button' type="submit">
               <BsSendFill/>
              </button>
            </div>  
          </form>
          <p>{input}</p>
          <p>Response: {response}</p>
     
          <h2>Upload Image</h2>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
     
          <h2>Upload PDF</h2>
          <input type="file" accept=".pdf" onChange={handlePDFUpload} />
          </div>
        </div>
      );

}