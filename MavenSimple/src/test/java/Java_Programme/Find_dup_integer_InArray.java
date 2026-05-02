package Java_Programme;
import java.util.* ;

public class Find_dup_integer_InArray {

	public static void main(String[] args) 
	{
		int arr [] = {2,3,4,5,6,7,8,9,6,5,4,1};
		
		Map<Integer , Integer> dup = new HashMap<>();
		
		for(int num : arr)
		{
			dup.put(num , dup.getOrDefault(num, 0)+1);
		}
		
		for(Map.Entry<Integer, Integer>entry : dup.entrySet())
		{
			if(entry.getValue()>1)
			{
				System.out.println(entry.getKey());
			}
		}
		

	}

}
