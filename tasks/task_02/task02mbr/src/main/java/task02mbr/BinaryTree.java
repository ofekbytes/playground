package task02mbr;


public class BinaryTree {

	Node a, b;

	boolean checkIfMirrorExist(Node a, Node b)  
    { 
        if (a == null && b == null) 
            return true; 
  
        if (a == null || b == null)  
            return false; 
  
        return ( a.data == b.data 
                && checkIfMirrorExist(a.left, b.right) 
                && checkIfMirrorExist(a.right, b.left) );
    }
	
}

