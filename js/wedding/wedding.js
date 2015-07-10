$(document).ready(function() {
  
//   $('li.checkboxes, li.radio_buttons').each(function(){
//     var height = $(this).height();
//     if($(window).width() > 767 ){
//       $(this).children('span').height(height);
//     }
//   });
  
//   resizeItems();
  
//   $(window).resize(function(){
//     resizeItems();
//   });
  
//   $('.next').click(function(){
//     var increment_size = $('.size-maintainer').width(),
//         margin = $('.items div.active').css("marginLeft"),
//         scroll_size =  parseInt(margin,10) - increment_size;

//     if($(this).siblings('.items').children('div.active').next().length > 0){
      
//       $(this).siblings('.items').children('div.active').animate({ marginLeft: scroll_size }, function(){
//         var div_width = $(this).width() * -1;
//         if(parseInt($(this).css("marginLeft"),10) <= div_width){
//           $(this).removeClass("active").next().addClass("active");
//         }
//       });
//     }
    
//   });
  
//   $('.prev').click(function(){
//     var increment_size = $('.size-maintainer').width(),
//         margin = $('.items div.active').css("marginLeft"),
//         scroll_size =  parseInt(margin,10) + increment_size;

//     if(parseInt(margin,10) < 0){
//       $('.items div.active').animate({ marginLeft: scroll_size });
//     }else if($(this).siblings('.scrollable').children('.items').children('div.active').prev().length > 0){
//       scroll_size = parseInt($('.items div.active').prev().css("marginLeft"),10) + increment_size;
//       $(this).siblings('.scrollable').children('.items').children('div.active').removeClass('active').prev().addClass('active').animate({ marginLeft: scroll_size });
//     }
    
    
    
//   });
  
  
  
// });

// function resizeItems(){
//   var scroller_size = $('.size-maintainer').width();
//   if(scroller_size <= 310){
//     $('.items div img').width(scroller_size);
//     $('.items div').width(scroller_size * 3);
//   }else if($(window).width() <= 767){
//     var img_margin = (scroller_size - 310)/2;
    
//     if(img_margin > 0){
//       $('.items div').width(930 + (img_margin * 6));
    
//       $('.items div img').css({
//         marginLeft:img_margin,
//         marginRight:img_margin
//       });
//     }
    
//     $('.size-maintainer').height(310);
//   }else{
//     $('.items div').width(scroller_size);
//     $('.items div img').attr('style', '');
    
//     $('.size-maintainer').height(scroller_size * .284926471);
    
//   }
  
// };
// (function () {
//   "use strict";
//   var i, initialize = function (map_item) {
//     var geocoder = new google.maps.Geocoder();

//     geocoder.geocode({
//       address: map_item.address
//     },
//       function (locResult) {
//         var map, mapOptions, marker, lat, lng;

//         if (locResult.length > 0) {
//           lat = locResult[0].geometry.location.lat();
//           lng = locResult[0].geometry.location.lng();

//           mapOptions = {
//             scrollwheel: false,
//             draggable: false,
//             zoom: map_item.zoom,
//             center: new google.maps.LatLng(lat, lng),
//             disableDefaultUI: true,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//           };

//           map = new google.maps.Map(document.getElementById(map_item.canvas),
//             mapOptions);

//           marker = new google.maps.Marker({
//             position: new google.maps.LatLng(lat, lng),
//             map: map,
//             clickable: true,
//             title: map_item.title
//           });
//         } else {
//           $(map_item.title).html("Error with the address: {{section.data.address}}");
//         }
//       });
//   };

//   for (i = 0; i < maps.length; i++) {
//     initialize(maps[i]);
//   }

    function changeImages(i) {
        document.getElementById('banner_img').src = '../../css/wedding/pics/pic' + i + '.png';
    }

    var i = 1;
    function change() {
        setInterval(function () {
            if (i < 7) {
                changeImages(i);
            } else {
                i=1;
                changeImages(i);
            }
            i++;
        }, 10000);
    }

    change();

}).call(this);
