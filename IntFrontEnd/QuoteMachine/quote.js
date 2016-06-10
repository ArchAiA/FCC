$.ajaxSetup({
  cache: false
});

var getQuote = function(){

$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(json) {
 quoteContent = String(json[0].content);
 author = "-- "+ String(json[0].title);
  $('#quote-content').html(quoteContent);
  $('#author').html(author);

  });

}

$('#quoteButton').on('click',function(){
  getQuote();
  // tweetParse=tweetLink(tweetContent);
    });


















//   $("#quoteButton").click(function() {  
//
// $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
//   $("body").append(a[0].content + "<p>— " + a[0].title + "</p>")
// });
// });
//
// var xhr = new XMLHttpRequest();
// xhr.open('GET', encodeURI('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&fiLter[posts_per_page]=1'));
// xhr.onload = function() {
//    if (xhr.status === 200) {
//        alert('User\'s name is ' + xhr.responseText);
//    }
//    else {
//        alert('Request failed.  Returned status of ' + xhr.status);
//    }
// };
// xhr.send();
//






//
// $(document).ready(function() {
//
//   $("#quoteButton").click(function() {  
//
//       jsonResults = $.ajax({
//         method: 'POST',
//         url: 'http://quotesondesign.com/wp-json/posts',
//         data: {filter[orderby]: 'rand', filter[posts_per_page]: 1},
//         dataType: 'jsonp',
//       });
//
//       alert(jsonResults);
//         // success: function(returnData
//         //   // $("#test").text(data);
//         //     alert('test');
//         //     $("#quote-content").text('This has been changed');
//         // };
//   });
//
// }); //ADDED FOR TESTING.  DELETE ONLY THIS LINE TO GO BACK TO ORIGINAL

//     $.getJSON('http://quotesondesign.com/wp-json/posts', {filter[orderby]:'rand', fiLter[posts_per_page]:'1'}, function(json) {
//       alert(html);
//
//       var html = "";
//       json.forEach(function(val) {
//         var keys = Object.keys(val);
//         keys.forEach(function(key) {
//           html += "<b>" + key + "</b>: " + val[key] + "<br>";
//         });
//       });    
//       $("#quote-content").text(html);
//
//         
//     });
//   });
// });




























//
//
//
//
//
//
// $(document).ready(function() {
//   $("#quoteButton").on("click", function() {
//     $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&fiLter[posts_per_page]=1", function(json) {
//       $("#quote-content").html(JSON.stringify(json));
//     });
//   });
// });
//
//
//
//













//
// Query( function( $ ) {
//   $( '#quoteButton' ).on( 'click', function ( e ) {
//
//     e.preventDefault();
//
//     $.ajax( {
//       url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&fiLter[posts_per_page]=1",
//       success: function ( data ) {
//         var post = data.shift(); // The data is an array of posts. Grab the first one.
//         $( '#quote-title' ).text( post.title );
//         $( '#quote-content' ).html( post.content );
//
//         // If the Source is available, use it. Otherwise hide it.
//         if ( typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined' ) {
//           $( '#quote-source' ).html( 'Source:' + post.custom_meta.Source );
//         } else {
//           $( '#quote-source' ).text( '' );
//         }
//       },
//       cache: false
//     } );
//   } );
// } );
