const functions = require("firebase-functions");
const express = require("express");
const path = require("path");
const fs = require("fs").promises;
import * as admin from "firebase-admin";
import { getFirestore } from "firebase-admin/firestore";
import * as firebase from "firebase/app";

admin.initializeApp();
// We would need Firebase web SDK to login user with email and password.
firebase.initializeApp({});
admin.firestore().settings({ ignoreUndefinedProperties: true });

const app = express();

app.get("/", async (req: any, res: any) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  try {
    let data = await updateDynamicMeta(filePath, req);
    //
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("*/*", async (req: any, res: any) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  try {
    let data = await updateDynamicMeta(filePath, req);
    //
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("**/**", async (req: any, res: any) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  try {
    let data = await updateDynamicMeta(filePath, req);
    //
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/*", async (req: any, res: any) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  try {
    let data = await updateDynamicMeta(filePath, req);
    //
    res.send(data);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.use(express.static(path.resolve(__dirname, "./build")));

//define google cloud function name
exports.webApi = functions.https.onRequest(app);
async function updateDynamicMeta(filePath: any, req: any) {
  const id = "1";
  const userDocRef = await getFirestore().doc(`/blogs/${id}`).get();
  const userDocData = userDocRef.data() as any;
  console.log(userDocData);

  let data = await fs.readFile(filePath, "utf-8");
  const queryData = req;
  console.log("queryData with */*", queryData);
  if (!userDocData) {
    data = data
      .replace(/__TITLE__/g, "iSearch")
      .replace(/__THUMB__/g, "https://isearch.co.in/Assets/isearchLogo21.webp")
      .replace(/__DESCRIPTION__/g, "Welcome to iSearch...");
  } else {
    data = data
      .replace(/__TITLE__/g, `${userDocData?.title}`)
      .replace(/__THUMB__/g, `${userDocData?.image}`)
      .replace(/__DESCRIPTION__/g, `${userDocData?.description}`);
  }
  return data;
}
