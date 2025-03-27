import nodemailer from "nodemailer";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

let dir = dirname(fileURLToPath(import.meta.url));
let filePath = join(dir, "nodeProcess.png");
let content = fs.readFileSync("nodemailer.txt", "utf-8");

let transport = nodemailer.createTransport({
  host: "smtp.google.com",
  service: "gmail",
  auth: {
    user: "jamesisback89@gmail.com",
    pass: "rxlv fkqw qryw cyzq",
  },
  port: 587,
  pool: true,
  maxConnections: 5,
  rateLimit: true,
});


const mailOptions = {
  from: ' "James Bond" "jamesisback89@gmail.com"',
  to: '"Geetansh Jain" "jaingeetansh@gmail.com"',
  subject: "AI SERVER DOWN",
  text: "This is to inform you that you are out of the team beacause of your work",
  html: "<h1>Urgent!!</h1>",
  attachments: [
    {
      filename: "nodemailer.txt",
      content: content,
    },
    {
      filename: "nodeProcess.png",
      path: filePath,
    },
  ],
};

transport.sendMail(mailOptions, (err, info) => {
  if (err) console.log(err);
  else {
    console.log("done");
  }
});
