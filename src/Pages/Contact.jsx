import React from "react";

const Contact = () => {
  return (
    <div className="container-fluid">
      <h1 className="mt-5">Contact Us</h1>
      <p>
        For any inquiries, please email us at support@activesportswear.com or
        call (123) 456-7890.
      </p>
      <form className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
