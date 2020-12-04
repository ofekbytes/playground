

/**
*  //////////////////////////////
* +----------------------------+/
* |                            |/
* |   Task_01  -  JavaScript   |/
* |                            |/
* +----------------------------+
**/


function taskLinkedList() {


    /** 
     * declarations
     **/
    var length = 0;
    var head = null;


    /** 
     * Node
     **/
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };


    /**
     * Node head
     **/
    this.head = function () {
        return head;
    };


    /**
     * Node length
     **/
    this.size = function () {
        return length;
    };


    /**
     * Node - empty (yes/no) ?
     **/
    this.isEmpty = function () {
        return length === 0;
    };


    /**
     * Node - add
     **/

    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            // ! // while 'currentNode' != null
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };




    /**
     * Node - element At
     **/
    this.elementAt = function(index) {
        var currentNode = head;
        var count = 0;
        while (count < index){
            count ++;
            currentNode = currentNode.next
        }
        return currentNode.element;
      };
    


}




var task = new taskLinkedList();

task.add(10);
task.add(20);
task.add(30);

console.log('print all linked list element');
let sum = 0;
for(let a = 0; a < task.size(); a++)
{
    console.log(`node ${a} ==> ${task.elementAt(a)}`);
    sum += task.elementAt(a);
}

console.log('nodes average value are: ' + (sum / task.size() ) );

//
// to be continue 
// ($ git pull)
// 
