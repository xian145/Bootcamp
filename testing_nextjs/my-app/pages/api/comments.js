import comments from 'comments.json' //importing from comments.json in root
//this will be a page under the URL "/api/comments" that will be showing the json file we import
export default function handler(req, res) {
  res.status(200).json(comments)
  //we can use 'res.json(comments)' to, the difference between thoes twos is
  //is that res.statsu(200) will change the HTTP status explicit to 200, and if you want to be another code you can do that
  //but in 'res.json(something)' will be 200 by default
}