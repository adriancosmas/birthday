$('.single-item').slick({
  dots: false,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  arrows: true
});

// $('.one-time').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   centerMode: true,
//   variableWidth: true
// });

// function myFunction() {
//   var x = document.getElementById("myDIV");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }
// // tabs
// const tabs = document.querySelectorAll('.tabs li');
// const tabContentBoxes = document.querySelectorAll('#tab-content > div');

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     tabs.forEach(item => item.classList.remove('is-active'));
//     tab.classList.add('is-active');

//     const target = tab.dataset.target;
//     // console.log(target);
//     tabContentBoxes.forEach(box => {
//       if (box.getAttribute('id') === target) {
//         box.classList.remove('is-hidden');
//       } else {
//         box.classList.add('is-hidden');
//       }
//     })
//   })
// })

// $('.single-item').slick();


// $('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });

// $('[data-aos]').parent().addClass('hideOverflowOnMobile');
// BACK TO TOP
jQuery(document).ready(function() {
  $("#backToTop").append(
    '<a class="backToTop" href="javascript:void(0);" style="display: none;"><i class="fas fa-chevron-circle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>'
  );

  $("#whatsApp").append(
    '<div class="whatsApp" style="display: none;"><a href="https://wa.me/6282225911714" target="blank"><i class="fab fa-whatsapp"></i></a></div>'
  );

  var $window = $(window);
  var distance = 120;

  $window.scroll(function() {
    if ($window.scrollTop() >= distance) {
      $(".backToTop").fadeIn();
      $(".whatsApp").fadeIn();
    } else {
      $(".backToTop").fadeOut();
      $(".whatsApp").fadeOut();
    }
  });

  $(".backToTop").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      800
    );
  });
});


$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu";
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active"); 
      $(".navbar-dropdown").toggleClass("is-hidden-mobile")
    });
  });
  document.querySelectorAll('.navbar-link').forEach(function(navbarLink){
      navbarLink.addEventListener('click', function(){
      navbarLink.nextElementSibling.classList.toggle('is-hidden-mobile');
    })
  });

  function gantiwarna(colordata,productType){
    // console.log(colordata);
    // console.log(productType);
    if(productType=='aquadajok'){
      if (colordata==1){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada hitam.png';
        document.getElementById('productColor').innerHTML = "Hitam";
      }else if(colordata==2){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada abu terang.png';
        document.getElementById('productColor').innerHTML = "Abu Terang";
      }else if(colordata==3){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada abu gelap.png';
        document.getElementById('productColor').innerHTML = "Abu Gelap";
      }else if(colordata==4){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada coklat.png';
        document.getElementById('productColor').innerHTML = "Coklat";
      }else if(colordata==5){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada hijau.png';
        document.getElementById('productColor').innerHTML = "Hijau";
      }else if(colordata==6){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada kuning.png';
        document.getElementById('productColor').innerHTML = "Kuning";
      }else if(colordata==7){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada merah.png';
        document.getElementById('productColor').innerHTML = "Merah";
      }else if(colordata==8){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada moca.png';
        document.getElementById('productColor').innerHTML = "Moca";
      }else if(colordata==9){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada oren.png';
        document.getElementById('productColor').innerHTML = "Orange";
      }else if(colordata==10){
        document.getElementById('productImg').src='assets/img/Aquada/Aquada ungu.png';
        document.getElementById('productColor').innerHTML = "Ungu";
      }
    }else if(productType=='vil1'){
      if (colordata==1){
        document.getElementById('productImg').src='assets/img/Vilantis/VIL1/VIL1-Hitam.png';
        document.getElementById('productColor').innerHTML = "Hitam";
      }else if(colordata==2){
        document.getElementById('productImg').src='assets/img/Vilantis/VIL1/VIL1-AbuMuda.png';
        document.getElementById('productColor').innerHTML = "Abu Muda";
      }else if(colordata==3){
        document.getElementById('productImg').src='assets/img/Vilantis/VIL1/VIL1-AbuTua.png';
        document.getElementById('productColor').innerHTML = "Abu Tua";
      }else if(colordata==4){
        document.getElementById('productImg').src='assets/img/Vilantis/VIL1/VIL1-Cream.png';
        document.getElementById('productColor').innerHTML = "Cream";
      }else if(colordata==5){
        document.getElementById('productImg').src='assets/img/Vilantis/VIL1/VIL1-Moca.png';
        document.getElementById('productColor').innerHTML = "Moca";
      }
    }else if(productType=='vil2'){
      if (colordata==1){
        document.getElementById('productImg2').src='assets/img/Vilantis/VIL2/VIL2-Hitam.png';
        document.getElementById('productColor2').innerHTML = "Hitam";
      }else if(colordata==2){
        document.getElementById('productImg2').src='assets/img/Vilantis/VIL2/VIL2-Iguana.png';
        document.getElementById('productColor2').innerHTML = "Iguana";
      }else if(colordata==3){
        document.getElementById('productImg2').src='assets/img/Vilantis/VIL2/VIL2-Moca.png';
        document.getElementById('productColor2').innerHTML = "Abu Tua";
      }
    }else if(productType=='vil3'){
      if (colordata==1){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-HItam.png';
        document.getElementById('productColor3').innerHTML = "Hitam";
      }else if(colordata==2){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-Abu.png';
        document.getElementById('productColor3').innerHTML = "Abu";
      }else if(colordata==3){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-Beige.png';
        document.getElementById('productColor3').innerHTML = "Beige";
      }else if(colordata==4){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-Campignon.png';
        document.getElementById('productColor3').innerHTML = "Campignon";
      }else if(colordata==5){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-Cappucino.png';
        document.getElementById('productColor3').innerHTML = "Cappucino";
      }else if(colordata==6){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-Coklat.png';
        document.getElementById('productColor3').innerHTML = "Coklat";
      }else if(colordata==7){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-Kuning.png';
        document.getElementById('productColor3').innerHTML = "Kuning";
      }else if(colordata==8){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-Latte.png';
        document.getElementById('productColor3').innerHTML = "Latte";
      }else if(colordata==9){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-Merah.png';
        document.getElementById('productColor3').innerHTML = "Merah";
      }else if(colordata==10){
        document.getElementById('productImg3').src='assets/img/Vilantis/VIL3/VIL3-Putih.png';
        document.getElementById('productColor3').innerHTML = "Putih";
      }
    }else if(productType=='vilJeans'){
      if (colordata==1){
        document.getElementById('productImg4').src='assets/img/Vilantis/VILJeans/VIL-Jeans-Hitam.png';
        document.getElementById('productColor4').innerHTML = "Hitam";
      }else if(colordata==2){
        document.getElementById('productImg4').src='assets/img/Vilantis/VILJeans/VIL-Jeans-Abu.png';
        document.getElementById('productColor4').innerHTML = "Abu";
      }else if(colordata==3){
        document.getElementById('productImg4').src='assets/img/Vilantis/VILJeans/VIL-Jeans-Cream.png';
        document.getElementById('productColor4').innerHTML = "Cream";
      }else if(colordata==4){
        document.getElementById('productImg4').src='assets/img/Vilantis/VILJeans/VIL-Jeans-Kuning.png';
        document.getElementById('productColor4').innerHTML = "Kuning";
      }else if(colordata==5){
        document.getElementById('productImg4').src='assets/img/Vilantis/VILJeans/VIL-Jeans-Merah.png';
        document.getElementById('productColor4').innerHTML = "Merah";
      }else if(colordata==6){
        document.getElementById('productImg4').src='assets/img/Vilantis/VILJeans/VIL-Jeans-Oren.png';
        document.getElementById('productColor4').innerHTML = "Orange";
      }else if(colordata==7){
        document.getElementById('productImg4').src='assets/img/Vilantis/VILJeans/VIL-Jeans-Putih.png';
        document.getElementById('productColor4').innerHTML = "Putih";
      }
    }
    else if(productType=='aquadakarpet'){
      if (colordata==1){
        document.getElementById('productImg').src='assets/img/Aquada karpet/AQK-Hitam.png';
        document.getElementById('productColor').innerHTML = "Hitam";
      }else if(colordata==2){
        document.getElementById('productImg').src='assets/img/Aquada karpet/AK-Abu.png';
        document.getElementById('productColor').innerHTML = "Abu";
      }else if(colordata==3){
        document.getElementById('productImg').src='assets/img/Aquada karpet/AQK-Iguana.png';
        document.getElementById('productColor').innerHTML = "Iguana";
      }else if(colordata==4){
        document.getElementById('productImg').src='assets/img/Aquada karpet/AQK-Moca.png';
        document.getElementById('productColor').innerHTML = "Moca";
      }
    }else if(productType=='aquadaplus'){
      if (colordata==1){
        document.getElementById('productImg').src='assets/img/aquadaplus80.png';
        document.getElementById('productColor').innerHTML = "80%";
      }else if(colordata==2){
        document.getElementById('productImg').src='assets/img/aquadaplus60.png';
        document.getElementById('productColor').innerHTML = "60%";
      }else if(colordata==3){
        document.getElementById('productImg').src='assets/img/aquadaplus40.png';
        document.getElementById('productColor').innerHTML = "40%";
      }
    }else if(productType=='ktt'){
      if (colordata==1){
        document.getElementById('productImg2').src='assets/img/aquadakttsilverhitam80.png';
        document.getElementById('productColor2').innerHTML = "KTT Silver Hitam 80%";
      }else if(colordata==2){
        document.getElementById('productImg2').src='assets/img/aquadakttsilverhitam60.png';
        document.getElementById('productColor2').innerHTML = "KTT Silver Hitam 60%";
      }else if(colordata==3){
        document.getElementById('productImg2').src='assets/img/aquadakttsilverhitam40.png';
        document.getElementById('productColor2').innerHTML = "KTT Silver Hitam 40%";
      }else if (colordata==4){
        document.getElementById('productImg2').src='assets/img/aquadakttsilverhijau80.png';
        document.getElementById('productColor2').innerHTML = "KTT Silver Hijau 80%";
      }else if(colordata==5){
        document.getElementById('productImg2').src='assets/img/aquadakttsilverhijau60.png';
        document.getElementById('productColor2').innerHTML = "KTT Silver Hijau 60%";
      }else if(colordata==6){
        document.getElementById('productImg2').src='assets/img/aquadakttsilverhijau40.png';
        document.getElementById('productColor2').innerHTML = "KTT Silver Hijau 40%";
      }
    }else if(productType=='karpetmewah'){
      if(colordata==1){
        document.getElementById('productImg').src='assets/img/Karpet Set Mewah/Hitam2.png';
        document.getElementById('productColor').innerHTML = "Hitam";
      }else if(colordata==2){
        document.getElementById('productImg').src='assets/img/Karpet Set Mewah/Abu2.png';
        document.getElementById('productColor').innerHTML = "Abu";
      }
      else if(colordata==3){
        document.getElementById('productImg').src='assets/img/Karpet Set Mewah/Iguana2.png';
        document.getElementById('productColor').innerHTML = "Iguana";
      }else if(colordata==4){
        document.getElementById('productImg').src='assets/img/Karpet Set Mewah/Mocca2.png';
        document.getElementById('productColor').innerHTML = "Mocca";
      }
    }else if(productType=='aksesoris'){
      if (colordata==1){
        document.getElementById('productImg').src='assets/img/Abu Terang-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Abu Terang-Hitam";
      }else if(colordata==2){
        document.getElementById('productImg').src='assets/img/Abu Tua-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Abu Tua-Hitam";
      }else if(colordata==3){
        document.getElementById('productImg').src='assets/img/Biru-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Biru-Hitam";
      }else if(colordata==4){
        document.getElementById('productImg').src='assets/img/Coklat Gelap-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Coklat Gelap-Hitam";
      }else if(colordata==5){
        document.getElementById('productImg').src='assets/img/Hijau-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Hijau-Hitam";
      }else if(colordata==6){
        document.getElementById('productImg').src='assets/img/Hitam-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Hitam-Hitam";
      }else if(colordata==7){
        document.getElementById('productImg').src='assets/img/Krem-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Krem-Hitam";
      }else if(colordata==8){
        document.getElementById('productImg').src='assets/img/Kuning-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Kuning-Hitam";
      }else if(colordata==9){
        document.getElementById('productImg').src='assets/img/Latte-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Latte-Hitam";
      }else if(colordata==10){
        document.getElementById('productImg').src='assets/img/Merah-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Merah-Hitam";
      }else if(colordata==11){
        document.getElementById('productImg').src='assets/img/Mocca-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Mocca-Hitam";
      }else if(colordata==12){
        document.getElementById('productImg').src='assets/img/Oranye-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Oranye-Hitam";
      }else if(colordata==13){
        document.getElementById('productImg').src='assets/img/Pink-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Pink-Hitam";
      }else if(colordata==14){
        document.getElementById('productImg').src='assets/img/Ungu-Hitam2.png';
        document.getElementById('productColor').innerHTML = "Ungu-Hitam";
      }
    }
  }

  