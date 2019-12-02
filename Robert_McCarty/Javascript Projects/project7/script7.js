function validateForm() {
    var email = document.forms["form1"]["email"].value;

    var password = document.forms["form1"]["password"].value;


    if (email == "") {
      alert("Please check the fields and make sure they are not blank.");
      return false;
    };

    if (password == "") {
        alert("Please check the fields and make sure they are not blank.");
        return false;
      };
      document.form1.submit()
  };