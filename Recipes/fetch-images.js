

var API_KEY = '23678805-08f7bbde2f0316702712f050f';

var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('cottage cheese');

$.getJSON(URL, function(data) {
  if (parseInt(data.totalHits) > 0)
    $.each(data.hits, function(i, hit) {
      console.log(hit.pageURL);
    });
  else
    console.log('No hits');
});
