# nsls

> Micro namespaced localStorage

**IMPORTANT** this is actively under development and the API will be evolving
rapidly so you should not use it in production. If you like what you
see so far, star it on GitHub so I know you want to use it.

For more detailed examples, and the ability to try it out in your browser console, 
go to the project website at **http://rudylattae.github.io/nsls/**


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


## Quickstart

### Setup

Install with npm:

```console
npm install --save nsls
```

Or install with bower:

```console
bower install nsls
```

### Usage

> What -you- localStorege stores is what you get

```javascript
var ls = nsls('basics');

// store some text
ls.set('description', 'Basic usage example');
ls.get('description')
// "A quick example"

// store a number
ls.set('number', 500);
ls.get('number');
//  "500"  <- localStorage only deals with strings

// remove an item
ls.remove('number');
ls.get('number');
// null
```

For more advanced concepts like how you can store and retrieve data types other
than strings, please **visit the [website](http://rudylattae.github.io/nsls/)**.

