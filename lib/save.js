import getSelectionRangeFromElm from 'get-selection-range-from-elm';

export default elm => {
  const range = getSelectionRangeFromElm(elm);

  if (!range) {
    return null;
  }

  removeSelectionMarkTagsInElm(elm);

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

function removeSelectionMarkTagsInElm (elm) {
  const startMarkers = elm.querySelectorAll('mark.selection-start');
  const endMarkers = elm.querySelectorAll('mark.selection-end');
  [].forEach.call(startMarkers, removeEl);
  [].forEach.call(endMarkers, removeEl);
}

function removeEl (el) {
  el.parentNode.removeChild(el);
}
