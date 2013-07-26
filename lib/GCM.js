

	var   Class 	= require( "ee-class" )
		, Events 	= require( "ee-event" )
		, log 		= require( "ee-log" );


	var request 	= require( "request" );


	module.exports = new Class( {
		inherits: Events

		, serverKey: null


		, queue: []


		, init: function( options ){
			if ( options.serverKey ) this.serverKey = options.serverKey;
		}


		, send: function( data, callback ){

		}
	} );