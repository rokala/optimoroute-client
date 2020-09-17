<p align="center" style="width:40%;margin:0 auto;">
<img src="https://i.imgur.com/zVVFFIF.png" alt="OptimoRoute logo">
</p>

<h3 align="center">A lightweight TypeScript WS API client</h3>

## Features

- Built-in TypeScript support: including intellisense and type safety.
- Very lightweight as API clients should be.
- Works both with Node.js and in the browser.
- Only depends on [`isomorphic-unfetch`](https://www.npmjs.com/package/isomorphic-unfetch) to support older browsers compatability.

## Getting started

### Installation

Download from NPM

```bash
npm install optimoroute-client
```

or build it yourself

```bash
git clone https://github.com/rokala/optimoroute-client.git
cd ./optimoroute-client
npm install
npm run build
```

### Credentials

You need a authentication key provided by [OptimoRoute](http://optimoroute.com/)

### Usage

```js
// Import the module
import OptimoRoute from 'optimoroute-client';

// Initialize the client, never expose your key to the public
const api = new OptimoRoute({
  authKey: '<YourPrivateOptimoRouteApiKey>'
});

// Some example requests
api.getOrders('FOO1337')
  .then((response) => {
      // do stuff...
  });

api.getSchedulingInfo('FOO1337')
  .then((response) => {
    // do stuff...
  });

api.getRoutes({ date: '2020-10-01' })
  .then((response) => {
    // do stuff...
  });

api.updateDriverParameters({ externalId: 'Driver313', date: '2020-10-01', enabled: false })
  .then((response) => {
    // do stuff...
  });
```
