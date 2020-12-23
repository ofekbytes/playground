

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
    //-----------------------------------------------------------//
    //   variable - global variable 
    //-----------------------------------------------------------//    
    var length = 0;
    var head = null;
    var output = "";


    //-----------------------------------------------------------//
    //   Node() - add a new 'node'
    //-----------------------------------------------------------//    
    var Node = function (element) {
        this.element = element;
        this.next = null;
    };


    //-----------------------------------------------------------//
    //   add() - add a new 'element' into LinkedList
    //-----------------------------------------------------------//
    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };


    //-----------------------------------------------------------//
    //   printLinkedList() - print all element in LinkedList
    //-----------------------------------------------------------//
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
                index++;
            }
            console.log(`_[ ${index} ]_ ===> ${currentNode.element}`); //print the last element.
        }

        return tc;
    };


    //-----------------------------------------------------------//
    //   printLinkedList() - print all element in LinkedList
    //-----------------------------------------------------------//
    this.browserOutput = function (numbers, number) {

        var currentNode = head;
        var tc = 1;
        var index = 0;

        output += `<h1> user enter a data </h1>`
        output += `<h2>Numbers </h2> <hr>`;
        output += `<h2>${numbers}</h2>`; 
        // output += `</br>nSearch number ==> ${number} </br>`;
        // output += `

        output += `<ul>`;
        if (head === null) {
            tc = (-1);
            output += `<li>No Data.</li>`
        }
        else {

            output += `<li>print all linked list element </li>`;
            while (currentNode.next !== null) {
                output += `<li> _[ ${index} ]_ ===> ${currentNode.element} </li> `;
                currentNode = currentNode.next;
                index++;
            }
            output += `<li> _[ ${index} ]_ ===> ${currentNode.element} </li>`; //print the last element.
        }
        output += `</ul>`;
        document.getElementById("output").innerHTML = output;
        return tc;
    };


    //-----------------------------------------------------------//
    //   main() 
    //-----------------------------------------------------------//
    this.main = function (numbers, number) {

        var index = 0;
        var prev = 0;
        for (prev = 0, index = 0; index < numbers.length; index++) {
            if (index === 0) {
                this.add(numbers[index]);
            }
            else {
                prev = index - 1;
                if (((numbers[index] + numbers[prev]) / 2 === number)) {
                    this.add(number);
                }
                this.add(numbers[index]);
            }
        }

        this.printLinkedList();

    };

}



//-----------------------------------------------------------//
//
//   code start here 
//
//-----------------------------------------------------------//    



//-----------------------------------------------------------//
//   Test #1 - 
//-----------------------------------------------------------//    
var number = 5;
var numbers = [20, -10, 30, -10, 20];


//-----------------------------------------------------------//
//   Test #2
//-----------------------------------------------------------//    
// var number = 10;
// var numbers = [0, 20, 30, -10];


//-----------------------------------------------------------//
//   main()
//-----------------------------------------------------------//    
console.table(`:::user enter a data:::\nNumbers ==> ${numbers} \nSearch number ==> ${number} \n`);
var task = new taskLinkedList();
task.main(numbers, number);

