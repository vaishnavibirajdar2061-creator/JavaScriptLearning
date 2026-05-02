package Java_Programme;

public class move_zero_LeftEnd {

	public static void main(String[] args) 
	{
		int arr[] = {1,2,0,0,0,3,4,0,0,0,5};
		int b = arr.length-1; 
		
		for(int a=arr.length-1 ; a>=0 ; a--)
		{
			if(arr[a]>0)
			{
				arr[b]=arr[a];
				b--;
			}
		}
		
		for(int a=b ; a>=0 ; a--)
		{
			arr[a] = 0;
		}
		
		for(int res : arr)
		{
			System.out.print(res +" ");
		}

	}
	
	

}
