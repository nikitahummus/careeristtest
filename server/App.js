const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const app = express();
const PORT = 3001;
const blogRouter = require('./src/routes/blog.router')
app.use(cors());
app.use(express.json());

app.use(logger('dev'))
app.use('/api/blog', blogRouter)

app.listen(PORT, () => {
  console.log('Server is connected on port: ', PORT)
});

