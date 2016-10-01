Feature: Bookstore 
	As a user
  I want to access Bookstore
  So that I can by something

	# UC14
	
	# Busca por produto e categoria
Scenario: Search for a product inside a category 
	Given I accessed Bookstore 
	When I search for "HarryPotter" in "Books" 
	Then the result should be 1 
	
	# Busca por produto
Scenario: Search for a product without category 
	Given I accessed Bookstore 
	When I search for "HarryPotter"
	Then the result should be 10 
	
	#Busca sem texto
Scenario: Search for empty 
	Given I accessed Bookstore 
	When I search
	Then the result should be -1 
	
	#Busca sem texto
Scenario: Search for a product that does not exist 
	Given I accessed Bookstore 
	When I search for "VitorTirou10"
	Then the result should be 0 	
