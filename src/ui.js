import storage from './storage';
import Task from './task';
import Project from './project';

const UI = (() => {
  const btnCreateProject = document.getElementById('create-project');
  const projectsUser = document.getElementById('projects-user');
  const currentProject = document.getElementById('current-project');
  const btnAddTask = document.getElementById('add-task');
  const projectTasks = document.getElementById('project-tasks');
  const currentTask = document.getElementById('current-task');
  const detailsTask = document.getElementById('detail-task');
  const inputDueDate = document.getElementById('due-date');
  const selectPriority = document.getElementById('select-priority');
  const inputDescription = document.getElementById('description');
  const inputNameTask = document.getElementById('name-task');
  const btnEdit = document.getElementById('edit-task');
  const btnSave = document.getElementById('save-task');
  const divProjectsName = document.getElementById('projects-names');
  const divTasksName = document.getElementById('tasks-names');
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

  const renderTasks = () => {
    projectTasks.innerHTML = '';
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
      if (chosenProject.tasks[i].dueDate !== '') {
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
      renderTasks();
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


  const AddTaskToProject = () => {
    cleanInputValues();
    detailsTask.classList.remove('d-none');
    divProjectsName.classList.add('opacity');
    divTasksName.classList.add('opacity');
    btnSave.classList.remove('d-none');
    btnEdit.classList.add('d-none');
  };

  const saveTask = () => {
    const newTask = Task({});
    newTask.dueDate = inputDueDate.value;
    newTask.priority = selectPriority.value;
    newTask.description = inputDescription.value;
    newTask.title = inputNameTask.value;
    if (newTask.dueDate !== '' && newTask.priority !== '' && newTask.description !== '' && newTask.title !== '') {
      if (!chosenProject) chosenProject = defaultProject;
      chosenProject.tasks.push(newTask);
      storage.update(chosenProject.title, chosenProject);
      renderTasks();
      divProjectsName.classList.remove('opacity');
      divTasksName.classList.remove('opacity');
      detailsTask.classList.add('d-none');
      cleanInputValues();
    }
  };

  const selectedTask = (e) => {
    if (e.target.classList.contains('name-task')) {
      currentTask.innerText = e.target.innerText;
      actualTask = Task(chosenProject.findTask(e.target.innerText));
      inputDueDate.value = actualTask.dueDate;
      selectPriority.value = actualTask.priority;
      inputDescription.value = actualTask.description;
      inputNameTask.value = actualTask.title;
      btnSave.classList.add('d-none');
      btnEdit.classList.remove('d-none');
      itemActive(projectTasks);
      e.target.parentNode.classList.add('active');
      detailsTask.classList.remove('d-none');
    } else if (e.target.classList.contains('delete')) {
      const chosenTask = chosenProject.tasks.filter(task => task.title !== e.target.dataset.task);
      chosenProject.tasks = chosenTask;
      storage.update(chosenProject.title, chosenProject);
      currentTask.innerText = 'Current Task';
      detailsTask.classList.add('d-none');
      renderTasks();
    } else if (e.target.classList.contains('form-check-input')) {
      const taskToCheck = e.target.dataset.task;
      for (let i = 0; i < chosenProject.tasks.length; i += 1) {
        if (chosenProject.tasks[i].title === taskToCheck) {
          chosenProject.tasks[i].isDone = !chosenProject.tasks[i].isDone;
          storage.update(chosenProject.title, chosenProject);
          renderTasks();
          return;
        }
      }
    }
  };

  const editTask = () => {
    actualTask.dueDate = inputDueDate.value;
    actualTask.priority = selectPriority.value;
    actualTask.description = inputDescription.value;
    if (actualTask.dueDate !== '' && actualTask.priority !== '' && actualTask.description !== '' && inputNameTask.value !== '') {
      for (let i = 0; i < chosenProject.tasks.length; i += 1) {
        if (chosenProject.tasks[i].title === actualTask.title) {
          actualTask.title = inputNameTask.value;
          chosenProject.tasks[i] = actualTask;
          storage.update(chosenProject.title, chosenProject);
          renderTasks();
          alertMessage.classList.remove('d-none');
          detailsTask.classList.add('d-none');
          setTimeout(() => {
            alertMessage.classList.add('d-none');
          }, (3 * 1000));
          return;
        }
      }
    }
  };

  const createDefaultProject = () => {
    if (storage.create(defaultProject.title, defaultProject)) {
      chosenProject = defaultProject;
    } else {
      chosenProject = Project(storage.read(defaultProject.title));
      renderTasks();
    }
  };

  const loadListeners = () => {
    createDefaultProject();
    renderProjects();
    btnCreateProject.addEventListener('click', createProject);
    projectsUser.addEventListener('click', selectedProject);
    btnAddTask.addEventListener('click', AddTaskToProject);
    projectTasks.addEventListener('click', selectedTask);
    btnEdit.addEventListener('click', editTask);
    btnSave.addEventListener('click', saveTask);
  };

  return {
    loadListeners,
  };
}

)();

export default UI;