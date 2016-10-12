$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/StatusDeEntrega.feature");
formatter.feature({
  "line": 1,
  "name": "Consultar status",
  "description": "Como cliente eu gostaria de poder consultar o status do andamento da entrega de um pedido",
  "id": "consultar-status",
  "keyword": "Feature"
});
formatter.before({
  "duration": 952441,
  "status": "passed"
});
formatter.before({
  "duration": 74667,
  "status": "passed"
});
formatter.before({
  "duration": 49610,
  "status": "passed"
});
formatter.before({
  "duration": 849483,
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
formatter.match({
  "location": "StatusDeEntregaSteps.codigo_de_rastreamento_do_pedido()"
});
formatter.result({
  "duration": 136357876,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_realizou_ao_menos_uma_compra()"
});
formatter.result({
  "duration": 76667,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_esta_logado_no_Sistema()"
});
formatter.result({
  "duration": 60899,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_acionou_opcao_de_consultar_status_de_entrega()"
});
formatter.result({
  "duration": 71655,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_sistema_exibe_tela_de_consulta_status_de_entrega_do_pedido()"
});
formatter.result({
  "duration": 2092482,
  "status": "passed"
});
formatter.before({
  "duration": 46963,
  "status": "passed"
});
formatter.before({
  "duration": 45992,
  "status": "passed"
});
formatter.before({
  "duration": 49483,
  "status": "passed"
});
formatter.before({
  "duration": 43998,
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
formatter.match({
  "location": "StatusDeEntregaSteps.codigo_de_rastreamento_do_pedido()"
});
formatter.result({
  "duration": 38923,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_realizou_ao_menos_uma_compra()"
});
formatter.result({
  "duration": 34752,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_esta_logado_no_sistema()"
});
formatter.result({
  "duration": 52403,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_acionou_opcao_de_consultar_status_de_entrega()"
});
formatter.result({
  "duration": 49048,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_sistema_recebe_a_situacao_de_entrega_dos_correios()"
});
formatter.result({
  "duration": 53848,
  "status": "passed"
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
        "00148900001",
        "Produto em separacao",
        "14/10/2016"
      ],
      "line": 28,
      "id": "consultar-status;exibir-os-detalhes-de-entrega;;2"
    },
    {
      "cells": [
        "02",
        "00148980002",
        "Transporte em andamento",
        "14/10/2016"
      ],
      "line": 29,
      "id": "consultar-status;exibir-os-detalhes-de-entrega;;3"
    },
    {
      "cells": [
        "03",
        "00148981003",
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
  "duration": 84934,
  "status": "passed"
});
formatter.before({
  "duration": 53309,
  "status": "passed"
});
formatter.before({
  "duration": 50271,
  "status": "passed"
});
formatter.before({
  "duration": 64565,
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
  "name": "codigo de rastreamento do pedido 00148900001",
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
  "name": "o sistema exibe os detalhes de entrega do pedido com o 00148900001, Produto em separacao e 14/10/2016",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "00148900001",
      "offset": 33
    }
  ],
  "location": "StatusDeEntregaSteps.codigo_de_rastreamento_do_pedido_FA(int)"
});
formatter.result({
  "duration": 3107896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 10
    }
  ],
  "location": "StatusDeEntregaSteps.o_cliente_realizou_ao_menos_uma_compra(int)"
});
formatter.result({
  "duration": 135961,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_esta_logado_no_sistema()"
});
formatter.result({
  "duration": 30131,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_acionou_opcao_de_consultar_status_de_entrega()"
});
formatter.result({
  "duration": 41937,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_sistema_dos_correios_retornou_o_status()"
});
formatter.result({
  "duration": 47944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00148900001",
      "offset": 55
    },
    {
      "val": "14",
      "offset": 91
    },
    {
      "val": "10",
      "offset": 94
    },
    {
      "val": "2016",
      "offset": 97
    }
  ],
  "location": "StatusDeEntregaSteps.o_sistema_exibe_os_detalhes_de_entrega_do_pedido_com_o_FA_Produto_em_separacao_e(int,int,int,int)"
});
formatter.result({
  "duration": 456232,
  "status": "passed"
});
formatter.before({
  "duration": 69486,
  "status": "passed"
});
formatter.before({
  "duration": 171255,
  "status": "passed"
});
formatter.before({
  "duration": 54768,
  "status": "passed"
});
formatter.before({
  "duration": 65058,
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
  "name": "codigo de rastreamento do pedido 00148980002",
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
  "name": "o sistema exibe os detalhes de entrega do pedido com o 00148980002, Transporte em andamento e 14/10/2016",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "00148980002",
      "offset": 33
    }
  ],
  "location": "StatusDeEntregaSteps.codigo_de_rastreamento_do_pedido_FA(int)"
});
formatter.result({
  "duration": 154707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 10
    }
  ],
  "location": "StatusDeEntregaSteps.o_cliente_realizou_ao_menos_uma_compra(int)"
});
formatter.result({
  "duration": 140929,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_esta_logado_no_sistema()"
});
formatter.result({
  "duration": 41147,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_acionou_opcao_de_consultar_status_de_entrega()"
});
formatter.result({
  "duration": 32885,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_sistema_dos_correios_retornou_o_status()"
});
formatter.result({
  "duration": 34439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00148980002",
      "offset": 55
    },
    {
      "val": "14",
      "offset": 94
    },
    {
      "val": "10",
      "offset": 97
    },
    {
      "val": "2016",
      "offset": 100
    }
  ],
  "location": "StatusDeEntregaSteps.o_sistema_exibe_os_detalhes_de_entrega_do_pedido_com_o_FA_Transporte_em_andamento_e(int,int,int,int)"
});
formatter.result({
  "duration": 577747,
  "status": "passed"
});
formatter.before({
  "duration": 86357,
  "status": "passed"
});
formatter.before({
  "duration": 59758,
  "status": "passed"
});
formatter.before({
  "duration": 42195,
  "status": "passed"
});
formatter.before({
  "duration": 41333,
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
  "name": "codigo de rastreamento do pedido 00148981003",
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
  "name": "o sistema exibe os detalhes de entrega do pedido com o 00148981003, Produto entregue e 14/10/2016",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "00148981003",
      "offset": 33
    }
  ],
  "location": "StatusDeEntregaSteps.codigo_de_rastreamento_do_pedido_FA(int)"
});
formatter.result({
  "duration": 148958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 10
    }
  ],
  "location": "StatusDeEntregaSteps.o_cliente_realizou_ao_menos_uma_compra(int)"
});
formatter.result({
  "duration": 140954,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_esta_logado_no_sistema()"
});
formatter.result({
  "duration": 33100,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_cliente_acionou_opcao_de_consultar_status_de_entrega()"
});
formatter.result({
  "duration": 107780,
  "status": "passed"
});
formatter.match({
  "location": "StatusDeEntregaSteps.o_sistema_dos_correios_retornou_o_status()"
});
formatter.result({
  "duration": 41064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "00148981003",
      "offset": 55
    },
    {
      "val": "14",
      "offset": 87
    },
    {
      "val": "10",
      "offset": 90
    },
    {
      "val": "2016",
      "offset": 93
    }
  ],
  "location": "StatusDeEntregaSteps.o_sistema_exibe_os_detalhes_de_entrega_do_pedido_com_o_FA_Produto_entregue_e(int,int,int,int)"
});
formatter.result({
  "duration": 380012,
  "status": "passed"
});
});