const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname+'/surreal/index.html'));
});

router.get('/download', async(req, res) => {
    res.sendFile(path.join(__dirname+'/surreal/download.html'));
});

router.get('/giveaway', async(req, res) => {
    res.sendFile(path.join(__dirname+'/surreal/giveaway.html'));
});

router.get('/tos', async(req, res) => {
    res.sendFile(path.join(__dirname+'/surreal/tos.html'));
});

router.get('/privacy-policy', async(req, res) => {
    res.sendFile(path.join(__dirname+'/surreal/privacy-policy.html'));
});

router.get('/surrealwallet', async(req, res) => {
   res.sendFile(path.join(__dirname+'/surreal/SurrealWallet.apk'));
});

module.exports = router