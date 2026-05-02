package Java_Programme;

import java.util.HashMap;
import java.util.Map;

public class Count_NoOf_Char_inWord_inArryFormat_ {

	public static void main(String[] args) 
	{
		String name = "vvvvvvvaishnavi";
		
		Map<Character , Integer> dup = new HashMap<Character , Integer>();
		
		for(char ch : name.toCharArray())
		{
			if(dup.containsKey(ch))
			{
			dup.put(ch , dup.put(ch, 0)+1);
			}
			else
			{
				dup.put(ch , 1);
			}
			
		}
		
		System.out.print(dup);

	}

}
