package Java_Programme;

public class Check_Palidrome_ {

	public static void main(String[] args) 
	{
		String name= "mom";
		String res =" ";
		
		for(int a = name.length()-1 ; a>=0 ; a--)
		{
		  res = res + name.charAt(a);
		}
		
          if(res.equals(name))
          {
        	  System.out.println("palidrome");
          }
          else
          {
        	  System.out.println("not palidrome");
          }

	}

}
