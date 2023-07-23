// System-related packages
import "dotenv/config";
import { dirname } from "path";
import { fileURLToPath } from 'url';
// Web-app related packages
import express from 'express';
import exphbs from 'express-handlebars';
// DB-related modules
import { connect } from './src/models/db.js';
import { User } from "./src/models/user.js";
// Routes
import router from "./src/routes/index.js";

async function main () {
    const __dirname = dirname(fileURLToPath(import.meta.url)); // directory URL
    const app = express();

    app.use("/static", express.static(__dirname + "/public"));
    // Set handlebars as the express app's default view engine
    app.engine("hbs", exphbs.engine({
        extname: 'hbs'
    }));
    app.set("view engine", "hbs");
    // directory for views folder
    app.set("views", "./src/views");
    // View cache to false
    app.set("view cache", false);

    // from this point onwards, we are going to receive json format data
    app.use(express.json());

    app.use(router);
    
    app.listen(process.env.PORT, () => {
        console.log("Express app now listening...");
        connect().then(() => {
            console.log("Now connected to MongoDB Server.");
        });
    });
}

main();

