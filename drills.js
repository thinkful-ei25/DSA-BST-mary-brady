const BST = require('./bst');

function main() {
  let searchTree = new BST();
  searchTree.insert(3);
  searchTree.insert(1);
  searchTree.insert(4);
  searchTree.insert(6);
  searchTree.insert(9);
  searchTree.insert(2);
  searchTree.insert(5);
  searchTree.insert(7);
  console.log(searchTree);
}

main();