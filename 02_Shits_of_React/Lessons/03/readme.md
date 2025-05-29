-> creating the configuration
npm init -> package.json (approx configuration of our application)

-> installing thr dev dependencies of Parcel (bundler)
npm install -D parcel
-> package-lock.json (exact configuration of all dependencies that our application needed)
-> node_modules (storage of the dependencies)

-> executing parcel package
npx parcel index.html
-> .parcel-cache
-> dist (stores the file, parcel built the development build)
-> host the development build on localhost server (HMR - Hot Module Reloading)
->http://localhost:1234

-> install react and react-dom to our project/application
npm i react
npm i react-dom

-> import react and react-dom module to our js file, to build react app
import React from "react";
import ReactDOM from "react-dom/client";
-> for this, <script type="module">

-> to build production build of parcel bunndler
npx parcel build index.html

-> adding scripts in package.json
start:
build:
npm run start or npm start - for dev build
npm run build - for production build

---

JSX
React components

- Class
