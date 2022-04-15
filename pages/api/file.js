import formidable from "formidable";
import fs from "fs";
import { useState } from "react/cjs/react.production.min";

export const config = {
  api: {
    bodyParser: false
  }
};
const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    await saveFile(files.file);
    return res.status(201).send("");
  });
};

const saveFile = async (file) => {
  const data = fs.readFileSync(file.filepath);
  const finalReletivePath = `./pages/multimedia/${file.newFilename}` 
  fs.writeFileSync(finalReletivePath, data);
  await fs.unlinkSync(file.filepath);
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};
