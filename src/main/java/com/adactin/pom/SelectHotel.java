package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel {
public static WebDriver driver;
@FindBy(xpath= "//input[@type='radio']")
private WebElement radio;

@FindBy(xpath="//input[@type='submit']")
private WebElement submit;

public SelectHotel(WebDriver driver2) {
	this.driver=driver2;
	PageFactory.initElements(driver2, this);
}

public static WebDriver getDriver() {
	return driver;
}

public static void setDriver(WebDriver driver) {
	SelectHotel.driver = driver;
}

public WebElement getRadio() {
	return radio;
}

public void setRadio(WebElement radio) {
	this.radio = radio;
}

public WebElement getSubmit() {
	return submit;
}

public void setSubmit(WebElement submit) {
	this.submit = submit;
}


}
