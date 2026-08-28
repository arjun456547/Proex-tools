const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'ProbeX API Server Running' });
});

app.get('/api/mobile', async (req, res) => {
    try {
        const { number, email } = req.query;
        let url;
        if (number) {
            url = `https://ansh-apis.is-dev.org/api/mobile?key=ansh&mobile=${number}`;
        } else {
            url = `https://ansh-apis.is-dev.org/api/mobile?key=ansh&email=${email}`;
        }
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'API Error' });
    }
});

app.get('/api/pinterest', async (req, res) => {
    try {
        const { search } = req.query;
        const url = `https://ansh-apis.is-dev.org/api/printrest?key=ansh&search=${search}`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'API Error' });
    }
});

app.get('/api/terabox', async (req, res) => {
    try {
        const { url } = req.query;
        const apiUrl = `https://ansh-apis.is-dev.org/api/teraboxv2?key=ansh&url=${url}`;
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'API Error' });
    }
});

app.get('/api/social', async (req, res) => {
    try {
        const { url } = req.query;
        const apiUrl = `https://ansh-apis.is-dev.org/api/socialdownloder?key=ansh&url=${url}`;
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'API Error' });
    }
});

app.get('/api/upi', async (req, res) => {
    try {
        const { id } = req.query;
        const apiUrl = `https://ansh-apis.is-dev.org/api/upi?key=shree&id=${id}`;
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'API Error' });
    }
});

app.get('/api/chat', async (req, res) => {
    try {
        const { query } = req.query;
        const apiUrl = `https://ansh-apis.is-dev.org/api/perplexity?key=shree&chat=${query}`;
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'API Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
