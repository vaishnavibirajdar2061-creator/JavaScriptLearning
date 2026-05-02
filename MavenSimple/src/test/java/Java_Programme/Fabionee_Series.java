package Java_Programme;

public class Fabionee_Series {

	public static void main(String[] args) 
	{
		int f=0 ;
		int s=1;
	
		for(int a=0 ; a<=10 ; a++)
		{
			int t = f + s ;
			f=s;
			s=t ;
			System.out.println(t);
			
		}
		
	

	}

}
