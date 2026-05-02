package Selenium;

import org.testng.annotations.DataProvider;

public class Data_Provider_DiffClass 
{

	@DataProvider(name="mydata")
	public Object[][] test()
	{
		Object data[][]= {{"Admin","admin123"},{"dfghj","ertyui"} ,{"Admin" ,"admin123"}};
		return data;
	}
}
