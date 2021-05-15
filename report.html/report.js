$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality  of AdactinApplication",
  "description": "",
  "id": "login-functionality--of-adactinapplication",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "user enter valid username and valid paasword",
  "description": "",
  "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch url of the Adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"\u003cusername\u003e\"as username",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user checks the valid username and valid password",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword;;1"
    },
    {
      "cells": [
        "sumajity",
        "suma123"
      ],
      "line": 12,
      "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword;;2"
    },
    {
      "cells": [
        "kusuma123",
        "kusuma345"
      ],
      "line": 13,
      "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword;;3"
    },
    {
      "cells": [
        "harinikumari",
        "harini123"
      ],
      "line": 14,
      "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 311500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "user enter valid username and valid paasword",
  "description": "",
  "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch url of the Adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"sumajity\"as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"suma123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user checks the valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginpageStepDefinition.user_launch_url_of_the_Adactin_application()"
});
formatter.result({
  "duration": 8826377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumajity",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 265439700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "suma123",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 138806900,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 448469000,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_checks_the_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 3822300,
  "status": "passed"
});
formatter.after({
  "duration": 173600,
  "status": "passed"
});
formatter.before({
  "duration": 101600,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user enter valid username and valid paasword",
  "description": "",
  "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch url of the Adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"kusuma123\"as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"kusuma345\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user checks the valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginpageStepDefinition.user_launch_url_of_the_Adactin_application()"
});
formatter.result({
  "duration": 595163000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kusuma123",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 81707700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kusuma345",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 84268000,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 404994400,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_checks_the_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 242000,
  "status": "passed"
});
formatter.after({
  "duration": 108500,
  "status": "passed"
});
formatter.before({
  "duration": 260900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "user enter valid username and valid paasword",
  "description": "",
  "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user launch url of the Adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter \"harinikumari\"as username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"harini123\" as password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user checks the valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginpageStepDefinition.user_launch_url_of_the_Adactin_application()"
});
formatter.result({
  "duration": 350812300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harinikumari",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 87748500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "harini123",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 78091800,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 421549900,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_checks_the_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 42500,
  "status": "passed"
});
formatter.after({
  "duration": 107400,
  "status": "passed"
});
formatter.before({
  "duration": 97100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user enter valid username and valid paasword",
  "description": "",
  "id": "login-functionality--of-adactinapplication;user-enter-valid-username-and-valid-paasword",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user launch url of the Adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enter \"sumadavala\"as username",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user enter \"Kusuma@123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user checks the valid username and valid password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginpageStepDefinition.user_launch_url_of_the_Adactin_application()"
});
formatter.result({
  "duration": 422980100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumadavala",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_username(String)"
});
formatter.result({
  "duration": 84120000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kusuma@123",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_password(String)"
});
formatter.result({
  "duration": 81028100,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_login_button()"
});
formatter.result({
  "duration": 1005264500,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_checks_the_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.after({
  "duration": 60200,
  "status": "passed"
});
formatter.before({
  "duration": 82700,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 25,
      "value": "#Background: user enter valid username and valid paasword"
    },
    {
      "line": 26,
      "value": "#Given  user launch url of the Adactin application"
    },
    {
      "line": 27,
      "value": "#When user enter \"sumadavala\"as username"
    },
    {
      "line": 28,
      "value": "#And user enter \"masuku@123\" as password"
    },
    {
      "line": 29,
      "value": "#And user click login button"
    },
    {
      "line": 30,
      "value": "#Then  user checks the valid username and valid password"
    }
  ],
  "line": 34,
  "name": "user enter  valid details for searching the hotel",
  "description": "",
  "id": "login-functionality--of-adactinapplication;user-enter--valid-details-for-searching-the-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "user enter \"Sydney\" as location",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user enter \"Hotel Sunshine\"as hotel",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enter \"Double\"as  roomtype",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user enter \"2 - Two\"as nof rooms",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user enter \"02/04/2021\" as checkin date",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user enter \"05/04/2021\" as checkout date",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user enter \"2\"as adults per room",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user enter \"3\"as childrens per room",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user click serch button",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_location(String)"
});
formatter.result({
  "duration": 95883100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Sunshine",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_hotel(String)"
});
formatter.result({
  "duration": 92431300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_roomtype(String)"
});
formatter.result({
  "duration": 86289900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 - Two",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_nof_rooms(String)"
});
formatter.result({
  "duration": 84140800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/04/2021",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_checkin_date(String)"
});
formatter.result({
  "duration": 233712400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "05/04/2021",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_checkout_date(String)"
});
formatter.result({
  "duration": 81187600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_adults_per_room(String)"
});
formatter.result({
  "duration": 70924000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_childrens_per_room(String)"
});
formatter.result({
  "duration": 68853000,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_serch_button()"
});
formatter.result({
  "duration": 1510420800,
  "status": "passed"
});
formatter.after({
  "duration": 61600,
  "status": "passed"
});
formatter.before({
  "duration": 83800,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "user   choosing the selected hotel",
  "description": "",
  "id": "login-functionality--of-adactinapplication;user---choosing-the-selected-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "user click  the select button.",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "user click the Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user checks the selected Hotel",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_the_select_button()"
});
formatter.result({
  "duration": 97790800,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_the_Continue_button()"
});
formatter.result({
  "duration": 815173300,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_checks_the_selected_Hotel()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.after({
  "duration": 51200,
  "status": "passed"
});
formatter.before({
  "duration": 59300,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "user enter the valid details for booking hotel",
  "description": "",
  "id": "login-functionality--of-adactinapplication;user-enter-the-valid-details-for-booking-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "user enter  \"suma\"as firstname",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "user  enter \"davala\" as a lastname",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user enter \"Chennai,tiruvanmiyur ,kuppam beach road\" as address",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user enter \"1234567891234567\" as number",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user enter \"VISA\"as card type",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user  enter \"July\" as card month",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user enter \"2022\"  as card expiredyear",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user enter \"234\" as  card cvv number",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user click getbooked button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user click logout button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user validate the all valid details of booking hotel",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "suma",
      "offset": 13
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_firstname(String)"
});
formatter.result({
  "duration": 434874700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "davala",
      "offset": 13
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_a_lastname(String)"
});
formatter.result({
  "duration": 84867700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai,tiruvanmiyur ,kuppam beach road",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_address(String)"
});
formatter.result({
  "duration": 190047100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891234567",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_number(String)"
});
formatter.result({
  "duration": 127392000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VISA",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_card_type(String)"
});
formatter.result({
  "duration": 123613800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July",
      "offset": 13
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_card_month(String)"
});
formatter.result({
  "duration": 92203500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_card_expiredyear(String)"
});
formatter.result({
  "duration": 106079300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "234",
      "offset": 12
    }
  ],
  "location": "LoginpageStepDefinition.user_enter_as_card_cvv_number(String)"
});
formatter.result({
  "duration": 170297400,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_getbooked_button()"
});
formatter.result({
  "duration": 149569900,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_click_logout_button()"
});
formatter.result({
  "duration": 457196700,
  "status": "passed"
});
formatter.match({
  "location": "LoginpageStepDefinition.user_validate_the_all_valid_details_of_booking_hotel()"
});
formatter.result({
  "duration": 121000,
  "status": "passed"
});
formatter.after({
  "duration": 106600,
  "status": "passed"
});
});