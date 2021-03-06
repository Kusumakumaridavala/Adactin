package com.adactin.runner;

import java.io.IOException;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.Baseclass;
import com.adactin.helper.FileReaderManager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class) // here to run our cuumber class
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", glue = "com\\adactin\\stepdefinition", monochrome = true, dryRun = false,
//tags= {"~@Login"})
plugin = {
		"com.cucumber.listener.ExtentCucumberFormatter:Report/reports.html" ,
		"html:report.html","json:Reports/jsonReport.json",
		"pretty",
		"rerun:report3/failedScenario.txt"})


public class Runner {
	public static WebDriver driver;

	@BeforeClass
	// public static void getBrowser() {
	// driver=Baseclass.browserLaunch("Chrome");
	public static void setup() throws IOException {
		String browser = FileReaderManager.getInstance().getCrInstance().getBrowser();
		driver = Baseclass.browserLaunch(browser);

	}

	@AfterClass
	public static void tearDown() {
		driver.quit();
	}

}
