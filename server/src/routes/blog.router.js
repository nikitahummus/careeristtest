const path = require('path')
const router = require('express').Router();
const { Post } = require(path.join(process.env.PWD, 'db', 'models'))

router.get('/', async (req, res) => {
  try {
    const allPosts = await Post.findAll({ order: [['createdAt', 'DESC']] })
    res.json({ allPosts })
  } catch (err) {
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {

  try {
    const { userName, content } = req.body;
    if (userName.search(/[^\w]/gm) === -1 && content.search(/https:\/\/|http:\/\//gm) === -1){
      const newPost = await Post.create({ userName, content });
      res.json(newPost)
    } else {
      res.sendStatus(400)
    }
    
  } catch (err){
    console.log(err)
    res.sendStatus(500)
  }
})

module.exports = router;
