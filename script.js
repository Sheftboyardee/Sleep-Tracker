const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');
let isSidebarOpen = false;

function toggleSidebar() {
  sidebar.classList.toggle('open');
  content.classList.toggle('open');
  isSidebarOpen = !isSidebarOpen;
  updateToggleButton();
}

function updateToggleButton() {
  const toggleButton = document.querySelector('#toggleButton');
  toggleButton.innerHTML = isSidebarOpen ? '<img src="icons/open_list.png" class="icon">' : '<img src="icons/closed_list.png" class="icon">';
}

function scrollToElement(elementId) {
    const headerHeight = document.querySelector('h2').offsetHeight; 
    const elementTop = document.querySelector(`#${elementId}`).offsetTop;
    const scrollToPosition = elementTop - headerHeight;
  
    window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
  }
  
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.createElement('button');
  toggleButton.id = 'toggleButton';
  toggleButton.addEventListener('click', toggleSidebar);

  const buttonImage = document.createElement('img');
  buttonImage.src = 'icons/closed_list.png';
  buttonImage.classList.add('icon');
  toggleButton.appendChild(buttonImage);

  document.body.prepend(toggleButton);
});
