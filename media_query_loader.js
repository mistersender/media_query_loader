;(function(dataset, media){
  var links = document.querySelectorAll('link[data-media]');
  var media_queries = [];

  // add a new media query css to the page
  function add(){
    for(var i = 0; i < links.length; i++){
      if(links[i][dataset][media] == this[media]){
        // let the browser handle natively the fetching of files & media displays
        links[i].setAttribute("href", links[i][dataset].href);
        links[i].setAttribute(media, links[i][dataset][media]);
        // remove the listener from the page since it's done what it needed to do
        media_queries[i].removeListener(add);
      }
    }
  };

  // create all of the media query listeners (if necessary)
  for(var i = 0; i < links.length; i++){
    media_queries.push(window.matchMedia(links[i][dataset][media]));
    // if the query is true already, load the css, otherwise add a listener
    media_queries[i].matches ? add.apply(media_queries[i]) : media_queries[i].addListener(add);
  }
})('dataset', 'media');
