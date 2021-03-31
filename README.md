# LabpiDev

研究室内のラズパイ(volumio)開発用リポジトリ

ログを残したり、センサーから色々スマート家電化する計画

## 更新状況

* AmniemtにラズパイのCPU温度を定期的におくる機能の実装

## 使い方 To use

git を clone 後
`.env`ファイルを作成

```
.envファイルを以下のように作ってください(https://ambidata.io/)
AMBIENT_CHANNEL_ID = [チャンネルID]
AMBIENT_WRITE_KEY = [ライトキー]
AMBIENT_READ_KEY = [リードキー]
```

Ambient のキーなどを入れたファイルを作成
その後、

```
npm i
npm run cpuForever
```

現在CPU温度をAmbientに送るのみ  
増やす場合は `package.json` 内のscriptsあたりに追記してください

尼研のAmbientページ： https://ambidata.io/ch/channel.html?id=11402

## 再起動時も実行する設定

```
sudo nano /etc/rc.local
```

```
cd /home/volumio/LabpiDev
npm run cpuForever

exit 0
```

Volumioでなく、ラズパイOSの場合などは適宜パスを書き換えてください
