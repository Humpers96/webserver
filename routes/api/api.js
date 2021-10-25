import Express from 'express';
const router = Express.Router();

import { whats_playing as WHATS_PLAYING } from '../../services/whats_playing/whats_playing.js'

router.get('/whats_playing', (req, res) => 
{
    WHATS_PLAYING(req, res);
});

router.get('/', (req, res) =>
{
    res.send("API routes go here...");
});

export { router as API };