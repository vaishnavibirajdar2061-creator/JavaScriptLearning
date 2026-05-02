package Java_Programme;

public class Rotate_BY_all_number_Left {

	public static void main(String[] args) 
	{
		int arr[]= {1,2,3,4,5};
		
		for(int a=0 ; a<4; a++)
		{
			int first = arr[0];
			
			for(int b=0 ; b<arr.length-1 ; b++)
			{
				arr[b]=arr[b+1];
			}
			
			arr [arr.length-1] = first;
		}
		
		for(int s : arr)
		{
			System.out.print(s + " ");
		}
		System.out.println();

	}

}
