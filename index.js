const ambient = require("ambient-lib");

ambient.connect(AMBIENT_CHANNEL_ID, AMBIENT_WRITE_KEY);

ambient.send({ d1: random() * 100 }, (err, res, body) => {
  console.log(err, res, body);
});
