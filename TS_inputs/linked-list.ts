class ListNode<T> {
  next?: ListNode<T>

  constructor(public value: T) {
  }
}


class LinkedList<T> {
  private root?: ListNode<T>;
  private tail?: ListNode<T>;
  private length = 0;


  add(value: T) {
    const node = new ListNode(value)

    if (!this.root || !this.tail) {
      this.root = node;
      this.tail = node;
    }

    if (this.root) {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;

  }


  getNumberOfElements() {
    return this.length
  }


  print() {
    let current = this.root;

    while(current) {
      console.log(current.value)
      current = current.next
    }
  }
}


const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();


numberList.add(10)
numberList.add(20)
numberList.add(30)
numberList.add(40)

console.log(numberList.getNumberOfElements())
numberList.print()
