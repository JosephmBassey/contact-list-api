const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const port = 4000;
const contactRouter = require('./Routes/contactRoute')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

app.get('/', (req, res) => {
  res.json('contact List  API');
});
app.use('/api', contactRouter)


mongoose.connect("mongodb://localhost:27017/contact-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('DB connected')
}).catch((err) => {
  console.log(err)
})
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});