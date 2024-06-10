import "./Header.css";
import logo from "../assets/form.png";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="form logo" />
      <h1>React Form</h1>
    </header>
  );
}
