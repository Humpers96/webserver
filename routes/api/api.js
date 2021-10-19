import Express from 'express';
const router = Express.Router();

router.get('/', (req, res) => {
    res.send("API routes go here...");
});

export { router as API };