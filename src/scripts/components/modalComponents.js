import setAttributes from '../setAttributes';

const addProjectModal = () => {
  const wrapperModal = document.createElement('div');
  setAttributes(wrapperModal, {
    class: 'modal fade', id: 'addProject', tabindex: '-1', 'aria-labelledby': 'exMl', 'aria-hidden': 'true',
  });

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  const titleHeader = document.createElement('h5');
  setAttributes(titleHeader, { class: 'modal-title', id: 'exMl' });
  titleHeader.innerHTML = 'Add Project';

  const btnHeader = document.createElement('button');
  setAttributes(btnHeader, {
    class: 'btn-close', type: 'button', 'ta-bs-dismiss': 'modal', 'aria-label': 'Close',
  });

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  const inputTitleProject = document.createElement('input');
  setAttributes(inputTitleProject, {
    class: 'form-control', id: 'project-title-input', type: 'text', placeholder: 'Add the title here',
  });

  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const btnClose = document.createElement('button');
  setAttributes(btnClose, { class: 'btn btn-secondary', type: 'button', 'data-bs-dismiss': 'modal' });
  btnClose.innerHTML = 'Close';

  const btnSave = document.createElement('button');
  setAttributes(btnSave, { class: 'btn btn-primary', type: 'button', id: 'save-btn' });
  btnSave.innerHTML = 'Save Project';

  const btnUpdate = document.createElement('button');
  setAttributes(btnUpdate, { class: 'btn btn-primary hide', type: 'button', id: 'update-btn' });
  btnUpdate.innerHTML = 'Edit Project';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';

  modalHeader.appendChild(titleHeader, btnHeader);

  modalBody.appendChild(inputTitleProject);

  modalFooter.append(btnClose, btnSave, btnUpdate);

  modalContent.append(modalHeader, modalBody, modalFooter);

  modalDialog.appendChild(modalContent);

  wrapperModal.appendChild(modalDialog);

  return wrapperModal;
};

const deleteProjectModal = () => {
  const wrapperModal = document.createElement('div');
  setAttributes(wrapperModal, {
    class: 'modal fade', id: 'delProject', tabindex: '-1', 'aria-labelledby': 'exMlDel', 'aria-hidden': 'true',
  });

  const modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  const titleHeader = document.createElement('h5');
  setAttributes(titleHeader, { class: 'modal-title', id: 'exMlDel' });
  titleHeader.innerHTML = 'Delete Project';

  const btnHeader = document.createElement('button');
  setAttributes(btnHeader, {
    class: 'btn-close', type: 'button', 'ta-bs-dismiss': 'modal', 'aria-label': 'Close',
  });

  const modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  const confirmTitleProject = document.createElement('h4');
  setAttributes(confirmTitleProject, {
    class: 'alert alert-danger', id: 'project-title-confirm', role: 'alert',
  });

  confirmTitleProject.innerHTML = 'Do you want to delete this project?';

  const modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  const btnClose = document.createElement('button');
  setAttributes(btnClose, { class: 'btn btn-secondary', type: 'button', 'data-bs-dismiss': 'modal' });
  btnClose.innerHTML = 'Close';

  const btnDelete = document.createElement('button');
  setAttributes(btnDelete, { class: 'btn btn-danger', type: 'button', id: 'delBtn' });
  btnDelete.innerHTML = 'Delete project';

  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  const modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog';

  modalHeader.appendChild(titleHeader, btnHeader);

  modalBody.appendChild(confirmTitleProject);

  modalFooter.append(btnClose, btnDelete);

  modalContent.append(modalHeader, modalBody, modalFooter);

  modalDialog.appendChild(modalContent);

  wrapperModal.appendChild(modalDialog);

  return wrapperModal;
};

export { addProjectModal, deleteProjectModal };