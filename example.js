import {save, restore} from 'save-selection';

// will save selections in <mark> elements
// with classes "selection-start" & "selection-end"
save(document.querySelector('#main'));

// will restore selections,
// setting start to a <mark> element with class selection-start
// and end with class selection-end
restore(document.querySelector('#main'));
