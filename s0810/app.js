window.onload = function(){
    let current = 0;
    let isSlide = false;
    let temp = 1;
    setInterval(function(){
        slide(current + 1, 1)
    },5000);
    function slide(target, dir){
        if(isSlide) return;
        if(target >= $(".slide-image").length ){target=0;}
        if(target<0){target=6;}
        //왼쪽 1 오른쪽 -1
        console.log(target, dir);
        
        isSlide = true;
        
        $(".slide-image")
        .eq(target).css({"left": `${dir * 100}%`})
        .animate({"left":0}, 800);
       
        $(".slide-image")
        .eq(current)
        .animate({"left":`${-100 * dir}%`}, 800, function(){
            isSlide = false;            
        });
        current = target;
        
        //핀에대한 작업은 여기서 나중에
        $(".pin").removeClass("active");
        $(".pin").eq(target).addClass("active");
        
    }


    $(".slide-image").css({"left":"100%"});
    $(".slide-image").eq(current).css("left", 0);

    $(".pin").on("click", function(){
        let idx = $(this).index();
        slide(idx, idx - current < 0 ? -1 : 1);
        //  $(".pin").removeClass("active");
        //  $(".pin").eq(target).addClass("active");
    });

    $(".slide-btn").attr("disabled","true").on("click", function(){
        let dir = $(this).data("dir") * 1; //숫자로 강제 형변환
        slide(current + dir, dir);
    })
    
        
};
