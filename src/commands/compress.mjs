import zlib from "zlib";
import fs from "fs";

import getFilePath from "../utils/getFilePath.mjs";

const compress = (state) => {
  const { location, args } = state;

  if (!args[1] || (args[1] && args[1].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup file path`);
    return location;
  }

  if (!args[2] || (args[2] && args[2].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup new file name`);
    return location;
  }

  try {
    const from = getFilePath(location, args[1].trim());
    const to = getFilePath(location, args[2].trim());

    const zip = zlib.createGzip();

    const read = fs.createReadStream(from);
    const write = fs.createWriteStream(to);

    read.pipe(zip).pipe(write);
  } catch (e) {
    throw new Error("Operation failed during compress file: " + e);
  }

  return location;
};

export default compress;
