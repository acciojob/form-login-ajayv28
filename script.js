function getFormvalue() {
    //Write your code here
	const fName = document.getElementByName("fname");
	const lName = document.getElementByName("lname");
	alert(fName.value + " " +lName.value);

}
