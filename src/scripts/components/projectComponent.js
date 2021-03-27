
import setAttributes from '../setAttributes';
import displayTask from './taskComponent';

const allProjectTasks = (projectId, tasksList) => {
  const tasksContainer = document.createElement('div');

  tasksList.forEach(task => {
    const {
      title, description, priority, date,
    } = task;
    const markup = displayTask(projectId,
      tasksList.indexOf(task),
      title,
      description,
      date,
      priority);
    tasksContainer.appendChild(markup);
  });
  return tasksContainer;
};

const displayProject = (projectId, project) => {
  const wrapperProject = document.createElement('div');
  setAttributes(wrapperProject, {
    class: 'col-xs-12 col-sm-6 col-md-4 pt-5', id: `project-${projectId}`, 'data-index': projectId,
  });

  const card = document.createElement('div');
  card.className = 'card shadow';

  const projectHeader = document.createElement('div');
  projectHeader.className = 'card-header text-white bg-dark d-flex justify-content-between pt-3';

  const projectHeaderTitle = document.createElement('h6');
  projectHeaderTitle.textContent = project.title;

  const wraperIcon = document.createElement('div');

  const modalEditIcon = document.createElement('a');
  setAttributes(modalEditIcon, {
    class: 'text-light c-pointer editProject', id: `editProject-${projectId}`, 'data-index': projectId,
  });

  const modalDeleteIcon = document.createElement('a');
  setAttributes(modalDeleteIcon, {
    class: 'text-light c-pointer deleteProject', id: `deleteProject-${projectId}`, 'data-index': projectId, 'data-bs-toggle': 'modal', 'data-bs-target': '#delProject',
  });

  const editIcon = document.createElement('i');
  editIcon.className = 'fas fa-edit mx-3';

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fas fa-trash mx-3';

  const projectBody = document.createElement('div');
  projectBody.className = 'card-body';

  // Append tasks here
  // console.log(project.tasksList);
  const allTasks = allProjectTasks(projectId, project.tasksList);

  projectBody.appendChild(allTasks);

  const projectFooter = document.createElement('div');
  projectFooter.className = 'card-footer d-grid gap-2';

  const btnAddTask = document.createElement('button');
  setAttributes(btnAddTask, {
    class: 'btn btn-primary text-light shadow add-task', type: 'button', id: 'save-task', 'data-bs-toggle': 'modal', 'data-bs-target': '#addTask', 'data-projectindex': projectId,
  });
  btnAddTask.innerHTML = 'Add task';

  modalEditIcon.appendChild(editIcon);
  modalDeleteIcon.appendChild(deleteIcon);

  wraperIcon.append(modalEditIcon, modalDeleteIcon);

  projectHeader.append(projectHeaderTitle, wraperIcon);

  projectFooter.appendChild(btnAddTask);

  card.append(projectHeader, projectBody, projectFooter);

  wrapperProject.appendChild(card);

  return wrapperProject;
};

export default displayProject;