export default elm => {
  const selection = window.getSelection();

  if (selection.rangeCount === 0) {
    return;
  }

  const range = selection.getRangeAt(0);

  const startContainer = range.startContainer;
  if (!elm.contains(startContainer)) {
    return;
  }

  const startMarker = document.createElement('mark');
  startMarker.className = 'selection-start';
  const endMarker = document.createElement('mark');
  endMarker.className = 'selection-end';

  let copy = range.cloneRange();
  copy.collapse(true);
  copy.insertNode(startMarker);

  copy = range.cloneRange();
  copy.collapse(false);
  copy.insertNode(endMarker);
};
