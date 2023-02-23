import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {PostsProvider}  from './providers/PostProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Using context api for global store,hence wrapping provider to the app component */}
    <PostsProvider><App/></PostsProvider>
  </React.StrictMode>
);

