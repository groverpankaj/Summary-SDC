// import http from 'k6/http';

// export default function() {
//     // let id = (Math.random() * (10000000 -1)) + 1;
//     let id = 1234567;

//     let response = http.get(`http://localhost:3002/api/summary/data/${id}`);
// }

import http from "k6/http";
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";

let ErrorCount = new Counter("errors");

// export const options = {
//   vus: 10,
//   duration: "20s",
//   thresholds: {
//     errors: ["count<10"]
//   }
// };

export let options = {
    stages: [
       { duration: "30s", target: 810 },
       { duration: "2m30s", target: 700  },
       { duration: "30s", target: 500 },
     ],
     thresholds: {
        errors: ["count<10"]
      }
   };

export default function() {
  let id = Math.floor((Math.random() * (10000000 -1)) + 1);
  let res = http.get(`http://localhost:3002/api/summary/agents/${id}`);
  let success = check(res, {
    "status is 200": r => r.status === 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  if (!success) {
    ErrorCount.add(1);
  }

  sleep(1);
}
