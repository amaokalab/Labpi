/*
env.jsファイルを以下のように作ってください
module.exports = {
  AMBIENT_CHANNEL_ID: "",
  AMBIENT_WRITE_KEY: "",
  AMBIENT_READ_KEY: ""
};
*/

const env = require("./env.js");
const ambient = require("ambient-lib");

// cpu温度取得の準備
const util = require("util");
const childProcess = require("child_process");
const exec = util.promisify(childProcess.exec);

async function main() {
  // ambientに接続
  // https://ambidata.io/ch/channel.html?id=11402&private=true
  ambient.connect(env.AMBIENT_CHANNEL_ID, env.AMBIENT_WRITE_KEY);
  let sendData = {};

  // cpu温度取得
  let cpuRes = await exec("cat /sys/class/thermal/thermal_zone0/temp");
  sendData.d1 = cpuRes.stdout / 1000.0;

  let res = await ambient.send(sendData);
  console.log(res);
}

main();
