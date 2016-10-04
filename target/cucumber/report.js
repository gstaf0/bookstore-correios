$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalculoFrete.feature");
formatter.feature({
  "line": 1,
  "name": "Calcular Frete",
  "description": "O sistema recebe o valor do frete e o tempo de entrega.",
  "id": "calcular-frete",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1246498,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "sistema solicita o calculo do frete e o tempo de entrega",
  "description": "",
  "id": "calcular-frete;sistema-solicita-o-calculo-do-frete-e-o-tempo-de-entrega",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "o cliente adicionou ao menos um produto ao carrinho de compras",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o cliente preenche o CEP do endereco de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema solicita o acesso ao sistema do correios",
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
formatter.scenarioOutline({
  "line": 9,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: \u003cnumProduto\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: \u003cpeso\u003e, \u003clargura\u003e, \u003caltura\u003e e \u003ccomprimento\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o \u003ctipoEntrega\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem \u003cCEPorigem\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega \u003cCEPdestino\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna \u003cvalorFrete\u003e, \u003cprazoEntrega\u003e e eventual \u003cmensagemErro\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 19,
      "value": "# TODO: Completar essa tabela com mais casos de uso."
    }
  ],
  "line": 20,
  "name": "",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;",
  "rows": [
    {
      "cells": [
        "numProduto",
        "peso",
        "largura",
        "altura",
        "comprimento",
        "tipoEntrega",
        "CEPorigem",
        "CEPdestino",
        "valorFrete",
        "prazoEntrega",
        "mensagemErro"
      ],
      "line": 21,
      "id": "calcular-frete;envio-de-dados-do-produto;;1"
    },
    {
      "cells": [
        "01",
        "100",
        "100",
        "80",
        "100",
        "PAC",
        "129122200",
        "13083000",
        "4,10",
        "07",
        "0: Processamento com Sucesso"
      ],
      "line": 22,
      "id": "calcular-frete;envio-de-dados-do-produto;;2"
    },
    {
      "cells": [
        "01",
        "2500",
        "15",
        "20",
        "120",
        "SEDEX",
        "129122200",
        "13000000",
        "15,20",
        "03",
        "0: Processamento com Sucesso"
      ],
      "line": 23,
      "id": "calcular-frete;envio-de-dados-do-produto;;3"
    },
    {
      "cells": [
        "01",
        "80",
        "88",
        "3",
        "50",
        "SEDEX10",
        "129122200",
        "12900001",
        "33,00",
        "01",
        "0: Processamento com Sucesso"
      ],
      "line": 24,
      "id": "calcular-frete;envio-de-dados-do-produto;;4"
    },
    {
      "cells": [
        "01",
        "80",
        "90",
        "15",
        "80",
        "SEDEX",
        "129122200",
        "13083000",
        "13,80",
        "03",
        "0: Processamento com Sucesso"
      ],
      "line": 25,
      "id": "calcular-frete;envio-de-dados-do-produto;;5"
    },
    {
      "cells": [
        "01",
        "4000",
        "90",
        "15",
        "80",
        "SEDEX",
        "129122200",
        "13083000",
        "13,80",
        "03",
        "-4: Peso excedido"
      ],
      "line": 26,
      "id": "calcular-frete;envio-de-dados-do-produto;;6"
    },
    {
      "cells": [
        "01",
        "80",
        "106",
        "15",
        "80",
        "SEDEX",
        "129122200",
        "13083000",
        "13,80",
        "03",
        "-13: Largura Invalida"
      ],
      "line": 27,
      "id": "calcular-frete;envio-de-dados-do-produto;;7"
    },
    {
      "cells": [
        "01",
        "80",
        "90",
        "106",
        "80",
        "SEDEX",
        "129122200",
        "13083000",
        "13,80",
        "03",
        "-14: Altura Invalida"
      ],
      "line": 28,
      "id": "calcular-frete;envio-de-dados-do-produto;;8"
    },
    {
      "cells": [
        "01",
        "80",
        "90",
        "15",
        "15",
        "SEDEX",
        "129122200",
        "13083000",
        "13,80",
        "03",
        "-12: Comprimento Invalida"
      ],
      "line": 29,
      "id": "calcular-frete;envio-de-dados-do-produto;;9"
    },
    {
      "cells": [
        "01",
        "80",
        "90",
        "15",
        "80",
        "SEDEX",
        "929122200",
        "13083000",
        "13,80",
        "03",
        "-2: CEP Origem Invalido"
      ],
      "line": 30,
      "id": "calcular-frete;envio-de-dados-do-produto;;10"
    },
    {
      "cells": [
        "01",
        "80",
        "90",
        "15",
        "80",
        "SEDEX",
        "129122200",
        "13083999",
        "13,80",
        "03",
        "-3: CEP Destino Invalido"
      ],
      "line": 31,
      "id": "calcular-frete;envio-de-dados-do-produto;;11"
    },
    {
      "cells": [
        "02",
        "110",
        "20",
        "12",
        "40",
        "--",
        "--",
        "--",
        "--",
        "--",
        "--"
      ],
      "line": 32,
      "id": "calcular-frete;envio-de-dados-do-produto;;12"
    },
    {
      "cells": [
        "--",
        "130",
        "33",
        "8",
        "120",
        "SEDEX",
        "129122200",
        "13083000",
        "14,10",
        "07",
        "0: Processamento com Sucesso"
      ],
      "line": 33,
      "id": "calcular-frete;envio-de-dados-do-produto;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 59577,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 100, 100, 80 e 100",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o PAC",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13083000",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 4,10, 07 e eventual 0: Processamento com Sucesso",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 58778,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 2500, 15, 20 e 120",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13000000",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 15,20, 03 e eventual 0: Processamento com Sucesso",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 56659,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 80, 88, 3 e 50",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX10",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 12900001",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 33,00, 01 e eventual 0: Processamento com Sucesso",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 49819,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 80, 90, 15 e 80",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13083000",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 13,80, 03 e eventual 0: Processamento com Sucesso",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 56671,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 4000, 90, 15 e 80",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13083000",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 13,80, 03 e eventual -4: Peso excedido",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 115499,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 80, 106, 15 e 80",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13083000",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 13,80, 03 e eventual -13: Largura Invalida",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 50252,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 80, 90, 106 e 80",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13083000",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 13,80, 03 e eventual -14: Altura Invalida",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 49469,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 80, 90, 15 e 15",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13083000",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 13,80, 03 e eventual -12: Comprimento Invalida",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 42795,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 80, 90, 15 e 80",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 929122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13083000",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 13,80, 03 e eventual -2: CEP Origem Invalido",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 51619,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 01",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 80, 90, 15 e 80",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13083999",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 13,80, 03 e eventual -3: CEP Destino Invalido",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 48621,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: 02",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 110, 20, 12 e 40",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o --",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem --",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega --",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna --, -- e eventual --",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 80767,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "o numero de produtos: --",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "os dados de cada produto: 130, 33, 8 e 120",
  "matchedColumns": [
    1,
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "o SEDEX",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "o endereco de origem 129122200",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "o cliente preenche o CEP do endereco de entrega 13083000",
  "matchedColumns": [
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "o sistema está com acesso aos correios",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "o sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "retorna 14,10, 07 e eventual 0: Processamento com Sucesso",
  "matchedColumns": [
    8,
    9,
    10
  ],
  "keyword": "And "
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});