package Java_Programme;

public class Sec_Lowest_number_withoutCondition {

	public static void main(String[] args) 
	{
		int arr[] = {2,4,3,5,6,5,443,67,98,76,54,89,6,0,76,87};

		int min = Integer.MAX_VALUE;
		int smin = Integer.MAX_VALUE;

		for (int i = 0; i < arr.length; i++) {
		    
		    if (arr[i] < min) {
		        smin = min;     // previous min becomes second min
		        min = arr[i];   // update min
		    } 
		    else if (arr[i] < smin && arr[i] != min) {
		        smin = arr[i];  // update second min
		    }
		}

		System.out.println("min: " + min);
		System.out.println("second min: " + smin);
	}

}
