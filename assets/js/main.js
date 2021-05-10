// var form = document.getElementById("contact-form");

// form.addEventListener("submit", function() {
// 	var fullname = document.getElementById("fullname").value;

// 	if (fullname != "") {
// 		return true;
// 	} else {
// 		alert("You can't submit the form without a fullname!");
// 		event.preventDefault();
// 		return false;
// 	}
// });

// $(document).ready(function(){
// 	if (jQuery) {
// 		alert("JQuery is loaded");
// 	} else {
// 		alert("JQuery is NOT loaded");
// 	}
// });

//$("h1#heading").css("color", "green");

$(document).ready(function(){
	
	$("#contact-form").submit(function(event){ //these are id's from the cpontact form
		
		var is_error = false;
		var error_count = 0;
		
		var fullname = $("#form-name").val();
		if (fullname == ""){
			//alert("You need to input a fullname")
			$("input#form-name").css("border-color", "#ff3333");
			is_error = true;
			error_count +=1;
		}

		var email = $("#form-email").val();
		if (email == ""){
			$("input#form-email").css("border-color", "#ff3333");
			is_error = true;
			error_count +=1;
		}
		var desc = $("#form-desc").val();
		if (desc == ""){
			$("textarea#form-desc").css("border-color", "#ff3333");
			is_error = true;
			error_count +=1;
		}

		if (is_error == true) {
			$("#form-error-count").text(error_count);
			$("#form-error-list").css("display", "block");
			alert("Please correct field in red")
			event.preventDefault();
		}else{
			alert("Your details have been sent, thank you.")
		}

		$("#form-name").focusout(function(){
			$("input#form-name").css("border-color", "green");
		});

		$("#form-email").focusout(function(){
			$("input#form-email").css("border-color", "green");
		});

		$("#description").focusout(function(){
			$("textarea#form-desc").css("border-color", "green");
		});
	});
});