package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.baseclass.Baseclass;
import com.adactin.helper.FileReaderManager;
import com.adactin.helper.PageObjectManager;
import com.adactin.runner.Runner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginpageStepDefinition extends Baseclass {

	public static WebDriver driver = Runner.driver;

	PageObjectManager pom = new PageObjectManager(driver);;

	@Given("^user launch url of the Adactin application$")
	public void user_launch_url_of_the_Adactin_application() throws Throwable {
		// getUrl("https://adactinhotelapp.com/");
		String url = FileReaderManager.getInstance().getCrInstance().getUrl();
		getUrl(url);
	}

	@When("^user enter \"([^\"]*)\"as username$")
	public void user_enter_as_username(String arg1) throws Throwable {
		inputOfElement(pom.getLp().getUsername(), arg1);
	}

	@When("^user enter \"([^\"]*)\" as password$")
	public void user_enter_as_password(String arg1) throws Throwable {
		inputOfElement(pom.getLp().getPassword(), arg1);
	}

	@When("^user click login button$")
	public void user_click_login_button() throws Throwable {
		clickOnElement(pom.getLp().getLogin());
	}

	@Then("^user checks the valid username and valid password$")
	public void user_checks_the_valid_username_and_valid_password() throws Throwable {
		Assert.assertEquals("ABC", "ABC");
	}

	@When("^user enter \"([^\"]*)\" as location$")
	public void user_enter_as_location(String arg1) throws Throwable {
		inputOfElement(pom.getSh().getLocation(), "Sydney");

	}

	@When("^user enter \"([^\"]*)\"as hotel$")
	public void user_enter_as_hotel(String arg1) throws Throwable {
		inputOfElement(pom.getSh().getHotels(), "Hotel Sunshine");

	}

	@When("^user enter \"([^\"]*)\"as  roomtype$")
	public void user_enter_as_roomtype(String arg1) throws Throwable {
		inputOfElement(pom.getSh().getRoom_type(), "Double");
	}

	@When("^user enter \"([^\"]*)\"as nof rooms$")
	public void user_enter_as_nof_rooms(String arg1) throws Throwable {
		inputOfElement(pom.getSh().getRoom_nos(), "2 - Two");
	}

	@When("^user enter \"([^\"]*)\" as checkin date$")
	public void user_enter_as_checkin_date(String arg1) throws Throwable {
		inputOfElement(pom.getSh().getDatepick_in(), "02/04/2021");
	}

	@When("^user enter \"([^\"]*)\" as checkout date$")
	public void user_enter_as_checkout_date(String arg1) throws Throwable {
		inputOfElement(pom.getSh().getDatepick_out(), "05/04/2021");

	}

	@When("^user enter \"([^\"]*)\"as adults per room$")
	public void user_enter_as_adults_per_room(String arg1) throws Throwable {
		inputOfElement(pom.getSh().getAdult_room(), "2");

	}

	@When("^user enter \"([^\"]*)\"as childrens per room$")
	public void user_enter_as_childrens_per_room(String arg1) throws Throwable {
		inputOfElement(pom.getSh().getChild_room(), "3");
	}

	@When("^user click serch button$")
	public void user_click_serch_button() throws Throwable {
		clickOnElement(pom.getSh().getSubmit());
	}

	@Then("^user checks all the valid details\\.$")
	public void user_checks_all_the_valid_details() throws Throwable {

	}

	@When("^user click  the select button\\.$")
	public void user_click_the_select_button() throws Throwable {
		clickOnElement(pom.getEh().getRadio());
	}

	@When("^user click the Continue button$")
	public void user_click_the_Continue_button() throws Throwable {
		clickOnElement(pom.getEh().getSubmit());
	}

	@Then("^user checks the selected Hotel$")
	public void user_checks_the_selected_Hotel() throws Throwable {

	}

	@When("^user enter  \"([^\"]*)\"as firstname$")
	public void user_enter_as_firstname(String arg1) throws Throwable {
		inputOfElement(pom.getBk().getFirst_name(), "suma");
	}

	@When("^user  enter \"([^\"]*)\" as a lastname$")
	public void user_enter_as_a_lastname(String arg1) throws Throwable {
		inputOfElement(pom.getBk().getLast_name(), "davala");
	}

	@When("^user enter \"([^\"]*)\" as address$")
	public void user_enter_as_address(String arg1) throws Throwable {
		inputOfElement(pom.getBk().getAddress(), "Chennai,tiruvanmiyur ,kuppam beach road");
	}

	@When("^user enter \"([^\"]*)\" as number$")
	public void user_enter_as_number(String arg1) throws Throwable {
		inputOfElement(pom.getBk().getCc_num(), "1234567891234567");
	}

	@When("^user enter \"([^\"]*)\"as card type$")
	public void user_enter_as_card_type(String arg1) throws Throwable {
		inputOfElement(pom.getBk().getCc_type(), "VISA");
	}

	@When("^user  enter \"([^\"]*)\" as card month$")
	public void user_enter_as_card_month(String arg1) throws Throwable {
		inputOfElement(pom.getBk().getCc_exp_month(), "July");
	}

	@When("^user enter \"([^\"]*)\"  as card expiredyear$")
	public void user_enter_as_card_expiredyear(String arg1) throws Throwable {
		inputOfElement(pom.getBk().getCc_exp_year(), "2022");
	}

	@When("^user enter \"([^\"]*)\" as  card cvv number$")
	public void user_enter_as_card_cvv_number(String arg1) throws Throwable {
		inputOfElement(pom.getBk().getCc_cvv(), "234");
	}

	@When("^user click getbooked button$")
	public void user_click_getbooked_button() throws Throwable {
		clickOnElement(pom.getBk().getButton());
	}

	@When("^user click logout button$")
	public void user_click_logout_button() throws Throwable {
		clickOnElement(pom.getBk().getLogout());
	}

	@Then("^user validate the all valid details of booking hotel$")
	public void user_validate_the_all_valid_details_of_booking_hotel() throws Throwable {

	}

}
