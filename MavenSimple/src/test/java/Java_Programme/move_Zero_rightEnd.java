package Java_Programme;

public class move_Zero_rightEnd 
{
	public static void main(String[] args) 
	{
		
		int arr[] = {1,2,0,0,0,3,4,0,0,0,5};
		
		int b=0;
		for(int a=0 ; a<arr.length ; a++)
		{
			if(arr[a]> 0)
			{
				arr[b]=arr[a];
				b++;
			}
		}
		
		for(int a=b ; a<arr.length ; a++)
		{
			arr[a]=0;
		}
	   
	
	for(int res : arr)
	{
		System.out.print(res + " ");
	}
	
	}

}
