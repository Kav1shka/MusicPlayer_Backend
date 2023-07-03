// // Import required libraries
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

// // Create new SpotifyWebApi object
// const spotifyApi = new SpotifyWebApi({
//   clientId: 'YOUR_CLIENT_ID',
//   clientSecret: 'YOUR_CLIENT_SECRET'
// })

// // Authenticate with Spotify API
// spotifyApi.clientCredentialsGrant()
//   .then(data => {
//     console.log('Access token retrieved')
//     spotifyApi.setAccessToken(data.body['access_token'])
//   })
//   .catch(error => {
//     console.log('Error retrieving access token:', error)
//   })

// // Create new Express app
// const app = express()

// // Define API endpoint
// app.get('/api/spotify', (req, res) => {
//   // Use spotifyApi object to make request to Spotify API
//   spotifyApi.getArtist('4gzpq5DPGxSnKTe4SA8HAU')
//     .then(data => {
//       res.send(data.body)
//     })
//     .catch(error => {
//       console.log('Error retrieving artist data:', error)
//       res.status(500).send(error)
//     })
// })

// // Start server
// app.listen(3000, () => {
//   console.log('Server running on port 3000')
// })

//--------------------------------------------8
// var client_id = '6e34774d68364a58ad133dc66586c6ef';
// var client_secret = '079010703d394394911bc2af8f48698f';

// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var token = body.access_token;
//   }
// });

var client_id = '6e34774d68364a58ad133dc66586c6ef';
var client_secret = '079010703d394394911bc2af8f48698f';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
  }
});
