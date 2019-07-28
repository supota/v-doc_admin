    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyB_-HvvaBwotvSAuQ9E2IsRueDyTG904Pg",
      authDomain: "v-doc-supota.firebaseapp.com",
      databaseURL: "https://v-doc-supota.firebaseio.com",
      projectId: "v-doc-supota",
      storageBucket: "",
      messagingSenderId: "965736283906",
      appId: "1:965736283906:web:f5c4a4ba0a73b2ff"
    };
    firebase.initializeApp(firebaseConfig);


 function Create() {
   //入力データを取得
   ages = document.getElementById("tx1").value;
   bios = document.getElementById("tx2").value;
   froms = document.getElementById("tx3").value;
   images = document.getElementById("tx4").value;
   kanas = document.getElementById("tx5").value;
   names = document.getElementById("tx6").value;
   sexies = document.getElementById("tx7").value;
   sports = document.getElementById("tx8").value;
   teams = document.getElementById("tx9").value;
   twitters = document.getElementById("tx10").value;
   performances = document.getElementById("tx11").value;
   historyies = document.getElementById("tx12").value;
   facebooks = document.getElementById("tx13").value;
   ids = document.getElementById("tx14").value;
   //Firebaseのデータベースにデータを保存する
   firebase.database();
   var playerRef = firebase.database().ref('player');
   playerRef.push({
     age: ages,
     bio: bios,
     from: froms,
     image: images,
     kana: kanas,
     name: names,
     sex: sexies,
     sports: sports,
     team: teams,
     twitter: twitters,
     performance: performances,
     history: historyies,
    facebook: facebooks,
    id: ids
   })
   alert("保存しました");
 }