package Java_Programme;

public class Sum_of_Digit {

	public static void main(String[] args) 
	{
		int num = 4567;
		
		int sum=0 ;
		int r=0;
		
		while(num > 0)
		{
			r= num%10 ;
			num = num/10 ;
			sum = sum +r ;
		}
		
       System.out.println("sum of digit :" + sum);
		 
	}

}
