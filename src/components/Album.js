import React from "react";
import { AlbumList, CreateAlbumItem } from "../components";

import { usePosts } from "../hooks/PostHook";
import Loader from './Loader';

const Album = () => {
  // context is a reference to access all the contexts of the context API from this component
  const context = usePosts();

  if(context.data.length === 0){
    // show loader
    return <Loader/>;
  }
  return (
    <>
      {/* For creating the album i.e. to handle add and edit input  */}
      <CreateAlbumItem />

      {/* Looping through the posts array, which we got from the api and rendering it over AlbumList component  */}
      {context.data.map((post) => (
        <AlbumList post={post} key={`post-${post.id}`} />
      ))}
    </>
  );
};

export default Album;
