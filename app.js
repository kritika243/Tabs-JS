const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
const id = e.target.dataset.id;

if(id){
  // remove 'active' class from all btns and add that to only that btn which has the matching id on clicking
  btns.forEach(function(btn){
    btn.classList.remove('active');
    e.target.classList.add('active');
  });
  // hide all the articles and show only that rticle content which has the matching id on clicking
  articles.forEach(function(article){
    article.classList.remove('active');

  });
  const element = document.getElementById(id);
  element.classList.add('active');
}
});