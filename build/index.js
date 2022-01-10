"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
var counter = 0;
app.get("/", (req, res) => {
    counter++;
    res.send(`
    <h1> You are the ${counter} visitor of this page </h1>
    `);
});
const port = 3000;
app.listen(port, () => {
    counter++;
});
console.log("counter");
