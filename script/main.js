$(function(){

    //메뉴 영역 - 1
    // $(".main>li").hover(function(){
    //     $(".sub").stop().slideDown();
    // },function(){
    //     $(".sub").stop().slideUp();
    // })//hover

    //메뉴 영역 - 2
    $(".main > li").mouseover(function(){
        $(".sub").stop().slideDown();
    })//mouseover

    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })//mouseout


    //메인슬라이드 이미지 영역
    // 1번 방법
    //move position: absolute; top: 0; 0 0  1 -300   2 -600
    
    // var n = 0; //현재 보이는 그림파일 인덱스 넘버 0 1 2     

    // setInterval(function(){
    //     if(n == 2){
    //         n=0;
    //     }else{
    //         n++;
    //         // n=n+1;
    //         // n+=1;
    //     }//if

    //     console.log("N : ", n)

    //     pos= -n * 300 + "px";
    //     console.log("POS : ", pos);
    //     $(".move").animate({top:pos}, 500)

    // }, 2500);

    //메인슬라이드 이미지 영역
    // 2번 방법

    setInterval(move, 2500);

    function move(){

        $(".move").animate({top:"-300px"}, 500, function(){
            $(".move").css({top:"0"});
            $(".move").append( $(".move li").eq(0));
            // $(".move").append( $(".move li").first());
            // $(".move").append( $(".move li:nth-child(1)"));

            // $(".move li").eq(0).appendTo(".move")
        })//ani

    }//

    // setInterval(function(){
    //     $(".move").animate({top:"-300px"}, 500, function(){
    //         $(".move").css({top:"0"});
    //         $(".move").append( $(".move li").eq(0));
    //         // $(".move").append( $(".move li").first());
    //         // $(".move").append( $(".move li:nth-child(1)"));
            
    //     })//ani
    // },2500)//


    // container 탭메뉴
    $(".noti_gall h2").click(function(){
        $(".noti_gall h2").addClass("off");
        $(this).removeClass("off");
        $(".noti_gall ul").hide();
        $(this).next().css({display:"flex"});
    })//click


    //팝업
    $(".p_click").click(function(){
        $(".pop").show();
    })//
    $(".close").click(function(){
        $(".pop").hide();
    })//


})//jQuery