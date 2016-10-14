$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Bookstore.feature");
formatter.feature({
  "line": 1,
  "name": "Bookstore",
  "description": "As a user\r\nI want to access Bookstore\r\nSo that I can by something",
  "id": "bookstore",
  "keyword": "Feature"
});
formatter.before({
  "duration": 30874,
  "status": "passed"
});
formatter.before({
  "duration": 11886,
  "status": "passed"
});
formatter.before({
  "duration": 19272,
  "status": "passed"
});
formatter.before({
  "duration": 14036,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 6,
      "value": "# UC14"
    },
    {
      "line": 8,
      "value": "# Busca por produto e categoria"
    }
  ],
  "line": 9,
  "name": "Search for a product inside a category",
  "description": "",
  "id": "bookstore;search-for-a-product-inside-a-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I accessed Bookstore",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I search for \"HarryPotter\" in \"Books\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the result should be 1",
  "keyword": "Then "
});
formatter.match({
  "location": "BookstoreSteps.i_accessed_Bookstore()"
});
formatter.result({
  "duration": 1807693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HarryPotter",
      "offset": 14
    },
    {
      "val": "Books",
      "offset": 31
    }
  ],
  "location": "BookstoreSteps.i_search_for_in(String,String)"
});
formatter.result({
  "duration": 3425458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 21
    }
  ],
  "location": "BookstoreSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 128026,
  "status": "passed"
});
formatter.before({
  "duration": 32418,
  "status": "passed"
});
formatter.before({
  "duration": 8261,
  "status": "passed"
});
formatter.before({
  "duration": 7112,
  "status": "passed"
});
formatter.before({
  "duration": 7267,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "# Busca por produto"
    }
  ],
  "line": 15,
  "name": "Search for a product without category",
  "description": "",
  "id": "bookstore;search-for-a-product-without-category",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I accessed Bookstore",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I search for \"HarryPotter\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the result should be 10",
  "keyword": "Then "
});
formatter.match({
  "location": "BookstoreSteps.i_accessed_Bookstore()"
});
formatter.result({
  "duration": 30905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HarryPotter",
      "offset": 14
    }
  ],
  "location": "BookstoreSteps.i_search_for(String)"
});
formatter.result({
  "duration": 74370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 21
    }
  ],
  "location": "BookstoreSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 18380922,
  "status": "passed"
});
formatter.before({
  "duration": 56896,
  "status": "passed"
});
formatter.before({
  "duration": 88017,
  "status": "passed"
});
formatter.before({
  "duration": 38012,
  "status": "passed"
});
formatter.before({
  "duration": 19631,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 20,
      "value": "#Busca sem texto"
    }
  ],
  "line": 21,
  "name": "Search for empty",
  "description": "",
  "id": "bookstore;search-for-empty",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I accessed Bookstore",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I search",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the result should be -1",
  "keyword": "Then "
});
formatter.match({
  "location": "BookstoreSteps.i_accessed_Bookstore()"
});
formatter.result({
  "duration": 30455,
  "status": "passed"
});
formatter.match({
  "location": "BookstoreSteps.i_search()"
});
formatter.result({
  "duration": 83941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "BookstoreSteps.the_result_should_be_negative(int)"
});
formatter.result({
  "duration": 499732,
  "status": "passed"
});
formatter.before({
  "duration": 24604,
  "status": "passed"
});
formatter.before({
  "duration": 16918,
  "status": "passed"
});
formatter.before({
  "duration": 9915,
  "status": "passed"
});
formatter.before({
  "duration": 8623,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 26,
      "value": "#Busca sem texto"
    }
  ],
  "line": 27,
  "name": "Search for a product that does not exist",
  "description": "",
  "id": "bookstore;search-for-a-product-that-does-not-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I accessed Bookstore",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I search for \"VitorTirou10\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the result should be 0",
  "keyword": "Then "
});
formatter.match({
  "location": "BookstoreSteps.i_accessed_Bookstore()"
});
formatter.result({
  "duration": 26891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VitorTirou10",
      "offset": 14
    }
  ],
  "location": "BookstoreSteps.i_search_for(String)"
});
formatter.result({
  "duration": 121338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 21
    }
  ],
  "location": "BookstoreSteps.the_result_should_be(int)"
});
formatter.result({
  "duration": 87930,
  "status": "passed"
});
});