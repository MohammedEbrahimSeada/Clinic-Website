const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// API Route to handle form submission
app.post('/book-appointment', (req, res) => {
    const { name, email, phone, date, time } = req.body;
    
    // Store the data in a database (you could integrate MongoDB or MySQL here)
    console.log(`Appointment booked by ${name}, Email: ${email}, Phone: ${phone}, Date: ${date}, Time: ${time}`);

    // Send email or notification (using a service like SendGrid or Nodemailer)
    
    res.json({ message: 'Appointment booked successfully!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});