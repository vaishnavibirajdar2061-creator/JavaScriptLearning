package Java_Programme;

public class Reverse_string_all_letter_capital {

	public static void main(String[] args) 
	{
		
		String name = " i want to join new compnay with in  1 month";
		
		String name1[]=name.trim().split("\\s+");
		
		StringBuilder cap = new StringBuilder();
		
	
			for(int a = name1.length-1 ; a>=0 ; a--)
			{
				cap.append(name1[a].toUpperCase()).append(" ");
			}
			
			System.out.println(cap);
		}
	}


