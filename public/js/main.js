function createReservation(event) {
	const name = $("#name").val();
	const email = $("#email").val();
	const id = $("#id").val();
	const phone = $("#phone").val();

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
}

$(document).ready(function () {
	$("#reservation_form").submit(createReservation);
});
