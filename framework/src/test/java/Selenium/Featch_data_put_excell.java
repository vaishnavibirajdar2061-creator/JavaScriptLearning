package Selenium;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.Duration;
import java.util.List;

import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Featch_data_put_excell {

	public static void main(String[] args) throws IOException
	{
		WebDriver driver = new ChromeDriver();
		  driver.get("https://www.flipkart.com/");
		  driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		  driver.findElement(By.className("b3wTlE")).click();
		  
		  List<WebElement>ele =driver.findElements(By.tagName("a"));
	HSSFWorkbook wb = new HSSFWorkbook ();
	HSSFSheet sheet =wb.createSheet("Amazon link");
	
	    HSSFRow roe=sheet.createRow(0);
	    roe.createCell(0).setCellValue("sr no");
	    roe.createCell(1).setCellValue("value");
	
	    int row= 1;
	for(int a=0 ; a<ele.size() ; a++)
	{
		WebElement link = ele.get(a);
		  String name=link.getText();
		 
		  
		  HSSFRow r=sheet.createRow(row++);
		  r.createCell(0).setCellValue(a++);
		  r.createCell(1).setCellValue(name);
			  
	}
	
	File file = new File(System.getProperty("user.dir")+"\\src\\amazon.xls");
	FileOutputStream fos = new FileOutputStream(file);
	
	wb.write(fos);
	fos.close();
	wb.close();
	
	System.out.println("excell shett created sucessfully");

		

	}

}
