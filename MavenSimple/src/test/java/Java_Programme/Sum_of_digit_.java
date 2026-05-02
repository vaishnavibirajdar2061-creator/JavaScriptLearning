package Java_Programme;

public class Sum_of_digit_ {

	public static void main(String[] args) 
	{
		
		int num = 5678;
		
		int r=0;
		int sum=0;
		
		while(num >0 )
		{
			r = num%10 ;
			num = num/10 ;
			sum = sum * 10 + r ;
			
		}
		
		System.out.println("reverse number :" + sum);
		

	}

}
