import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDit = path.parse(process.cwd()).root;

const up = async (state) => {
  const { location } = state;

  if (location === rootDit) {
    return location;
  }
  const locationArr = location.split("/");

  return locationArr.splice(0, locationArr.length - 1).join("/") || "/";
};

export default up;
