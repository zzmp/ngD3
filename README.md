ngD3
---

A d3 wrapper, the angular way. Delegates d3 to model ngD3, with factory $d3, to keep it out of the global scope.


## Use

* Install

```
bower ngD3
```

* Add a script tag after angular's:

```
<script src="bower_components/ngD3/ngD3.min.js></script>
```

* Add a dependency to your module:

```
angular.module('thing', [`ngD3`]);
```

* Inject a dependency to $d3 into your functions:

```
angular.module('thing')
  .controller('ngD3', ['$d3, function($d3){
    $d3.???  
  }]);
  .directive('d3Directive', ['$d3', function($d3) {
    return {
      template: '<aside>Contribute to ngD3!</aside>,
    };
  }]);
```

*$d3 now aliases d3!*

Load the directives tag as well for custom directives (*coming soon*):

```
<script src="bower_components/ngD3/ngD3-directives.min.js"></script>
```

---

### Contributions

No code was added (yet) except for the wrapper.

If you have a clean directive:

1. Reimplement it in ngD3-directives.js

2. Write a passing unit test (*test/tests.js*)

3. Show it off in index.html

4. Send a pull request!

Happy hacking! Keep it clean and DRY!

---

For the latest version of d3, use https://github.com/mbostock/d3

github: @zzmp
