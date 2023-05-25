# PWA-Text-Editor

## Description

[Visit the Deployed Site]()
<br>
In this assignment, my task was to build a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline.
To build this text editor, I started with an existing application and implemented methods for getting and storing data to an IndexedDB database. I used a package called idb, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data, and is used by companies like Google and Mozilla.

Lastly, I have deployed this full-stack application to Heroku.

<br>
<br>


## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:|    
| Git | [https://git-scm.com/](https://git-scm.com/)     |  
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |  
| NodeJs | [https://nodejs.org/en](https://nodejs.org/en) |
| ExpressJS | [https://www.npmjs.com/package/express](https://www.npmjs.com/package/express) |
| IndexedDB | [https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) |
| Webpack | [https://webpack.js.org/](https://webpack.js.org/) |
|  Babel | [https://babeljs.io/](https://babeljs.io/) |





<br>
<br>


## Table of Contents

* [Installation](#installation)
* [Application Highlights and Usage](#application-highlights-and-usage)
* [Code Snippets](#code-snippets)
* [Learning Points](#learning-points)
* [Author Info](#author-info)
* [Credits](#credits)

<br>
<br>


## Installation

The 'PWA Text Editor' requires installation of nodejs and express-js and idb (IndexedDB) NPM package.
 After cloning down the repository, go to the command-line in the terminal and do an 'npm install' to install all the dependencies stated in the 'package.json' file and run 'npm run build' and  'npm run start' to start the server.
<br>
<br>
<br>

## Application Highlights and Usage

<br>
<br>
1. The following image shows the application's manifest file in the browser:
<br>
<br>

![alt text](./client/src/images/manifest-file.jpg)


<br>
<br>
2. The following image shows the application's registered service worker iin the browser:
<br>
<br>

![alt text](./client/src/images/service-worker-img.jpg)


<br>
<br>


## Code Snippets

<br>

 The following code snippet shows the configuration of workbox plugins for service worker and manifest file: 

```javascript
//Added and configured workbox plugins for a service worker and manifest file

    plugins: [
      new InjectManifest({
          swSrc: './src-sw.js',
          swDest: 'src-sw.js', 
      }),  
      new HtmlWebpackPlugin({
          template: './index.html',
      }),
      new WebpackPwaManifest({
          // PWA Manifest configuration...
          inject: true,
          fingerprints: false,
          start_url: '/',
          publicPath: '/',
          name: 'Progressive Web App Text Editor',
          short_name: 'PWAEditor',
          description: 'My awesome Progressive Web App!',
          background_color: '#ffffff',
          crossorigin: 'use-credentials', 
          icons: [
              {
                  src: path.resolve('src/images/logo.png'),
                  sizes: [96, 128, 192, 256, 384, 512], 
                  destination: path.join('assets', 'icons')
              }
          ]
      }),
  ],
```

<br>
<br>

The following code snippet shows the implementation of asset caching:

```javascript
// Implemented asset caching

const assetCache = new StaleWhileRevalidate({
  cacheName: 'asset-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
      maxEntries: 50,
    }),
  ],
});

registerRoute(({ request }) => request.destination !== 'document', assetCache);
```



## Learning Points 

   I learned the following skills while doing this project:
<br>
- Java script basics (variables,functions, arrays, for-loops, if-else etc)
- Basics of NodeJs server and related functions
- How to write API routes with MongoDb as the database instead of using MySQL queries
- Using the IndexDB API package from NPM 
- How to create a manifest file, a service worker file and 
- How to store cache for different file types in the web browser using webpack bundles.


<br>
<br>

## Author Info

### Aarti Contractor


- Portfolio: https://aarticontractor.github.io/aarticontractor_portfolio/
- Linkedin: https://www.linkedin.com/in/aarti-contractor/
- Github: https://github.com/aarticontractor

<br>

## Credits

- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://cloudconvert.com/webm-to-gif
- https://nodejs.org/en
- https://www.npmjs.com/package/express
- https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
- https://babeljs.io/
- https://webpack.js.org/





<br>

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.