const id = [3,2,1];
const arr = [
  {
    id: 1,
    name: "aa"
  },
  {
    id: 2,
    name: "bb"
  },
  {
    id: 3,
    name: "cc"
  }
]


for(let i=0;i<id.length;i++){
  console.log(arr[arr.findIndex((e) => e.id === id[i])]);
}