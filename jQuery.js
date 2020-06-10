function displayName(){
	$("#writeup").text("Leon")
}
$("#myButton1").on("click", displayName);

const STAFF_PREFIX = "staff";
const ADDRESS_PREFIX = "address";

/*
const STAFF = [
	{firstName: "About Us", lastName: "Ortiz", 
  	address: "\n\nThink Global is a fictitious, not-for-profit organization in New Zealand that offers international exchange programs. An international exchange program is a program in which a person studies or works in a foreign country or a short time (e.g., one to six months). Think Global wants to develop and reach new members like never before." + "\n\n Think Global: Vision and Mission \n\n" + "Think Global recognizes that intolerance stems from ignorance and fear of different cultures, nations, or religions. Thus, Think Global provides exchange programs that contribute to the understanding and learning of societies with a different culture, religion, political, or economic system."},
  
];

STAFF.sort(function(a, b) {
	return a.lastName.localeCompare(b.lastName);	
});


let compactStaff = STAFF.map(function(person) {
	return {
  	name: person.firstName,
  	address: person.address}
});

$.each(compactStaff, function(index, person) {

  let personItem = $('<li>')
  	.text(person.name)
    .attr("id", STAFF_PREFIX + index);


  let personAddress = $('<div>')
  	.text(person.address)
  	.attr("id", ADDRESS_PREFIX + "_" + STAFF_PREFIX + index)
  	.addClass("hidden");


  personItem.append(personAddress);
  
	$('#directory').append(personItem);
  
 	personItem.on("click", displayAddress);  		
});

function displayAddress() {
	let personItem = $(this);
  let detailsItemID = ADDRESS_PREFIX + "_" + personItem.attr('id');

  $('#' + detailsItemID).toggle(200);
}
*/