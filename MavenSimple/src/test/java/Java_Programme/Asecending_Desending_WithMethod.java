package Java_Programme;

import java.util.Arrays;
import java.util.Collections;

public class Asecending_Desending_WithMethod
{
	
	public static void main(String[] args)
	{
	
	int arr[] = {2,4,3,5,6,5,443,67,98,76,54,89,6,0,76,87};
	
	Arrays.sort(arr);
	System.out.println("Ascending Order: " + Arrays.toString(arr));
	
	System.out.println("*************************************");
	
	 Arrays.sort(arr, Collections.reverseOrder());
	 Arrays.sort(arr , Collections.reverseOrder());
	 System.out.println("Descending Order: " + Arrays.toString(arr));
	


	
	
	}

}
