import newProject from '../scripts/project';

const project = newProject('Dadjou');

test('It has a title of Dadjou', () => {
  expect(project.title).toBe('Dadjou');
});

test('It has a list of tasks', () => {
  expect(project).toHaveProperty('tasksList');
});

test('It has an empty list of tasks', () => {
  expect(project.tasksList.length).toBe(0);
});

test('It adds a task to the tasks list', () => {
  project.addTask('title', 'descr', 'high', 'monday');
  expect(project.tasksList.length).toBe(1);
});

test('It edits the task in the tasks list', () => {
  const currentTitle = project.tasksList[0].title;
  project.editTask(0, 'title1', 'descr1', 'high1', 'monday1');
  expect(project.tasksList[0].title).toBe('title1');
  expect(project.tasksList[0].title).not.toBe(currentTitle);
});

test('It deletes a task from the tasks list', () => {
  project.deleteTask(0);
  expect(project.tasksList.length).toBe(0);
});