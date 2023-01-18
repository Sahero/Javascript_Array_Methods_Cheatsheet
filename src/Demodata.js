const bgColorAdditon = "green";
const bgColorRemove = "red";


const getLetter = (num) => (String.fromCharCode(num + 64))


const buildArray = (n, s = 0, isAlphabet = false) => {
  let a = []
  for (let i = 0; i < n; i++) {
    a.push({ v: isAlphabet ? getLetter((i + (1 + s))) : (i + (1 + s)) })
  }
  return a;
}

const numArray = [...buildArray(4)];
const alpArray = [...buildArray(4, 0, true)];

export const demoData = {
  "push": {
    label: "push(5)",
    l: numArray,
    r: [...buildArray(4), { v: 5, bgColor: bgColorAdditon }]
  },
  "pop": {
    l: [...buildArray(3), { v: 4, bgColor: bgColorRemove }],
    r: [...buildArray(3)]
  },
  "shift": {
    l: [{ v: 1, bgColor: bgColorRemove }, ...buildArray(3, 1)],
    r: [...buildArray(3, 1)]
  },
  "unshift": {
    label: "unshift(0)",
    l: numArray,
    r: [{ v: 0, bgColor: bgColorAdditon }, ...buildArray(4)]
  },
  "slice": {
    label: "slice(1)",
    l: alpArray,
    r: [...buildArray(3, 1, true)]
  },
  "splice": {
    label: "splice(1, 2)",
    l: alpArray,
    r: [{ v: 'A' }, { v: 'D' }]
  },
  "sort": {
    l: [{ v: 4 }, { v: 3 }, { v: 2 }, { v: 1 }],
    r: numArray
  },
  "reverse": {
    l: numArray,
    r: [{ v: 4 }, { v: 3 }, { v: 2 }, { v: 1 }]
  },
  "concat": {
    label: "concat('A')",
    l: numArray,
    r: [...buildArray(4), { v: "A", bgColor: bgColorAdditon }]
  },
  "indexOf": {
    textOnly: true,
    label: "indexOf('B')",
    l: alpArray,
    r: [{ v: "1" }]
  },
  "join": {
    textOnly: true,
    label: "join()",
    l: alpArray,
    r: [{ v: "A,B,C,D" }]
  },
  "filter": {
    label: "filter(d => d % 2)",
    l: numArray,
    r: [{ v: 1 }, { v: 3 }]
  },
  "map": {
    label: "map(d => d * 2)",
    l: numArray,
    r: [{ v: 2, bgColor: bgColorAdditon }, { v: 4, bgColor: bgColorAdditon }, { v: 6, bgColor: bgColorAdditon }, { v: 8, bgColor: bgColorAdditon }]
  },
  "reduce": {
    textOnly: true,
    label: "reduce((a, n) => a + n, 0)",
    l: numArray,
    r: [{ v: 10 }]
  },
  "forEach": {
    textOnly: true,
    label: "forEach((n) => console.log(n))",
    l: numArray,
    r: numArray
  },
  "some": {
    textOnly: true,
    label: "some((n) => n % 2 === 0)",
    l: numArray,
    r: [{v : 'true'}]
  },
  "every": {
    textOnly: true,
    label: "every((n) => n % 2 === 0)",
    l: numArray,
    r: [{v : 'false'}]
  },
  "find": {
    textOnly: true,
    label: "find((n) => n % 2 === 0)",
    l: numArray,
    r: [{v : 2}]
  },
  "findIndex": {
    textOnly: true,
    label: "findIndex((n) => n % 2 === 0)",
    l: numArray,
    r: [{v : 1}]
  },
  "copyWithin": {
    label: "copyWithin(0, 2)",    
    l: numArray,
    r: [{v : 3}, {v : 4},{v : 3}, {v : 4}]
  },
  "fill": {
    label: "fill(0, 2, 4)",   
    l: numArray,
    r: [{v : 3}, {v : 4},{v : 0, bgColor: bgColorAdditon}, {v : 0, bgColor: bgColorAdditon}]
  },
  "entries": {
    label: "entries().next().value",   
    l: alpArray,
    r: [{v: 0, bgColor: bgColorAdditon}, { v: 'A'}]
  },
  "keys": {
    textOnly: true,
    label: "keys().next().value",
    l: alpArray,
    r: [{v: 0}]
  },
  "values": {
    textOnly: true,
    label: "values().next().value",
    l: alpArray,
    r: [{v: 'A'}]
  },
  "toString": {
    textOnly: true,
    l: numArray,
    r: [{v: '1,2,3'}]
  },  
  "includes": {
    textOnly: true,
    label: "includes('A')",
    l: [...buildArray(4, 0 , true)],
    r: [{v : 'true'}]
  },
  "lastIndexOf": {
    textOnly: true,
    label: "lastIndexOf('2')",
    l: [{v: 1}, {v: 2}, {v: 3}, {v: 2}],
    r: [{v : '3'}]
  }
}