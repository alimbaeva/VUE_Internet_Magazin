// module.exports = {
//   devServer: {
//     // proxy: 'http://localhost:3000',

//   }
// }

module.exports = {
  devServer: {
    proxy: {
      "/route": {
        target: "http://localhost:3002",
      }
    }
  }
}