/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */

import allProjectsMarkup from './renderProjects';
import setAttributes from '../setAttributes';
import { taskPriority } from './addTask';

const convertTaskPriority = (priorityName) => {
  if (priorityName === 'Low') { return '1'; }
  if (priorityName === 'Medium') { return '2'; }
  if (priorityName === 'High') { return '3'; }
  return 0;
};

const handleEditingTask = event => {
  const editElement = event.currentTarget;
  const correspondIndex = editElement.dataset.index;
  const correspondPrjctIndex = editElement.dataset.indexProject;

  const myModalEl = document.getElementById('addTask');
  const modal = bootstrap.Modal.getInstance(myModalEl);

  // Modify the title as well as the placeholder text
  const header = document.querySelector('#exMlTask');
  header.innerHTML = 'Edit Task';
  const updateBtn = document.querySelector('#update-btn-task');
  setAttributes(updateBtn, {
    'data-index': correspondIndex, 'data-index-project': correspondPrjctIndex,
  });
  const saveBtn = document.querySelector('#save-btn-task');
  saveBtn.classList.add('hide');
  updateBtn.classList.remove('hide');

  const title = document.querySelector('#task-title-input');
  const description = document.querySelector('#task-textarea');
  const priority = document.querySelector('#task-select');
  const date = document.querySelector('#task-date-input');

  const prjs = JSON.parse(localStorage.getItem('projects'));
  title.value = prjs[correspondPrjctIndex].tasksList[correspondIndex].title;
  description.value = prjs[correspondPrjctIndex].tasksList[correspondIndex].description;
  priority.value = convertTaskPriority(
    prjs[correspondPrjctIndex].tasksList[correspondIndex].priority,
  );
  date.value = prjs[correspondPrjctIndex].tasksList[correspondIndex].date;

  modal.show();
};

const editTask = () => {
  const editTaskBtn = document.querySelectorAll('.editTask');
  editTaskBtn.forEach(editTaskElement => {
    editTaskElement.addEventListener('click', handleEditingTask);
  });
};

const handleUpdateTask = () => {
  const updateBtn = document.querySelector('#update-btn-task');
  updateBtn.addEventListener('click', (event) => {
    const editElement = event.currentTarget;
    const correspondIndex = editElement.dataset.index;
    const correspondPrjctIndex = editElement.dataset.indexProject;

    const title = document.querySelector('#task-title-input').value;
    const description = document.querySelector('#task-textarea').value;
    const priority = taskPriority(document.querySelector('#task-select').value);
    const date = document.querySelector('#task-date-input').value;
    const prjs = JSON.parse(localStorage.getItem('projects'));
    const projectOfInterest = prjs[correspondPrjctIndex];
    const newTaskDetails = {
      title, description, priority, date,
    };
    projectOfInterest.tasksList[correspondIndex] = newTaskDetails;

    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(prjs));
    allProjectsMarkup(JSON.parse(localStorage.getItem('projects')));

    const myModalEl = document.getElementById('addTask');
    const modal = bootstrap.Modal.getInstance(myModalEl);
    modal.hide();
  });
};

export { editTask, handleUpdateTask };