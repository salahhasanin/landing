const mongoose = require("mongoose");


let emailLengthChecker = email => {
    if (!email) {
      return false;
    } else {
      if (email.length < 5 || email.length > 30) {
        return false;
      } else {
        return true;
      }
    }
  };
  
  // Validate Function to check if valid e-mail format
  let validEmailChecker = email => {
    if (!email) {
      return false;
    } else {
      // Regular expression to test for a valid e-mail
      const regExp = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
      return regExp.test(email); // Return regular expression test results (true or false)
    }
  };
  
  // Array of Email Validators
  const emailValidators = [
    {
      validator: emailLengthChecker,
      message: "E-mail must be at least 5 characters but no more than 30"
    },
  
    {
      validator: validEmailChecker,
      message: "Must be a valid e-mail"
    }
  ];
  
  // Validate Function to check username length
  let usernameLengthChecker = username => {
    if (!username) {
      return false;
    } else {
      if (username.length < 3 || username.length > 15) {
        return false;
      } else {
        return true;
      }
    }
  };
  
  // Validate Function to check if valid username format
  let validUsername = username => {
    if (!username) {
      return false;
    } else {
      // Regular expression to test if username format is valid
      const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
      return regExp.test(username); // Return regular expression test result (true or false)
    }
  };
  
  // Array of Username validators
  const usernameValidators = [
    {
      validator: usernameLengthChecker,
      message: "Username must be at least 3 characters but no more than 15"
    },
  
    {
      validator: validUsername,
      message: "Username must not have any special characters"
    }
  ];

  let phoneLengthChecker = phone => {
    if (!phone) {
      return false;
    } else {
      if (phone < 8 || phone > 11) {
        return false;
      } else {
        return true;
      }
    }
  };

   // Validate Function to check if valid phone format
   let validPhoneChecker = phone => {
    if (!phone) {
      return false;
    } else {
      // Regular expression to test for a valid e-mail
      const regExp = new RegExp(/^[0-9]*$/);
      return regExp.test(phone); // Return regular expression test results (true or false)
    }
  };

    // Array of Username validators
    const phoneValidators = [
      
      
        {
          validator: validPhoneChecker,
          message: "Phone must be numbers only"
        }
      ];

let contactSchema = new mongoose.Schema({
    username: { type: String, required: true, validate: usernameValidators},
    email: { type: String, required: true, validate: emailValidators},
    phone: { type: Number, required: true,validate:phoneValidators},
    subject:{type:String,required:true}


});

mongoose.model("Contact", contactSchema);