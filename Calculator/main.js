var a,b;
        function getValues() {
        a = Number(document.getElementById("a").value);
        b = Number(document.getElementById("b").value);
        document.getElementById('result').innerHTML = html;
        }
        
        function sum()
        {
            getValues();
            result = a+b;
        }

        function rest()
        {
            getValues();
            result = a-b;
            alert("The differfernce is equal to "+result);
        }

        function multiply()
        {
            getValues();
            result = a*b;
            alert("The procuct is equal to "+result);
        }

        function divide()
        {
            getValues();
            result = a/b;
            alert("The quotient is equal to "+result);
        }