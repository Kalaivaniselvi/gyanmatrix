import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFormData } from "./redux/index";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name: name,
      email: email,
      mobileNo: mobileNo,
    };
    
    dispatch(setFormData(formData));
    
    console.log(formData, "formData");
    
    setName("");
    setEmail("");
    setMobileNo("");
  };

  const displayStoredData = () => {
    if (!formData) return null;
    
    return (
      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h3>Stored Data in Redux:</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Mobile: {formData.mobileNo}</p>
      </div>
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input
          type="text"
          placeholder="Enter name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Enter mobile number here"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      
      {displayStoredData()}
    </div>
  );
};

export default App;