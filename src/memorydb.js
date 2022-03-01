const firebaseConfig = {
    apiKey: "AIzaSyDc08UKhWanDLZ8wL9ref6dih1kc3-CIco",
    authDomain: "javascriptgame-d2013.firebaseapp.com",
    databaseURL: "https://javascriptgame-d2013-default-rtdb.firebaseio.com/",
    
    projectId: "javascriptgame-d2013",
    storageBucket: "javascriptgame-d2013.appspot.com",
    messagingSenderId: "720121614792",
    appId: "1:720121614792:web:5c0db97d4a192a9fdff0fd"
  };
  
  //   Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.database()
  
  let globalData = null;
  
  $(document).on("click", ".memorybtn", function (e) {
  e.preventDefault();
  // var contactBudagi = db.ref("/ContactUs/")
  var myname =  $(".memoryname").val()
  var comment =  $(".memorycomment").val()
  if(($(".memoryname").val()) && ($(".memorycomment").val())){
    pushContactDB(myname, comment)
  }
  });
  function pushContactDB(myname, comment) {
    db.ref("/memorygame/").push().set({
      myname, comment
    })
    $(".memoryname").val("")
    $(".memorycomment").val("")
  }
  
  
  db.ref("/memorygame/").on("value", function(snap){
    var snapVal = snap.val()
    var snapArray = Object.entries(snapVal).map((q)=>{
      // for(i=0;i<q.length;i++){
        snapObject = {
          id: q[0],
          ...q[1]
        }
      // }
      return snapObject
    })
    console.log(snapArray)
    commentall = $("#allcommentmemory")
    console.log(commentall)
    commentall.html(
      snapArray.reverse().map((q)=>{
        console.log(q)
        return `
                        <div class="border p-4 d-flex mb-3">
                        <img  style="width: 60px; height: 60px;" src="https://i.pinimg.com/custom_covers/222x/85498161615209203_1636332751.jpg" alt="">
                        <div>
                            <div class="container commentname h4 textmaincoloryellow">${q.myname}</div>
                            <div class="container commentcomment text-white">${q.comment}</div>
                        </div>
                    </div>
        `
      })
    )
  })
  