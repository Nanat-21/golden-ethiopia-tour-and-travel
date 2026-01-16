const http = require('http');
const path = require('path'); // Added for reliable file paths
const connectDB = require('./config/db');
require('dotenv').config();

// --- DYNAMIC PATH IMPORTS ---
// __dirname points to backend/src. This ensures it finds the models folder.
const Contact = require(path.join(__dirname, 'models', 'Contact'));
const Package = require(path.join(__dirname, 'models', 'Package'));
const Gallery = require(path.join(__dirname, 'models', 'Gallery'));
const Testimonial = require(path.join(__dirname, 'models', 'Testimonial'));

connectDB();

const server = http.createServer(async (req, res) => {
  const url = req.url.toLowerCase().replace(/\/$/, "");

  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // --- GET ROUTE: PACKAGES ---
  if (url === '/api/packages' && req.method === 'GET') {
    try {
      const data = await Package.find();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Failed to fetch packages" }));
    }
  } 

  // --- GET ROUTE: GALLERY ---
  else if (url === '/api/gallery' && req.method === 'GET') {
    try {
      const images = await Gallery.find();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(images));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Failed to fetch gallery" }));
    }
  }

  // --- GET ROUTE: TESTIMONIALS ---
  else if (url === '/api/testimonials' && req.method === 'GET') {
    try {
      const reviews = await Testimonial.find();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(reviews));
    } catch (err) {
      res.writeHead(500);
      res.end(JSON.stringify({ error: "Failed to fetch testimonials" }));
    }
  }
  
  // --- POST ROUTE: CONTACT FORM ---
  else if (url === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', async () => {
      try {
        const data = JSON.parse(body);
        const newContact = new Contact(data);
        await newContact.save(); 
        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ success: false, error: "Database save failed" }));
      }
    });
  } 

  else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route Not Found" }));
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));