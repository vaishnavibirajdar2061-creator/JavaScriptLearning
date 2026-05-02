package Java_Programme;

import java.util.Scanner;

public class check_Prime_Number {

	public static void main(String[] args) 
	{
		Scanner sc = new Scanner (System.in);
		System.out.println("Enter the a number");
		int num=sc.nextInt();
		
		int temp =0;
		
		for(int a=2 ; a<num-1 ; a++)
		{
			if(num%a ==0)
			{
				temp = temp + 1;
			}
		}
		
		if(temp ==0)
		{
			System.out.println("prime number");
		}
		else
		{
			System.out.println("not prime number");
		}
		

	}

}
