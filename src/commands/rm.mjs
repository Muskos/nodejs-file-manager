import { rm } from "fs/promises";
import getFilePath from "../utils/getFilePath.mjs";

const del = async (state) => {
  const { location, args } = state;

  if (!args[1] || (args[1] && args[1].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup file path`);
    return location;
  }

  const filePath = getFilePath(location, args[1].trim());

  try {
    await rm(filePath);
  } catch (e) {
    throw new Error("Operation failed during delete file: " + e);
  }

  return location;
};

export default del;
