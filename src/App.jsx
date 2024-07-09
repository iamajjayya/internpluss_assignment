import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const [certificateNo, setCertificateNo] = useState("");
  const [verificationStatus, setVerificationStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (certificateNo === "12345") {
      setVerificationStatus("Verification Successful");
      toast.success("Verification Successful", {
        autoClose: 10000,
        className: 'bg-teal-500 text-white',
        bodyClassName: 'text-white',
        progressClassName: 'bg-white',
      });
    } else {
      setVerificationStatus("Wrong certificate number");
      toast.error("Wrong Certificate Number", {
        autoClose: 5000,
        className: 'bg-red-400 text-white font-bold',
        bodyClassName: 'text-white',
        progressClassName: 'bg-white',
      });
    }
  }

  return (
    <>
      <div className='bg-gray-50 flex flex-col'>
        <header className='bg-gray-50 rounded text-teal-400'>
          <h1 className='text-3xl font-bold py-4'>Internpluss Certificate</h1>
        </header>
        
        <main className='flex-grow flex items-center justify-center py-6'>
          <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
            <h2 className='text-2xl font-bold text-black mb-4 text-center'>Verify Your Certificate</h2>
            <p>Enter the Certificate Number and Required details to verify its Authenticity</p>
            <form className='space-y-4' onSubmit={handleSubmit}>
              <input 
                type='text' 
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500' 
                placeholder='Candidate Name'  
                required 
              />
              <input 
                type='text'
                value={certificateNo} 
                onChange={(e) => setCertificateNo(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500' 
                placeholder='Certificate Number'  
                required 
              />
              <select 
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500' 
                defaultValue=""
                required
              >
                <option value="" disabled>Select University / Training Placement</option>
                <option value="Jain_University">Jain University</option>
                <option value="Bangalore_University">Bangalore University</option>
                <option value="Internplus">Internpluss placement</option>
              </select>
              <select 
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500' 
                defaultValue=""
                required
              >
                <option value="" disabled>Course Name</option>
                <option value="Web_development">Web Development</option>
                <option value="Data_Science">Data Science</option>
                <option value="ai_ml">AI / ML</option>
              </select>
              <button 
                type='submit' 
                className='w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600'
              >
                Verify
              </button>
            </form>
          </div>
        </main>
        <ToastContainer 
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
}

export default App;
