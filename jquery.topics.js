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

jQuery.Topic = function(id, flags) {

    var self = id && _topics[id];

    if(!self) {
        var _callbacks = jQuery.Callbacks(flags);

        self = {
            publish: function() {
                _callbacks.fire.apply(_callbacks, arguments);
                return self;
            },
            publishBack: function() {
                if(_callbacks.fireBack) {
                    return _callbacks.fireBack.apply(_callbacks, arguments);
                }
                _callbacks.fire.apply(_callbacks, arguments);
                return self;
            },
            subscribe: function() {
                _callbacks.add.apply(_callbacks, arguments);
                return self;
            },
            unsubscribe: function() {
                _callbacks.remove.apply(_callbacks, arguments);
                return self;
            },
            used: function() {
                _callbacks.fired.apply(_callbacks, arguments);
                return self;
            },
            empty: function() {
                _callbacks.empty.apply(_callbacks, arguments);
                return self;
            }
        };

        if(id) {
            _topics[id] = self;
        }
    }

    return self;
};