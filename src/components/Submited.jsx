import "./Submitted.css";

export default function Submitted({ receivedData }) {
  return (
    <div className="success-message">
      <h2>Submission succesful!</h2>
    </div>
  );
}

//const {...extractedData} = receivedData;
{
  /* 
    <div className='entered-data'>
      <ul>
        <li>Email : {extractedData["email"]}</li>
        <li>Name : {extractedData["firstName"]} {extractedData["secondName"]}</li>
        <li>Address : {extractedData["country"]} {extractedData["city"]}</li>
        <li>Phone : {extractedData["phoneNo"]}</li>
        <li>Pan No. : {extractedData["panNo"]}</li>
        <li>Aadhar No. : {extractedData["aadhar"]}</li>
      </ul>
    </div> */
}
