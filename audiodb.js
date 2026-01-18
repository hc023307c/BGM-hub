// audiodb.js
// BGM-HUB 音效 DB + 群組設定

// 分頁（活頁夾）群組
const AUDIO_GROUPS = [
  {
    id: "miyin-tellmewhy",
    label: "迷因 - 回答我"
  }
  // 未來要新增群組就在這裡繼續加
];

// 單一音效資料
const AUDIO_DB = [
  {
    id: "miyin_answerme",
    group: "miyin-tellmewhy",
    name: "回答我!!",
    file: "audio/miyin-tellmewhy/answerme.WAV",
    mode: "fade"
  },
  {
    id: "miyin_lookingmyeyes",
    group: "miyin-tellmewhy",
    name: "Looking My Eyes",
    file: "audio/miyin-tellmewhy/lookingmyeyes.WAV",
    mode: "fade"
  },
  {
    id: "miyin_tellmewhy",
    group: "miyin-tellmewhy",
    name: "Tell Me Why",
    file: "audio/miyin-tellmewhy/TellMeWhy.WAV",
    mode: "fade"
  },
  {
    id: "miyin_say",
    group: "miyin-tellmewhy",
    name: "說話!!",
    file: "audio/miyin-tellmewhy/say.WAV",
    mode: "fade"
  },
  {
    id: "miyin_a",
    group: "miyin-tellmewhy",
    name: "啊~",
    file: "audio/miyin-tellmewhy/a.WAV",
    mode: "fade"
  },
  {
    id: "miyin_askyou",
    group: "miyin-tellmewhy",
    name: "啊我再問你啊!",
    file: "audio/miyin-tellmewhy/askyou.WAV",
    mode: "fade"
  },
  {
    id: "miyin_can",
    group: "miyin-tellmewhy",
    name: "能~能~能~",
    file: "audio/miyin-tellmewhy/can.WAV",
    mode: "fade"
  }

  // 未來新增其它群組的音效，就繼續往下加
];
