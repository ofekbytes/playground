/* LinkedList */

function LinkedList() { 
  var length = 0; 
  var head = null; 

  var Node = function(element){
    this.element = element; 
    this.next = null; 
  }; 

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
        head = node;
    } else {
        var currentNode = head;

        // ! // while 'currentNode' != null
        while(currentNode.next){
            currentNode  = currentNode.next;
        }

        currentNode.next = node;
    }

    length++;
  }; 

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };
  
  this.isEmpty = function() {
    return length === 0;
  };

  this.indexOf = function(element) {
    var currentNode = head;
    var index = -1;

    while(currentNode){
        index++;
        if(currentNode.element === element){
            return index;
        }
        currentNode = currentNode.next;
    }

    return -1;
  };

  this.elementAt = function(index) {
    var currentNode = head;
    var count = 0;
    while (count < index){
        count ++;
        currentNode = currentNode.next
    }
    return currentNode.element;
  };
  
  
  this.addAt = function(index, element){
    var node = new Node(element);

    var currentNode = head;
    var previousNode;
    var currentIndex = 0;

    if(index > length){
        return false;
    }

    if(index === 0){
        node.next = currentNode;
        head = node;
    } else {
        while(currentIndex < index){
            currentIndex++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        node.next = currentNode;
        previousNode.next = node;
    }
    length++;
  }
  
  this.removeAt = function(index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length){
        return null
    }
    if(index === 0){
        head = currentNode.next;
    } else {
        while(currentIndex < index) {
            currentIndex ++;
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        previousNode.next = currentNode.next
    }
    length--;
    return currentNode.element;
  }

} 

var conga = new LinkedList();

console.log(`isEmpty() ==> ${conga.isEmpty()}` );

conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');

console.log('print all linked list element');
for(let a=0; a < conga.size(); a++)
{
    console.log(`${a} ==> ${conga.elementAt(a)}`);
}

console.log('');
console.log('+--------------------+');
console.log('| linked list action |');
console.log('+--------------------+');
console.log(`isEmpty() ==> ${conga.isEmpty()}` );
console.log(`conga.size() ==> ${conga.size()}`);
console.log(`conga.removeAt(3) ==> ${conga.removeAt(3)}`);
console.log(`conga.elementAt(3) ==> ${conga.elementAt(3)}`);
console.log('\n** found element note \n** node = "-1" = "node not found", \n** else return "node index number" ');
console.log(`found element "Puppy" in node  ==> ${conga.indexOf('Puppy')}`); 
console.log(`found element "Fish" in node (-1 = not found) ==> ${conga.indexOf('fish')}`);  
console.log(`found element "Fish" in node ==> ${conga.indexOf('Fish')}`);  

console.log(`conga.size() ==> ${conga.size()}`);
