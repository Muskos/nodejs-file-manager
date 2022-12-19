import fs from "fs";
import getFilePath from "../utils/getFilePath.mjs";

const cat = async (state) => {
  const { location, args } = state;

  if (!args[1] || (args[1] && args[1].trim().length === 0)) {
    console.error(`Invalid input: You didn't setup file path`);
    return location;
  }

  const filePath = getFilePath(location, args[1].trim());

  await new Promise((res) => {
    var readStream = fs.createReadStream(filePath);

    readStream.on("open", function () {
      readStream.pipe(process.stdout);
    });

    readStream.on("error", function (err) {
      console.error("Operation failed during read file");
    });

    readStream.on("end", () => {
      readStream.destroy();
      res();
    });
  });

  return location;
};

export default cat;
