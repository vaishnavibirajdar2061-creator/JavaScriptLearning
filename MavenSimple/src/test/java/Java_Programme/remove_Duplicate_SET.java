package Java_Programme;

import java.util.HashSet;
import java.util.Set;

public class remove_Duplicate_SET {

	public static void main(String[] args) 
	{
		// TODO Auto-generated method stub
		String name="sdfghjertyudfghj";
		
		Set<Character> dup = new HashSet<> ();
		
		for(int a=0 ; a<name.length() ; a++)
		{
			dup.add(name.charAt(a));
		}
		
		System.out.println(dup);

	}

}
