import { readdir } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIRECTORY = "directory";
const FILE = "file";

const compareInstanceName = (a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) {
    return 1;
  }
  if (a.name.toLowerCase() < b.name.toLowerCase()) {
    return -1;
  }

  return 0;
};

const ls = async ({ location }) => {
  const directories = [];
  const files = [];

  try {
    const contentOfDir = await readdir(location, { withFileTypes: true });

    contentOfDir.forEach((item) => {
      if (item.isDirectory()) {
        directories.push({
          name: item.name,
          type: DIRECTORY,
        });
      } else {
        files.push({
          name: item.name,
          type: FILE,
        });
      }
    });

    console.table(
      directories
        .sort(compareInstanceName)
        .concat(files.sort(compareInstanceName))
    );
  } catch (e) {
    throw Error("FS operation failed");
  }

  return location;
};

export default ls;
