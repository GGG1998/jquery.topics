# About
Yay!

# Usage
## Example
Todo

## Code
>
```javascript
$.Topic( id, flags )
```
>> Returns an either new or existent `Topic` object depending on `id`.
- `id (String|Integer)`: The name of the target topic. If omitted, a one-way
topic is created (which is not very useful).
- `flags (String)`: The flags for the internally used `$.Callbacks()` object
passed in a string of space-separated values. They are only used when a topic is
newly created. For more details on the flags and `$.Callbacks()`, see
http://api.jquery.com/jQuery.Callbacks/.

### The `Topic` object
> The following wrapper functions around the internal `$.Callbacks` object are
provided by a `Topic`:  
- `subscribe >> $.Callbacks().add`
- `unsubscribe >> $.Callbacks().remove`
- `publish >> $.Callbacks().fire`
- `used >> $.Callbacks().fired`
- `empty >> $.Callbacks().empty`

> For details on this methods, see http://api.jquery.com/category/callbacks-object/.