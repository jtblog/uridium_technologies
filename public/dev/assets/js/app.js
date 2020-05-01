document.addEventListener('DOMContentLoaded', function() {
	window.details_for = localStorage["details_for"]
	window.prepare_view();
    window.footer = document.getElementById('copyright');
	window.footer_text = '<span class="char">© </span>' + new Date().getFullYear() + ', Uridium Technologies Ltd. All rights reserved'
    window.footer.innerHTML = footer_text;
    $("#send_message_form").submit(function(e){e.preventDefault(); window.send_message();})
});

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
			document.getElementById("service_heading").innerHTML = window.service_header_subtitle(window.details_for)
	}catch(e){
		console.log(e);
	}
	try{
		if(document.getElementById("service_subtitle") != null){
            var _cnt = document.getElementById("service_subtitle").innerHTML
			_cnt = _cnt.replaceAll("Subtitle", window.service_header_subtitle(window.details_for))
			document.getElementById("service_subtitle").innerHTML = _cnt;
        }
	}catch(e){
		console.log(e);
	}
	try{
		if(document.getElementById("service_paragraph") != null)
			document.getElementById("service_paragraph").innerHTML = window.service_paragraph(window.details_for)
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

window.service_paragraph = function(_in){
	var ret = "";
	switch(_in){
		case "esss":
			ret = "Our goal for this highly sensitive area is to provide end to end security solutions across all levels of the IT Infrastructure from Network, Servers, Storage infrastructure to Applications and Databases, Processes and Personnel. \
				We help organizations secure, manage, monitor, or document what is important to them in cost effective manner. This Includes:"
			ret = ret + "<ul> \
							<li>UTMs/NGFs/NGIPs</li> \
							<li> End point Security (antivirus/antimalware/antibot/Encryption)</li> \
							<li>Gateway security solutions</li> \
							<li>Events and log monitoring/management</li> \
							<li>DB, App & data encryption</li> \
							<li>System & user activity monitoring and management </li> \
						</ul>";
			break;
		case "cms":
			ret = "We provide private cloud offerings for customers that have the appropriate Infrastructure in place and provide public cloud support for customers with offsite infrastructure needs. \
				Under cloud solutions, we will provide self-service, service catalogues, automation and orchestration type of solutions using industry-leading technologies to achieve a flexible solution that will drive maximum customer benefits at very reasonable costs. \
				In addition, we provide Cloud backup and recovery as well as Cloud Disaster Recovery. \
				With our Cloud Solutions & Services, we help organizations enable IT-as-a-Service (ITaaS) (for internal or external use), using; to the extent possible, their existing infrastructure. \
				Also, we believe that improving on SLA's, added productivity via self-service and service analytics will enable our customers derive maximum utilization from their IT investment. \
				As the world is going more and more mobile, we believe that the future of technology will be largely mobile as already evident and organizations who want highly motivated staff and improved productivity will have no choice but to have the allowance and capability, to effectively implement long lasting BYOD (bring your own device) strategies and management technologies. \
				Organizations can exploit mobile device & application management for the benefit of their business by deploying 'BYOD' capabilities thus empowering their staff to be more productive in a mix work and play environment. We are well positioned to help organizations make these advances in the mobile era. \
				We strongly believe we will drive differentiation in this space, by providing cost effective mobile application and mobile device management solutions and services to help organizations cope in the 'new' world. ";
			break;
		case "iams":
			ret = "Under the Services portfolio, UTL provides consulting, managed and professional services to customers, in all our core solutions and then in specialized areas like security, automation, tuning, customization /special /customer-specific archiving, processes, etc., that are not off-the-shelf solutions. \
				With our experience from global IT organizations like Microsoft, Cisco, IBM, CheckPoint, Sophos, Barracuda and with our ITIL, Project Management, architecture and other exposures we have gained over the years and our partnership with individual and teams of experts around the world, \
				we have a service that helps customers improve their operations from process initiation, design and or optimization to architecture designs; integration into service management, solution evaluation including documentation."
			break;
		case "bes":
			ret = "Today's business needs to be Dynamic, Volatile and highly competitive- not business as usual. \
				To keep moving forward you need every affordable advantage to stay competitive, innovative, nimble and profitable while getting ready for tomorrow. \
				Accomplishing this is about maintaining your organization's backbone, infrastructure and processes so they're up-to-date and ready to take you to the next plateau. \
				It means ensuring that systems are highly efficient – maximizing the integration between value chain components – and implementing the right IT systems that ensure you getting the most value and collaboration from your internal and external resources. \
				<br> Great organizations know how important enterprise software is – and it's what helps them stay ready to innovate through any business cycle, far before their competition does. To take this on and receive the results you demand, you need a trusted and experienced IT partner (Uridium Technologies (UTL)"
			break;
		case "iss":
			ret = "Robinhood's story begins almost a decade ago at Stanford, where Baiju and Vlad met as roommates and classmates. After graduation they \
				packed their bags for New York and built two finance companies, selling trading software to hedge funds. With their newfound experience in \
				the world of finance, they realized that big Wall Street firms pay effectively nothing to trade stocks, while most Americans are charged up to \
				$10 for every trade. <br> <br>\
				\
				They soon decided it was more important to build products that would provide everyone with access to the financial markets, not just the\
				wealthy. Two years after heading to New York, they moved back to California and built Robinhood—aa company that leverages technology to\
				encourage everyone to participate in our financial system. <br><br>\
				\
				They soon decided it was more important to build products that would provide everyone with access to the financial markets, not just the\
				wealthy. Two years after heading to New York, they moved back to California and built Robinhood—aa company that leverages technology to\
				encourage everyone to participate in our financial system."
			break;
		case "bsms":
			ret = "We believe that with the surge in internet adoption, businesses are becoming increasingly dependent on the Internet to connect to their different customers, sites and ultimately the world. \
				It is important that we can help our customers to fully maximize their investments in connectivity by delivering optimization solutions." 
			break;
	}
	return ret;
}

window.go_to_service = function(_in){
	localStorage["details_for"] = _in;
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