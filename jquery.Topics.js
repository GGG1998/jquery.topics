/*
 * Lightweight pub/sub mechanism based on jQuery.Callback
 */

var _topics = {};

jQuery.Topic = function( /*String|Integer*/ id, /*String*/ flags ) {
	// instantiated on every call
	
	var self = id && _topics[ id ];
	
	if ( !self ) {
		var _callbacks = jQuery.Callbacks( flags ),
		
		// _callbacks getter
		callbacks = function() {
			return _callbacks;
		};
		
		self = {
			// functions
			publish: _callbacks.fire,
			publishBack: _callbacks.fireBack || _callbacks.fire,
			subscribe: _callbacks.add,
			unsubscribe: _callbacks.remove,
			// getter
			callbacks: _callbacks
		};
		
		if ( id ) {
			_topics[ id ] = self;
		}
	}
	
	return self;
};