import removeEl from './remove-el';

export default elm => {
  const start = elm.querySelector('mark.selection-start');
  const end = elm.querySelector('mark.selection-end');

  if (!start || !end) {
    return;
  }

  const range = document.createRange();

  range.setStartAfter(start);
  removeEl(start);

  range.setEndBefore(end);
  removeEl(end);

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
};
