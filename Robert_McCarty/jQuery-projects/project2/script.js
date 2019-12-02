$('#form1').submit(function(e) {
    e.preventDefault();

   let valEmail = $('#email').val(),
       valPassword = $('#password').val();
       
       if (valPassword.length < 6) {

        $('#password').after('<span class="error">Password must be at least 6 characters long</span>');
           
       };
    
       if (valEmail.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
      } else {
        let regEx = '^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$';
        let regex = new RegExp(regEx);
        let validEmail = regex.test(valEmail)

        if (validEmail) {
          $('#email').after('<span class="error">Enter a valid email</span>');
        }
      };   
});