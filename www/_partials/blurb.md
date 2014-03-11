```javascript
var ls = nsls('example-1');

ls.setItem('what', 'A quick example');
ls.getItem('what')
// "A quick example"

ls.setItem('number', 500);
ls.getItem('number');
//  "500"

ls.removeItem('number');
ls.getItem('number');
// null
```