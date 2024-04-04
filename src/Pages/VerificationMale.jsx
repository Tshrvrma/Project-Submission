import React from "react";
import gmailIcon from '../images/gmail-icon.png';

const VerificationMail = ({ email }) => {
  return (
    <div className="w-100vw h-100vh">
        <div className="w-[50%] mx-auto p-6 ">
      <div className="text-center mb-8">
      <h2 className="text-xl font-semibold mb-5">Please verify your email...</h2>
        <img src={gmailIcon} alt="Gmail Icon" className="w-16 mx-auto mb-4" />
        <p className="text-gray-600">Please verify your email address. We've sent a confirmation email to:</p>
        <p className="text-black font-bold mb-10 mt-10">abcfdkjh123@gmail.com</p>
      </div>
      <div className="text-center">
        <p className="text-gray-600 mb-10">Click the confirmation link in that email to begin using Dribbble.</p>
        <p className="text-gray-600">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can resend the confirmation email.</p>
        <p className="text-gray-600 mt-16">Wrong email address? <a href="#">Change it.</a></p>
      </div>
    </div>
    </div>
  );
};

export default VerificationMail;
