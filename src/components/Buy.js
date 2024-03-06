import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import './Buy.css';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"; 
import { db } from '../firebase';
import { userInputs } from '../formSource';
import { useNavigate } from 'react-router-dom'; // Import useHistory

const Buy = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({});
  const Navigate = useNavigate(); // Access the history object

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "userTransactions"), {
        ...formData,
        timestamp: serverTimestamp(),
        userEmail: user.email
      });
      console.log("Document written with ID: ", res.id);
      
      // Navigate to successful transaction page
      Navigate('/successful');
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="cap-container">
        <div className="h1con">
          <h1 className='headertext'>Buy Crypto with us, {user && user.email}!</h1>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {userInputs.map((input) => (
              <div className="form-group" key={input.id}>
                <label className='selector' htmlFor={input.id}>{input.label}</label>
                {input.type === 'select' ? (
                  <select className='select'
                    id={input.id}
                    onChange={handleInput}
                    required
                  >
                    {input.options.map(option => (
                      <option className='options' key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={input.type}
                    id={input.id}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                    required
                  />
                )}
              </div>
            ))}
            <button type="submit" className="btn">Checkout</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Buy;
