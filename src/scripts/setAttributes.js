const setAttributes = (elt, attrs) => {
  const props = Object.keys(attrs);
  props.forEach(prop => {
    elt.setAttribute(prop, attrs[prop]);
  });
};

export default setAttributes;