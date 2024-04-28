You can use it to give new fields to an existing object. Unlike the spread operator which allows you to create a new object.

```js
const user = {
	name:'foo',
	password:'bar'
}

Object.assign(user, {email: 'baz'});
```