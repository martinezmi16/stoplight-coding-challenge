const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.listen(8081, () => console.log('Now serving http://localhost:8081/test-page.html'));
