const express = require('express');
const oracledb = require('oracledb');
const ejs = require('ejs');
const session = require('express-session')
 require('dotenv').config();
const cors = require('cors');
const app = express();
const route = require('./Routes/landing');
const dbConfig = {
  user: 'c##bookstore',
  password: 'bookstore',
  connectString: 'localhost:1521/ORCL', // Format: 'hostname:port/service_name'
};
app.set('view engine', 'ejs');
app.use(cors());
app.options('*',cors());
app.use(express.json());
app.use(session({ 
  secret: 'dsff',
  saveUninitialized:true
}));
app.get('/landing',async(req,res) => {
  res.render('landingpage');
})

app.get('/landing/consultation', (req,res,next) => {
  res.render('rename');
}
)



app.get('/gynae', async (req, res) => {
  let connection;
  console.log("hitted");
  try {
    // Connect to the Oracle Database

    connection = await oracledb.getConnection(dbConfig);

    // Perform database operations here
    const result = await connection.execute('SELECT * FROM doctor');

    res.render('index',{
      name:result.rows
      
    });



  } catch (error) {
    console.error('Error connecting to Oracle Database:', error);
    res.status(500).json({ error: 'Internal Server Error' });

  } finally {
    // Close the connection
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing connection:', error);
      }
    }
  }
});
app.post('/login',(req,res) =>{
  console.log('hirred')
})
app.listen(3200, () => {
  console.log(`Server running at http://localhost: 3100}`);
});
