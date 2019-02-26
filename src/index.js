const app = require('./config/express');
require('dotenv').config();

const port = process.env.PORT || 8000;
console.log('Port ',port)

app.listen(port ,()=>{
    console.log(`Server running on port ${port}`);
});

module.exports = app;