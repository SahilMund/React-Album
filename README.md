<h1>React - Album</h1>

<p>Implemented an album web application with react, react-hooks and context API to perform CRUD operation with json placeholder API.</p>

<h2>General Information</h2>
<hr>

```
API Used :- https://jsonplaceholder.typicode.com/albums

API Guide :- https://jsonplaceholder.typicode.com/guide/

```

### Features :-
```
1. Add an album by making a POST call to the API and save the album in react state. (This will be a dummy request).
2. Fetch and show all the albums from the API
3. Update the album by making a PUT call to the API.(Again this is a dummy call).
4. Delete an album by making a DELETE call to the above url. (Again this is a dummy call).

NOTE : To use the API, refer API guide.
```



</ol><h2>Technologies Used</h2>
<hr><ul>
<li>CSS</li>
</ul><ul>
<li>React</li>
</ul><ul>
<li>Context API</li>
</ul><ul>
<li>React Hooks</li>
</ul>

<hr>

## How To Use :-

####    Step 1 :-  Clone the repo
 
 ```
git clone https://github.com/SahilMund/React-Album.git
 ```
####    Step 2 :- To install the dependencies

```
npm install
```

#### Step 3 :- To run the application
```
npm start
```


## Folder Structure:-
```
.gitignore
README.md
package-lock.json
package.json
public
   |-- favicon.ico
   |-- index.html
   |-- logo192.png
   |-- logo512.png
   |-- manifest.json
   |-- robots.txt
src
   |-- App.css
   |-- App.js
   |-- api
   |   |-- index.js
   |-- components
   |   |-- Album.js
   |   |-- AlbumList.js
   |   |-- CreateAlbumItem.js
   |   |-- Loader.js
   |   |-- index.js
   |-- hooks
   |   |-- PostHook.js
   |-- index.js
   |-- providers
   |   |-- PostProvider.js
   |-- utils
   |   |-- constant.js
```


## <u> Steps to deploy your react project on Github </u> :-

###  Step 1 :- Create a repo in github and add your project to that repo :-

 ```
 git init
 git add .
 git commit -m "first commit"
 git branch -M master
 git remote add origin <your-app-origin>
 git push -u origin master
 ```

###  Step 2 :-  Add homepage script to package.json

```
"homepage": "https://<myusername>.github.io/<my-github-repo-name>",
```
### Step 3 :- Install gh-pages
```
nmp :-
    npm install --save gh-pages
(or)
yarn :-
    yarn add gh-pages
```

### step 4 :-    Add the following scripts in your package.json:
```
"scripts": {
   "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    }
```

### step 5 :-  Deploy the site , By running npm run deploy , it will automatically create a new gh-pages branch
```
npm run deploy
```


### Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:

<p> (It may sometimes sets by default so no need to do it every time) </p>

<img alt="" src="https://i.imgur.com/HUjEr9l.png" width="50%" height="50%">

