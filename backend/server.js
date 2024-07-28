import express from 'express';
// import axios from 'axios';
import cors from 'cors';
import weatherRoute from './routes/weather.js'

const app = express();

const port = process.env.PORT || 3000;

// const apiKey = 'f65caef872ad4f5dbcb184751242707';

app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoute);

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
  });


// app.get('/api/weather', async (req, res) => {
//   const city = req.query.city;

//   if (!city) {
//     console.log('City is required');
//     return res.status(400).json({ error: 'City is required' });
//   }

//   try {
//     console.log(`Fetching weather data for city: ${city}`);
//     const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`);
//     console.log('Weather API response:', response.data);

//     const data = response.data;

//     const weather = {
//       City: data.location.name,
//       temperature: data.current.temp_c,
//       humidity: data.current.humidity,
//       condition: data.current.condition.text,
//     };
//     res.json(weather);
//   } catch (error) {
//     console.error('Error fetching weather data:', error.response?.data || error.message);
//     res.status(404).json({ error: 'City not found' });
//   }
// });


