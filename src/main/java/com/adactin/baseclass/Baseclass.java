package com.adactin.baseclass;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

public class Baseclass {

	public static WebDriver driver;

	public static WebDriver browserLaunch(String browsername) {
		try {
			if (browsername.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver",
						System.getProperty("user.dir") + "\\Driver\\chromedriver.exe");
				driver = new ChromeDriver();
			} else if (browsername.equalsIgnoreCase("firefox")) {
				System.setProperty("webdriver.gecko.driver",
						System.getProperty("user.dir") + "\\Driver\\geckodriver.exe");
				driver = new FirefoxDriver();
			} else {
				System.out.println("invalidBrowser");
			}

		}

		catch (Exception e) {
			e.printStackTrace();
		}

		return driver;
	}

	public static void getUrl(String url) {
		driver.get(url);
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

	public static void getCurrentUrl() {
		driver.getCurrentUrl();

	}

	public static void clickOnElement(WebElement element) {
		element.click();

	}

	public static void clear(WebElement element) {
		element.clear();
	}

	public static void dropdown(WebElement element, String options, String value) {

		Select s = new Select(element);
		if (options.equalsIgnoreCase("index")) {
			s.selectByIndex(Integer.parseInt(value));
		} else if (options.equalsIgnoreCase("value")) {
			s.selectByValue(value);
		} else if (options.equalsIgnoreCase("text")) {
			s.selectByVisibleText(value);
		}

	}

	public static void inputOfElement(WebElement element, String value) {
		element.sendKeys(value);
		

}
	public static void radiobutton(WebElement element) throws IOException {
		element.click();
	}
		
		
	public static void screenshot(String path) throws IOException	{
		TakesScreenshot ts = (TakesScreenshot) driver;// object

		File screenshotAs = ts.getScreenshotAs(OutputType.FILE);// take a pic
		File destination = new File(path);
		FileUtils.copyFileToDirectory(screenshotAs, destination);
		
}
	
	
}
