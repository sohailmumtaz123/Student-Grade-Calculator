let calculate= () => {
	let submit, marks, total,error_message, error=0;

	submit=document.querySelector("input[type=submit]");
	marks=document.querySelectorAll("input[type=text]");
	error_message=document.querySelectorAll(".error");

	for (var i = 0; i < marks.length; i++) {
		if(marks[i].value<0 || marks[i].value>100 || marks[i].value==""){
			// marks[i].insertAdjacentHTML( 'afterEnd', '<p style="color:red">You Entered Wrong Value</p>');
			// marks[i].style.marginBottom="5px";
			error_message[i].style.display="block";
		}
		else{
			error_message[i].style.display="none";
			error+=1;
		}

	}
	if(error==4){
			total= +marks[0].value + +marks[1].value + +marks[2].value + +marks[3].value;
			let result=total/400 * 100;
			if(result<30){
				document.getElementById("result").innerHTML = "Ohh! You become fail. you got " + result + "% marks!";
			}
			else if(result >30 && result <60 ){
				document.getElementById("result").innerHTML = "Good Job! You got " + result + "% marks!";
			}
			else{
				document.getElementById("result").innerHTML = "Congratulations! you got " + result + "% marks!";
			}
			
		}

	
	

	


}
