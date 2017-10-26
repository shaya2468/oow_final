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
      resolve('c060f979-9219-4dc4-9eda-66963cc3d61b');
    });

  },

  getData: function(){
    var token = localStorage.getItem('token');
    if (!token){
      console.log('token is null');
      return;
    }
    axios.get('http://localhost:8080/positions?access_token=' + token)
    .then((res) => {
      console.log(JSON.stringify(res.data))
    }).catch((e) => {
      console.log('error');
    });;
  }
}