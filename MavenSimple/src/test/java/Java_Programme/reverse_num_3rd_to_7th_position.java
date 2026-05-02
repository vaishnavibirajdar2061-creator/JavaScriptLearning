package Java_Programme;

public class reverse_num_3rd_to_7th_position {

	public static void main(String[] args) 
	{
		
		int arr [] = {10,20,30,40,50,60,70,80,90};
		
		int start = 2;
		int end = 7;
		
		while(start < end)
		{
			int temp = arr[start];
			arr[start] = arr[end];
			arr[end] = temp ;
			
			start ++ ;
			end -- ;
		}
		
		for(int res : arr)
		{
			System.out.println(res);
		}
		System.out.println(" ");

	}

}
