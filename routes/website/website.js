import Express from 'express';
const router = Express.Router();

router.get('/', (req, res) => {
    res.send("Website goes here...");
});

export { router as WEBSITE };