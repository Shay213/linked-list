class LinkedList{
    constructor(head=null){
        this.head = head;
    }

    getHead = () => this.head;

    size = () => {
        let size = 0;
        let node = this.head;
        while(node){
            node = node.next;
            size++;
        }
        return size;
    };

    prepend = newNode => {
        let node = this.head;
        if(!node){
            this.head = newNode;
            return;
        }
        newNode.next = node;
        this.head = newNode;
    };

    append = newNode => {
        let node = this.head;
        if(!node){
            this.head = newNode;
            return;
        }
        while(node.next){
            node = node.next;
        }
        node.next = newNode;
    };
};

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
};

let myList = new LinkedList();
let node = new Node(5);
