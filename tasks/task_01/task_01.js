

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
    var count = 0;


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
    this.elementAt = function (index) {
        var currentNode = head;
        var count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next
        }
        return currentNode.element;
    };


    /**
     * count all element in LinkedList (taskLinkedList)
     **/
    this.countLinks = function () {

        var currentNode = head;
        var tc = 1;

        if (head === null) {
            tc = (-1);
        }
        else {
            while (currentNode.next) {
                currentNode = currentNode.next;
                tc++;
            }
        }
        count = tc;

        return tc;
    }


     /**
     * printLinkedList - print all element in LinkedList (taskLinkedList)
     **/
    this.printLinkedList = function () {

        var currentNode = head;
        var tc = 1;
        var index = 0;

        if (head === null) {
            tc = (-1);
        }
        else {

            console.log(`print all linked list element `);
            while (currentNode.next !== null) {
                console.log(`_[ ${index} ]_ ===> ${currentNode.element}`);
                currentNode = currentNode.next;
            }    
            console.log(`_[ ${index} ]_ ===> ${currentNode.element}`); //print the last element.

        }
        return tc;
    }


     /**
     * printLinkedListOBO - print all element in LinkedList One By One (taskLinkedList)
     **/
    this.printLinkedListOBO = function () {

            console.log(`print all linked list element One By One `);
            var index = 0;

            for (index = 0; index < count; index++) {
                console.log(`[ ${index} ] ===> ${this.elementAt(index)}`)
            }

        return index;
    }


    /**
     * printResult
     * @param {*} tc  --> output variable.
     **/
    this.printResult = function (tc) {
        console.log(`total nodes in linkedList:: <[${tc}]>`);

    }


    /**
     * average - sum / count = average
     **/
    this.average = function() {

        var averageValue = 0;
        let sum = 0;

        currentNode = head;

        while (currentNode.next !== null) {
            console.log(sum);
            sum += currentNode.element ;
            currentNode = currentNode.next;
        }
        sum += currentNode.element ;

        averageValue = sum / count;
        console.log(`${sum} / ${count} ===> ${averageValue}`);

        return averageValue;
    }


    /**
     * 
     **/
    this.insertValueIntoLinkedList = function(number) {
        
        var currentNode = head;
        var sum = 0;
        var numberOne = 0;

        if (currentNode === null) {
            return -1;
        }
        else {
            while (currentNode !== null) {
                numberOne = currentNode.element;        
                sum = sum + numberOne;
                // sum = sum + (currentNode.element + currentNode.next.element);
                // console.log(" *** " + currentNode.element + " **** " + (numberOne + numberOne) );
                currentNode = currentNode.next;
            }
            
            console.log(`sum:: ${sum}`);
        }
    }
    

//// taskLinkedList ////
}



var task = new taskLinkedList();


task.printResult(`${task.countLinks()}`);

task.add(10);
task.add(20);
task.add(30);

task.printResult(`${task.countLinks()}`);

///\n
console.log();

// print Linked List
task.printLinkedList();

///\n
console.log();

// print Linked List - with index One By One
task.printLinkedListOBO();

// print total nodes, counting one by one
console.log(`\n Total:: ${task.countLinks()}`);

// print average
console.log(`\n average:: ${task.average()}`);


// TODO
//
// task.sumLinkedList();
var number = 10;
console.log('');
console.log('check if two number have an average of number');
task.insertValueIntoLinkedList(number);

////----[*****]---------------------------------------------------------------////


// DELETE  - after TODO task complite
//
// console.log(`print all linked list element `);
// let sum = 0;
// for (let a = 0; a < task.size(); a++) {
//     console.log(`node [${a}] ==> [ ${task.elementAt(a)} ]`);
//     sum += task.elementAt(a);
// }

// console.log(`nodes average value : [ ${sum / task.size()} ] `);



//
// to be continue 
// ($ git pull)
// 
