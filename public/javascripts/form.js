function processForm(e) {
  if (e.preventDefault) e.preventDefault();
  loader.style.display = "flex";
  let search_terms = e.target[0].value;
  let whole_words_value = document.querySelector("#whole_words").checked;
  let whole_sentence_value = document.querySelector("#whole_sentence").checked;
  MovieSearch(search_terms,whole_words_value,whole_sentence_value)
  return false;
}

var form = document.getElementById('search_form');
if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}
