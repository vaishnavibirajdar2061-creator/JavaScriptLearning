package Java_Programme;

import java.util.*;
public class Find_Duplicate_Char_ {

	public static void main(String[] args) 
	{
		String name = "vaishnavi habare";
		
		String name1[]=name.trim().split("\\s+");
		
		Map<Character ,Integer> dup = new HashMap<>();
		
		String res = name1[0];
		
		for(char ch : res.toCharArray())
		{
			dup.put(ch , dup.getOrDefault(ch, 0)+1);
		}
		
		for(Map.Entry<Character, Integer>entry : dup.entrySet())
		{
		   if(entry.getValue()>1)
		   {
			   System.out.println("duplicate char :"+entry.getKey());
		   }
		}

	}

}
