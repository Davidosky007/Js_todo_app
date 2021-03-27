/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */

import newProject from '../project';
import allProjectsMarkup from './renderProjects';

const projects = JSON.parse(localStorage.getItem('projects'));

const cleanForm = (elts = []) => {
  elts.forEach(elt => {
    elt.value = '';
  });
};

const handleGeneratingNewInstance = () => {
  const projectTitleInput = document.querySelector('#project-title-input');

  if (projectTitleInput.value.trim().length > 1) {
    const newProjectInstance = newProject(projectTitleInput.value);
    let prjs = [];

    prjs = JSON.parse(localStorage.getItem('projects'));
    prjs.push(newProjectInstance);
    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(prjs));

    cleanForm([projectTitleInput]);

    const myModalEl = document.getElementById('addProject');
    const modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();

    allProjectsMarkup(JSON.parse(localStorage.getItem('projects')));
  } else {
    projectTitleInput.className = 'form-control is-invalid was-validated';
  }
};

const handleAddingProject = () => {
  const updateBtn = document.querySelector('#update-btn');
  const saveBtn = document.querySelector('#save-btn');
  updateBtn.classList.add('hide');
  saveBtn.classList.remove('hide');
  const newTitle = document.querySelector('#project-title-input');
  newTitle.value = '';

  const header = document.querySelector('#exMl');
  header.innerHTML = 'Add Project';
  const saveChangesBtn = document.querySelector('#save-btn');
  saveChangesBtn.addEventListener('click', handleGeneratingNewInstance);
};

const addProject = () => {
  const addProjectBtn = document.querySelector('#add-project-btn');
  addProjectBtn.addEventListener('click', handleAddingProject);
};

export { addProject, projects, cleanForm };