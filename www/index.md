<a name="get-started"></a>
## Get started

<p class="note note-info">
This site includes a copy of the latest version of nsls. If you wish, you may
try out any of the examples on the site in your browser console.
</p>

To get started, first download/install the library then include it in your markup/code.


### Install

<small class="muted">If you just want a regular download, refer to the download
buttons provided earlier.</small>

**Bower**

```bash
bower install nsls
```

**npm**

```bash
npm install nsls --save
```


### Import

**AMD loader environment**

```javascript
// myModule.js
define(['nsls'], function( nsls ){
  // do something interesting...
});
```

**node.js or using a Common JS loader**

```javascript
var nsls = require('nsls')
```

If you want to use `nsls` as a regular browser global, just include it in your markup:

```markup
<script src="lib/nsls.js" type="text/javascript"></script>
```


### Basic usage

This example illustrates the full API; `set`, `get` and `remove` which are
aliases for the native localStorage methods `setItem`, `getItem` and
`removeItem`.

```javascript
var ls = nsls('basics');

// store some text
ls.set('description', 'Basic usage example');
console.log( ls.get('description') );
// "A quick example"

// store a number
ls.set('number', 500);
console.log( ls.get('number') );
//  "500"  <- localStorage only deals with strings

// remove an item
ls.remove('number');
console.log( ls.get('number') );
// null
```


### Advanced usage

The one value that this library adds to your workflow is it transparently prefixes
the keys you use to access locaStorage data. This reduces the chances of key
collisions with other libraries or other aspects of your code.

So while using this library, you are limited to working with only strings values.

If you want to store and retrieve anything other than strings, you need to provide
the mechanism to handle serialization / deserialization.

`JSON.stringify` and `JSON.parse` are usually a simple solution.

```javascript
var ls = nsls('another-space'),
  serialize = JSON.stringify,
  deserialize = JSON.parse,
  value;

// string as before
ls.set('str', serialize('A regular string');
value = deserialize( ls.get('str') );
console.log( value );
// "A regular string"

// and now a number
ls.set('num', serialize( 500 ));
value = deserialize( ls.get('num') );
console.log( value );
// 500

// then booleans
ls.set('yes', serialize( true ));
value = deserialize( ls.get('yes') );
console.log( value );
// true

ls.set('no', serialize( false ));
value = deserialize( ls.get('no') );
console.log( value );
// false

// and of course whole JavaScript objects
var data = {
  str: 'A string',
  num: 98765,
  bool: true,
  list: [1, 2, 3, 4, 5]
};

ls.set('data', serialize( data ));
value = deserialize( ls.get('data') );
console.log( value );
/*
{
  str: 'A string',
  num: 98765,
  bool: true,
  list: [1, 2, 3, 4, 5]
}
*/
```

<a name="api"></a>
## API

#### setItem(key, value)

Aliases: set

Store `value` identified by `key`

#### getItem(key)

Aliases: get

Retrieve `value` stored with `key`

#### removeItem(key)

Aliases: remove(key)

Delete the `value` stored with `key`

