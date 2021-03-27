/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */

import allProjectsMarkup from './renderProjects';
import setAttributes from '../setAttributes';

const handleDeletingTask = (event) => {
  const deleteElement = event.currentTarget;
  const correspondingIndex = deleteElement.dataset.index;
  const correspondPrjctIndex = deleteElement.dataset.indexProject;

  const title = document.querySelector('#task-title-confirm');
  const prjs = JSON.parse(localStorage.getItem('projects'));
  title.innerHTML = `Do you want to delete "${prjs[correspondPrjctIndex].tasksList[correspondingIndex].title}"?`;

  const deleteBtn = document.querySelector('#delBtnTask');
  setAttributes(deleteBtn, {
    'data-index': correspondingIndex, 'data-index-project': correspondPrjctIndex,
  });
};

const deleteTask = () => {
  const deleteTaskBtn = document.querySelectorAll('.deleteTask');
  deleteTaskBtn.forEach(delTask => {
    delTask.addEventListener('click', handleDeletingTask);
  });
};

const handleDeleteTask = () => {
  const deleteBtn = document.querySelector('#delBtnTask');
  deleteBtn.addEventListener('click', (event) => {
    const deleteElement = event.currentTarget;
    const correspondingIndex = deleteElement.dataset.index;
    const correspondPrjctIndex = deleteElement.dataset.indexProject;
    const prjs = JSON.parse(localStorage.getItem('projects'));
    prjs[correspondPrjctIndex].tasksList.splice(correspondingIndex, 1);
    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(prjs));
    allProjectsMarkup(JSON.parse(localStorage.getItem('projects')));

    const myModalDel = document.getElementById('delTask');
    const modal = bootstrap.Modal.getInstance(myModalDel);

    modal.hide();
  });
};

export { deleteTask, handleDeleteTask };