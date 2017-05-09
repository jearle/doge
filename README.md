# Exercise

React boilerplate required npm `>= v3`.

Tested with:

+ `node v6.2.1 ` and `npm v3.9.3`
+ `node v7.10.0` and `npm v4.2.0`

## Running

```bash
npm install
npm start
```

Runs on: `http://localhost:53673`

## Responsive Design

It's semi responsive but looks best on narrower screens.  I did not setup a resize listener to dynamically resize the application, so you will need to refresh to get a proper responsive resize.

## Features

+ Built on Firebase and React Boilerplate.
+ Supports a single universal user (but designed to handle more then one if the time were to come).
+ Semi responsive design.
+ The ability to add and remove meditation sessions.
+ The ability to scroll through the various weeks.

## Missing features

+ Full responsive design
+ Loading and error states.  They are triggered and do exist on the store, but they are not represented in the UI.
