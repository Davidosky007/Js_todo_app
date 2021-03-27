import setAttributes from '../setAttributes';

const addTaskModal = () => {
  const wrapperModal = document.createElement('div');
  setAttributes(wrapperModal, {
    class: 'modal fade', id: 'addTask', tabindex: '-1', 'aria-labelledby': 'exMlTask', 'aria-hidden': 'true',
  });

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  const titleHeader = document.createElement('h5');
  setAttributes(titleHeader, { class: 'modal-title', id: 'exMlTask' });
  titleHeader.innerHTML = 'Add Task';

  const btnHeader = document.createElement('button');
  setAttributes(btnHeader, {
    class: 'btn-close', type: 'button', 'ta-bs-dismiss': 'modal', 'aria-label': 'Close',
  });

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  const inputTitleTask = document.createElement('input');
  setAttributes(inputTitleTask, {
    class: 'form-control mb-3', id: 'task-title-input', type: 'text', placeholder: 'Add the task title here',
  });

  const textareaTask = document.createElement('textarea');
  setAttributes(textareaTask, {
    class: 'form-control mb-3', id: 'task-textarea', row: '3', placeholder: 'Add details here',
  });

  const selectTask = document.createElement('select');
  setAttributes(selectTask, {
    class: 'form-control mb-3', id: 'task-select', 'aria-label': 'Choose your priority',
  });

  const optionLow = document.createElement('option');
  setAttributes(optionLow, {
    value: '1',
  });

  const optionMedium = document.createElement('option');
  setAttributes(optionMedium, {
    value: '2',
  });

  const optionHigh = document.createElement('option');
  setAttributes(optionHigh, {
    value: '3',
  });

  optionLow.textContent = 'Low';
  optionMedium.textContent = 'Medium';
  optionHigh.textContent = 'High';

  selectTask.append(optionLow, optionMedium, optionHigh);

  const inputDateTask = document.createElement('input');
  setAttributes(inputDateTask, {
    class: 'form-control mb-3', id: 'task-date-input', type: 'date', placeholder: 'Add the date',
  });

  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const btnClose = document.createElement('button');
  setAttributes(btnClose, { class: 'btn btn-secondary', type: 'button', 'data-bs-dismiss': 'modal' });
  btnClose.innerHTML = 'Close';

  const btnSave = document.createElement('button');
  setAttributes(btnSave, { class: 'btn btn-primary', type: 'button', id: 'save-btn-task' });
  btnSave.innerHTML = 'Save Task';

  const btnUpdate = document.createElement('button');
  setAttributes(btnUpdate, { class: 'btn btn-warning hide', type: 'button', id: 'update-btn-task' });
  btnUpdate.innerHTML = 'Edit Task';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';

  modalHeader.append(titleHeader, btnHeader);

  modalBody.append(inputTitleTask, textareaTask, selectTask, inputDateTask);

  modalFooter.append(btnClose, btnSave, btnUpdate);

  modalContent.append(modalHeader, modalBody, modalFooter);

  modalDialog.appendChild(modalContent);

  wrapperModal.appendChild(modalDialog);

  return wrapperModal;
};

const deleteTaskModal = () => {
  const wrapperModal = document.createElement('div');
  setAttributes(wrapperModal, {
    class: 'modal fade', id: 'delTask', tabindex: '-1', 'aria-labelledby': 'exMlDelTask', 'aria-hidden': 'true',
  });

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  const titleHeader = document.createElement('h5');
  setAttributes(titleHeader, { class: 'modal-title', id: 'exMlDelTask' });
  titleHeader.innerHTML = 'Delete Task';

  const btnHeader = document.createElement('button');
  setAttributes(btnHeader, {
    class: 'btn-close', type: 'button', 'ta-bs-dismiss': 'modal', 'aria-label': 'Close',
  });

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  const confirmTitleTask = document.createElement('h4');
  setAttributes(confirmTitleTask, {
    class: 'alert alert-danger', id: 'task-title-confirm', role: 'alert',
  });

  confirmTitleTask.innerHTML = 'Do you want to delete this task?';

  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const btnClose = document.createElement('button');
  setAttributes(btnClose, { class: 'btn btn-secondary', type: 'button', 'data-bs-dismiss': 'modal' });
  btnClose.innerHTML = 'Close';

  const btnDelete = document.createElement('button');
  setAttributes(btnDelete, { class: 'btn btn-danger', type: 'button', id: 'delBtnTask' });
  btnDelete.innerHTML = 'Delete task';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';

  modalHeader.appendChild(titleHeader, btnHeader);

  modalBody.appendChild(confirmTitleTask);

  modalFooter.append(btnClose, btnDelete);

  modalContent.append(modalHeader, modalBody, modalFooter);

  modalDialog.appendChild(modalContent);

  wrapperModal.appendChild(modalDialog);

  return wrapperModal;
};

export { addTaskModal, deleteTaskModal };