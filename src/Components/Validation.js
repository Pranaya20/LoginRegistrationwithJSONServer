export const Validation_Register = (inputField) =>{

    const validationError = {};

    if (inputField.firstname === "" || inputField.firstname === null) {
      validationError.firstname = "Please Enter the FirstName";
    }
    if (inputField.lastname === "" || inputField.lastname === null) {
      validationError.lastname = "Please Enter the lastname";
    }
    if (inputField.phoneno === "" || inputField.phoneno === null) {
      validationError.phoneno = "Please Enter the phoneno";
    }
    if (inputField.email === "" || inputField.email === null) {
      validationError.email = "Please Enter the email";
    }
    if (inputField.password === "" || inputField.password === null) {
      validationError.password = "Please Enter the password";
    }
    if (
      inputField.Confirmpassword === "" ||
      inputField.Confirmpassword === null
    ) {
      validationError.Confirmpassword = "Please Enter the Confirmpassword";
    }

   return validationError;
}