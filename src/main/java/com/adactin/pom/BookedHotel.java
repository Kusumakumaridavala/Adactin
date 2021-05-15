package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookedHotel {
public static WebDriver driver;
@FindBy(xpath="(//input[@type='text'])[2]")
private WebElement text;

@FindBy(xpath="(//input[@type='text'])[3]")
private WebElement text1;

@FindBy(id="room_type_dis")
private WebElement room_type_dis;

@FindBy(id="room_num_dis")
private WebElement room_num_dis;

@FindBy(id="total_days_dis")
private WebElement total_days_dis;

@FindBy(id="first_name")
private WebElement first_name;

@FindBy(id ="last_name")
private WebElement last_name;

@FindBy(id="address")
private WebElement address;

@FindBy(id="cc_num")
private WebElement cc_num;

@FindBy(id="cc_type")
private WebElement cc_type;

@FindBy(id="cc_exp_month")
private WebElement cc_exp_month;

@FindBy(id="cc_exp_year")
private WebElement cc_exp_year;

@FindBy(id="cc_cvv")
private WebElement cc_cvv;

@FindBy(xpath="(//input[@type='button'])[1]")
private WebElement button;

@FindBy(xpath="//a[text()='Logout']")
private WebElement Logout;

public WebElement getLogout() {
	return Logout;
}

public BookedHotel(WebDriver driver2) {
	this.driver=driver2;
	PageFactory.initElements(driver2, this);
}

public static WebDriver getDriver() {
	return driver;
}

public WebElement getText() {
	return text;
}

public WebElement getText1() {
	return text1;
}

public WebElement getRoom_type_dis() {
	return room_type_dis;
}

public WebElement getRoom_num_dis() {
	return room_num_dis;
}

public WebElement getTotal_days_dis() {
	return total_days_dis;
}

public WebElement getFirst_name() {
	return first_name;
}

public WebElement getLast_name() {
	return last_name;
}

public WebElement getAddress() {
	return address;
}

public WebElement getCc_num() {
	return cc_num;
}

public WebElement getCc_type() {
	return cc_type;
}

public WebElement getCc_exp_month() {
	return cc_exp_month;
}

public WebElement getCc_exp_year() {
	return cc_exp_year;
}

public WebElement getCc_cvv() {
	return cc_cvv;
}

public WebElement getButton() {
	return button;
}


}
