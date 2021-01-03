package task02mbr;


public class Task2BT {

	public static void main(String[] args) {

		BinaryTree tree = new BinaryTree();
		
		/// ---[data playground]---///
		
		//test #1//
		Node a = new Node(1);
		Node b = new Node(1); // mirror=yes
//		//Node b = new Node(0); // mirror=no
		
		//test #2//
		a.left = new Node(2);
		a.right = new Node(3);

// test #3
//		a.left.left = new Node(4);
//		a.left.right = new Node(5);

		//test #2//
		b.left = new Node(3);
		b.right = new Node(2);

// test #3
//		b.right.left = new Node(5);
//		b.right.right = new Node(4);

		/// ---[check If Mirror Exist (yes/no) ?]---///
		if (tree.checkIfMirrorExist(a, b) == true)
			System.out.println("There is a mirror (mirror)");
		else
			System.out.println("There isn't a mirror (no mirror)");

	}

}

