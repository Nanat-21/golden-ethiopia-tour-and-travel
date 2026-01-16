const db = require('../config/db');

function handlePackageRoutes(req, res) {
  const { method, url } = req;

  // GET: Fetch all packages
  if (method === 'GET' && url === '/api/packages') {
    db.all("SELECT * FROM packages", [], (err, rows) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: err.message }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(rows));
      }
    });
    return true; // Tells the server we handled this request
  }

  return false; // Tells the server this route doesn't exist
}

module.exports = handlePackageRoutes;