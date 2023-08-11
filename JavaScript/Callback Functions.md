Used to ensure that certain code doesn't execute until other has already finished execution.

### Importance
- Flexibility: since our callback function can be anything interacting with the request, we can easily change that callback function to do what we want.
- Asynchronous Behavior: 
- Separation of Concerns: we don't want our function making the API call to also be the one doing something with that data, that violates the separation of concerns principle.


### Example 1

```javascript
function displayProducts(product) {
	console.log(`Name: ${product.name}`);
	console.log(`Price: ${product.price}`);
	console.log(`Description: ${product.description}`);
}

function fetchProduct(id, callback) {
  setTimeout(() => {
    const products = {
      1: { name: 'Shampoo', price: '10$', description: 'A nice shampoo' },
      2: { name: 'Conditioner', price: '12$', description: 'A nice conditioner' },
      // ...more products...
    };

    callback(products[id]);
  }, 1000);
}

fetchProduct(1, displayProducts);
```

```
Name: Shampoo
Price: 10$
Description: A nice shampoo
```

### Example 2

1. The alarm clock should have a function `setAlarm` which takes two parameters: `timeInMilliseconds` (how long to wait before the alarm goes off) and a `callback` function that gets executed when the alarm goes off.
2. The `callback` function should log to the console "Alarm is ringing!" when it gets called.
3. After setting the alarm, the `setAlarm` function should log to the console "Alarm has been set for X milliseconds!", where X is the provided `timeInMilliseconds`.

```javascript
function setAlarm(timeInMilliseconds, callback) {
	console.log(`Alarm has been set for ${timeInMilliseconds} milliseconds!`)
	setTimeout(() => {
		callback()
	}, timeInMilliseconds)
}

setAlarm(1000, () => {
	console.log('Alarm is ringing!')
})
```

### Example 3

```javascript
function fetchGitHubUser(username, callback) {
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(user => {
      callback(user);
    })
    .catch(error => {
      console.log('An error occurred while fetching the user: ', error);
    });
}

fetchGitHubUser('octocat', user => {
  console.log(`${user.name} has ${user.public_repos} public repositories on GitHub.`);
});
```