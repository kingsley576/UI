    "use strict"

    var pass = document.getElementById('password');
    var passwordStrength = document.getElementById("passwordStrength");
    var passwordConfirm = document.getElementById("passwordConfirm");

    function CheckPassword(password) {
        
        var regex = [("[a-z]"),("[A-Z]"),("[0-9]"),("[$@#&!]")];

        var strength = 0;
        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(password)) {
                console.log(strength++);
            }
        }

  
        var color = "";
        var S_Indic = "";
        switch (strength) {
            case 0:
            case 1:
                S_Indic = "25% weak";
                color = "";
                break;
            case 2:
                 S_Indic = "50% good";
                 color = "";
                 break;
            case 3:
                 S_Indic = "75% strong";
                 color = "";
                 break;
            case 4:
                 S_Indic = "100% very strong";
                 color = "";
                 break;    
               
        }
        if (password.length == 0) {
            passwordStrength.innerHTML = "";
            return;
        }
        else if(/\s/.test(password)) { 
            passwordStrength.innerHTML = "White spacing is not allowed, please type in your password without leaving a space";
            return;
        }
        else if ((password.length < 6)) {
                passwordStrength.innerHTML = "minimum password length is 6";
        } 
        else if (password.length > 30) {
                passwordStrength.innerHTML = "maximum password length is 30";
        }
        else{
               passwordStrength.innerHTML = S_Indic;
               passwordStrength.style.color = color;

            }

        }


			