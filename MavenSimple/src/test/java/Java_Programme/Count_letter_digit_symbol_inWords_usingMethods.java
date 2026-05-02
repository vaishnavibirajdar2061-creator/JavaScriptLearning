package Java_Programme;

public class Count_letter_digit_symbol_inWords_usingMethods 
{
	
	public static void main(String[] args) 
	{
		
	
	String name = "asdfgh!@#$%^&*1234567";
	
	     String sys= name.replaceAll("[0-9,A-Z,a-z]" , " ");
	     
	     System.out.println("sysmbol :"+sys);
	     
	     String dig = name.replaceAll("['!,@,#,$,%,^,&,*]" , " ");
	     System.out.println("letter and digit :"+ dig);
	     
	     
	     

}
};