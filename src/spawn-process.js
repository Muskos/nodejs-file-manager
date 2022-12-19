import os from "os";

import { COMMANDS_LIST } from "./commands/commandsList.mjs";

let currentDir = os.homedir();

console.log(`You are currently in ${currentDir}`);

const echoInput = async (chunk) => {
  const chunkStringified = chunk.toString();
  if (chunkStringified.includes("CLOSE")) {
    process.exit(0);
  }

  const args = chunk.toString().split(" ");
  const commandName = args[0].trim();

  if (COMMANDS_LIST[commandName]) {
    try {
      currentDir = await COMMANDS_LIST[commandName]({
        location: currentDir,
        args,
      });
    } catch (e) {
      console.log("error", e);
    }
  } else {
    process.stdout.write("Invalid input: there is no such command\n");
  }

  process.stdout.write(`You are currently in ${currentDir}\n`);
};

process.stdin.on("data", echoInput);
