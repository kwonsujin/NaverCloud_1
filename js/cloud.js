// top scroll
var btt = document.getElementById('top-btn'),
    docElem = document.documentElement,
    offset,
    scrollPos,//스크롤 양
    docHeight;


    //docHeight = docElem.scrollHeight;
    docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

    if(docHeight != 'undefined'){
      offset = docHeight / 4;
    }

    window.addEventListener('scroll', function(){
       scrollPos = docElem.scrollTop;
       console.log(scrollPos);

       btt.className = (scrollPos > offset) ? 'visible' : '';
    });

    btt.addEventListener('click',function(ev){
      ev.preventDefault();//링크 본연의 기능을 막는다.
      docElem.scrollTop = 0;
      scrollToTop();
    });

   //  function scrollToTop(){
   //    var scrollInterval = setInterval(function(){
   //       if(scrollPos != 0){
   //          window.scrollBy(0,-55);
   //       }else{
   //          clearInterval(scrollInterval);
   //       }
   //    }, 100);
   // }



// pc 풋터- 관계사 더보기
const footerRight = document.querySelector('.footer_right');
const familyButton = document.querySelector('#footer_btn');


var buttonOpen = false;


familyButton.addEventListener('click', () => {
   if(buttonOpen){
      footerRight.classList.remove('on');
      buttonOpen = false;
   }
   else{
      footerRight.classList.add('on');
      buttonOpen = true;
   }
})



// mobile 풋터- 관계사 더보기
const mfooterRight = document.querySelector('.m_footer_right');
const mfamilyButton = document.querySelector('#m_footer_btn');


var buttonOpen = false;


mfamilyButton.addEventListener('click', () => {
   if(buttonOpen){
      mfooterRight.classList.remove('on');
      buttonOpen = false;
   }
   else{
      mfooterRight.classList.add('on');
      buttonOpen = true;
   }
})