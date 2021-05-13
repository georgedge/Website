$(document).ready(function(){
	
	$("#contact-form").submit(function(event){
		
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
			alert("Please correct field in red");
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