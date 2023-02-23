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

NOTE : To call the API, refer API guide.
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

####    Step 1 :- 
 Download the zip file or clone the repo
####    Step 2 :- 
In terminal type :
```
npm install
```

#### Step 3 :-
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