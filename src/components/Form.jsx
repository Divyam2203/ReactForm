import { useState } from "react";
import { COUNTRIES } from "./COUNTRIES";
import { CITIES } from "./CITIES";
import "./Form.css";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(fd);
  }

  const [selectedCountry, setSelectedCountry] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let passwordToggle = "password";

  function handleShowPassword() {
    setShowPassword((editing) => !editing);
  }

  if (showPassword) {
    passwordToggle = "text";
  } else {
    passwordToggle = "password";
  }

  function handleCountry(event) {
    setSelectedCountry(event.target.value);
  }

  const cities = CITIES[selectedCountry];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          className="text-select"
          required
        />
      </div>
      <div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type={passwordToggle}
              name="password"
              id="password"
              className="short-input"
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password">Confirm Password</label>
            <br />
            <input
              type={passwordToggle}
              name="confirm-password"
              id="confirm-password"
              className="short-input"
              required
            />
          </div>
        </div>
        <div className="checkbox-container">
          <span>
            <input
              type="checkbox"
              className="checkbox"
              id="checkbox"
              onClick={handleShowPassword}
            />
            Show Password
          </span>
        </div>
      </div>
      <div>
        <div className="control-row">
          <div>
            <label htmlFor="firstName">First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="short-input"
            />
          </div>
          <div>
            <label htmlFor="secondName">Second Name</label>
            <br />
            <input
              type="text"
              name="secondName"
              id="secondName"
              className="short-input"
              required
            />
          </div>
        </div>
        <span>invalid</span>
      </div>
      <div className="control-row">
        <div>
          <label htmlFor="country">Country</label>
          <br />
          <select
            name="country"
            id="country"
            className="short-input"
            onChange={handleCountry}
            required
          >
            {COUNTRIES.map((country) => (
              <option value={country} key={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <br />
          <select name="city" id="city" className="short-input" required>
            {cities.map((city) => (
              <option value={city} key={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="phoneNo">Phone No.</label>
        <br />
        <input
          type="tel"
          name="phoneNo"
          id="phoneNo"
          className="text-select"
          required
        />
      </div>
      <div>
        <label htmlFor="panNo">Pan No.</label>
        <br />
        <input
          type="text"
          name="panNo"
          id="panNo"
          className="text-select"
          required
        />
      </div>
      <div>
        <label htmlFor="aadhar">Aadhar No.</label>
        <br />
        <input
          type="text"
          name="aadhar"
          id="aadhar"
          className="text-select"
          required
        />
        <span>invalid</span>
      </div>

      <div>
        <button type="reset">Reset</button>
        <button>Submit</button>
      </div>
    </form>
  );
}
