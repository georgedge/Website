$(document).ready(function(){
	$("#submit-button").attr("disabled", true)
	
	$("#contact-form").submit(function(event){
		
		var is_error = false;
		var error_count = 0;
		
		var fullname = $("#form-name").val();
		if (fullname == ""){
			$("input#form-name").css("border", "1px solid #ff3333");
			is_error = true;
			error_count +=1;
		}

		var email = $("#form-email").val();
		if (email == ""){
			$("input#form-email").css("border", "1px solid #ff3333");
			is_error = true;
			error_count +=1;
		}
		var phone = $("#form-phone").val();
		if (email == ""){
			$("input#form-phone").css("border", "1px solid #ff3333");
			is_error = true;
			error_count +=1;
		}
		var desc = $("#form-desc").val();
		if (desc == ""){
			$("textarea#form-desc").css("border", "1px solid #ff3333");
			is_error = true;
			error_count +=1;
		}
		var terms = $("#form-terms").is(":checked");
		if (terms == false){
			$(".form-terms").css("outline", "1px solid #ff3333");
			$(".checkbox-text-terms").css("color", "#ff3333");
			$("#form-error-terms").css("display", "block");
			is_error = true;
			error_count +=1;
		}

		if (is_error == true) {
			$("#form-error-count").text(error_count);
			$("#form-error-list").css("display", "block");
			event.preventDefault();
		}else{
			alert("Your details have been sent, thank you.");
		}

		$("#form-name").focusout(function(){
			$("input#form-name").css("border", "1px solid green");
		});

		$("#form-email").focusout(function(){
			$("input#form-email").css("border", "1px solid green");
		});

		$("#form-phone").focusout(function(){
			$("input#form-phone").css("border", "1px solid green");
		});

		$("#description").focusout(function(){
			$("textarea#form-desc").css("border", "1px solid green");
		});
	});

	$("#narrow-menu-bar").click(function(){
		$("ul.nav-links").toggle();
	});
});