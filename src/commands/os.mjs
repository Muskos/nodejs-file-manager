import os from "os";

const endOfLine = () => {
  if (os.EOL === "\n") {
    console.log("EOL: \\n");
  } else {
    console.log("EOL: \\r\\n");
  }
};

const cpus = () => {
  console.table(os.cpus().map((item) => item.model));
};

const homeDir = () => {
  console.log(os.homedir());
};

const userName = () => {
  console.log(os.userInfo().username);
};

const architecture = () => {
  console.log(os.arch());
};

const EOL = "--EOL";
const CPUS = "--cpus";
const HOMEDIR = "--homedir";
const USERNAME = "--username";
const ARCHITECTURE = "--architecture";

const PARAMETER_LIST = {
  [EOL]: endOfLine,
  [CPUS]: cpus,
  [HOMEDIR]: homeDir,
  [USERNAME]: userName,
  [ARCHITECTURE]: architecture,
};

const operatingSystem = async (state) => {
  const { location, args } = state;

  if (!args[1] || (args[1] && args[1].trim().length === 0)) {
    console.error(`Invalid input: You didn't enter parameter`);
    return location;
  }

  try {
    PARAMETER_LIST[args[1].trim()]();
  } catch (e) {
    throw new Error("Invalid input: parameter doesn't exist");
  }

  return location;
};

export default operatingSystem;
