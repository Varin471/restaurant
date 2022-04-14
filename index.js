const express = require('express');
const app = express();
const http = require('http').createServer(app);
const PORT = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.redirect('index.html')
});

app.get('/manager', (req, res) => {
    res.redirect('manager.html')
})


http.listen(PORT, () => {
    console.log(`localhost:${PORT}`);
});