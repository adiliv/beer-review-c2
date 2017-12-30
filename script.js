var beers = [];

function addBeer (name, category, rating){
  var beerObj = {
    beerName: name,
    beerCategory: category,
    beerRating: rating
  }
  beers.push(beerObj);
}

$('.post-beer').click(handler);

function handler() {
  var name = $('.beer-input').val();
  var category = $('.category-input').val();
  var rating = $('.rating').val();
  addBeer(name, category, rating);
  renderBeers();
};

function renderBeers(){
  $('.beers-list').empty();
  for(var i = 0; i < beers.length; i++){
    $('.beers-list').append('<li> <strong>Name:</strong> ' + beers[i].beerName + ' ,  <strong>Category:</strong> ' + beers[i].beerCategory + ' , <strong>Rating:</strong> ' + beers[i].beerRating);
  }
}

var isAscending = true;

$('.sort-beer').click(sortBeers);

function sortBeers() {
  isAscending = !isAscending;
if (isAscending) {
  beers.sort(function(a, b){
    return a.beerRating -b.beerRating;
  })
} else {
	beers.sort(function(a, b){
    return b.beerRating -a.beerRating;
  	})
  }
  renderBeers();
}

