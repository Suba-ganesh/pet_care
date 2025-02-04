import React from 'react';
import './Feedback.css';


const Feedback = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1b14d836-ebf6-4f8e-84ad-bf90ee60c694");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };






  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
          <h1>Get in Touch</h1>
          <img src="" alt="" />
        </div>
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' />
            <label htmlFor="">Write Your message Here</label>
            <textarea name="message" cols="30" rows="8" id="" placeholder='Enter your Message'></textarea>
            <button type="submit" className="contact-submit">Submit now</button>
          </form>
        </div>
  )
}

export default Feedback;