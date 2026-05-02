package Rerun_Test_using_RetryAnalyser;

import org.testng.IRetryAnalyzer;
import org.testng.ITestResult;

public class Retry implements IRetryAnalyzer
{

	
		int count = 0;
	    int maxTry = 2; // retry count

	    @Override
	    public boolean retry(ITestResult result) 
	    {

	        if (count < maxTry) {
	            count++;
	            System.out.println("Retrying test: " + result.getName() + " | Attempt: " + count);
	            return true;
	        }
	        return false;

	    }

}
