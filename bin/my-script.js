#!/usr/bin/env node

"use strict";

console.log("Running my-scripts...");
const shell = require("shelljs");
const path = require("path");
const { program } = require("commander");

// 获取配置文件的路径
const start = path.join(__dirname, "../build/dev.config.js");
const build = path.join(__dirname, "../build/pro.config.js");
const buildAnaly = path.join(__dirname, "../build/analy.config.js");

let TYPES = {
  "build:analy": `env-cmd -f .env.pro webpack --config ${buildAnaly}`,
  build: `env-cmd -f .env.pro webpack --config ${build}`,
  start: `env-cmd -f .env.dev webpack serve --open --config ${start}`,
  serve: "serve -s dist",
};
// 定义命令行参数
program
  // .command("子命令")

  .arguments("<name>") //参数
  // .option("-b, --build", "Build the project") 这是选项 用不上
  .action(function (name, otherDirs) {
    console.log("rmdir %s", name);
    shell.exec(TYPES[name]);
  });

program.parse(process.argv);
