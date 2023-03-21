class LinkedList{
    constructor(head=null){
        this.head = head;
    }

    toString = () => {
        let node = this.head;
        let string = '';
        while(node){
            string += `( ${node.value} ) -> `;
            node = node.next;
        }
        return string + 'null';
    };

    find = value => {
        let node = this.head;
        while(node){
            if(node.value === value) return node;
            node = node.next;
        }
        return null;
    };

    contains = value => {
        let node = this.head;
        while(node){
            if(node.value === value) return true;
            node = node.next;
        }
        return false;
    };

    pop = () => {
        let node = this.head;
        while(node.next.next){
            node = node.next;
        }
        node.next = null;
        return node;
    };

    at = index => {
        let node = this.head;
        let i = 0;
        while(node){
            if(i === index) return node;
            i++;
            node = node.next;
        }
        return 'error';
    };

    tail = () => {
        let node = this.head;
        while(node.next){
            node = node.next;
        }
        return node;
    };

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
