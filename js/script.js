$(function(){
    let oneDepth = $('#header .gnb >li'),
    twoDepth = $(oneDepth).children('.twoD'),
    thrBtn = $(twoDepth).find('.thrBt'),
    gnbBg = $("#header .gnbBg"),
    leftArea = $('#header .leftArea');

    oneDepth.mouseenter(function(){
        $(this).addClass('on');
        twoDepth.show();
        gnbBg.show();
        leftArea.show();
    })
    
    oneDepth.mouseleave(function(){
        $(this).removeClass('on');
        twoDepth.hide();
        gnbBg.hide();
        leftArea.hide();
    })

    gnbBg.mouseenter(function(){
        $(this).addClass('on');
        twoDepth.show();
        gnbBg.show();
        leftArea.show();
    })

    gnbBg.mouseleave(function(){
        $(this).removeClass('on');
        twoDepth.hide();
        gnbBg.hide();
        leftArea.hide();
    })


    leftArea.mouseenter(function(){
        $(this).addClass('on');
        twoDepth.show();
        gnbBg.show();
        leftArea.show();
    })


    leftArea.mouseleave(function(){
        $(this).removeClass('on');
        twoDepth.hide();
        gnbBg.hide();
        leftArea.hide();
    })
    
    let orgH = gnbBg.height();
    longH = gnbBg.height() + 70;

    thrBtn.click(function(){
        
        if($(this).hasClass('on')){
            $(this).removeClass('on')
            $(this).next('.thrD').hide();
            gnbBg.css('height', orgH);
        }else{
            $(this).addClass('on');
            $(this).next('.thrD').show();
            gnbBg.css('height',longH);
        }
        console.log('버튼클릭됨')
    })


    let openBtn = $('.mHeader .menuBtn'),
    mMArea = $('.mMenuArea'),
    closeBtn = mMArea.find('.closeBt'),
    oneD = mMArea.find('.oneD'),
    twoD = mMArea.find('.twoD'),
    mthrBtn = mMArea.find('.thrBt'),
    thrD= mMArea.find('.thrD');

    openBtn.click(function(){
        mMArea.animate({'left' : '0'},300)
    })
    closeBtn.click(function(){
        mMArea.animate({'left' : '-100%'},300)
    })

    oneD.click(function(){
        twoD.slideUp();
        oneD.removeClass('on')
        
        if( !$(this).next('.twoD').is(':visible')){
            $(this).next('.twoD').slideDown();
            $(this).addClass('on');
        }
    })

    mthrBtn.click(function(){
        $(this).next().slideToggle();
    })

    let mainCon1Li = $('.mainCon1List > li'),
    mainCon1Bg = $('.mainCon1Bg > div');

    mainCon1Li.each(function(idx){


        $(this).hover(function(){
            mainCon1Bg.eq(idx).stop().fadeIn(400)
        } , function(){
            mainCon1Bg.eq(idx).stop().fadeOut(400)
        })

    })


    let topBtn = $('.topBtn');
    topBtn.click(function(){
        $('html').animate({'scrollTop' : '0'},800)
    })



    $(window).scroll(function(){
        let winScrollT = $(window).scrollTop() + 400, 
        mCon1T = $('.mainCon1').offset().top,
        mCon2T = $('.mainCon2').offset().top,
        mCon3T = $('.mainCon3').offset().top,
        footT = $('#footer').offset().top;

        if(winScrollT >= mCon1T && winScrollT <= mCon2T){

            $('.mainCon1 .mainTit').animate({'opacity' : 1, 'top' : 0},600,'swing')
            $('.mainCon1 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : 0},600,'swing')
            $('.mainCon1 .mainCon1List').delay(400).animate({'opacity' : 1, 'top' : 0},600,'swing')

        }else if(winScrollT >= mCon2T && winScrollT <= mCon3T){
            $('.mainCon2 .mainTit').animate({'opacity' : 1, 'top' : 0},600,'swing')
            $('.mainCon2 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : 0},600,'swing')
            $('.mainCon2 .mainCon2List').delay(400).animate({'opacity' : 1, 'top' : 0},600,'swing')

        }else if(winScrollT >= mCon3T && winScrollT <= footT){
            $('.mainCon3 .mainTit').animate({'opacity' : 1, 'top' : 0},600,'swing')
            $('.mainCon3 .mainTxt').delay(200).animate({'opacity' : 1, 'top' : 0},600,'swing')
            $('.mainCon3 .mainNews').delay(400).animate({'opacity' : 1, 'top' : 0},600,'swing')

        }
    

        if(true){
            $('#header').css('position','fixed');
            $('#header').addClass('on')
        }else{
            $('#header').css('position','relative');
            $('#header').removeClass('on')
        }


    })

    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


})