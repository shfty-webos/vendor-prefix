Vendor Prefix
=========

A simple plugin for easy access to the host browser's CSS vendor prefix.

Here's a function that moves inSender to the right 5px each time it gets called. 

```javascript
  shiftRight: function(inSender) {
    inSender.applyStyle('transform', 'translate(5px,0)');
    inSender.applyStyle('webkit-transform', 'translate(5px,0)');
    inSender.applyStyle('moz-transform', 'translate(5px,0)');
    inSender.applyStyle('o-transform', 'translate(5px,0)');
    inSender.applyStyle('ms-transform', 'translate(5px,0)');
  }
```

Nasty. As you can see, a separate call is required for each browser's vendor prefix.

Here's the same function, only simplified using Vendor Prefix:

```javascript
  shiftRight: function(inSender) {
    inSender.applyStyle(enyo.vendor + 'transform', 'translate(5px,0)');
  }
```

Much nicer. Enjoy easier cross-platform CSS manipulation!
