const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');
const buttons = document.querySelectorAll('.tab-btn');

about.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove active from other buttons;
    articles.forEach((btn) => {
      btn.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }
});
