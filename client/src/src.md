# scr Folder

    Welcome to the scr folder. This document is going to describe all the folders/files in the scr directory. This is one of many different architectures you can use when building any application.

    The scr folder is where you will write all (most?) your react code.

## components Folder

    The component folder is where you put all your "Stateless" components.  These should be components that just take props.  This would be a buttons, navbar, cards, etc. that just render to the screen.

## Pages Folder

    The Pages folder hold the Container components. These are the stateful components, and the ones that make the API calls. If you’re using Redux, these are the ones that are connected to the store.

## utils Folder

    The utils folder hold all the API calls made from the pages folder.

## index.js file

    The index.js file is first place you are going to see your jsx. It takes in the APP.js file which has the outline of your react pages and renders them when the
    `javascript <div id="root"></div>`
    resides in your index.html file.

## App.js file

    The app.js file is the first react component. This is the main component where you can put your clients side routing and set up you navigation bar.  This has a react ROUTER, NAV, and SWITCH components.

## registerServiceWorker.js File

    This file where we register a service worker to serve assets from local cache for PWA.
