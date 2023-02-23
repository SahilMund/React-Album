import { API_URLS } from "../utils/constant";

/***
This is our custom function,arguments are the url and second is a object with body and rest will be custom configurations.
custom config can contain method and headers.
customFetch function will handle all the API calls
***/
const customFetch = async (url, { body, ...customConfig }) => {
  const headers = {
    "content-type": "application/json; charset=UTF-8",
  };

  //creating a assimilation of config with what we get as argument and what we defined in headers
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };

  if (body) {
    // converting our body to JSON string and store it in the body
    config.body = JSON.stringify(body);
  }

  try {
    //here we are making a simple api call and converting it to json
    const response = await fetch(url, config);
    const data = await response.json();

  
    // if status of the fetch is a success, then returning the data
    if (response.success || response.ok) {
      return {
        data: data,
        success: true,
      };
    }

    //else throw the error
    throw new Error("error" + data.message);
  } catch (error) {
    // console.error("error",error);
    return {
      message: error.message,
      success: false,
    };
  }
};

// calling APIs to implement CRUD 

// Get all album data from the API
export const getAllAlbumPosts = () => {
  return customFetch(API_URLS.getAllPosts(), {
    method: "GET",
  });
};

// To Delete the post
export const DeletePostById = (id) => {
  return customFetch(API_URLS.deletePostById(id), {
    method: "DELETE",
  });
};

// To add a new album to the list
export const addAlbumPosts = (userId, id, title) => {
  return customFetch(API_URLS.createPost(), {
    method: "POST",
    body: {
      userId,
      id,
      title,
    },
  });
};

// To update the album
export const EditAlbumPost = (id, userId, title) => {
  return customFetch(API_URLS.editPost(id), {
    method: "PUT",
    body: {
      userId,
      id,
      title,
    },
  });
};
