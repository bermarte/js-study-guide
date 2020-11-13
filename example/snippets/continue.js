'use strict';
let i = 0;
while (i < 6) {
    i++;
  if (i === 4) {
    continue;
  }
  console.log("i=" + i);
}

/* output
i=1
i=2
i=3
i=5
i=6
*/
