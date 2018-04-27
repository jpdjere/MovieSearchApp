let fetched_results;
let sortedYear = 1, sortedName = 1;
let loader = document.getElementById("loader");
const MovieSearch = (search_terms, whole_words, whole_sentence) => {

  fetch('/search', {
    body: JSON.stringify({
      search_terms:search_terms,
      whole_words:whole_words,
      whole_sentence:whole_sentence
    }),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
  })
  .then(response => response.json()) // parses response to JSON
  .then(response => {
    loader.style.display = "none";
    sort.style.display = "flex";
    fetched_results = response;
    renderMovies(response);
  })

}

const renderMovies = (movies) => {
  console.log("RENDER");
  let results = document.getElementById('results');
  results.innerHTML = "";
  movies.forEach(movie => {
    let li = document.createElement("li")
    li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "my-list-items");
    let movieName = document.createTextNode(movie.originalTitle);
    let year = document.createElement("span");
    year.classList.add("badge", "badge-info", "badge-pill", "blue");
    year.innerHTML = movie.startYear;
    li.appendChild(movieName);
    li.appendChild(year);
    results.appendChild(li);
  })
}

//Add EventsListeners to checkboxes
let whole_words = document.getElementById("whole_words");
let whole_sentence = document.getElementById("whole_sentence");
whole_sentence.addEventListener('click',(e) => {
  if(e.target.checked){
    whole_words.checked = false;
    whole_words.disabled = true;
  }else{
    whole_words.disabled = false;
  }
})

//Add EventsListeners to sort buttons
let sort_name = document.getElementById("sort_name");
let sort_year = document.getElementById("sort_year");
sort_name.addEventListener('click',(e) => {
  let sorted = fetched_results.sort((a,b) => {
    if(a.originalTitle < b.originalTitle) return -1*sortedName;
    if(a.originalTitle > b.originalTitle) return 1*sortedName;
    return 0;
  })
  sortedName = sortedName * -1
  renderMovies(sorted);
})
sort_year.addEventListener('click',(e) => {
  let sorted = fetched_results.sort((a,b) => {
    if(a.startYear < b.startYear) return -1*sortedYear;
    if(a.startYear > b.startYear) return 1*sortedYear;
    return 0;
  })
  sortedYear = sortedYear * -1
  renderMovies(sorted);
})
