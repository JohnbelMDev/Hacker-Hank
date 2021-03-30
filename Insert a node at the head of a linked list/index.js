// https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=linked-lists

const list = {
  value:1,
  next:{
    value:3,
    // reason undefined
    next:undefined
  }

}

let node = list;
console.log(node.value);

node = node.next;
console.log(node.value);
// setting a new node

node.next = {
  value:4,
  next:undefined
}
