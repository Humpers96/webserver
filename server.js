// Express setup
import Express from 'express';
const app = Express();

// Library includes
import path from 'path';
import ExpressHandlebars from 'express-handlebars';

// Routes setup
import { API } from "./routes/api/api.js";
import { WEBSITE } from "./routes/website/website.js";
//import { TEST } from "./routes/test_route.js";

// Static folder setup
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const static_folder_path = path.join(dirname(fileURLToPath(import.meta.url)) + "/static");
app.use(Express.static(static_folder_path));

// Handlbars setup
app.set('view engine', 'handlebars');
app.engine('handlebars', ExpressHandlebars(
    {
        defaultLayout: "index"
    }
));

// Landing page server status response
app.get('/', (req, res) => {
    res.render('nothing_here');
});

// Exposing my API & website
app.use('/api', API);
app.use('/home', WEBSITE);

// Test Route
 //app.use('/test', TEST);

// PORT
const port = process.env.PORT || 4237;

// Run server
app.listen(port, () => {
    console.log('Listening on port: ' + port);
});