import * as fs from "fs";
const cacheFilePath = "./.cache/taro-plugin-image-compress";
const fsPath = require("fs-path");

 export const getCache = () => {
  const cache: any | null = fs.existsSync(cacheFilePath)
    ? JSON.parse(fs.readFileSync(cacheFilePath).toString())
    : {};
  return cache;
};

export const doCache = (obj: any) => {
  fsPath.writeFileSync(cacheFilePath, JSON.stringify(obj));
};
