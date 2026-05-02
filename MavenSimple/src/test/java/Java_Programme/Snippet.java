package Java_Programme;

public class Snippet {
	// Cast driver to JavascriptExecutor
	JavascriptExecutor js = (JavascriptExecutor) driver;
	
	// 1. Scroll down by pixels
	js.executeScript("window.scrollBy(0, 200);");
	
	// 2. Scroll to bottom of page
	js.executeScript("window.scrollTo(0, document.body.scrollHeight);");
	
	// 3. Scroll element into view
	js.executeScript("arguments[0].scrollIntoView(true);", ele);
	
	// 4. Click element using JS
	js.executeScript("arguments[0].click();", ele);
	
	// 5. Set value in input field
	js.executeScript("arguments[0].value='';", ele);
}

