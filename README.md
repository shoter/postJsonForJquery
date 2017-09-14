# jQuery.postJSON()
**Description**: Load JSON-encoded data from the server using a GET HTTP request.

### jQuery.postJSON( url [, data ] [, success ] )

**url**  
Type: String  
A string containing the URL to which the request is sent.

**data**  
Type: PlainObject or String  
A plain object or string that is sent to the server with the request.

**success**  
Type: Function( PlainObject data, String textStatus, jqXHR jqXHR )  
A callback function that is executed if the request succeeds.

This is a shorthand Ajax function, which is equivalent to:
```javascript
$.ajax({
  dataType: "json",
  url: url,
  data: data,
  success: success
});
```

It is very similar to $.getJSON with only diffrence that it is sending POST request. You can check documenation for $.getJSON [[here]](http://api.jquery.com/jquery.getjson/).