![alt text](https://image.ibb.co/cFayKG/is_1.jpg)


It actually help to check js different data type. With 'typeof' operator,we can not check the real type.

### Example :

```
let obj = {},

    arr = [];
    
console.log(typeof obj); // "object"
console.log(typeof arr); // "object"

```  

So I don't think it fill up our need.

### Installing
Clone or download the .js file from here.
Just attach the "is.js" file into your script.

```

<script scr="./is.js"></script>


```

### Usage

It is so simple to use.

just type 'is.it([])'. It return the exact type.

```
is.it([1,2,3,4]) // "Array"
is.it({}) // "Object"
is.it(function(){}) // "Function"
is.it(/\d+/g) //"Regex"
is.it(1) //"Number"
is.it(null) //"Null"
is.it(new Date()) //"Date"

```

If you want to logically check the type, then

```
is.itArray([]); // true
is.itObject({}); //true
is.itNumber(1); //true
is.itRegExp(/\d+/g); //true
is.itUndefined(); //true
is.itDate(new Date()) //true

```
