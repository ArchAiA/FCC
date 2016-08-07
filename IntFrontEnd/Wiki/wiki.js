baseWikiSearchUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="
// baseWikiSearchUrl = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exchars=175&exlimit=20&titles="

function search() {
  $.ajax({
    // url: baseWikiSearchUrl + $('#search').val(),
    url: baseWikiSearchUrl + 'einstein',

    dataType: 'jsonp',
    type: 'POST',
    success: function(data) {

      // Clearing the results, and the old array of results
      $('#searchResults').empty();
      resultsArr = [];

      // Take the resulting jsonp object (data) from the search and store in tempArr
      tempArr = data.query.search;

      //For every item in the jsonp object returned, output to #searchResults
      for(var item in tempArr) {
        html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + tempArr[item].title + '"target="_blank"><h3>' + tempArr[item].title + '</h3><p>' + tempArr[item].snippet + '</p></a></div>';
        $("#searchResults").append(html);
      }


    }
  });



};


$('#search').keyup(function() {
  search();
});
