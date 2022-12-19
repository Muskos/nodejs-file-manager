import { access, constants, lstat } from "node:fs/promises";

const cd = async (state) => {
  const { location, args } = state;
  let path = "";

  const locationArr = args[1].split("/");

  if (locationArr[0] === "") {
    path = args[1].trim();
  } else {
    path = `${location}/${args[1]}`.trim();
  }

  try {
    await access(path, constants.R_OK | constants.W_OK);
    const instance = await lstat(path);

    if (!instance.isFile()) {
      return path;
    }
  } catch {
    console.error(`Invalid input: Can't find folder ${path}`);
  }

  return location;
};

export default cd;
