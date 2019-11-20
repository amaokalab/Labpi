const util = require("util");
const childProcess = require("child_process");
const exec = util.promisify(childProcess.exec);

async function main() {
  let res = await exec("cat /sys/class/thermal/thermal_zone0/temp");
  console.log(res.stdout);
}

main();

// exec('cat /sys/class/thermal/thermal_zone0/temp', (err, stdout, stderr) => {
//   if (err) { console.log(err); }
//   console.log(stdout);
// });
