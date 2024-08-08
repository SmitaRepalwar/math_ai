import React, { useState, useRef } from 'react';
import { BsSendFill } from 'react-icons/bs';
import { PiImageThin } from 'react-icons/pi';
import { LuPlus } from 'react-icons/lu';
import { generateResponse, uploadImage, uploadPDF } from '../services/apiServices';
import SideBar from "./sidebar";
import "./home.css";

export const Home = () => {
  const [input, setInput] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [response, setResponse] = useState('');
  const [isExpanded, setExpand] = useState(false);

  const imageInputRef = useRef(null);
  const pdfInputRef = useRef(null);

  const onChangesidebar = () => {
    setExpand(!isExpanded);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
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

  const handleIconClick = (ref) => {
    ref.current.click();
  };

  let sideClassName = isExpanded ? "sidebar-opened" : "sidebar-closed";
  let containerClassName = isExpanded ? "body-container-with-full-sidebar" : "body-container-without-full-sidebar";

  return (
    <div className='home-con'>
      <div className={sideClassName}>
        <SideBar onChangesidebar={onChangesidebar} isExpanded={isExpanded} />
      </div>
      <div className={containerClassName}>
        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <textarea
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message"
              className='text-input'
            />
            <button className='input-button' type="submit">
              <BsSendFill />
            </button>
          </div>
        </form>
        {isSubmitted &&
          <>
            <div>
              <p>{input}</p>
            </div>
            <div>
              <p>{response}</p>
            </div>
          </>
        }
        {!isSubmitted &&
          <div className='file-main-container'>
            <div className='file-container'>
              <div className=''>
                <input
                  type="file"
                  accept="image/*"
                  ref={imageInputRef}
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </div>
              <div className=''>
                <input
                  type="file"
                  accept=".pdf"
                  ref={pdfInputRef}
                  style={{ display: 'none' }}
                  onChange={handlePDFUpload}
                />
              </div>
            </div>
          </div>
        }
        <div className='icon-bg-con'>
          <div className='icon-con'>
            <button
              className='icon-button'
              onClick={() => handleIconClick(imageInputRef)}
            >
              <PiImageThin className='upload-file-icon' />
            </button>
          </div>
          <div className='icon-con'>
            <button
              className='icon-button'
              onClick={() => handleIconClick(pdfInputRef)}
            >
              <LuPlus className='upload-file-icon' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
