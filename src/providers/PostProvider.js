import { createContext } from "react";

import { useProvidePosts } from "../hooks/PostHook";

// initializing some states for our context
const initialState = {
  posts: [],
  editable: false,
  addPost: () => {},
  EditPost: () => {},
  DeletePost: () => {},
  editedData: {},
//   setPosts: null,
};

// Creating a post context to avoid prop Drilling
export const PostsContext = createContext(initialState);

// Creating a PostProvider component which will provide the context to it's child
export const PostsProvider = ({ children }) => {
  const posts = useProvidePosts();

  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
};
