import { useState } from "react";
import { COUNTRIES } from "./COUNTRIES";
import { CITIES } from "./CITIES";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log(fd);
  }

  const [selectedCountry, setSelectedCountry] = useState("");

  function handleCountry(event) {
    setSelectedCountry(event.target.value);
    console.log(selectedCountry);
  }

  const cities = CITIES[selectedCountry];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="First Name">First Name</label>
        <input type="text" name="firstName" />
      </div>
      <div>
        <label htmlFor="Second Name">Second Name</label>
        <input type="text" name="secondName" />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label htmlFor="Password">Password</label>
        <input type="password" name="password" />
      </div>
      <div>
        <label htmlFor="phoneNo">Phone No.</label>
        <input type="tel" name="phoneNo" />
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select name="country" onChange={handleCountry}>
          {COUNTRIES.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city">City</label>
        <select name="city">
        {cities.map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="panNo">Pan No.</label>
        <input type="text" name="panNo" />
      </div>
      <div>
        <label htmlFor="aadhar">Aadhar No.</label>
        <input type="text" name="aadhar" />
      </div>

      <div>
        <div>
          <button type="reset">Reset</button>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
