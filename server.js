const express = require('express');
const app = express();


app.use(express.static(__dirname + '/build'));

app.get('/*', (req, res) => {
	res.sendFile(__dirname + '/build/index.html');
});

app.listen(process.env.PORT || 7009);