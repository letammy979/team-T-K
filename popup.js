document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('button');
  btn.addEventListener('click', function() {
    const msg = document.createElement('p');
    msg.innerText = 'hi';
    document.querySelector('body').appendChild(msg);
    chrome.tabs.create({url: 'https://www.google.com/'});
  });
}, false);