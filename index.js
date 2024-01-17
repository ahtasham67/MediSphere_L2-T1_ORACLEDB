const express = require('express');
const app = express();

// Import the route module
const route = require('./Routes/landing');

// Mount the route at the '/landing' path
app.use('/landing', route);

// Other routes or middleware can be added here

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
