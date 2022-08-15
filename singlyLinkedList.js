class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null; //this is the first item in the list
        this.tail = null; //this is the last item in the list
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val);
        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }

    pop() {
        if(!this.head) return undefined
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    shift() {
        if(!this.head) return undefined
        const head = this.head
        this.head = head.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return head
    }
    unshift(val){
        const node = new Node(val)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
        
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let node = this.head
        while(counter != index){
            node = node.next
            counter++
        }
        return node
    }
    set(val, index) {
        const node = this.get(index)
        if(!node) return false
        node.val = val
        return true
    }
    insert(val, index) {
        if(index < 0 || index > this.length) return false
        if (index === this.length){
            this.push(val)
            return true
        }
        if(index === 0){
            this.unshift(val)
            return true
        }

        const node = new Node(val)
        const prev = this.get(index - 1)
        const next = prev.next

        prev.next = node
        node.next = next

        this.length++
        return true
    }
    remove(index) {
    if(index < 0 || index >= this.length) return null
    if (index === this.length - 1) return this.pop()
    if(index === 0) return this.shift()

    const prev = this.get(index - 1)
    const current = prev.next
    prev.next = current.next
    this.length--
    return current
    }
    print() {
        let arr = []
        let current = this.head
        while (current){
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    reverse(){
        let current = this.head
        this.head = this.tail
        this.tail = current

        let prev = null
        let next = null

        for (let i = 0; i < this.length; i++){
            next = current.next
            current.next = prev

            prev = current
            current = next
        }
        return this
    }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)