var axios = require('axios')

module.exports = {

  login: function (user, password) {
    return axios({
      method: 'post',
      url: 'http://localhost:8080/oauth/token?grant_type=password&username=user&password=user',
      auth: {
        username: user,
        password: password
      }
    })
  },

  getData: function(){
    var token = localStorage.getItem('token');
    if (!token){
      console.log('token is null');
      return;
    }
    return axios.get('http://localhost:8080/positions?access_token=' + token);
  }
}