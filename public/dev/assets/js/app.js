document.addEventListener('DOMContentLoaded', function() {
	window._service = localStorage["_service"]
	window.prepare_view();
    window.footer = document.getElementById('copyright');
	window.footer_text = '<span class="char">© </span>' + " " + new Date().getFullYear() + ', Uridium Technologies Ltd. All rights reserved'
    window.footer.innerHTML = footer_text;
    $("#send_message_form").submit(function(e){e.preventDefault(); window.send_message();})
});

var esss = "Our goal for this highly sensitive area is to provide end to end security solutions across all levels of the IT Infrastructure from Network, Servers, Storage infrastructure to Applications and Databases, Processes and Personnel. <br> \
				We help organizations secure, manage, monitor, or document what is important to them in cost effective manner. This Includes:\
			<ul> \
				<li>UTMs/NGFs/NGIPs</li> \
				<li> End point Security (antivirus/antimalware/antibot/Encryption)</li> \
				<li>Gateway security solutions</li> \
				<li>Events and log monitoring/management</li> \
				<li>DB, App & data encryption</li> \
				<li>System & user activity monitoring and management </li> \
			</ul>"

window.host = window.location.href.slice(0, window.location.href.lastIndexOf("/"));
var endpoint = "/send-email";

window.ceo_image = "image_13_ek1.png"
window.cto_image = "image_13_ek1.png"
window.cto_name = "Ayotunde Itayemi"
window.cto_paragraph = "A dedicated and hard working staff of uridiumtechnologies limited <br><br> \
                        Having worked for corporations such as \
                        Computer Warehouse and IBM, and holding the position of Country Manager \
                        for Commvault Systems Inc. in West Africa, he has gathered a mammoth of \
                        experience in the technology industry. <br><br>\
                        \
                        He has been involved in several IT projects, ranging from Infrastructure to Application and Managed services. <br><br>\
                        \
                        His major passion lies in customer satisfaction, and he would stop at nothing to ensure his clients get the best service.";

window.prepare_view = function(){
	try{
		if(document.getElementById("service_heading") != null)
			document.getElementById("service_heading").innerHTML = window.service_header_subtitle(window._service)
	}catch(e){
		console.log(e);
	}
	try{
		if(document.getElementById("service_subtitle") != null){
            var _cnt = document.getElementById("service_subtitle").innerHTML
			_cnt = _cnt.replaceAll("Subtitle", window.service_header_subtitle(window._service))
			document.getElementById("service_subtitle").innerHTML = _cnt;
        }
	}catch(e){
		console.log(e);
	}
	try{
		if(document.getElementById("service_paragraph") != null)
			document.getElementById("service_paragraph").innerHTML = localStorage["_service_writeup"]
		if(window._service == "esss"){
			document.getElementById("service_paragraph").innerHTML = esss
		}
	}catch(e){
		console.log(e);
	}
}

window.open_message_modal = function(){
    $("#contact_modal").modal("show");
}

window.service_header_subtitle = function(_in){
	var ret = "";
	switch(_in){
		case "esss":
			ret = "Enterprise Security Solutions and Services (ESSS)."
			break;
		case "cms":
			ret = "Cloud and Mobile Solution"
			break;
		case "iams":
			ret ="IT Advisory and Managed Services."
			break;
		case "bes":
			ret = "Business Enterprise Solution"
			break;
		case "iss":
			ret = "Infrastructure Solutions and Services (ISS)."
			break;
		case "bsms":
			ret = "Enterprise Network Solution"
			break;
	}
	return ret;
}

window.go_to_service = function(_in){
	localStorage["_service"] = _in;
	localStorage["_service_writeup"] = document.getElementById(_in).innerHTML;
	document.location = "service_detail.html"
}

window.visit_partner = function(_in){
    document.location ="https://"+_in;
}

window.open_leader_modal = function(_in){
    $("#leader_name").html("");
    $("#leader_title").html("");
    $("#leader_paragraph").html("");
    $("#leader_modal").modal("show");
    
    switch(_in){
        case "ceo":
            $("#leader_title").html("MD/"+_in.toUpperCase());
            $("#leader_name").html("Adewusi Johnson");
            $("#leader_paragraph").html("Johnson is a very brilliant sales expert, with international experience \
                        in IT spanning over a decade. Having worked for corporations such as \
                        Computer Warehouse and IBM, and holding the position of Country Manager \
                        for Commvault Systems Inc. in West Africa, he has gathered a mammoth of \
                        experience in the technology industry. <br><br>\
                        \
                        He has been involved in several IT projects, ranging from Infrastructure to Application and Managed services. <br><br>\
                        \
                        His major passion lies in customer satisfaction, and he would stop at nothing to ensure his clients get the best service.");
            try{
                $("#leader_image").attr("src", window.host + "/assets/img/" + window.ceo_image);
            }catch(e){}
            break;
        case "cto":
            $("#leader_title").html(_in.toUpperCase());
            $("#leader_name").html(window.cto_name);
            $("#leader_paragraph").html(window.cto_paragraph);
            try{
                $("#leader_image").attr("src", window.host + "/assets/img/" + window.cto_image);
            }catch(e){}
            break;
    }
}

window.send_message = function(){
    var submit_btn = document.getElementById("send");
	submit_btn.disabled = true;
	submit_btn.innerHTML = "Sending"

	window.nameipt = document.getElementById("nameipt");
	window.emailipt = document.getElementById("emailipt");
	window.msgipt = document.getElementById("messageipt");

	var data = JSON.stringify({"name" : nameipt.value, "email" : emailipt.value, "message" : msgipt.value})
	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
		if (this.readyState === 4) {
			if ( this.status == 200 ) {  
		      	submit_btn.disabled = false;
		      	submit_btn.innerHTML = "Send Message";
		      	nameipt.value = "";
		      	emailipt.value = "";
		      	msgipt.value = "";
                $("#contact_modal").modal("hide");
	    		$("#success_modal").modal("show");
	      	} else { 
	      		submit_btn.disabled = false;
		        submit_btn.innerHTML = "Send Message";
	    		alert(this.status + ": " + this.responseText);
			} 
		}
	});
	xhr.onerror = function () { 
		submit_btn.disabled = false;
        submit_btn.innerHTML = "Send Message";
		console.log(this.status + ": " + this.responseText);
		//error(this, this.status); 
	};

	xhr.open("POST", host+endpoint);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.setRequestHeader("Accept", "*/*");
	xhr.setRequestHeader("Cache-Control", "no-cache");
	xhr.send(data);
}

window.resend_message = function(){
    $("#success_modal").modal("hide");
    $("#contact_modal").modal("show");
}

String.prototype.replaceAll = function(search, replaceAllment) {
    var target = this;
    return target.split(search).join(replaceAllment);
};