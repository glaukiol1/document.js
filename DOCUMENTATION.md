Parameters with a `*` are required, ones with a `?`, are optional.
<details>
  <summary><b>newElement()</b></summary>

### newElement( parentId*, elementType*, innerHTMLElement*, elementID?, elementClass?)

The __newElement__ function creates a new element and renders it to the DOM. It is usually used when you want to create a element that doesnt have its own function in _document.js_, for example a `<a>` element.

#### Paramerters

*required* __parentId__: This argument is a _string_. It is the id of the _container_ in which you want to put this new element in. For example;
```html
...
<div id="main_container">
  
</div>
...
```
If you want to put the new element in the `main_container` div, the _parentId_  argument should be `main_container`.

*required*  __elementType__: This argument is a _string_. It is the type of element you want to create, this is the _tag name_. For example, if you want to make a new `<a>` element, this argument would be `a`, the same is for any tag name.

*required* __innerHTMLElement__: This argument is a _string_. It is the _innerHTML_ of your element, the HTML that is inside it. For example, we can create a `<a>` element, but we want the text of it to be "@glaukiol1", so this argument would be `@glaukiol1`, the HTML generated until now would be; `<a>@glaukiol1</a>`.

*optional* __elementID__: This argument is a _string_. It is the _id_ of your element. If you dont want to define a id now, you can later using `addId()`.

*optional* __elementClass__: This argument is a _string_. It is the _class_ of your element. If you want to add more classes in the future, use `addClasses()`

</details>

<details>
  <summary><b> < h1 | h2 | h3 | h4 | p> ()</b></summary>
    
  ### <h1|h2|h3|h4|p>(parentId*, innerHTMLElement*, elementID?, elementClass?)
  
  These are 5 functions, they are exactly the same execpt what they render, if you are confused, these are the functions;
  ```js
    h1(),
    h2(),
    h3(),
    h4(),
    p(),
  ```
  They each render their respective element h1-h4 & p. But other than that, they have the same arguments
  
  ---
  
  #### Parameters
  
  *required* __parentId__: This argument is a _string_. It is the id of the _container_ in which you want to put this new element in. For example;
```html
...
<div id="main_container">
  
</div>
...
```
If you want to put the new element in the `main_container` div, the _parentId_  argument should be `main_container`.

*required* __innerHTMLElement__: This argument is a _string_. It is the _innerHTML_ of your element, the HTML that is inside it. For example, we can create a `<a>` element, but we want the text of it to be "@glaukiol1", so this argument would be `@glaukiol1`, the HTML generated until now would be; `<a>@glaukiol1</a>`.

*optional* __elementID__: This argument is a _string_. It is the _id_ of your element. If you dont want to define a id now, you can later using `addId()`.

*optional* __elementClass__: This argument is a _string_. It is the _class_ of your element. If you want to add more classes in the future, use `addClasses()`
  
</details>


