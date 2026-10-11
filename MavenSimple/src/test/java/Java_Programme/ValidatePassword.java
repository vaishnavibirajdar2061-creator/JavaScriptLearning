package Java_Programme;

public class ValidatePassword {

	public static void main(String[] args) 
	{
		String password = "Hello@12333445";
		boolean upperCase = false ;
		boolean lowerCase = false ;
		boolean digit = false ;
		boolean sym = false ;
		
		if(password.length() >= 8)
		{
			
		for(int a=0 ; a<password.length() ; a++)
		{
			char ch = password.charAt(a);
			
			if(Character.isUpperCase(ch))
			{
				upperCase = true ;
			}
			else if(Character.isDigit(ch))
			{
				digit = true ;
			}
			else if(Character.isLowerCase(ch))
			{
				lowerCase = true ;
			}
			else
			{
				sym = true ;
			}
		}
			
		if (password.length() >= 8 && upperCase && lowerCase && digit && sym) 
		{ 
			System.out.println("Valid Password"); 
	    } else	
			{ System.out.println("Invalid Password"); 
			
			}

		
		}

	}

}
