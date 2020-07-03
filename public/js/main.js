// creating a reservation on the client side
function createReservation(event) {
	const name = $("#name").val();
	const email = $("#email").val();
	const id = $("#id").val();
	const phone = $("#phone").val();

	if (name === null || name === "") {
		alert("enter a valid name");
	}

	if (email === null || email === "") {
		alert("enter a valid email");
	}

	if (phone === null || phone === "") {
		alert("enter a valid phone");
	}

	if (id === null || id === "") {
		alert("enter a valid id");
	}

	$.post(
		"/api/tables",
		{
			name: name,
			email: email,
			id: id,
			phone: phone,
		},
		() => {
			console.log("Reservation created");
		}
	);

	event.preventDefault();

	// clear the data
	$("#name").val("");
	$("#email").val("");
	$("#id").val("");
	$("#phone").val("");
}

$(document).ready(function () {
	$("#reservation_form").submit(createReservation);
});
