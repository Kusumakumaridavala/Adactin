package com.adactin.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Search_Hotel {
public static WebDriver driver;

@FindBy(id="location")
private WebElement location;

@FindBy(id="hotels")
private WebElement hotels;



public Search_Hotel(WebDriver driver2) {
	this.driver=driver2;
	PageFactory.initElements(driver2, this);
}

public static WebDriver getDriver() {
	return driver;
}

public static void setDriver(WebDriver driver) {
	Search_Hotel.driver = driver;
}

public WebElement getLocation() {
	return location;
}

public void setLocation(WebElement location) {
	this.location = location;
}

public WebElement getHotels() {
	return hotels;
}

public void setHotels(WebElement hotels) {
	this.hotels = hotels;
}

public WebElement getRoom_type() {
	return room_type;
}

public void setRoom_type(WebElement room_type) {
	this.room_type = room_type;
}

public WebElement getRoom_nos() {
	return room_nos;
}

public void setRoom_nos(WebElement room_nos) {
	this.room_nos = room_nos;
}

public WebElement getDatepick_in() {
	return datepick_in;
}

public void setDatepick_in(WebElement datepick_in) {
	this.datepick_in = datepick_in;
}

public WebElement getDatepick_out() {
	return datepick_out;
}

public void setDatepick_out(WebElement datepick_out) {
	this.datepick_out = datepick_out;
}

public WebElement getAdult_room() {
	return adult_room;
}

public void setAdult_room(WebElement adult_room) {
	this.adult_room = adult_room;
}

public WebElement getChild_room() {
	return child_room;
}

public void setChild_room(WebElement child_room) {
	this.child_room = child_room;
}

public WebElement getSubmit() {
	return Submit;
}

public void setSubmit(WebElement submit) {
	Submit = submit;
}

@FindBy(id="room_type")
private WebElement room_type;

@FindBy(id="room_nos")
private WebElement room_nos;

@FindBy(id="datepick_in")
private WebElement datepick_in;

@FindBy(id="datepick_out")
private WebElement datepick_out;

@FindBy(id="adult_room")
private WebElement adult_room;

@FindBy(id="child_room")
private WebElement child_room;

@FindBy(xpath = "//input[@type='submit']")
private WebElement Submit;


}
