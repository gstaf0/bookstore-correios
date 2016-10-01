$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/StatusDeEntrega.feature");
formatter.feature({
  "line": 1,
  "name": "Consultar status",
  "description": "Como cliente eu gostaria de poder consultar o status do andamento da entrega de um pedido",
  "id": "consultar-status",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2208013,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "cliente acessando area de consulta status de Entrega",
  "description": "",
  "id": "consultar-status;cliente-acessando-area-de-consulta-status-de-entrega",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "codigo de rastreamento do pedido",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o cliente realizou ao menos uma compra",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "o cliente esta logado no Sistema",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "o cliente acionou opcao de consultar status de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "o sistema exibe tela de consulta status de entrega do pedido",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 23296,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "buscar o status de entrega no sistema dos correios",
  "description": "",
  "id": "consultar-status;buscar-o-status-de-entrega-no-sistema-dos-correios",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "codigo de rastreamento do pedido",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "o cliente realizou ao menos uma compra",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente esta logado no sistema",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "o cliente acionou opcao de consultar status de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "o sistema recebe a situacao de entrega dos correios",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "exibir os detalhes de entrega",
  "description": "",
  "id": "consultar-status;exibir-os-detalhes-de-entrega",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "codigo de rastreamento do pedido \u003crastreamentoCodigo\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "o cliente \u003cclientID\u003e realizou ao menos uma compra",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "o cliente esta logado no sistema",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "o cliente acionou opcao de consultar status de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "o sistema dos correios retornou o status",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "o sistema exibe os detalhes de entrega do pedido com o \u003crastreamentoCodigo\u003e, \u003cstatusEntrega\u003e e \u003cprazoEntrega\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "consultar-status;exibir-os-detalhes-de-entrega;",
  "rows": [
    {
      "cells": [
        "clientID",
        "rastreamentoCodigo",
        "statusEntrega",
        "prazoEntrega"
      ],
      "line": 27,
      "id": "consultar-status;exibir-os-detalhes-de-entrega;;1"
    },
    {
      "cells": [
        "01",
        "0014FA00001",
        "Produto em separacao",
        "14/10/2016"
      ],
      "line": 28,
      "id": "consultar-status;exibir-os-detalhes-de-entrega;;2"
    },
    {
      "cells": [
        "02",
        "0014FA80002",
        "Transporte em andamento",
        "14/10/2016"
      ],
      "line": 29,
      "id": "consultar-status;exibir-os-detalhes-de-entrega;;3"
    },
    {
      "cells": [
        "03",
        "0014FA81003",
        "Produto entregue",
        "14/10/2016"
      ],
      "line": 30,
      "id": "consultar-status;exibir-os-detalhes-de-entrega;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18273,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "exibir os detalhes de entrega",
  "description": "",
  "id": "consultar-status;exibir-os-detalhes-de-entrega;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "codigo de rastreamento do pedido 0014FA00001",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "o cliente 01 realizou ao menos uma compra",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "o cliente esta logado no sistema",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "o cliente acionou opcao de consultar status de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "o sistema dos correios retornou o status",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "o sistema exibe os detalhes de entrega do pedido com o 0014FA00001, Produto em separacao e 14/10/2016",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 18224,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "exibir os detalhes de entrega",
  "description": "",
  "id": "consultar-status;exibir-os-detalhes-de-entrega;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "codigo de rastreamento do pedido 0014FA80002",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "o cliente 02 realizou ao menos uma compra",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "o cliente esta logado no sistema",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "o cliente acionou opcao de consultar status de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "o sistema dos correios retornou o status",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "o sistema exibe os detalhes de entrega do pedido com o 0014FA80002, Transporte em andamento e 14/10/2016",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 22342,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "exibir os detalhes de entrega",
  "description": "",
  "id": "consultar-status;exibir-os-detalhes-de-entrega;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "codigo de rastreamento do pedido 0014FA81003",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "o cliente 03 realizou ao menos uma compra",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "o cliente esta logado no sistema",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "o cliente acionou opcao de consultar status de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "o sistema dos correios retornou o status",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "o sistema exibe os detalhes de entrega do pedido com o 0014FA81003, Produto entregue e 14/10/2016",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});