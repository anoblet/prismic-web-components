// var Prismic = require('prismic-javascript');
// import * as Prismic from "prismic-javascript"
import Prismic from "prismic-javascript"
console.log(Prismic);
var apiEndpoint = "https://anoblet.prismic.io/api/v2";

Prismic.getApi(apiEndpoint).then(function(api) {
  return api.query("", { pageSize : 100 }); // An empty query will return all the documents
}).then(function(response) {
  console.log("Documents: ", response.results);
}, function(err) {
  console.log("Something went wrong: ", err);
});

// (async () => {
//     const response = await fetch(
//         "https://anoblet.prismic.io/api/v2"
//     ).then(response => response.json());
//     const ref = response.refs[0].ref;
//     console.log(ref);
//     const response2 = await fetch(
//         `https://anoblet.prismic.io/api/v2/documents/search?ref=${ref}`
//     ).then(response => response.json());
//     console.log(response2);
// })();
