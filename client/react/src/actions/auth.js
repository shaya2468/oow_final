var axios = require('axios')

module.exports = {

  login: function (user, password) {
    // var url = `${process.env.URL}users/login`;
    // return axios.post(url, {email: email,password: password, name: "aaaaaa"});

    // this is disabled for now because of bug Allow-Access on the server side,
    // for now I simply return hard coded access token

    // axios({
    //   method: 'post',
    //   url: 'http://localhost:8080/oauth/token?grant_type=password&username=user&password=user',
    //   auth: {
    //     username: 'my-trusted-client',
    //     password: 'secret'
    //   }
    // })
    // .then((res) => {
    //   var token = res.data.access_token;
    //   return axios.get('http://localhost:8080/positions?access_token=' + token)
  
    // }).then((res) => {
    //   console.log(JSON.stringify(res.data))
    // }).catch((e) => {
    //   console.log('error');
    // });

    return new Promise(function (resolve, reject) {
      resolve('e163008c-e62c-451f-a636-cae169d05a9d');
    });

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