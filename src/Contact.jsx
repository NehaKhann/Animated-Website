import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  let [value, setvalue] = useState({
    fname: "",
    pnumber: "",
    eaddress: "",
    msg: ""
  });
  const Event = (event) => {
    const val = event.target.value;
    const name = event.target.name;
    setvalue((prev) => {
      return {
        ...prev,
        [name]: val
      };
    });
  };
  const Submitted = (event) => {
    event.preventDefault();
    alert(
      `My name is ${value.fname}. My Phone Number is ${value.pnumber}. Email is ${value.eaddress} and Here is what I want to say " ${value.msg} " `
    );
  };
  return (
    <div>
      <div className="my-4">
        <h2 className="text-center"> Contact Us</h2>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={Submitted}>
              <div class="mb-3">
                <label for="exampleInputName" class="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  aria-describedby="NameHelp"
                  placeholder="Enter your name"
                  onChange={Event}
                  name="fname"
                  value={value.fname}
                  autoComplete="off"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPhone" class="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPhone"
                  aria-describedby="PhoneHelp"
                  placeholder="Enter your Phone Number"
                  onChange={Event}
                  name="pnumber"
                  value={value.pnumber}
                  autoComplete="off"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Email Address"
                  onChange={Event}
                  name="eaddress"
                  value={value.eaddress}
                  autoComplete="off"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message..."
                  onChange={Event}
                  name="msg"
                  value={value.msg}
                  autoComplete="off"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
