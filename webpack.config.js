// entry -> output
const path = require('path');

console.log(path.join(__dirname, 'public'));

module.exports = {
  entry: './src/app.js',
  output: {
    path: '/Users/lunacampos/Desktop/DojoAssignments/Udemy/ReactJS/HelloReact/IndecisionApp/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};
// loader
