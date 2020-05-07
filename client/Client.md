# Client Folder

    Welcome to the Client folder. This document is going to describe all the folders/files in the Client directory. This is one of many different architectures you can use when building any application.

    The Client folder manages client side processing. TODO: It is my understanding that client side code is accessible to the browser; therefore, we do not want 'proprietary' code here.

## node_modules Folder

    This is your third party library folder. All installs will go here as well as their dependencies for server side processing.

## public Folder

    The public folder is where you store your assets (icons, jpg, etc.) and your index HTML. The index.html file is the start of your react application!

## scr Folder

    This scr folder is a folder where the majority of the react jsx code resides. This folder tracks your components, pages, utilities, etc. This is the code that makes your front end run.

## package-lock.json File

    package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates. (https://docs.npmjs.com/configuring-npm/package-lock-json.html)

## package.json File

    package.json file holds various metadata relevant to the project. This file is used to give information to npm that allows it to identify the project as well as handle the project's dependencies. (https://docs.npmjs.com/files/package.json)
