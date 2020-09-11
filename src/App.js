import React from 'react';
import './App.css';
import OtpInput from 'react-otp-input';

const OTPSET=['1468','4793','1234','0000'];

function App() {

  const [validator,setValidator]=React.useState(false);
  const [otp,setOtp]=React.useState('')
  const [result,setResult]=React.useState('')

  const handleGetOTPSubmit = () => 
  {
    setResult(OTPSET[Math.floor(Math.random()*4)])
    setValidator(true)
  }

  const handleChange = (otp)=>
  {
    setOtp(otp)
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
  }

  return (
    <div className="App">
      <p className="Abs left">OTP VALIDATOR</p>
      <p className="Abs right">OTP VALIDATOR</p>
      <div className="content">
        {!validator?<button onClick={handleGetOTPSubmit}>Generate OTP</button>:
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
