package Java_Programme;
import java.util.*;

public class Find_unique_inetger_InArray {

	public static void main(String[] args) 
	{
		
		int arr[] = {1,2,3,4,5,6,6,5,4,4,9};
		
		Map<Integer ,Integer> dup = new HashMap<>();
		
		for(int num : arr)
		{
			dup.put(num, dup.getOrDefault(num, 0)+1);
		}
		
		for(Map.Entry<Integer, Integer>entry: dup.entrySet())
		{
			if(entry.getValue() > 1)
			{
				System.out.println(entry.getKey());
			}
		}
		

	}

}
