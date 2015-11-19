// index.js



function submitform(){

	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var company = document.getElementById('company').value;

	var global_rate = valueRadio('radios0');
	var iot_before = valueRadio('radios1');
	var iot_after = valueRadio('radios2');
	var bluemix_before = valueRadio('radios3');
	var bluemix_after = valueRadio('radios4');

	var com = document.getElementById('textarea').value;
	//alert(name +","+email +","+company +","+global_rate +","+iot_before +","+com +","+iot_after +","+bluemix_before +","+bluemix_after );

	$.post('/',{names: name, email: email, company: company, globalrate: global_rate, iotbefore: iot_before, iotafter: iot_after, blmxbefore: bluemix_before, blmxafter: bluemix_after, textarea: com}, function(data){
	
		console.log("DATA:" + data);
		
	});
	history.back();	
	
}

function valueRadio(s){
	var rates = document.getElementsByName(s);
	var rate_value;
	for(var i = 0; i < rates.length; i++){
    	if(rates[i].checked){
        	rate_value = rates[i].value;
        	break;
    	}
	}
	return rate_value;
}
