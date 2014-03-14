/*!
  nsls v0.0.0 -- Micro namespaced localStorage
  http://rudylattae.github.io/tote
  (c) 2014 Rudy Lattae <rudylattae@gmail.com>, MIT License
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.nsls = factory();
  }
}(this, function(require, exports, module) {

'use strict';

function makeKey( prefix, key ) {
  return prefix + '-' + key;
}

function nsls( namespace, options ) {
  if ( !namespace || namespace === '' ) {
    throw new Error('You must provide a non-empty namespace');
  }

  options = options || {};

  var store = options.storageAdapter || window.localStorage;
  var wrapper = {
    setItem: function setItem( key, value ) {
      store.setItem( makeKey(namespace, key), value );
    },

    getItem: function getItem( key ) {
      return store.getItem( makeKey(namespace, key) );
    },

    removeItem: function removeItem( key ) {
      store.removeItem( makeKey(namespace, key) );
    }
  };

  // convinient aliases
  wrapper.set = wrapper.setItem;
  wrapper.get = wrapper.getItem;
  wrapper.remove = wrapper.removeItem;
  
  return wrapper;
}
return nsls;

}));
