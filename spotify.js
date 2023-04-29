// // Import required libraries
// const express = require('express')
// const SpotifyWebApi = require('spotify-web-api-node')

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
