document.getElementById("logo").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
window.addEventListener('scroll', function() {
    const progressBar = document.querySelector('.progress-bar');
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const height = document.documentElement.clientHeight;
    const progress = (scrollTop / (scrollHeight - height)) * 100;
    progressBar.style.height = progress + '%';
});
const scrollUpButton = document.querySelector('.scroll-up-button');

scrollUpButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.onload = function() {
    var preloader = document.getElementById('preloader');
    var loadingBar = document.getElementById('loading-bar');
    var percentage = document.getElementById('percentage');
    var progress = 0;
  
    var interval = setInterval(function() {
      progress += 5;
      percentage.textContent = progress + '%';
      loadingBar.style.width = progress + '%';
  
      if (progress >= 100) {
        clearInterval(interval);
        preloader.style.display = 'none';
      }
    }, 50);
  };