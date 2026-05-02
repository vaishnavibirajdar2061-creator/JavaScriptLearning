package Java_Programme;

public class Reverse_string_by_line_onlyChar {

	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub

		 String name = "i love india";
		 
		 String name1[]=name.trim().split("\\s+");
		 
		 for(String res : name1)
		 {
			 for(int a = res.length()-1 ; a>=0 ; a--)
			 {
				 System.out.print(res.charAt(a));
			 }
			 System.out.print(" ");
		 }
	}

}
