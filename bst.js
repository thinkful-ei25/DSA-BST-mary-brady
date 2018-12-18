/*
Walk through the Binary Search Tree code in the curriculum and understand it well.Then write a Binary Search Tree class and with its core functions(insert, remove, find) from scratch.

Create a Binary Search Tree called BST and insert 3, 1, 4, 6, 9, 2, 5, 7 to your tree.Compare your result with the result from the first exercise
*/

class BST {
  constructor(key=null, value=null, parent=null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if(this.key == null) {
      this.key = key;
      this.value = value;
    } else if(key < this.key) {
      if(this.left == null) {
        this.left = new BST(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if(this.right == null) {
        this.right = new BST(key, value, this);
      } else {
        this.right.insert(key,value);
      }
    }
  }

  find(key) {
    if(this.key == key) {
      return this.value;
    } else if(key < this.key && this.left) {
      return this.left.find(key);
    } else if(key > this.key && this.right) {
        return this.right.find(key);
    } else {
      throw new Error('Key Error: find() - Key was not found');
    }
  } 

  remove(key){
    if(this.key == key) {
      if(this.left && this.right) {

      }
    }
  }

  _replaceWith(node){

  }

  _findMin(){
    if(!this.left){
      return this;
    }
    return this.left._findMin();
  }

}

module.exports = BST;