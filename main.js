import './style.css';
import { printInfo } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button">click to see changes</button>
      <button id="linkToZhihu" type="button">click to navigate</button>

    </div>
  </div>
`;

printInfo(document.querySelector('#counter'));

document.querySelector('#linkToZhihu').addEventListener('click', () => {
  if (window.opener) {
    window.opener.location = `https://www.zhihu.com`;
  }
});
