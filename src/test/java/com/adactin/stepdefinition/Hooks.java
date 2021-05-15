package com.adactin.stepdefinition;

import java.io.IOException;

import com.adactin.baseclass.Baseclass;

import cucumber.api.Scenario;
import cucumber.api.java.*;

public class Hooks extends Baseclass {

	@Before
	public static void beforeHooks(Scenario scenario) {
		System.out.println(scenario.getName());
	}

	@After
	public static void afterHooks(Scenario scenario) throws IOException {
		System.out.println(scenario.getStatus());

		if (scenario.isFailed()) {
			screenshot("C:\\Users\\windows\\eclipse-workspace\\Adactin_Projectt\\Screeenshot\\img.png");

		}
	}
}
