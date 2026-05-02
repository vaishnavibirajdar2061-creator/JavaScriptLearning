package Utility;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class PropertiesUtil 
{
	
	public Properties prop;
	public PropertiesUtil()
	{
		prop=new Properties();
		File f1=new File(System.getProperty("user.dir")+"//Config//config.properties");		
		
		FileInputStream fs;
		try {
			fs = new FileInputStream(f1);
			prop.load(fs);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
	}

	public String getData(String key)
	{
		return prop.getProperty(key);
	}
}	