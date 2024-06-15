$(function () {
  // カルーセル
  $('.carousel').slick({
  autoplay: true,
  dots: true,
  speed: 1500,
  arrows: false,
  fade: true,
  pauseOnHover: false
});

  // リンクのホバー時に不透明度をアニメーションで変更する
  $('.home').hover(
    function(){
      $(this).stop(true, true).fadeTo(300,0.5);
    },
    function(){
      $(this).stop(true, true).fadeTo(300,1.0);
    });

  // 100pxを境にTOPに戻るボタンの表示・非表示を切り替える 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-btn').fadeIn();
    } else {
      $('#back-btn').fadeOut();
    }
  });

  // ページ内リンクのスクロールをなめらかにする（スムーズスクロール） 
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });
    
  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.work img').click(function () {
    const imgSrc = $(this).attr('src');
    const imgAlt = $(this).attr('alt');
    $('.big-img').attr({
      src: imgSrc,
      alt: imgAlt,
    });
    $('.modal').fadeIn();
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
  });
});
