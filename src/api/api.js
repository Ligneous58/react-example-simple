import axios from 'axios';

const API_URL = 'http://localhost:3001';

export default {
  // Посты
  getPosts() {
    return axios.get(`${API_URL}/posts`);
  },
  getPost(id) {
    return axios.get(`${API_URL}/posts?id=${id}`);
  },
  createPost(postData) {
    return axios.post(`${API_URL}/posts`, postData);
  },
  updatePost(id, postData) {
    console.log("PUT id - " + id);
    console.log(postData);
    return axios.patch(`${API_URL}/posts/${id}`, postData);
  },
  deletePost(id) {
    return axios.delete(`${API_URL}/posts/${id}`);
  },

  // Комментарии
  getCommentsByPost(postId) {
    return axios.get(`${API_URL}/comments?postId=${postId}`);
  }
}