import express from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 2000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Jokes API!');
});

// Hindi Jokes API (with English descriptions)
app.get('/jokes', (req, res) => {
  const jokes = [
    { id: '1', title: 'Teacher: Why are you late? Student: Mom and dad were fighting. Teacher: How is that your excuse? Student: My shoes were with mom, and my bag was with dad!' },
    { id: '2', title: 'Husband: The doctor said eat less sugar. Wife: So what should I do? You’re already so sweet!' },
    { id: '3', title: 'Boy: Bhaiya, one pani puri quickly! Vendor: Should I make it spicy? Boy: Yes, but give it to the guy who pushed me!' },
    { id: '4', title: 'Boyfriend: I can’t marry you, my family won’t agree. Girlfriend: Who’s in your family? Boyfriend: A wife and two kids.' },
    { id: '5', title: 'Pappu: Doctor, should I add sugar to this medicine? Doctor: No. Pappu: Then how will it taste good?' },
  ];
  res.json(jokes); // Send jokes as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
