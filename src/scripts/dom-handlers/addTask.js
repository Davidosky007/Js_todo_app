/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */

import { cleanForm } from './addProject';
import newTask from '../task';
import allProjectsMarkup from './renderProjects';
import setAttributes from '../setAttributes';

const handleAddingTask = (event) => {
  const target = event.currentTarget;
  const targetProjectIndex = target.dataset.projectindex;

  const title = document.querySelector('#task-title-input');
  const description = document.querySelector('#task-textarea');
  const priority = document.querySelector('#task-select');
  const date = document.querySelector('#task-date-input');

  cleanForm([title, description, priority, date]);

  const header = document.querySelector('#exMlTask');
  header.innerHTML = 'Add Task';
  const updateBtn = document.querySelector('#update-btn-task');
  const saveBtn = document.querySelector('#save-btn-task');
  updateBtn.classList.add('hide');
  saveBtn.classList.remove('hide');

  // Get values from the modal
  const addTaskBtn = document.querySelector('#save-btn-task');
  setAttributes(addTaskBtn, { 'data-parentindex': targetProjectIndex });
};

const addTask = () => {
  const addTaskBtns = document.querySelectorAll('.add-task');
  addTaskBtns.forEach(btn => {
    btn.addEventListener('click', handleAddingTask);
  });
};

const taskPriority = (priorityLevel) => {
  if (priorityLevel === '1') { return 'Low'; }
  if (priorityLevel === '2') { return 'Medium'; }
  if (priorityLevel === '3') { return 'High'; }
  return priorityLevel;
};

const handleAdd = () => {
  const addTaskBtn = document.querySelector('#save-btn-task');

  addTaskBtn.addEventListener('click', () => {
    const title = document.querySelector('#task-title-input').value;
    const description = document.querySelector('#task-textarea').value;
    const priority = taskPriority(document.querySelector('#task-select').value);
    const date = document.querySelector('#task-date-input').value;

    const modal = document.querySelector('#addTask');
    const modalInstance = bootstrap.Modal.getInstance(modal);
    const prjs = JSON.parse(localStorage.getItem('projects'));
    const targetProject = prjs[addTaskBtn.dataset.parentindex];

    targetProject.tasksList.push(newTask(title, description, priority, date));
    localStorage.removeItem('projects');
    localStorage.setItem('projects', JSON.stringify(prjs));
    allProjectsMarkup(JSON.parse(localStorage.getItem('projects')));

    modalInstance.hide();
  });
};

export { handleAdd, addTask, taskPriority };