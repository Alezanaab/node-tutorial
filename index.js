// /*GETTING STARTED WITH NODE*/
// require('./app/index');


// /*USING NPM*/
// const _ = require('lodash')

// _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// // → { 'a': 1, 'b': 2, 'c': 3 }


/*ASYNC PROGRAMMING*/

// const fs = require('fs')
// fs.readFile('file.md', 'utf-8', function (err, content) {
//   if (err) {
//     return console.log(err)
//   }

//   console.log(content)
// })

// const fs = require('fs')

// console.log('start reading a file...')

// fs.readFile('file.md', 'utf-8', function (err, content) {
//   if (err) {
//     console.log('error happened during reading the file')
//     return console.log(err);
//   }

//   console.log(content)
// })

// console.log('end of the file')

// async.parallel(['file1', 'file2', 'file3'], fs.stat, function (err, results) {
//     // results is now an array of stats for each file
// })

const fs = require('fs')

function stats (file) {
    return new Promise((resolve, reject) => {
      fs.stat(file, (err, data) => {
        if (err) {
          return reject (err)
        }
        resolve(data)
      })
    })
  }
  
  Promise.all([
    stats('file1'),
    stats('file2'),
    stats('file3')
  ])
  .then((data) => console.log(data))
  .catch((err) => console.log(err))