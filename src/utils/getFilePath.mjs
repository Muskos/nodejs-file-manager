import path from "path";

const getFilePath = (location, file) => {
  if (path.isAbsolute(file)) {
    return file;
  } else {
    return `${location}/${file}`;
  }
};

export default getFilePath;
