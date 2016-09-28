import getSelectionRangeFromElm from 'get-selection-range-from-elm';

export default elm => {
  const range = getSelectionRangeFromElm(elm);

  if (!range) {
    return null;
  }

  const startMarker = document.createElement('mark');
  startMarker.className = 'selection-start';
  const endMarker = document.createElement('mark');
  endMarker.className = 'selection-end';

  let copy = range.cloneRange();
  copy.collapse(false);
  copy.insertNode(endMarker);

  copy = range.cloneRange();
  copy.collapse(true);
  copy.insertNode(startMarker);
};
