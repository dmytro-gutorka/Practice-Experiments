export function summarize(...args) {
   return Promise.all(args)
       .then(values => values.reduce((a,b) => a + b, 0))
}

