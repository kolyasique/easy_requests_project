module.exports = function randomFormUniKey() {
  const first = String(Math.floor(Math.random() * 100));
  const second = String(Math.floor(Math.random() * 100));
  const third = String(Math.floor(Math.random() * 100));
  const fourth = String(Math.floor(Math.random() * 100));
  const formUniKey = (first + second + third + fourth);
  return {formUniKey: formUniKey};
};
