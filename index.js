import { spawn } from "child_process";

const SPAWN_PATH = "./src/spawn-process.js";

let userName = "Username";

const handleExit = () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit();
};

const startFileManager = () => {
  const userArgv = process.argv.find((argv) => argv.includes("--username="));

  if (userArgv) {
    userName = userArgv.split("--username=")[1];
  }
  console.log(`Welcome to the File Manager, ${userName}!`);

  process.on("exit", handleExit);

  process.on("SIGINT", () => {
    process.exit();
  });

  spawn("node", [SPAWN_PATH, userName], {
    stdio: "inherit",
    userName,
  });
};

startFileManager();
