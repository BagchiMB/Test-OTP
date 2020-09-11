import React from 'react';
import './App.css';
import OtpInput from 'react-otp-input';
import MuiPhoneNumber from 'material-ui-phone-number'

const OTPSET=['1468','4793','1234','0000'];

function App() {

  const [validator,setValidator]=React.useState(false);
  const [otp,setOtp]=React.useState('')
  const [result,setResult]=React.useState('')
  const [,setPhone]=React.useState('')

  const handleGetOTPSubmit = () => 
  {
    setResult(OTPSET[Math.floor(Math.random()*4)])
    setValidator(true)
  }

  const handleChange = (otp)=>
  {
    setOtp(otp)
  }

  const handleOnChange = (value)=>
  {
    setPhone(value)
  }

  const handleSubmit=()=>
  {
    if(otp===result)
      alert("success")
    else
      alert("Failed")

    setResult('')
    setValidator(false)
    setOtp('')
    setPhone('')
  }

  return (
    <div className="App">
      <p className="Abs left">OTP VALIDATOR</p>
      <p className="Abs right">OTP VALIDATOR</p>
      <div className="content">
        {!validator?
          <div className="Pre-Inp">
            <MuiPhoneNumber defaultCountry={'in'} onChange={handleOnChange} disableAreaCodes={true} autoFormat={false}/>,
            <button className="btn" onClick={handleGetOTPSubmit}>Generate OTP</button>
          </div>:
          <div className="Inp">
              <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={4}
              separator={<span>&nbsp;&nbsp;&nbsp;</span>}
              inputStyle={{width:'5rem',height:'5rem',outline:'none',fontSize:'2rem'}}
              shouldAutoFocus={true}
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>}
      </div>
    </div>
  );
}

export default App;
