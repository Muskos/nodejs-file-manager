import ls from "./ls.mjs";
import up from "./up.mjs";
import cd from "./cd.mjs";
import cat from "./cat.mjs";
import add from "./add.mjs";
import rn from "./rn.mjs";
import cp from "./cp.mjs";
import mv from "./mv.mjs";
import rm from "./rm.mjs";
import operatingSystem from "./os.mjs";
import hash from "./hash.mjs";
import compress from "./compress.mjs";
import decompress from "./decompress.mjs";

const LS = "ls";
const UP = "up";
const CD = "cd";
const CAT = "cat";
const ADD = "add";
const RN = "rn";
const CP = "cp";
const MV = "mv";
const RM = "rm";
const OS = "os";
const HASH = "hash";
const COMPRESS = "compress";
const DECOMPRESS = "decompress";

export const COMMANDS_LIST = {
  [LS]: ls,
  [UP]: up,
  [CD]: cd,
  [CAT]: cat,
  [ADD]: add,
  [RN]: rn,
  [CP]: cp,
  [MV]: mv,
  [RM]: rm,
  [OS]: operatingSystem,
  [HASH]: hash,
  [COMPRESS]: compress,
  [DECOMPRESS]: decompress,
};

export default COMMANDS_LIST;
