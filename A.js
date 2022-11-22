const express = require('express');

const app = express();

app.get('*', (request, respone) => {
    console.log(request.query);
    respone.send(request.query);
});

app.listen(52273, () => {
    console.log('Server runnuing at http://127.0.0.1:522723');
});