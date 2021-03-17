import storage from './storage';
import Task from './task';
import Project from './project';


const UI = (() => {
  const btnCreateProject = document.getElementById('create-project');
  const projectsUser = document.getElementById('projects-user');
  const currentProject = document.getElementById('current-project');
  const btnAddTask = document.getElementById('add-task');
  const projectTask = document.getElementById('project-tasks');
  const currentTask = document.getElementById('current-task');
  const detailsTask = document.getElementById('detail-task');
  const inputDueDate = document.getElementById('due-date');
  const selectPriority = document.getElementById('select-priority');
  const inputDescription = document.getElementById('description');
  const inputNameTask = document.getElementById('name-task');
  const btnEdit = document.getElementById('edit-task');
  const btnSave = document.getElementById('save-task');
  const divProjectsName = document.getElementById('projects-names');
  const divTaskName = Document.getElementById('tasks-names');
  const alertMessage = document.querySelector('.alert');

  let chosenProject;
  let actualTask;
  const defaultProject = Project({ title: 'Default' });

  const renderProjects = () => {
    const projects = storage.allNamesProjects().sort();
    projectsUser.innerHTML = '';

    projects.forEach((project) => {
      const content = `
      <div class="item my-1 d-flex justify-content-between">
        <span>${project}</span>
        <button class="remove btn-small btn-primary ${project.toLowerCase()}-hidden " data-name="${project}">Delete</button>
      </div>
      `;
      projectsUser.insertAdjacentHTML('beforeend', content);
    });
  };

  const renderTask = () => {
    projectTask.innerHTML = '';
    for (let i = 0; i < chosenProject.tasks.length; i += 1) {
      const div = document.createElement('div');
      const divCheck = document.createElement('div');
      const button = document.createElement('button');
      const spanDate = document.createElement('span');
      const span = document.createElement('span');
      const checkIsDone = document.createElement('input');

      button.setAttribute('class', 'btn-small btn-primary delete');
      button.setAttribute('data-task', `${chosenProject.tasks[i].title}`);
      button.innerHTML = 'Delete';
      divCheck.setAttribute('class', 'form-check form-check-inline');
      checkIsDone.type = 'checkbox';
      checkIsDone.setAttribute('class', 'form-check-input');
      checkIsDone.setAttribute('data-task', `${chosenProject.tasks[i].title}`);
      div.setAttribute('class', 'item my-1 d-flex');
      span.innerHTML = chosenProject.tasks[i].title;
      if (chosenProject.tasks[i].isDone) {
        span.setAttribute('class', 'name-task flex-grow-1 line-through');
      } else {
        span.setAttribute('class', 'name-task flex-grow-1');
      }

      divCheck.appendChild(checkIsDone);
      div.appendChild(divCheck);
      div.appendChild(span);
      if (checkIsDone.tasks[i].dueDate !== '') {
        spanDate.innerHTML = chosenProject.tasks[i].dueDate;
        div.appendChild(spanDate);
      }
      div.appendChild(button);
      projectTasks.appendChild(div);
    }
  };

  const itemActive = (container) => {
    const items = container.getElementsByClassName('item');
    for (let i = 0; i < items.length; i += 1) {
      items[i].classList.remove('active');
    }
  };

  const createProject = () => {
    const nameProject = document.getElementById('project-name').value;
    if (nameProject !== '' && !storage.allNamesProjects().includes(nameProject)) {
      const newProject = Project({ title: nameProject });
      storage.create(newProject.title, newProject);
    }
    renderProjects();
  };

  const selectedProject = (e) => {
    if (e.target.tagName.toLowerCase() === 'span') {
      currentProject.innerText = e.target.innerText;
      chosenProject = Project(storage.read(e.target.innerText));
      itemActive(projectsUser);
      e.target.parentNode.classList.add('active');
      renderTask();
    } else if (e.target.classList.contains('remove')) {
      storage.remove(e.target.dataset.name);
      projectTasks.innerHTML = '';
      renderProjects();
    }
  };

  const cleanInputValues = () => {
    inputDueDate.value = '';
    selectPriority.value = '';
    inputDescription.value = '';
    inputNameTask.value = '';
  };

  const addTaskToProject = () => {
    cleanInputValues();
    detailsTask.classList.remove('d-none');
    divProjectsName.classList.add('opacity');
    btnSave.classList.remove('d-none');
    btnEdit.classList.add('d-none');
  };

  const saveTask = () => {
    const newTask = Task({});
   newTask.dueDate = inputDueDate.value;
   newTask.priority = selectPriority.value;
   newTask.title = inputNameTask.value;
   newTask.description = inputDescription.value;
    
  }
});