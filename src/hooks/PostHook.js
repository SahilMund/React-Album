import { PostsContext } from "../providers/PostProvider";
import { useContext, useState, useEffect } from "react";

import {
  getAllAlbumPosts,
  DeletePostById,
  addAlbumPosts,
  EditAlbumPost,
} from "../api";

// Using useContext hooks, creating a custom hook "usePosts" to enable other components to able to access data from the context
export const usePosts = () => {
  return useContext(PostsContext);
};

// Creating a custom hooks to implement CRUD functionality
export const useProvidePosts = () => {
  // Posts will store all the albums in an array format
  const [posts, setPosts] = useState([]);

  //   depend on editable, we will toggle the add/edit option
  const [editable, setEditable] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    // Fetching all the album data from API when this component is loaded for the first time
    const fetchPosts = async () => {
      const response = await getAllAlbumPosts();
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  //   To add new post in the list
  const addPost = async ({ userId, id, title }) => {
    const response = await addAlbumPosts(userId, id, title);

    // If the response is success then take the details and add it to the posts array
    if (response.success) {
      response.data.id = id;
      let { userId, title } = response.data;
      const newPost = [{ userId, id, title }, ...posts];
      setPosts(newPost);
      return;
    }
    // If response is not success then throw error
    throw new Error(response.message);
  };

  // To handle edit feature
  const EditPost = async (title) => {
    const { id, userId } = editedData;
    const response = await EditAlbumPost(id, userId, title);

    console.log(response);

    if (!response.success) {
      throw new Error(response.message);
    }
    // Create a new array with the updated value, then set its value to our posts array
    const newAlbumPost = posts.map((item) => {
      if (item.id === response.data.id) {
        item.title = response.data.title;
      }
      return item;
    });

    setPosts(newAlbumPost);
  };

  // To handle delete of items
  const DeletePost = async (id) => {
    const response = await DeletePostById(id);

    if (response.success) {
      // filtering out the value which needs to be removed from our posts array
      const newItemList = [...posts].filter((post) => post.id !== id);

      setPosts(newItemList);
      return;
    }

    throw new Error(response.message);
  };

  return {
    data: posts,
    editable,
    setEditable,
    addPost,
    DeletePost,
    EditPost,
    setEditedData,
    editedData,
  };
};
