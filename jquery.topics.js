/*!
 * jQuery Topics Plugin v0.2
 * https://github.com/riga/jquery.topics
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
		var _callbacks = jQuery.Callbacks( flags );
		
		self = {
			publish: _callbacks.fire,
			publishBack: _callbacks.fireBack || _callbacks.fire,
			subscribe: _callbacks.add,
			unsubscribe: _callbacks.remove,
			used: _callbacks.fired,
			empty: _callbacks.empty
		};
		
		if ( id ) {
			_topics[ id ] = self;
		}
	}
	
	return self;
};