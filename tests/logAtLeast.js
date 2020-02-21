// Max Looping with Math

function logAtMax5(n) {
  for (let i = 1; i <= Math.min(35, n); i++) {
    console.log(i)
  }
}

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(35, n); i++) {
    console.log(i)
  }
}

logAtLeast5(5)