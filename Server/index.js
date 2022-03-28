const express = require('express');
const router  = require('./routes/router.js');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5001;
// Then use it before your routes are set up

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public/build'));
const path = require('path');

app.use('/routes', router);
app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'public','build','index.html'));
    res.send('hello Njesh!');
});
router.get(['/','/*'], function(req,res,next){
      res.sendFile(path.resolve(__dirname,'public','build','index.html'))
});
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
 