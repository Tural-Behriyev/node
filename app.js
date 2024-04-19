import { qrup } from "./data.js";
// console.log(qrup);
import chalk  from "chalk";
import axios from "axios";
import {readFileSync,writeFileSync} from 'fs'
// const test = readFileSync('./data.txt')
// writeFileSync('test.docx','test')
// console.log(test.toString())



const url = "https://jsonplaceholder.typicode.com/users";
const arr = ["red", "green", "blue", "magenta", "yellow"];
const response = async () => {
  const { data } = await axios(url);
  data.forEach(({ username }) => {
    const randomColor = arr[Math.floor(Math.random() * arr.length)];
    console.log(chalk[randomColor](username));
  });
};
response();