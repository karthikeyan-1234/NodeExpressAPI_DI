import express from "express"
import container from './container';

const app = express()
const port = 3000
const postService = container.resolve('IPostService');

app.get('/', (req, res) => {
  const result = postService.findPost(1);
  console.log(result);
  res.send('Hello World  !!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})