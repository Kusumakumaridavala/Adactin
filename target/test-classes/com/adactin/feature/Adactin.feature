
Feature: Login functionality  of AdactinApplication

Scenario Outline:user enter valid username and valid paasword
   Given  user launch url of the Adactin application 
    When user enter "<username>"as username
    And user enter "<password>" as password
    And user click login button
    Then  user checks the valid username and valid password
        Examples: 
        |username|password|
        |sumajity|suma123|
        |kusuma123|kusuma345|
        |harinikumari|harini123|
 
  @Login
  Scenario: user enter valid username and valid paasword
   Given  user launch url of the Adactin application 
    When user enter "sumadavala"as username
    And user enter "Kusuma@123" as password
    And user click login button
    Then  user checks the valid username and valid password
    
    
 #Background: user enter valid username and valid paasword
   #Given  user launch url of the Adactin application 
    #When user enter "sumadavala"as username
    #And user enter "masuku@123" as password
    #And user click login button
    #Then  user checks the valid username and valid password
    
    
    
     Scenario:  user enter  valid details for searching the hotel
      When   user enter "Sydney" as location
      And    user enter "Hotel Sunshine"as hotel
      And    user enter "Double"as  roomtype
      And    user enter "2 - Two"as nof rooms
      And    user enter "02/04/2021" as checkin date
      And    user enter "05/04/2021" as checkout date
      And     user enter "2"as adults per room
      And     user enter "3"as childrens per room
      Then     user click serch button




 Scenario: user   choosing the selected hotel 
  When     user click  the select button.  
  And     user click the Continue button
  Then   user checks the selected Hotel
  
Scenario:  user enter the valid details for booking hotel
   When  user enter  "suma"as firstname
   And   user  enter "davala" as a lastname
   And   user enter "Chennai,tiruvanmiyur ,kuppam beach road" as address
   And   user enter "1234567891234567" as number
   And   user enter "VISA"as card type
  And   user  enter "July" as card month
  And   user enter "2022"  as card expiredyear
  And   user enter "234" as  card cvv number
  And   user click getbooked button
 And   user click logout button
 Then  user validate the all valid details of booking hotel
 
        
        
  
      
 
    

 