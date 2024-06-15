import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../firebaseConfig"
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    dateOfBirth: "",
    phoneNumber: "",
    gender: true,
    email: "",
    password: "",
    address: "",
  });

  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);
  const [step, setStep] = useState(1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          // // reCAPTCHA solved - will proceed with submit function
          // handleSendOTP();
        },
        'expired-callback': () => {

          toast.error("Recaptcha expired. Please complete the recaptcha again.");
        }
      }, auth);
    }
  };

  const handleSendOTP = () => {
    setupRecaptcha();
  
    // Format the phone number with the country code
    const phoneNumberFormatted = `+84${formData.phoneNumber}`;
    console.log("phoneNumber: ", phoneNumberFormatted);

    const webVerify = window.recaptchaVerifier;
  
    signInWithPhoneNumber(auth, phoneNumberFormatted, webVerify)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setVerificationId(confirmationResult.verificationId);
        setStep(2);
        console.log("OTP sent");
      }).catch((error) => {
        console.error("Error during signInWithPhoneNumber", error);
        if (error.code === 'auth/invalid-phone-number') {
          toast.error("Invalid phone number. Please enter a valid phone number.");
        } else {
          toast.error(`Failed to send OTP. Please try again. ${error.message}`);
        }
        
      });
      
  };

  const handleVerifyOTP = () => {
    if (otp.length !== 6) {
      toast.error("OTP must be 6 digits long.");
      return;
  }
    const credential = PhoneAuthProvider.credential(verificationId, otp);

    signInWithCredential(auth, credential)
      .then((result) => {
        console.log("Phone number verified successfully.");
        handleSubmit();
      })
      .catch((error) => {
        console.error("Error during OTP verification", error);
        toast.error(`Invalid OTP. Please try again. ${error.message}`);
      });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://localhost:7218/api/User/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Registration successful!");
        toast.success("Registration successful!", {
          onClose: () => navigate("/login"),
        });
      } else {
        console.error("Registration failed!");
        toast.error("Registration failed!");
      }
    } catch (error) {
      console.error("Error submitting registration:", error);
      toast.error("Error submitting registration. Please try again.");
    }
  };

  return (
    <div className="full-height center-content">
      <ToastContainer />
      <div className="cardRegister">
        <h2 className="fw-bold mb-2 text-center">Sign Up</h2>
        {step === 1 && (
          <form onSubmit={(e) => { e.preventDefault(); handleSendOTP(); }}>
            <div className="form-container">
              <div className="input-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-container">
              <div className="input-group">
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
  type="text"
  id="phoneNumber"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={(e) => {
    // Ensure only numeric characters are allowed
    const formattedValue = e.target.value.replace(/\D/g, '');
    setFormData({
      ...formData,
      phoneNumber: formattedValue
    });
  }}
/>
              </div>
            </div>
            <div className="form-container">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-container">
              <div className="input-group">
                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value={false}>Male</option>
                  <option value={true}>Female</option>
                </select>
              </div>
            </div>
            <button type="submit" className="mb-2 w-100">
              Register
            </button>
            <div id="recaptcha-container"></div>
          </form>
        )}
        {step === 2 && (
          <form onSubmit={(e) => { e.preventDefault(); handleVerifyOTP(); }}>
            <div className="form-container">
              <div className="input-group">
                <label htmlFor="otp">OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="mb-2 w-100">
              Verify OTP
            </button>
          </form>
        )}
        <div className="sign-up-link">
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
