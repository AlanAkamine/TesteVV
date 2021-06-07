require("dotenv").config();

const express = require("express");
//const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const connetToDatabase = require("./database");

const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const { check, validationResult } = require('express-validator')

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to the database!"));

const app = express()
const port = 7777

//app.use(cors());
app.use(express.json());
app.use(routes);
app.set('view engine', 'ejs')

/*
//Config email
const SMTP_CONFIG = require("./config/smtp");

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/register', urlencodedParser, [
    check('email', 'O e-mail não é valido')
        .notEmpty()
        .isEmail()
        .normalizeEmail(),
    check('nome', 'Nome com no mínimo 3 letras')
        .exists()
        .isLength({ min: 3 }),
    check('sobrenome', 'Sobrenome com no mínimo 3 letras')
        .exists()
        .isLength({ min: 3 }),
    check('telefone', 'Telefone obrigatório')
        .exists()
        .isLength({ min: 3 })

], (req, res)=> {

    const transporter = nodemailer.createTransport({
        host: SMTP_CONFIG.host,
        port: SMTP_CONFIG.port,
        secure: false,
        auth: {
          user: SMTP_CONFIG.user,
          pass: SMTP_CONFIG.pass,
        },
        tls: {
          rejectUnauthorized: false,
        },
    });

    const mailSent = transporter.sendMail({
        text: "Texto do E-mail",
        subject: "Assunto do e-mail",
        from: "Teste Dev NodeJS <testevv078@gmail.com",
        to: ["testevv078@gmail.com"],
        html: `
        <html>
        <body>
        <strong>Conteúdo HTML</strong></br>Do E-mail
        </body>
        </html> 
        `,
    });

    //console.log(mailSent);
    //res.redirect('/')
    console.log(req.body)


    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(400).json(errors.array())
        const alert = errors.array()
        res.render('register', {
            alert
        })
    }
})
*/

app.listen(port, () => console.info("App executando na Porta: " + port))