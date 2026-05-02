package Java_Programme;

public class Capital_letter_each_word {

	public static void main(String[] args)
	{
		String name = " i want to switch within one month in next comapny";
		
		String name1[]=name.trim().split("\\s+");
		StringBuilder cap = new StringBuilder();
		
		for(String res : name1)
		{
			for(int a= res.length()-1 ; a>=0 ; a--)
			{
				cap.append(name1[a].toUpperCase()).append(" ");
			}
		}
		
		System.out.println(cap);

	}

}
