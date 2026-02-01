var result,key,val;
var x = 0;//42
var y = 0;//15
var z = 0;//24
var kintetsu = ["null","yet","yet","yet","yet","yet","yet","yet","yet","yet","yet"
             ,"yet","yet","yet","yet","yet","yet","yet","yet","yet","yet"
             ,"yet","yet","yet","yet","yet","yet","yet","yet","yet","yet"
             ,"yet","yet","yet","yet","yet","yet","yet","yet","yet","yet"
             ,"yet","yet","yet","yet"];
var meitetsu = ["null","yet","yet","yet","yet","yet","yet","yet","yet","yet","yet"
             ,"yet","yet","yet","yet","yet"];
var nankai = ["null","yet","yet","yet","yet","yet","yet","yet","yet","yet","yet"
             ,"yet","yet","yet","yet","yet","yet","yet","yet","yet","yet"
             ,"yet","yet","yet","yet","yet","yet","yet"];
var kintetsu_shurui = ["null","80000系「ひのとり」","19200系「あおによし」","16200系「青の交響曲」","50000系「しまかぜ」","21000系「アーバンライナー・プラス」","21020系「アーバンライナー・ネクスト」","23000系「伊勢志摩ライナー・黄」","23000系「伊勢志摩ライナー・赤」","23000系「ミジュマルライナー」","26000系「さくらライナー」"
             ,"30000系「ビスタカー3世」","22600系「Ace」","22000系","16600系","16400系「ACE」","16010系","12400系","1A系","8A系","シリーズ21"
             ,"普通車両（電光掲示板／内包／横並びライト）","普通車両（方向幕／内包／横並びライト）","普通車両（方向幕／外付け／横並びライト）","普通車両（電光掲示板／内包／横並びライト／サイドバー付き）","急行用車両","地下鉄直通車両","地下鉄直通車両（シリーズ21カラー）"
             ,"けいはんな線車両","大阪メトロ直通車両","ならしかトレイン","とばしまメモリー　うみの章","とばしまメモリー　なみの章","ケーブルテレビ","三十三銀行×ポムポムプリン・黄","三十三銀行×ポムポムプリン・白","志摩グリーンアドベンチャー（外付け）","志摩グリーンアドベンチャー","東武ラッピング"
             ,"かぎろひ","つどい","楽","あおぞらⅡ","あおぞらⅡ（旧塗装）","通常車両（鮮魚頭）"];
var meitetsu_shurui = ["null","2000系「ミュースカイ」","2200系","1200系「パノラマsuper」","1800系","4000系","5000系","3300系／3150系","6000系","6500系","6800系"
             ,"100系／200系","300系","3500系","3700系／3100系","9500系／9100系"];
var nankai_shurui = ["null","50000系「ラピート」","12000系「サザン」","10000系「サザン」","11000系「りんかん」","30000系「こうや」「りんかん」","31000系「こうや」「りんかん」","2200系「天空」","ケーブルカー","8300系","3000系"
             ,"8000系","2300系","2200系","1000系","2000系","9000系","6200系","6300系","7100系","6000系"
             ,"12000系","9300系","7020系","7000系","5000系","3000系","ラッピング車両"];


window.onload = load();

function N(x){
  if(nankai[x] == "yet"){
    result = window.confirm(nankai_shurui[x] + "を発見しましたか？");
    if(result){
      nankai[x] = "check";
      save();
    }else{
      alert("キャンセルしました");
    }
  }
  save();
}

function K(x){
  if(kintetsu[x] == "yet"){
    result = window.confirm(kintetsu_shurui[x] + "を発見しましたか？");
    if(result){
      kintetsu[x] = "check";
      save();
    }else{
      alert("キャンセルしました");
    }
  }
}

function M(x){
  if(meitetsu[x] == "yet"){
    result = window.confirm(meitetsu_shurui[x] + "を発見しましたか？");
    if(result){
      meitetsu[x] = "check";
      save();
    }else{
      alert("キャンセルしました");
    }
  }
}

function save(){
  y = 0;
  z = 0;
  while(z == 0){
    y = y + 1;
    key = "kintetsu" + y;
    val = kintetsu[y];
    window.localStorage.setItem(key,val);
    if(y == 44){
      z = 1;
      y = 0;
    }
  }
  while(z == 1){
    y = y + 1;
    key = "meitetsu" + y;
    val = meitetsu[y];
    window.localStorage.setItem(key,val);
    if(y == 15){
      z = 2;
      y = 0;
    }
  }
  while(z == 2){
    y = y + 1;
    key = "nankai" + y;
    val = nankai[y];
    window.localStorage.setItem(key,val);
    if(y == 27){
      z = 3;
      y = 0;
    }
  }
  load();
}

function load(){
  y = 0;
  z = 0;
  console.log("ロード開始");
  while(z == 0){
    y = y + 1;
    console.log("近鉄"+y+"番目");
    key = "kintetsu" + y;
    kintetsu[y] = localStorage.getItem(key);
    if(!kintetsu[y]){
      kintetsu[y] = "yet";
    }
    check_K(y);
    if(y == 44){
      z = 1;
      y = 0;
    }
  }
  while(z == 1){
    y = y + 1;
    key = "meitetsu" + y;
    meitetsu[y] = localStorage.getItem(key);
    if(!meitetsu[y]){
      meitetsu[y] = "yet";
    }
    check_M(y);
    if(y == 15){
      z = 2;
      y = 0;
    }
  }
  while(z == 2){
    y = y + 1;
    key = "nankai" + y;
    nankai[y] = window.localStorage.getItem(key);
    if(!nankai[y]){
      nankai[y] = "yet";
    }
    check_N(y);
    if(y == 27){
      z = 3;
      y = 0;
    }
  }
}

function clears(){
  result = window.confirm("データを削除しますか？");
  if(result){
    window.localStorage.clear();
    load();
  }
}


function check_K(x){
  if(kintetsu[x] == "check"){
    if(x < 10){
      key = "K_0" + x;
    }else{
      key = "K_" + x;
    }
    document.getElementById(key).src = "fin.PNG";
  }
}

function check_M(x){
  if(meitetsu[x] == "check"){
    if(x < 10){
      key = "M_0" + x;
    }else{
      key = "M_" + x;
    }
    document.getElementById(key).src = "fin.PNG";
  }
}

function check_N(x){
  if(nankai[x] == "check"){
    if(x < 10){
      key = "N_0" + x;
    }else{
      key = "N_" + x;
    }
    document.getElementById(key).src = "fin.PNG";
  }
}
