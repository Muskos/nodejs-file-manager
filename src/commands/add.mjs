import { writeFile } from "fs/promises";
import getFilePath from "../utils/getFilePath.mjs";

const add = async (state) => {
  const { location, args } = state;

  if (!args[1] || (args[1] && args[1].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup file path`);
    return location;
  }

  const filePath = getFilePath(location, args[1].trim());

  try {
    await writeFile(filePath, "", { flag: "wx" });
  } catch (e) {
    throw new Error("Operation failed during create a new file: " + e);
  }

  return location;
};

export default add;
