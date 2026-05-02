package Java_Programme;

public class Reverse_String_BY_Line {

	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub
		String name = "india is great" ;
		
		// great is india 
		
		      String name1[] = name.trim().split("\\s+");
		      
		      StringBuilder cap = new StringBuilder();
		      
		      for(int a = name1.length-1 ; a>=0 ; a--)
		      {
		    	  cap.append(name1[a]).append(" ");
		      }
		      System.out.println(cap);

	}

}
