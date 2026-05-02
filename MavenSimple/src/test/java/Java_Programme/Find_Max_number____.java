package Java_Programme;

public class Find_Max_number____ {

	public static void main(String[] args) 
	{
		
	int arr[] = {2,4,3,5,6,5,443,67,98,76,54,89,6,0,76,87};
	
	int max = arr[0];
	
	for(int a=0 ; a<arr.length ; a++)
	{
		if(arr[a] > max)
		{
			max = arr[a];
		}
	}
	
	System.out.println(max);
	

	}

}
