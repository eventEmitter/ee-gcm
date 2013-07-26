# ee-GCM

google cloud messaging


	var GCM = require( "ee-gcm" );


	var myGCM = new GCM( {
		serverKey: ""
		, on: {
			  error: 					function( regId, err ){}   	// generic error handler ( handles all errors listed below ), errors will also always be passed to the callback of the send method
			, missingRegistration: 		function( regId ){} 		// there was no registrationID submitted within the request
			, invalidRegistration:  	function( regId ){}			// the registrationid has a wrong format
			, mismatchSenderId:  		function( regId ){}			// registration id belongs not to the current sender
			, notRegistered:  			function( regId ){}			// the registration id was removed
			, messageTooBig:  			function( regId ){}			// too many bytes ...
			, invalidDataKey:  			function( regId ){}			// you may not use any keys in the data object, theere are some reserved ones
			, invalidTtl:  				function( regId ){}			// the ttl may between 0 and 2,419,200
			, authenticationError: 		function( regId ){}			// wrong authorization key
			, timaout:  				function( regId ){}			// the message could not be delivered ( you may try in exponential time again ( or whats defined in the retry-after header ) )
			, internalServerError:  	function( regId ){}			// gcm fail
			, invalidPackageName:  		function( regId ){}			// restricted_package_name does not match the registration id
		}
	} );




	myGCM.send( {
		registration_ids: []
		, data: {
			subject: "hi"
		}
	}, function( regId, err ){

	} );

