import fs from "fs";
import getFilePath from "../utils/getFilePath.mjs";

const cp = (state) => {
  const { location, args } = state;

  if (!args[1] || (args[1] && args[1].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup file path`);
    return location;
  }

  if (!args[2] || (args[2] && args[2].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup new file name`);
    return location;
  }

  const from = getFilePath(location, args[1].trim());
  const to = getFilePath(location, args[2].trim());

  try {
    const source = fs.createReadStream(from);
    const destiny = fs.createWriteStream(to);
    source.pipe(destiny);
  } catch (e) {
    throw new Error("Operation failed during rename file: " + e);
  }

  return location;
};

export default cp;
