# LabpiDev

研究室内のラズパイ(volumio)開発用リポジトリ

## 使い方 To use

git を clone 後
**CPUTemp/env.js**を作成

```
module.exports = {
  AMBIENT_CHANNEL_ID: "",
  AMBIENT_WRITE_KEY: "",
  AMBIENT_READ_KEY: ""
};
```

Ambient のキーなどを入れたファイルを作成
その後、

```
npm i
npm run cpuForever
```

Ambient のページは https://ambidata.io/ch/channel.html?id=11402
