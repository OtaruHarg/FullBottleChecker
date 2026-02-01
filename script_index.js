var result,key,val;
var x = 0;//42
var y = 0;//15
var z = 0;//24
var bottle = ["null",""];
var bottle_shurui = ["null",""];

window.onload = load();

function B(x){
  if(bottle[x] == "yet"){
    result = window.confirm(bottle_shurui[x] + "を所持していますか？");
    if(result){
      alert("更新しました")
      bottle[x] = "check";
      save();
    }else{
      alert("キャンセルしました");
    }
  }
}

unction save(){
  y = 0;
  z = 0;
  while(z == 0){
    y = y + 1;
    key = "bottle" + y;
    val = bottle[y];
    window.localStorage.setItem(key,val);
    if(y == 44){
      z = 1;
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
    key = "bottle" + y;
    bottle[y] = localStorage.getItem(key);
    if(!bottle[y]){
      bottole[y] = "yet";
    }
    check(y);
    if(y == 44){
      z = 1;
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


function check(x){
  if(bottle[x] == "check"){
    if(x < 10){
      key = "B_0" + x;
    }else{
      key = "B_" + x;
    }
    document.getElementById(key).src = "fin.PNG";
  }
}

