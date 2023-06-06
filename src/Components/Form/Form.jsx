import React from "react";
import "./form.scss";

const Form = () => {
  return (
    <div className="form">
      <div className="title">
        <h2>Customer Information Master</h2>
      </div>
      <div className="container">
        <div className="nameEmail">
          <div className="name">
            <label htmlFor="name">Customer's Name:</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter the name"
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email">Customer's email address:</label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Enter the email address"
              required
            />
          </div>
        </div>

        <div className="phone">
          <label htmlFor="phone">Customer's phone number:</label>
          <br />
          <input
            type="tel"
            name="phone"
            placeholder="Enter the phone number"
            required
          />
        </div>
        <div className="dropDown">
          <label htmlFor="typeofenq">Select the type of enquiry: </label>
          <br />
          <select className="select" name="typeofenq" id="enq">
            <option value="sales">Sales</option>
            <option value="Orders">Orders</option>
            <option value="Payment">Payment</option>
          </select>
        </div>
        <div>
          <button className="submit" type="submit" value="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
