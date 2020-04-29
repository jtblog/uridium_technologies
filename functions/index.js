functions = require('firebase-functions');
smtpTransport = require('nodemailer-smtp-transport');
admin = require('firebase-admin');
//firebase = require('firebase');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

nodeMailer = require('nodemailer');
bodyParser = require('body-parser');
json_parser = bodyParser.json( { type: "application/*+json" } );
//urlencoded_parser = parser.urlencoded( { extended : false } );
//raw_parser = parser.raw( { type : 'application/vnd.custom-type' } );
//text_parser = parser.text( { type : 'text/html' } );

express = require('express');
app = express();

var app = express();
//app.set('view engine', 'ejs');
//app.use(express.static('public'));


isNullOrUndefinedOrEmpty = function(_in){
  var _check = _in+"";
  switch(_check){
    case null:
      return true;
      break;
    case undefined:
      return true;
      break;
    case "null":
      return true;
      break;
    case "undefined":
      return true;
      break;
    case "{}":
      return true;
      break;
    case {}:
      return true;
      break;
    case "[]":
      return true;
      break;
    case []:
      return true;
      break;
    default:
      if(typeof _check == "string"){
	    if(_check.trim() == "" || _check.split(" ").join("") == ""){
	      return true;
	    }else{
	    	return false;
	    }
	  }else if(typeof _check == "undefined"){
	    return true;
	  }
      break;
  };
};

app.get('/ping', function (req, res) {
	//console.log(Date.now())
	res.status(200).json({"response": Date.now()})
  	//res.render('index');
});

app.get('/test', function (req, res) {
	//console.log(Date.now())
	res.redirect('/test.html');
  	//res.render('index');
});

app.post('/send-email', json_parser, function (req, res) {

	if(isNullOrUndefinedOrEmpty(req.body.name)){
		res.status(400).send("Please, What is your name?");
	}else if(isNullOrUndefinedOrEmpty(req.body.email)){
		res.status(400).send("Please, What is your email address?");
	}else if(isNullOrUndefinedOrEmpty(req.body.message)){
		res.status(400).send("Say something.");
	}else{
		/*let config = {
		service: 'Hotmail',
        host: 'smtp-mail.outlook.com', // hostname
       	secureConnection: false, // TLS requires secureConnection to be false
       	port: 587, // port for secure SMTP
		tls: {
			ciphers:'SSLv3'
		},
		auth: {
	    	user: 'joetfx@hotmail.com',
	    	pass: '06143460AI'
		}
  		}*/

	  	let config = {
			//service: 'Gmail',
		    host: 'smtp.gmail.com',
		    port: 587,
		    requireTLS: true,
		    auth: {
		        user: 'contactpayahead@gmail.com',
		        pass: 'uridiumtechnologies'
		    }
		}

		/*let transporter = nodeMailer.createTransport(
			smtpTransport(config)
		);*/

		let transporter = nodeMailer.createTransport(
			config
		);
		
		/*let transporter = nodeMailer.createTransport(config);*/
		let mailOptions = {
		    from: 'contactpayahead@gmail.com', // sender address
		    //to: req.body.to, // list of receivers
		    to: "joetfx@hotmail.com",
		    subject: "Message from: "+ req.body.name + " with email: "+ req.body.email + " by: " + Date.now(), // Subject line
		    text: req.body.message, // plain text body
		    //html: '<b>NodeJS Email Tutorial</b>' // html body
		};

	  	transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
	      		res.status(400).send("Unknown error ? | " + JSON.stringify(error));
	      		res.end();
	    	}
			console.log(info);
		  	res.status(200).json({"Status": "Sent"});
		  	res.end();
	      	//res.render('index');
	    });
	}
	
});

exports.app = functions.https.onRequest(app);
