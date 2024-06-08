import { useState } from "react";
import { COUNTRIES } from "./COUNTRIES";
import { CITIES } from "./CITIES";
import "./Form.css";

export default function Form({ onSubmittedSuccessfully }) {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    //console.log(fd);
    onSubmittedSuccessfully(data);
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
          className="text-select control"
          required
        />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type={passwordToggle}
            name="password"
            id="password"
            className="short-input"
            autoComplete="new-password"
            required
          />
        </div>
      </div>
      <div className="control checkbox-container">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onClick={handleShowPassword}
        />
        <label htmlFor="checkbox">Show Password</label>
      </div>
      <div>
        <div className="control-row">
          <div className="control">
            <label htmlFor="firstName">First Name</label>
            <br />
            <input
              type="text"
              name="firstName"
              id="firstName"
              autoComplete="given-name"
              required
              className="short-input"
            />
          </div>
          <div className="control">
            <label htmlFor="secondName">Second Name</label>
            <br />
            <input
              type="text"
              name="secondName"
              id="secondName"
              className="short-input "
              autoComplete="family-name"
              required
            />
          </div>
        </div>
      </div>
      <div className="control-row">
        <div className="control">
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
        <div className="control">
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
      <div className="control">
        <label htmlFor="phoneNo">Phone No.</label>
        <br />
        <input
          type="tel"
          name="phoneNo"
          id="phoneNo"
          inputMode="numeric"
          pattern="[0-9\s]{10,19}"
          className="text-select"
          required
        />
      </div>
      <div className="control">
        <label htmlFor="panNo">Pan No.</label>
        <br />
        <input
          type="text"
          name="panNo"
          id="panNo"
          pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
          className="text-select"
          required
        />
      </div>
      <div className="control">
        <label htmlFor="aadhar">Aadhar No.</label>
        <br />
        <input
          type="text"
          name="aadhar"
          id="aadhar"
          inputMode="numeric"
          pattern="[0-9\s]{13,19}"
          className="text-select"
          required
        />
      </div>

      <div>
        <button type="reset">Reset</button>
        <button>Submit</button>
      </div>
    </form>
  );
}
