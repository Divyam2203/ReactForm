# React Form

## Description

A React form web-app with built-in validation for required fields, error messages, conditional submission, and successful submission display on a new route. Third-party libraries are not used.

## Features

- **Validation**: Enforces required fields (First Name, Last Name, Username, Email, Password, Phone Number, Country, City)
- **Error Messages**: Provides clear error messages for invalid or missing input
- **Conditional Submission**: Disables submit button until all required fields are filled correctly
- **Successful Submission**: Redirects to a new route upon successfull submission
- **Password Visibility**: Toggles password input between visible and hidden states
- **Phone Number Format**: Accommodates country code 

## Installation

### Clone the repository:
```Bash
git clone https://github.com/Divyam2203/ReactForm
```

### Navigate to the project directory:
```Bash
cd ReactForm
```

### Install dependencies:
```Bash
npm install
```
### Run the App
```Bash
npm run dev
```
## Screenshots

![Screenshot (332)](https://github.com/Divyam2203/ReactForm/assets/69101943/326ba951-d741-4c98-9ca6-887f7e364905)
![Screenshot (331)](https://github.com/Divyam2203/ReactForm/assets/69101943/f686fa06-629c-43ae-becf-b0bd1fd175a7)
![Screenshot (330)](https://github.com/Divyam2203/ReactForm/assets/69101943/fc966590-ffa1-41f7-ba9e-0381f4f4448c)


## Successful Submission

The project currently doesn't handle data submission to a backend server. You can extend it to send the form data using a mechanism like fetch or a third-party library. The successful submission route should display the submitted details in a user-friendly format.

## Additional Notes

Consider using a state management library like Redux or React Context for complex form management or sharing data across components.
Enhance the UI with styling libraries like Material-UI or Bootstrap for a more polished look and feel.
Implement unit tests to ensure form functionality and validation work as expected.

## Contributions

Feel free to fork this repository and cintribute your improvements. Cheers!