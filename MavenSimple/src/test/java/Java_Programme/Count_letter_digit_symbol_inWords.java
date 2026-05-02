package Java_Programme;

public class Count_letter_digit_symbol_inWords
{

	public static void main(String[] args) 
	{
		
		String name = "asdfgh!@#$%^&*1234567";
		StringBuilder letter = new StringBuilder();
		StringBuilder digit = new StringBuilder();
		StringBuilder symbol = new StringBuilder();
		
		for(char ch : name.toCharArray())
		{
			if(Character.isAlphabetic(ch))
			{
				letter.append(ch);
			}
			else if(Character.isDigit(ch))
			{
				digit.append(ch);
			}
			else
			{
				symbol.append(ch);
			}
		}
		
		System.out.println("letter :"+letter);
		System.out.println("digit :" + digit);
		System.out.println("symbol :" + symbol);
	}
}
