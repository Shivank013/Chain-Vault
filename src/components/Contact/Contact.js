import React, { useRef } from 'react';
import "./Contact.css";
import img from "../../assets/form.png";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import bg from"../../assets/form-bg.jpg"

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message send")
    // Access form values using formRef.current
    const name = formRef.current.formName.value;
    const email = formRef.current.formEmail.value;
    const message = formRef.current.formMessage.value;
    // You can now handle the form data as needed
    console.log(name, email, message);


    e.preventDefault();

    emailjs.sendForm('service_ela9c5i', 'template_xih6c6l', formRef.current, 'lUmBuorJ3UzBvNMzr')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}} className='herosection pt-[4.5rem]  h-screen'>
      <div className="form-page">
        <div className='flex my-[5rem] shadow-2xl bg-slate-50 rounded-3xl'>
          <img className='' src={img} alt="" />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='shadow-2xl border-2 scale-105 border-black bg-gradient-to-r from-orange-300 to-rose-300 rounded-3xl'
          >
            <h1 className="title text-center mb-4">Contact Us</h1>

            {/* Name */}
            <div className="form-group position-relative">
              <label htmlFor="formName" className="d-block">
                <i className="icon" data-feather="user"></i>
              </label>
              <input
                type="text"
                id="formName"
                name="from_name"
                className="form-control form-control-lg thick"
                placeholder="Name"
                required
              />
            </div>

            {/* E-mail */}
            <div className="form-group position-relative">
              <label htmlFor="formEmail" className="d-block">
                <i className="icon" data-feather="mail"></i>
              </label>
              <input
                type="email"
                id="formEmail"
                name="to_name"
                className="form-control form-control-lg thick"
                placeholder="E-mail"
                required
              />
            </div>

            {/* Message */}
            <div className="form-group message">
              <textarea
                id="formMessage"
                name="message"
                className="form-control form-control-lg"
                rows="7"
                placeholder="    Message"
                required
              ></textarea>
            </div>

            {/* Submit btn */}
            <div className="text-center">
              <button type="submit" className=" bg-orange-500 px-6 rounded-full text-white font-semibold hover:bg-orange-600 delay-50 text-xl py-2 " tabIndex="-1">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
