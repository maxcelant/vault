
![[Pasted image 20240119124205.png]]
#### Architecture
**Frontend**
- **React Native** for code so its compatible to iOS and Android
	- Need to know how to take user input
	- Need to know how navigation works
	- Need to know how to make http requests
	- Need to know how to cache data
	- Need to know how to integrate
	- Need to know how to take pictures and scan them
	- Need to know how modals work
	- Need to know how context works
	- Need to know how push notifications work!
- **Jest** for testing purposes.
- **Plaid** for API for transactions.

**Database**
- **PostgreSQL** for storing data
- **Redis** for caching frequently accessed data or handling session data to improve performance.
- **TimescaleDB** for time-series data (like tracking food purchase and expiry dates), these databases specialize in storing, retrieving, and processing time-series data efficiently.

**Backend**
- **Rust** for logic
- **mockall** for testing
- **Actix-Web** or **Rocket** for high-performance requests
- **Diesel** for interacting with PostgreSQL
- **Tokio** for async functionality. Use **tokio-test** for testing.
- **Serde** for serialization/deserialization
- **Reqwest** for easy to use client for making http requests
- **Jsonwebtoken** for authentication

**CI**
- Maybe use **Github Actions** to run CI events on pull requests

**Best Practices**
- Do TDD
- Documentation
- Use mono-repo

```bash
/foodwise
    /frontend
    /backend
    /docs
    /tests
    /scripts
    /config
    README.md
```

