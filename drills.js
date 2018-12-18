const BST = require('./bst');

function heightOf(node) {
  if (node == null) {
    return -1;
  }
  else {
    return 1 + Math.max(heightOf(node.left), heightOf(node.right));
  }
}

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
  // console.log(searchTree);

  console.log('The height of the searchTree is ' + heightOf(searchTree))
  console.log('The search tree you entered is a BST: ' + isItBST(searchTree));
}

// 3,1,4,6,9,2,5,7
//SearchTree:
//       3
//     /   \
//     1    6
//     \    \
//      2    4
//          / \
//          5  9
//            /
//           7

function isItBST(node){
  if(node == null) {
    return true;
  }
  if((node.left && node.left.value > node.value)) return false;
  if(node.right && node.right.value < node.value) return false;
  return (isItBST(node.left) || isItBST(node.right));
}

main();


