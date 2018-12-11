var a,b;
        function getValues() {
        a = Number(document.getElementById("a").value);
        b = Number(document.getElementById("b").value);
        }
        
        function sum() {
            getValues();"The Sum is equal to "
            result = a+b;
            document.getElementById('result').innerHTML = result;
        }

        function rest() {
            getValues();
            result = a-b;
            document.getElementById('result').innerHTML = result;
        }

        function multiply() {
            getValues(); "The procuct is equal to ";
            result = a*b;
            document.getElementById('result').innerHTML = result;
        }

        function divide() {
            getValues(); "The quotient is equal to ";
            result = a/b;
            document.getElementById('result').innerHTML = result;

        }