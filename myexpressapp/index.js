const express = require('express');
const { subnetMatch } = require('ipaddr.js');

const app = new express();

const userRouter = express.Router();
const itemRouter = express.Router();


animal = {name: "bear",
    roar() {
        console.log(this.name);
    }
}
console.log("ed")
setTimeout(() => {
    animal.roar();
    const x = 2;
    const y = 0 ? "one": "two"
    console.log(y)
}, 0);