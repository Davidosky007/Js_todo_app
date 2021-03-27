import render from './scripts/dom-handlers/render';
import './style.css';
import newProject from './scripts/project';

if (!localStorage.getItem('projects')) {
  localStorage.setItem('projects', JSON.stringify([newProject('Default Project')]));
}
render();