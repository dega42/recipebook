const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors())

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', (req, res) => {
    res.send('Backend server for Recipebook.')
})

const apiRouter = require('./routes/api.route');
app.use('/api/v1', apiRouter);


// --- Error handler
app.use((req, res, next) => {
    res.status(404).send({
        success: 'false',
        message: 'Page not found',
        error: {
            statusCode: 404,
            message: 'You reached a route that is not defined on this server',
        }
    });
})

app.use((err, req, res, next) => {
    console.error('Error stack: ', err.stack)
    res.status(500).send({
        success: 'false',
        message: 'Internal Server Error',
        error: {
            statusCode: 500,
            message: 'The server encountered an internal error or misconfiguration and was unable to complete your request.',
        }
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});