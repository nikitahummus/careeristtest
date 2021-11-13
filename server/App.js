const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;
const blogRouter = require('./src/routes/blog.router')

app.use(express.json());
app.use(cors({ credentials: true, origin: true }));

app.use('/blog', blogRouter)

app.listen(PORT, () => {
  console.log('Server is connected on port: ', PORT)
});

