const projectButton = document.getElementById('button1');
const homeButton = document.getElementById('button2');

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

projectButton.addEventListener('click', () => {
  openInNewTab("Project5/index.html");
  });
  
homeButton.addEventListener('click', () => {
  window.location.href = "../index.html";
  });