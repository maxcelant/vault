
```js
const callback = () => {
	console.log('called callback fn')
}

const fn = (callback) => {
	console.log('called fn');
	callback();
}

fn(callback);
```

```bash
❯ node callback.js
  called fn
  called callback fn
```

- You can also make your callbacks anonymous functions

```js
const fn = (callback) => {
	console.log('called fn');
	callback();
}

fn(() => {
	console.log('called callback fn')
});
```