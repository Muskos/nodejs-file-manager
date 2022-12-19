import { readFile } from "fs/promises";
import { createHash } from "crypto";
import getFilePath from "../utils/getFilePath.mjs";

const hash = async (state) => {
  const { location, args } = state;

  if (!args[1] || (args[1] && args[1].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup file path`);
    return location;
  }

  const filePath = getFilePath(location, args[1].trim());

  try {
    const content = await readFile(filePath);
    const data = await createHash("sha256").update(content);

    console.log(data.digest("hex"));
  } catch (e) {
    throw new Error("Operation failed during create a hash of file: " + e);
  }

  return location;
};

export default hash;
