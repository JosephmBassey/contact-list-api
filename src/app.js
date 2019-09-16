const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
var cors = require('cors')
const app = express();
const port = 4000;
const contactRouter = require('./Routes/contactRoute')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(cors())
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname + '/public/index.html'));
  res.send('contact API')
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