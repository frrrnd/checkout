window.onload = function() {
    const tabButtons = document.querySelectorAll('.select__item');
    const tabContents = document.querySelectorAll('.card');
  
    for (var i = 0; i < tabButtons.length; i++) {
      tabButtons[i].addEventListener('click', function(e) {
        e.preventDefault(); // cancela
        var id = this.hash.replace('#', '');
  
        for (var j = 0; j < tabContents.length; j++) {
          var tabContent = tabContents[j];
          tabContent.classList.remove('visible');
          tabButtons[j].classList.remove('active');
          if (tabContent.id === id) {
            tabContent.classList.add('visible');
          }
        }
  
        this.classList.add('active');
      });
    }
  }

  const buttons = document.querySelectorAll(".shiny");

  const readout = document.querySelector("p");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mousemove", (e) => {
      const { x, y } = buttons[i].getBoundingClientRect();
      buttons[i].style.setProperty("--x", e.clientX - x);
      buttons[i].style.setProperty("--y", e.clientY - y);
    });
}