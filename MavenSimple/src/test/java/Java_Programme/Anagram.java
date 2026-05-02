package Java_Programme;

import java.util.Arrays;

public class Anagram {

	public static void main(String[] args) 
	{
		String name= "listen" ;
		String res ="silent";
		
		String name1=name.replaceAll("\\s" , "").toLowerCase();
		String res1 = res.replaceAll("\\s" , "").toLowerCase();
		
		if(name1.length() != res1.length())
		{
			System.out.println("Not Angaram");
		}
			
		char[] c1 = name1.toCharArray();
        char[] c2 = res1.toCharArray();

		Arrays.sort(c1);
		Arrays.sort(c2);
		
		if(Arrays.equals(c1, c2))
		{
			System.out.println("Anagram ");
		}
		else
		{
			System.out.println("not angarm");
		}
		

	}

}
