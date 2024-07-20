import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import styles from './Forms.module.css'


const Forms = () => {
  const [Register, setRegister]=useState({
    fullname:'',
    email: '',
    password: '',
    organizationName: '',
    industry: '',
    agreement: false,
  })

  const [Data, setData] = useState([]);

  const onSubmit =(e)=>{
    e.preventDefault();
    console.log( Register)
    setData((prevData) => [...prevData, Register]);

    setRegister({
      fullname:'',
      email: '',
      password: '',
      organizationName: '',
      industry: '',
      agreement: false,
    });
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRegister((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  return (
    <>
    <form onSubmit={onSubmit}  className="container">

      <h4> Try Sign Free for 14 Days</h4>
      <p>Already have an account?</p><a href="">Start your trial in app.</a><br /><br />
    <div className={styles.input} >
      <label htmlFor="" className={styles.label} >Full  Name</label><br /><br />
    <input className={styles.id} type="text" name='fullname' placeholder="Full Name" onChange={handleChange}  value={Register.fullname} /> 
    </div><br />
    <div className={styles.input}>
      <label htmlFor="" className={styles.label} >Email</label><br /><br />
    <input className={styles.id} type="email" name='email' placeholder="Your Email" onChange={handleChange} value={Register.email} /> 
    </div><br />
    <div className={styles.input}>
      <label htmlFor="" className={styles.label} >Password</label><br /><br />
    <input className={styles.id} type="password" name='password' placeholder="Password" onChange={handleChange} value={Register.password} /> 
    </div><br />
    <div className={styles.input}>
      <label htmlFor="" className={styles.label} >Organization Name</label><br /><br />
    <input className={styles.id} type="text" name='organizationName' placeholder="ABC Organization" onChange={handleChange} value={Register.organizationName} /> 
    </div><br />
    <div className={styles.input}>
      <label htmlFor="" className={styles.label} >Industry</label><br /><br />
    <input className={styles.id} type="text" placeholder="Industry" name='industry' onChange={handleChange} value={Register.industry} /> 
    </div><br />

    <p>Farmstack has updated our Terms of Service effectively January 4, 2023nr
    We encourage you to read the document in its entirety.</p><br />

    <input className='check' type="checkbox" name='agreement' checked={Register.agreement} onChange={handleChange}   /><label htmlFor="">I understand and agree to the Privacy and Policy Service Agreement and Acceptable Use Policy</label><br /><br /><br /><br />

    <button>Start free trial</button>
        
      
     


    </form>

    <div className='data'>
          <h3>DATA:</h3>
         

          <ul>{Data.map((e,i)=>(
            <>
            <li>Full Name: {e.fullname}</li>
            <li>Email: {e.email}</li>
            <li>Password: {e.password}</li>
            <li>Organization Name: {e.organizationName}</li>
            <li>Industry: {e.agreement}</li>
            
            
          
            </>
          ))}
          </ul>
        </div>
    </>
  )
}

export default Forms



