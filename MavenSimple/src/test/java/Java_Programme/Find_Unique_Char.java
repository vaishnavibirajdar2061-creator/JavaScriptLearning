package Java_Programme;

import java.util.*;
public class Find_Unique_Char {

	public static void main(String[] args) 
	{
		
		String name= "vaishnavi";
		
		Map<Character , Integer> dup = new HashMap<> ();
		
		for(char ch : name.toCharArray())
		{
			dup.put(ch , dup.getOrDefault(ch,0)+1);
		}
		
		for(Map.Entry<Character, Integer>entry : dup.entrySet())
		{
			if( entry.getValue()==1)
			{
				System.out.println("unique char :"+entry.getKey());
			}
		}
		
		

	}

}
