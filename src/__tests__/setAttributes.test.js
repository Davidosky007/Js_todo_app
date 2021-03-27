import setAttributes from '../scripts/setAttributes';

test('It adds a "guillain" class attribute', () => {
  const elt = document.createElement('div');
  setAttributes(elt, { class: 'guillain' });
  expect(elt.classList.length).toBe(1);
});

test('It adds a "guillain" and "guillain2" class attribute', () => {
  const elt = document.createElement('div');
  setAttributes(elt, { class: 'guillain guillain2' });
  expect(elt.classList.length).toBe(2);
  expect(elt.className).toBe('guillain guillain2');
});

test('It adds the id "my-id" to the div element', () => {
  const elt = document.createElement('div');
  setAttributes(elt, { id: 'my-id' });
  expect(elt.id).toBe('my-id');
});

test('It adds the id "my-id" and the class "my-class" to the img element', () => {
  const elt = document.createElement('img');
  setAttributes(elt, { class: 'my-class', id: 'my-id' });
  expect(elt.id).toBe('my-id');
  expect(elt.className).toBe('my-class');
});

test('It adds the type "button" to the button element', () => {
  const elt = document.createElement('button');
  setAttributes(elt, { type: 'button' });
  expect(elt.type).toBe('button');
  expect(elt.type).not.toBe('input');
});