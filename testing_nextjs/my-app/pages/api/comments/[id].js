import comments from 'comments.json' //importing json file with the posts

export default function handler(req, res) { //there is no need in API routes to use useRouter()(this on server-side) bc query is attached to to the request object
  res.status(200).json({ post: req.query.id, comments }) //this is a post request, that means that you will create a new entrance in the json file with the information inside of the URL
}