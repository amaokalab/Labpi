/*
.envファイルを以下のように作ってください(https://ambidata.io/)
AMBIENT_CHANNEL_ID = [チャンネルID]
AMBIENT_WRITE_KEY = [ライトキー]
AMBIENT_READ_KEY = [リードキー]
*/

require('dotenv').config();
const ambient = require("ambient-lib");

// cpu温度取得の準備
const util = require("util");
const childProcess = require("child_process");
const exec = util.promisify(childProcess.exec);

async function main() {
  // ambientに接続
  // https://ambidata.io/ch/channel.html?id=11402&private=true
  ambient.connect(process.env.AMBIENT_CHANNEL_ID, process.env.AMBIENT_WRITE_KEY);
  let sendData = {};

  // cpu温度取得
  let cpuRes = await exec("cat /sys/class/thermal/thermal_zone0/temp");
  sendData.d1 = cpuRes.stdout / 1000.0;

  console.log("--- send data ---");
  console.log(sendData);
  await ambient.send(sendData);
}

main().catch(e => console.log(e));
