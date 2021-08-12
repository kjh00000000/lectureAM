let i = 0;
setInterval(function(){
    if(i >= 5){
        console.log("종료");
        Process.exit();
    }
    i++;
    console.log(`1번째 실행중 : ${i}`);
},1000);