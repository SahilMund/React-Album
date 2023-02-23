const API_ROOT = "https://jsonplaceholder.typicode.com";

export const API_URLS = {
  // defining API URLs to perform the CRUD operations

  getAllPosts: () => `${API_ROOT}/albums`,

  deletePostById: (id) => `${API_ROOT}/albums/${id}`,

  createPost: () => `${API_ROOT}/albums`,

  editPost: (id) => `${API_ROOT}/albums/${id}`,
};
