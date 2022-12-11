var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display-text");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){

        var value= this.getAttribute('data-val');
        if(value=='+' || value=='-' || value=='*' || value=='/' || value=='%'){
            operator = value;
            operand1 = parseFloat(display.textContent);
            //display.textContent will return a String
            // Use parseFloat to convert that value to float
            
            if(isNaN(operand1)){
                operand1=0;
            }         
            
            display.innerText = "";

        }
        
        else if(value=='C' || value=='CE'){
            display.innerText = "0";
        }

        else if(value=='+/-'){
            display.innerText = -1 * parseFloat(display.textContent);
        }
        
        
        else if(value == '='){
            
            operand2 = parseFloat(display.textContent);
            var result = eval(operand1 + operator + operand2);
            display.innerText = result;

        }
        
        
        else if(display.innerText=='0'){
            display.innerText = "";
            display.innerText += value;
        }

        else{
            display.innerText += value;
        }

    });
}



// Things left to do


//round off to two decimal places eg.7/9
// chain operation
// Keyboard Events