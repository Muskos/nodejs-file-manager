import { rename } from "fs/promises";

import getFilePath from "../utils/getFilePath.mjs";

const rn = async (state) => {
  const { location, args } = state;

  if (!args[1] || (args[1] && args[1].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup file path`);
    return location;
  }

  if (!args[2] || (args[2] && args[2].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup new file name`);
    return location;
  }
  const filePath = getFilePath(location, args[1].trim());

  const filePathArr = filePath.split("/");

  try {
    await rename(
      filePath,
      `${filePathArr
        .splice(0, filePathArr.length - 1)
        .join("/")}/${args[2].trim()}`
    );
  } catch (e) {
    throw new Error("Operation failed during rename file: " + e);
  }

  return location;
};

export default rn;
