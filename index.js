function sendEmail(Name,email) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "jdatesting123",
	Password : "Juandiego1",
	To : 'juandiego.arangoramos@gmail.com',
	From : email.value,
	Subject : "Contact: "+Name.value,
	Body : "Please contact me at: "+email.value,
	}).then(
        message => alert("mail sent successfully")
    
    );
    sendEmail2(Name,email);
}
function sendEmail2(Name,email) {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "jdatesting123",
	Password : "Juandiego1",
	To : email.value,
	From : 'jdatesting123@gmail.com',
	Subject : "Thanks!, I will contact you ASAP",
	Body : "Juan DIego Arango, Mobile:321458767",
	}).then(
		message => alert("mail sent successfully")
	);
}