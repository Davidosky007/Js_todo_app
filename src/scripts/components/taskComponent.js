import setAttributes from '../setAttributes';

const displayTask = (
  projectId,
  taskId,
  taskTitle,
  taskDetails,
  taskDate,
  taskPriority,
) => {
  const wrapperTask = document.createElement('div');
  wrapperTask.className = 'mt-3';

  const cardTask = document.createElement('div');
  cardTask.className = 'card bg-test shadow';

  const cardTaskBody = document.createElement('div');
  cardTaskBody.className = 'card-body';

  const cardTaskTitleWrapper = document.createElement('div');
  cardTaskTitleWrapper.className = 'd-flex justify-content-between';

  const cardTaskTitle = document.createElement('h5');
  cardTaskTitle.textContent = taskTitle;

  const wripperIcons = document.createElement('div');

  const modalEditIcon = document.createElement('a');
  setAttributes(modalEditIcon, {
    class: 'text-light c-pointer editTask', 'data-index': taskId, 'data-index-project': projectId,
  });

  const modalDeleteIcon = document.createElement('a');
  setAttributes(modalDeleteIcon, {
    class: 'text-light c-pointer deleteTask', 'data-index': taskId, 'data-index-project': projectId, 'data-bs-toggle': 'modal', 'data-bs-target': '#delTask',
  });

  const editIcon = document.createElement('i');
  editIcon.className = 'fas fa-edit mx-3 text-info';

  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fas fa-trash mx-3 text-danger';

  const priority = document.createElement('span');
  priority.className = 'badge rounded-pill bg-danger';
  priority.innerHTML = taskPriority;

  const details = document.createElement('p');
  details.className = 'card-text';
  details.textContent = taskDetails;

  const date = document.createElement('p');
  date.className = 'card-text';

  const dateSmall = document.createElement('small');
  dateSmall.className = 'text-muted';
  dateSmall.textContent = taskDate;

  date.append(dateSmall);

  const collapseWrapper = document.createElement('div');
  setAttributes(collapseWrapper, {
    class: 'row p-2',
  });

  const collapseBtn = document.createElement('button');
  setAttributes(collapseBtn, {
    class: 'btn btn-secondary btn-sm', 'data-bs-toggle': 'collapse', href: `#collapse${taskId}${projectId}`, role: 'button', 'aria-expanded': 'false', 'aria-controls': `collapse${taskId}${projectId}`,
  });

  collapseBtn.textContent = 'See details';

  const collapse = document.createElement('div');
  setAttributes(collapse, {
    class: 'collapse', id: `collapse${taskId}${projectId}`,
  });

  const collapseBody = document.createElement('div');
  setAttributes(collapseBody, {
    class: 'p-2',
  });

  collapseBody.appendChild(details);

  collapse.appendChild(collapseBody);
  collapseWrapper.append(collapseBtn, collapse);

  modalEditIcon.appendChild(editIcon);

  modalDeleteIcon.appendChild(deleteIcon);

  wripperIcons.append(modalEditIcon, modalDeleteIcon);

  cardTaskTitleWrapper.append(cardTaskTitle, wripperIcons);

  cardTaskBody.append(cardTaskTitleWrapper, priority, date, collapseWrapper);

  cardTask.appendChild(cardTaskBody);

  wrapperTask.appendChild(cardTask);

  return wrapperTask;
};

export default displayTask;