	function determineAge(){
		let age = prompt("Enter your age this year: ");
		let ab = Number(age);
		let year;
		let y = Number(year);
		y = 2019 - ab;
		alert("You were born in " + y);
	}

	function printOut(){
		let name = prompt("Enter your name and then check the console for a message!");
		console.log("Hi there" + name + ". Have a nice day.");
	}
	
	function compute(){
		let na1 = (prompt("Enter the first number: "));
		let num1 = parseInt(na1,10);
		let na2 = (prompt("Enter the second number: "));
		let num2 = parseInt(na2,10);

		alert(num1 + " + " + num2 + " = " + (num1 + num2));
		alert(num1 + " - " + num2 + " = " + (num1 - num2));
	}