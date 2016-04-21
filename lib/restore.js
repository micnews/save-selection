export default elm => {
  const start = elm.querySelector('mark.selection-start');
  const end = elm.querySelector('mark.selection-end');
  const range = document.createRange();

  if (!start || !end) {
    return;
  }

  range.setStartAfter(start);
  start.parentNode.removeChild(start);

  range.setEndBefore(end);
  end.parentNode.removeChild(end);

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
};
