package Java_Programme;

public class miss_number_inArray_10 {

	public static void main(String[] args) 
	{
		
int num[] = {10,20,30,50};
        
        int min =10 ;
        int max=50;
        int count = (max-min)/10 +1;
        int total = count *(max +min)/2;
        int sum =0;
        
        for(int a=0 ; a<num.length ; a++)
        {
           sum = sum +num[a] ;
        }
        int miss = total -sum ;
        System.out.println(miss);
	}

}
