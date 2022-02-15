import axios from 'axios';

const API_URL = 'http://54.169.107.162/clouddoctor/';

class AuthService {
  login(user) {
    
    return axios
      .post(API_URL + 'token', `grant_type=password&username=${user.username}&password=${user.password}`)
      .then(response => {
        console.log(response, response.data);
        if (response.data.access_token) {
           const data = response.data;
           data.accessToken = data.access_token;
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();