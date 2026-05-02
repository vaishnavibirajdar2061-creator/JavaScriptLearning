package Java_Programme;

import java.util.Arrays;

public class Find_min_max_WithCondition {

	public static void main(String[] args) 
	{
		
		int arr[] = {2,4,3,5,6,5,443,67,98,76,54,89,6,0,76,87};
		
		int max = Arrays.stream(arr).max().getAsInt();
		
		System.out.println(max);
		
		int min = Arrays.stream(arr).min().getAsInt();
		System.out.println(min);

	}

}
