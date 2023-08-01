const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;
const User = require('./userappoint')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


require('dotenv').config();
const secretKey = process.env.SECRET_KEY;
console.log(secretKey);
app.use(express.json());
app.use(cors());

const DB = 'mongodb://127.0.0.1:27017/hospital'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log("Error connecting to MongoDB", err));

app.post('/api/user', async (req, res) => {
    try {
        const {fullname, dob, gender, phone, email, address, preferred_date, preferred_time, reason, department, insurance_provider, policy_number, primary_physician, medical_conditions, surgeries, allergies,  language, accessibility, additional_info, consent } = req.body;
        const newUser = new User({fullname, dob, gender, phone, email, address, preferred_date, preferred_time, reason, department, insurance_provider, policy_number, primary_physician, medical_conditions, surgeries, allergies,  language, accessibility, additional_info, consent});
        await newUser.save();
        res.status(200).send('User saved successfully');
    } catch (err) {
        console.error('Error saving user:', err);
        res.status(500).send('Error saving user');
    }
});

const UserSchema1 = new mongoose.Schema({
    username: String,
    password: String
  });
  
  const User1 = mongoose.model('User1', UserSchema1); 
  
  
  app.post('/api/login1', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User1.findOne({ username });
      if (!user) {
        console.error('No such user found');
        return res.status(401).send('Invalid username or password');
      }
  
      const same =  bcrypt.compare(password, user.password);
      if (!same) {
        console.error('Invalid username or password');
        return res.status(401).send('Invalid username or password');
      }
  
      const token = jwt.sign({ username }, 'secretKey');
      res.status(200).json({ token });
    } catch (err) {
      console.error('Error finding user:', err);
      res.status(500).send('Internal server error');
    }
  });
  
  
  
  app.post('/api/signup1', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User1({ username, password: hashedPassword });
      await newUser.save();
      res.status(200).send('User created successfully');
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).send('Internal server error');
    }
  });
  


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});