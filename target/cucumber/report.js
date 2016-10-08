$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalculoFrete.feature");
formatter.feature({
  "line": 1,
  "name": "Calcular Frete",
  "description": "O sistema recebe o valor do frete e o tempo de entrega.",
  "id": "calcular-frete",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2173148,
  "status": "passed"
});
formatter.before({
  "duration": 52001,
  "status": "passed"
});
formatter.before({
  "duration": 35201,
  "status": "passed"
});
formatter.before({
  "duration": 1172708,
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
formatter.match({
  "location": "CalculoFreteSteps.o_cliente_adicionou_ao_menos_um_produto_ao_carrinho_de_compras()"
});
formatter.result({
  "duration": 85278844,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega()"
});
formatter.result({
  "duration": 23173,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_solicita_o_acesso_ao_sistema_do_correios()"
});
formatter.result({
  "duration": 10833068,
  "error_message": "java.lang.AssertionError: expected:\u003c123456\u003e but was:\u003c1234567\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_sistema_solicita_o_acesso_ao_sistema_do_correios(CalculoFreteSteps.java:57)\n\tat ✽.Then o sistema solicita o acesso ao sistema do correios(features/CalculoFrete.feature:7)\n",
  "status": "failed"
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
  "name": "o sistema esta com acesso aos correios",
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
  "duration": 24238,
  "status": "passed"
});
formatter.before({
  "duration": 23116,
  "status": "passed"
});
formatter.before({
  "duration": 13638,
  "status": "passed"
});
formatter.before({
  "duration": 12736,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 3210715,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 26
    },
    {
      "val": "100",
      "offset": 31
    },
    {
      "val": "80",
      "offset": 36
    },
    {
      "val": "100",
      "offset": 41
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_PAC()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 21494,
  "status": "passed"
});
formatter.before({
  "duration": 14686,
  "status": "passed"
});
formatter.before({
  "duration": 14770,
  "status": "passed"
});
formatter.before({
  "duration": 13675,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 2968566,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 26
    },
    {
      "val": "15",
      "offset": 32
    },
    {
      "val": "20",
      "offset": 36
    },
    {
      "val": "120",
      "offset": 41
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_SEDEX()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13000000",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 23797,
  "status": "passed"
});
formatter.before({
  "duration": 15597,
  "status": "passed"
});
formatter.before({
  "duration": 14145,
  "status": "passed"
});
formatter.before({
  "duration": 12837,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 1633192,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    },
    {
      "val": "88",
      "offset": 30
    },
    {
      "val": "3",
      "offset": 34
    },
    {
      "val": "50",
      "offset": 38
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12900001",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 27226,
  "status": "passed"
});
formatter.before({
  "duration": 15191,
  "status": "passed"
});
formatter.before({
  "duration": 14215,
  "status": "passed"
});
formatter.before({
  "duration": 13510,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 1373781,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    },
    {
      "val": "90",
      "offset": 30
    },
    {
      "val": "15",
      "offset": 34
    },
    {
      "val": "80",
      "offset": 39
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_SEDEX()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 25254,
  "status": "passed"
});
formatter.before({
  "duration": 14767,
  "status": "passed"
});
formatter.before({
  "duration": 14103,
  "status": "passed"
});
formatter.before({
  "duration": 15132,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 2048722,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 26
    },
    {
      "val": "90",
      "offset": 32
    },
    {
      "val": "15",
      "offset": 36
    },
    {
      "val": "80",
      "offset": 41
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_SEDEX()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 23031,
  "status": "passed"
});
formatter.before({
  "duration": 18853,
  "status": "passed"
});
formatter.before({
  "duration": 14249,
  "status": "passed"
});
formatter.before({
  "duration": 12809,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 3400917,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    },
    {
      "val": "106",
      "offset": 30
    },
    {
      "val": "15",
      "offset": 35
    },
    {
      "val": "80",
      "offset": 40
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_SEDEX()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 18661,
  "status": "passed"
});
formatter.before({
  "duration": 13802,
  "status": "passed"
});
formatter.before({
  "duration": 12274,
  "status": "passed"
});
formatter.before({
  "duration": 11426,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 1855634,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    },
    {
      "val": "90",
      "offset": 30
    },
    {
      "val": "106",
      "offset": 34
    },
    {
      "val": "80",
      "offset": 40
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_SEDEX()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 17797,
  "status": "passed"
});
formatter.before({
  "duration": 25007,
  "status": "passed"
});
formatter.before({
  "duration": 12709,
  "status": "passed"
});
formatter.before({
  "duration": 16065,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 3808855,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    },
    {
      "val": "90",
      "offset": 30
    },
    {
      "val": "15",
      "offset": 34
    },
    {
      "val": "15",
      "offset": 39
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_SEDEX()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 24803,
  "status": "passed"
});
formatter.before({
  "duration": 13135,
  "status": "passed"
});
formatter.before({
  "duration": 56965,
  "status": "passed"
});
formatter.before({
  "duration": 11703,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 1460410,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    },
    {
      "val": "90",
      "offset": 30
    },
    {
      "val": "15",
      "offset": 34
    },
    {
      "val": "80",
      "offset": 39
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_SEDEX()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "929122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 24437,
  "status": "passed"
});
formatter.before({
  "duration": 13182,
  "status": "passed"
});
formatter.before({
  "duration": 13374,
  "status": "passed"
});
formatter.before({
  "duration": 11085,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 2258131,
  "error_message": "java.lang.AssertionError: expected:\u003c1\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 26
    },
    {
      "val": "90",
      "offset": 30
    },
    {
      "val": "15",
      "offset": 34
    },
    {
      "val": "80",
      "offset": 39
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_SEDEX()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13083999",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 25458,
  "status": "passed"
});
formatter.before({
  "duration": 13432,
  "status": "passed"
});
formatter.before({
  "duration": 12316,
  "status": "passed"
});
formatter.before({
  "duration": 11381,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "02",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.o_numero_de_produtos(int)"
});
formatter.result({
  "duration": 1837417,
  "error_message": "java.lang.AssertionError: expected:\u003c2\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:555)\n\tat org.junit.Assert.assertEquals(Assert.java:542)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:64)\n\tat ✽.Given o numero de produtos: 02(features/CalculoFrete.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "110",
      "offset": 26
    },
    {
      "val": "20",
      "offset": 31
    },
    {
      "val": "12",
      "offset": 35
    },
    {
      "val": "40",
      "offset": 40
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 24232,
  "status": "passed"
});
formatter.before({
  "duration": 12990,
  "status": "passed"
});
formatter.before({
  "duration": 12026,
  "status": "passed"
});
formatter.before({
  "duration": 18235,
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
  "name": "o sistema esta com acesso aos correios",
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
formatter.match({
  "arguments": [
    {
      "val": "130",
      "offset": 26
    },
    {
      "val": "33",
      "offset": 31
    },
    {
      "val": "8",
      "offset": 35
    },
    {
      "val": "120",
      "offset": 39
    }
  ],
  "location": "CalculoFreteSteps.os_dados_de_cada_produto_e(int,int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_SEDEX()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 21
    }
  ],
  "location": "CalculoFreteSteps.o_endereco_de_origem(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 48
    }
  ],
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_esta_com_acesso_aos_correios()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.before({
  "duration": 25643,
  "status": "passed"
});
formatter.before({
  "duration": 12748,
  "status": "passed"
});
formatter.before({
  "duration": 12509,
  "status": "passed"
});
formatter.before({
  "duration": 11163,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Armazena dados de entrega no sistema",
  "description": "",
  "id": "calcular-frete;armazena-dados-de-entrega-no-sistema",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Sistema tem acesso aos Correios",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "Correios retorna prazo de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "valor do frete",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "valores sao armazenados no sistema",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_tem_acesso_aos_Correios()"
});
formatter.result({
  "duration": 1185338,
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.sistema_tem_acesso_aos_Correios(CalculoFreteSteps.java:163)\n\tat ✽.Given Sistema tem acesso aos Correios(features/CalculoFrete.feature:36)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.correios_retorna_prazo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.valor_do_frete()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.valores_sao_armazenados_no_sistema()"
});
formatter.result({
  "status": "skipped"
});
});