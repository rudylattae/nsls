describe('nsls', function() {
  'use strict';
  
  function getItemFromLocalStorage( key ) {
    return localStorage.getItem( key );
  }


  describe('when creating', function() {
    var ls;

    afterEach(function() {
      localStorage.clear();
    });


    it('initializes with a namespace', function() {
      ls = nsls('initialize');

      expect( ls ).not.toBeNull();
    });

    it('throws exception, given a null namespace', function() {
      function createWithNullNamespace() {
        ls = nsls( null );
      }

      expect( createWithNullNamespace ).toThrow();
    });

    it('throws exception, given an empty string namespace', function() {
      function createWithEmptyStringNamespace() {
        ls = nsls('');
      }

      expect( createWithEmptyStringNamespace ).toThrow();
    });
  });


  describe('api', function() {
    var ls;

    beforeEach(function() {
      ls = nsls('more-examples');
    });

    afterEach(function() {
      localStorage.clear();
    });


    it('#set, writes values with namespaced key', function() {
      var key = 'foo',
        value = 'FOO!!!';

      ls.set( key, value );

      expect( getItemFromLocalStorage('more-examples-foo') ).toEqual( value );
    });

    it('#get, retrieves values with namespaced key', function() {
      var key = 'bar',
        value = '!!!BAR';

      ls.set( key, value );

      expect( ls.get(key) ).toEqual( value );
    });

    it('#remove, deletes value associated with namespaced key', function() {
      var key1 = 'getridofthis',
        key2 = 'leavealone',
        value = 'Will be gone soon';
      ls.set( key1, value );
      ls.set( key2, value );

      ls.remove(key1);
      
      expect( ls.get(key1) ).toBeNull();
      expect( ls.get(key2) ).toEqual( value );
    });
  });


  describe('handling different datatypes', function() {
    var ls;

    beforeEach(function() {
      ls = nsls('datatypes');
    });

    afterEach(function() {
      localStorage.clear();
    });


    it('persists and retrieves a simple string', function() {
      var key = 'string-simple',
        value = 'Simple String';

      ls.set( key, value );

      expect( ls.get(key) ).toEqual( value );
    });

    it('persists and retrieves a positive number', function() {
      var key = 'number-positive',
        value = 23434;

      ls.set( key, value );

      expect( ls.get(key) ).toEqual( value.toString() );
    });

    it('persists and retrieves a negative number', function() {
      var key = 'number-negative',
        value = -4747;

      ls.set( key, value );

      expect( ls.get(key) ).toEqual( value.toString() );
    });

  });

  
  describe('multiple instances with the same namespace', function() {
    var ls1,
      ls2;

    beforeEach(function() {
      ls1 = nsls('frozenNorth');
      ls2 = nsls('frozenNorth');
    });

    afterEach(function() {
      localStorage.clear();
    });


    it('#set, values persisted in one will be available in the other', function() {
      var key1 = 'one',
        key2 = 'two',
        value1 = 'First value',
        value2 = 'Second value';

      ls1.set( key1, value1 );
      ls1.set( key2, value2 );
      
      expect( ls2.get(key1) ).toEqual( value1 );
      expect( ls2.get(key2) ).toEqual( value2 );
    });

    it('#remove, values removed in one will be removed in the other', function() {
      var key1 = 'one',
        key2 = 'two',
        value1 = 'First value',
        value2 = 'Second value';
      ls1.set( key1, value1 );
      ls1.set( key2, value2 );
      

      ls1.remove(key2);

      expect( ls2.get(key1) ).toEqual( value1 );
      expect( ls2.get(key2) ).toBeNull();
    });
  });
});