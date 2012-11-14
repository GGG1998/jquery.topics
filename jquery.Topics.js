/*!
 * jQuery Topics Plugin v0.1
 * https://github.com/riga/jquery.Topics
 *
 * Copyright 2012, Marcel Rieger
 * Dual licensed under the MIT or GPL Version 3 licenses.
 * http://www.opensource.org/licenses/mit-license
 * http://www.opensource.org/licenses/GPL-3.0
 *
 * Based upon a pub/sub example by The jQuery Foundation:
 * http://api.jquery.com/jQuery.Callbacks/
 */

var _topics = {};

jQuery.Topic = function( /*String|Integer*/ id, /*String*/ flags ) {
	
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