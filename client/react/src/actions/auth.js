var axios = require('axios')

module.exports = {

  login:function (user, password) {
    console.log('got this user name ' + user);
    // var url = `${process.env.URL}users/login`;
    // return axios.post(url, {email: email,password: password, name: "aaaaaa"});
  }
}