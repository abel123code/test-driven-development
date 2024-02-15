const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('../frontend'));


const validatePassword = require('./validatePassword.js')

app.post('/users', (req, res) => {
  const { username, password } = req.body
  
  // Validate username
  // Validate password

  //at least 8 characters long 
  //contains at least one letter
  //contains at least one number
  const validPassword = validatePassword(password)

  // Save user to database

  

  if (validPassword) {
    res.send({message: "Valid User"})
  } else {
    res.send({error: "Invalid Password"})
  }
})


app.listen(8080, () => console.log("listening on port 8080"))