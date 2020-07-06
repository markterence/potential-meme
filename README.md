# nani

### What is this 🤷‍♀️

I just want to try out how to do a domain based tenant identification and also want to try how Parcel will perform on VueJS instead of using Webpack (IMHO, Parcel is good and seems faster, but we'll see once the frontend got a lot of files and integrations). Also I also want to know how can I configure NGINX to accept wildcard subdomain and make it work with the app.

A docker-compose file with nginx service is also provided as an example on how nginx can be configured to accept wildcard subdomain.

There is no clear goal on what kind of project this thing is 🤷.

### Requirements

- Node 10.16.x
- Docker(optional)
- Nginx(optional)

### Language and Tech stack

- [Parcel](https://parceljs.org/getting_started.html)
- [Vue](https://vuejs.org/)
- [Express](https://expressjs.com/en/starter/installing.html)
- [LowDB](https://github.com/typicode/lowdb)

### Setting up development environment 

- Install the frontend dependencies using Yarn

```
cd frontend
yarn install
```

- Install the server dependencies using Yarn

```
cd server
yarn install
```

- On the `frontend` directory

```
yarn start
```

- On the `server` directory in another terminal tab

```
yarn start
```

- Frontend app should now be running on http://localhost:1234/
- Server app should be running on `http://localhost:3000`

To test with domains, assuming that modifications on _hosts_ file are done correctly:

```
team1.app.localhost:1234
team2.app.localhost:1234
```


### Configuring local domain for testing.

Edit your system's _hosts_ file (`/etc/hosts`) and add domains there.

```
127.0.0.1 team1.app.localhost
127.0.0.1 team2.app.localhost
```