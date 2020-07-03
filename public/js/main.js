function createReservation(event) {
	const name = $("#name").val();
	$.post("/api/tables", { name: name }, () => {
		console.log("Reservation created");
	});
	event.preventDefault();
}

$(document).ready(function () {
	$("#reservation_form").submit(createReservation);
});
