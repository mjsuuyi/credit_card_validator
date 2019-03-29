
var myvar = '<!DOCTYPE html>'+
'<html lang="en" dir="ltr">'+
'  <head>'+
'<html lang="en" dir="ltr">'+
'	<meta charset="utf-8">'+
'	<title>Credit Card Validator</title>'+
'  <style>'+
'    html,'+
'    body {'+
'        background-color: cyan;'+
'        height: 100%;'+
'        }'+
'    .center-block {'+
'        width:200px;'+
'        padding:10px;'+
'        margin-right: auto;'+
'        margin-left: auto;'+
'        background-color:cyan;'+
'        color:grey'+
'        }'+
'    input {'+
'          margin-top: 6px;'+
'        }'+
'     h4 {'+
'       text-align: center;'+
'       }'+
'    </style>'+
'</head>'+
'<body>'+
'			<h1>Verify Your Credit Card</h1>'+
'		</div> <!--this is the closing div for the header-->'+
''+
'			<div id="body">'+
'    </head>'+
'  <body>'+
'    <div class="container">'+
'    <div class="row">'+
'    <div class="center-block">'+
'    <form id = "Credit Card Number">'+
'          <p>Credit Card Number: <input type="text" id = "cardNum" ></p>'+
'  </form>'+
'  <form id = "result">'+
'     <input type = "button" name = "result" value = "Verify"'+
'     onClick = "validateCreditCard(document.getElementById(\'cardNum\').value)">'+
'  </form>'+
'  <p id = "output"></p>'+
'  </div>'+
'  </div>'+
'  </div>'+
''+
'    <script>'+
'    function validateCreditCard(creditCardNum){'+
'      var valid = true;'+
'      error = \'\';'+
''+
'      //Remove dashes from creditCardNum string'+
'    var ccNumberNoDashes = \'\';'+
'    for (var i = 0; i < creditCardNum.length; i++) {'+
'        if (creditCardNum[i] !== \'-\') {'+
'            ccNumberNoDashes += creditCardNum[i];'+
'        }'+
'    }'+
''+
'      // The credit card number must be 16 digits in length'+
'      if(ccNumberNoDashes.length !== 16){'+
'        valid = false;'+
'        error = "wrong_length"}'+
'      // All of the digits must be numbers'+
'      for(var i = 0; i < ccNumberNoDashes.length; i++)'+
'      {'+
'        var currentNumber = ccNumberNoDashes[i];'+
'        currentNumber = Number.parseInt(currentNumber);'+
'        if(!Number.isInteger(currentNumber)){'+
'          valid = false;'+
'          error = "digits must be numbers"}'+
'      }'+
''+
'      // Credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)'+
'      var obj = {};'+
'      for(var i = 0; i < ccNumberNoDashes.length; i++){'+
'        obj[ccNumberNoDashes[i]] = true;'+
'      }'+
'      if(Object.keys(obj).length < 2){'+
'        valid = false;'+
'        error = "must be composed of at least two different digits"'+
'      }'+
''+
'      // The final digit of the credit card number must be even'+
'      if(ccNumberNoDashes[ccNumberNoDashes.length - 1] % 2 !== 0){'+
'        valid = false;'+
'        error = "final digit of the credit card number must be even"'+
'      }'+
''+
'      // The sum of all the digits must be greater than 16'+
'      var sum = 0;'+
'      for(var i = 0; i < ccNumberNoDashes.length; i++){'+
'        sum += Number(ccNumberNoDashes[i]);'+
'      }'+
'      if(sum <= 16){'+
'        valid = false;'+
'        error = "sum of all the digits must be greater than 16"'+
'      }'+
''+
'    if (valid == true) {'+
'      document.getElementById("output").innerHTML =  "Card Valid!";'+
'    } else {'+
'        document.getElementById("output").innerHTML =  "Card Not Valid!" + "  error: " + error;'+
'    }'+
'      };'+
''+
'    </script>'+
'  </body>'+
'</html>';
