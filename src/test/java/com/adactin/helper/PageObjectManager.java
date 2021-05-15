package com.adactin.helper;

import org.openqa.selenium.WebDriver;

import com.adactin.pom.BookedHotel;
import com.adactin.pom.Login_Page;
import com.adactin.pom.Search_Hotel;
import com.adactin.pom.SelectHotel;

public class PageObjectManager {
	public static WebDriver driver;
	private Login_Page lp;
    private Search_Hotel sh;
    private SelectHotel eh;
    private BookedHotel bk;
    
   

	public BookedHotel getBk() {
		 bk=new BookedHotel(driver);
		return bk;
	}

	
	

	public PageObjectManager(WebDriver driver2) {
		this.driver=driver2;
	}

	public Login_Page getLp() {
		
		lp=new Login_Page(driver);
		return lp;
	}

	public static WebDriver getDriver() {
		return driver;
	}

	public Search_Hotel getSh() {
		sh=new Search_Hotel(driver);
		return sh;
	}

	public SelectHotel getEh() {
		eh=new SelectHotel(driver);
		return eh;
	}

	
	
	
	
	
	
}
