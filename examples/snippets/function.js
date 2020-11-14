'use strict';

const reverse = (text = '') => {
  return text.split('').reverse().join('');
};

const reversedMouse = reverse('mouse');
console.assert(reversedMouse === 'esuom', '"mouse" backwards is "esuom"');

const reversedCat = reverse('cat');
console.assert(reversedCat === 'tac', '"cat" backwards is "tac"');


