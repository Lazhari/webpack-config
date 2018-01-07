const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080, (err) => {
    if (err) {
        console.error('Something broken!!');
    } else {
        console.log(`Magic happen at http://localhost:8080`);
    }
})