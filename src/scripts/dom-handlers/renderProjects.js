/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */

import displayProject from '../components/projectComponent';
import { editProject } from './editProject';
import { deleteProject } from './deleteProject';
import { addTask } from './addTask';
import { editTask } from './editTask';
import { deleteTask } from './deleteTask';

const cleanProjectsDisplay = () => {
  const projectsWrapper = document.querySelector('#projects-wrapper');
  projectsWrapper.innerHTML = '';
};

const allProjectsMarkup = projects => {
  const projectsWrapper = document.querySelector('#projects-wrapper');
  cleanProjectsDisplay();

  projects.forEach(proj => {
    const projIndex = projects.indexOf(proj);
    const markup = displayProject(projIndex, proj);
    projectsWrapper.appendChild(markup);
    editProject();
    deleteProject();
    addTask();
    editTask();
    deleteTask();
  });
};

export default allProjectsMarkup;