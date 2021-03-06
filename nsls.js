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