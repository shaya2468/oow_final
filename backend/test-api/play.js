
var axios = require('axios')

function getPositions() {

  axios({
    method: 'post',
    url: 'http://localhost:8080/oauth/token?grant_type=password&username=user&password=user',
    auth: {
      username: 'woo-client',
      password: '123456'
    }
  })
  .then((res) => {
    var token = res.data.access_token;
    console.log('TOKEN ' + token);
    return axios.get('http://localhost:8080/positions?access_token=' + token)

  }).then((res) => {
    console.log(JSON.stringify(res.data))
  }).catch((e) => {
    console.log('error');
    console.log(e.response.status);
  });
}

getPositions();



