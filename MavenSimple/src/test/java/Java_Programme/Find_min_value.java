package Java_Programme;

public class Find_min_value {

	public static void main(String[] args)
	{
		// TODO Auto-generated method stub
		int arr[] = {2,4,3,5,6,5,443,67,98,76,54,89,6,0,76,87};
		
		int min = arr[0];
		
		for(int a=0 ; a<arr.length ; a++)
		{
			if(arr[a] < min)
			{
				min = arr[a];
			}
		}
		
		System.out.println(min);

	}

}
