$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalculoFrete.feature");
formatter.feature({
  "line": 1,
  "name": "Calcular Frete",
  "description": "O sistema recebe o valor do frete e o tempo de entrega.",
  "id": "calcular-frete",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1007998,
  "status": "passed"
});
formatter.before({
  "duration": 134388,
  "status": "passed"
});
formatter.before({
  "duration": 97123,
  "status": "passed"
});
formatter.before({
  "duration": 113217,
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
  "name": "o sistema se conecta ao servico dos Correios",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verifica se a API esta online",
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.o_cliente_adicionou_ao_menos_um_produto_ao_carrinho_de_compras()"
});
formatter.result({
  "duration": 421359884,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega()"
});
formatter.result({
  "duration": 42557,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_se_conecta_ao_servico_dos_Correios()"
});
formatter.result({
  "duration": 3076353,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.verifica_se_a_API_esta_online()"
});
formatter.result({
  "duration": 44189,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: \u003cpeso\u003e,",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: \u003clargura\u003e,",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: \u003caltura\u003e,",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: \u003ccomprimento\u003e,",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \u003ctipoEntrega\u003e,",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem \u003cCEPorigem\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino \u003cCEPdestino\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \u003cvalorFrete\u003e,",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \u003cprazoEntrega\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \u003cmensagemRetorno\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 27,
      "value": "# TODO: Completar essa tabela com mais casos de uso."
    }
  ],
  "line": 28,
  "name": "",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;",
  "rows": [
    {
      "cells": [
        "peso",
        "largura",
        "altura",
        "comprimento",
        "tipoEntrega",
        "CEPorigem",
        "CEPdestino",
        "valorFrete",
        "prazoEntrega",
        "mensagemRetorno"
      ],
      "line": 29,
      "id": "calcular-frete;envio-de-dados-do-produto;;1"
    },
    {
      "cells": [
        "100",
        "100",
        "80",
        "100",
        "\"PAC\"",
        "129122200",
        "13083000",
        "\"4.10\"",
        "\"7\"",
        "\"Processamento com Sucesso\""
      ],
      "line": 30,
      "id": "calcular-frete;envio-de-dados-do-produto;;2"
    },
    {
      "cells": [
        "2500",
        "15",
        "20",
        "120",
        "\"SEDEX\"",
        "129122200",
        "13000000",
        "\"15.40\"",
        "\"3\"",
        "\"Processamento com Sucesso\""
      ],
      "line": 31,
      "id": "calcular-frete;envio-de-dados-do-produto;;3"
    },
    {
      "cells": [
        "80",
        "88",
        "3",
        "50",
        "\"SEDEX10\"",
        "129122200",
        "12900001",
        "\"33.33\"",
        "\"1\"",
        "\"Processamento com Sucesso\""
      ],
      "line": 32,
      "id": "calcular-frete;envio-de-dados-do-produto;;4"
    },
    {
      "cells": [
        "80",
        "90",
        "15",
        "80",
        "\"SEDEX\"",
        "129122200",
        "13083000",
        "\"13.87\"",
        "\"3\"",
        "\"Processamento com Sucesso\""
      ],
      "line": 33,
      "id": "calcular-frete;envio-de-dados-do-produto;;5"
    },
    {
      "cells": [
        "130",
        "33",
        "8",
        "120",
        "\"SEDEX\"",
        "129122200",
        "13083000",
        "\"14.55\"",
        "\"7\"",
        "\"Processamento com Sucesso\""
      ],
      "line": 34,
      "id": "calcular-frete;envio-de-dados-do-produto;;6"
    },
    {
      "cells": [
        "4000",
        "90",
        "15",
        "80",
        "\"SEDEX\"",
        "129122200",
        "13083000",
        "\"13.87\"",
        "\"3\"",
        "\"Peso excedido\""
      ],
      "line": 35,
      "id": "calcular-frete;envio-de-dados-do-produto;;7"
    },
    {
      "cells": [
        "80",
        "106",
        "15",
        "80",
        "\"SEDEX\"",
        "129122200",
        "13083000",
        "\"13.87\"",
        "\"3\"",
        "\"Largura Invalida\""
      ],
      "line": 36,
      "id": "calcular-frete;envio-de-dados-do-produto;;8"
    },
    {
      "cells": [
        "80",
        "90",
        "106",
        "80",
        "\"SEDEX\"",
        "129122200",
        "13083000",
        "\"13.87\"",
        "\"3\"",
        "\"Altura Invalida\""
      ],
      "line": 37,
      "id": "calcular-frete;envio-de-dados-do-produto;;9"
    },
    {
      "cells": [
        "80",
        "90",
        "15",
        "15",
        "\"SEDEX\"",
        "129122200",
        "13083000",
        "\"13.87\"",
        "\"3\"",
        "\"Comprimento Invalida\""
      ],
      "line": 38,
      "id": "calcular-frete;envio-de-dados-do-produto;;10"
    },
    {
      "cells": [
        "80",
        "90",
        "15",
        "80",
        "\"SEDEX\"",
        "929122200",
        "13083000",
        "\"13.87\"",
        "\"3\"",
        "\"CEP Origem Invalido\""
      ],
      "line": 39,
      "id": "calcular-frete;envio-de-dados-do-produto;;11"
    },
    {
      "cells": [
        "80",
        "90",
        "15",
        "80",
        "\"SEDEX\"",
        "129122200",
        "13083999",
        "\"13.87\"",
        "\"3\"",
        "\"CEP Destino Invalido\""
      ],
      "line": 40,
      "id": "calcular-frete;envio-de-dados-do-produto;;12"
    },
    {
      "cells": [
        "110",
        "20",
        "12",
        "40",
        "\"\"",
        "",
        "",
        "\"\"",
        "\"\"",
        "\"Alguns campos não foram preenchidos\""
      ],
      "line": 41,
      "id": "calcular-frete;envio-de-dados-do-produto;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 51053,
  "status": "passed"
});
formatter.before({
  "duration": 42301,
  "status": "passed"
});
formatter.before({
  "duration": 30944,
  "status": "passed"
});
formatter.before({
  "duration": 38881,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 100,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 100,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 80,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 100,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"PAC\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13083000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"4.10\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"7\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Processamento com Sucesso\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 100804,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 360120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 2335544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 157780,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 289766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 190155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PAC",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 2097601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 1087882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 137454,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 918074468,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 154623,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 87382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4.10",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 1019618,
  "error_message": "java.lang.AssertionError: expected:\u003c4.1\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"4.10\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Processamento com Sucesso",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 87850,
  "status": "passed"
});
formatter.before({
  "duration": 24936,
  "status": "passed"
});
formatter.before({
  "duration": 27822,
  "status": "passed"
});
formatter.before({
  "duration": 15980,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 2500,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 15,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 20,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 120,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13000000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"15.40\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Processamento com Sucesso\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 25425,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 159655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2500",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 134763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 80058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 182849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 78462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 63639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 115854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13000000",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 159635,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 51802561,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 486439,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 43646,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15.40",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 433232,
  "error_message": "java.lang.AssertionError: expected:\u003c15.4\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"15.40\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Processamento com Sucesso",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 58746,
  "status": "passed"
});
formatter.before({
  "duration": 67565,
  "status": "passed"
});
formatter.before({
  "duration": 40537,
  "status": "passed"
});
formatter.before({
  "duration": 54146,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 80,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 88,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 3,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 50,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX10\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 12900001",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"33.33\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Processamento com Sucesso\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 68227,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 449612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 114140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "88",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 163159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 93821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 146546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX10",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 74423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 136837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12900001",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 150962,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 74975951,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 29959,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 29075,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33.33",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 356319,
  "error_message": "java.lang.AssertionError: expected:\u003c33.33\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"33.33\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Processamento com Sucesso",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 39172,
  "status": "passed"
});
formatter.before({
  "duration": 18700,
  "status": "passed"
});
formatter.before({
  "duration": 1901603,
  "status": "passed"
});
formatter.before({
  "duration": 66547,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 80,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 90,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 15,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 80,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13083000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"13.87\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Processamento com Sucesso\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 27598,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 174446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 159101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 128450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 118561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 121028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 194368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 3316065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 264091,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 78406736,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 45063,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 28089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.87",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 304476,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Processamento com Sucesso",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 28874,
  "status": "passed"
});
formatter.before({
  "duration": 11725,
  "status": "passed"
});
formatter.before({
  "duration": 18000,
  "status": "passed"
});
formatter.before({
  "duration": 10910,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 130,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 33,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 8,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 120,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13083000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"14.55\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"7\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Processamento com Sucesso\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 63665,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 314447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "130",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 99808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 202234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 84298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 85976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 55538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 110375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 72042,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 105750664,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 36879,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 28725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14.55",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 1437871,
  "error_message": "java.lang.AssertionError: expected:\u003c14.55\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"14.55\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Processamento com Sucesso",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 41171,
  "status": "passed"
});
formatter.before({
  "duration": 52432,
  "status": "passed"
});
formatter.before({
  "duration": 33903,
  "status": "passed"
});
formatter.before({
  "duration": 18681,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 4000,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 90,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 15,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 80,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13083000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"13.87\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Peso excedido\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 32010,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 237872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4000",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 119876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 97294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 190505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 119077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 76212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 98256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 102708,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 34950887,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 34312,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 33501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.87",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 470309,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Peso excedido",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 28476,
  "status": "passed"
});
formatter.before({
  "duration": 24727,
  "status": "passed"
});
formatter.before({
  "duration": 12513,
  "status": "passed"
});
formatter.before({
  "duration": 12410,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 80,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 106,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 15,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 80,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13083000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"13.87\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Largura Invalida\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 35216,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 246832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 112080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "106",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 100873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 84085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 587465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 113810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 66716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 68631,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 69609378,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 36089,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 31496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.87",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 441809,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Largura Invalida",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 39001,
  "status": "passed"
});
formatter.before({
  "duration": 34511,
  "status": "passed"
});
formatter.before({
  "duration": 17067,
  "status": "passed"
});
formatter.before({
  "duration": 8026,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 80,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 90,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 106,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 80,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13083000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"13.87\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Altura Invalida\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 23587,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 198090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 160189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 106111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "106",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 98565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 150480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 91819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 5359216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 189064,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 89337526,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 32248,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 25107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.87",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 477754,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Altura Invalida",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 45461,
  "status": "passed"
});
formatter.before({
  "duration": 25857,
  "status": "passed"
});
formatter.before({
  "duration": 23543,
  "status": "passed"
});
formatter.before({
  "duration": 11851,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 80,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 90,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 15,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 15,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13083000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"13.87\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Comprimento Invalida\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 23804,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 159168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 79352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 397127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 97972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 78433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 54372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 105035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 152397,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 208806096,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 34769,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 31631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.87",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 419209,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Comprimento Invalida",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 56680,
  "status": "passed"
});
formatter.before({
  "duration": 37112,
  "status": "passed"
});
formatter.before({
  "duration": 17827,
  "status": "passed"
});
formatter.before({
  "duration": 24390,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 80,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 90,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 15,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 80,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 929122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13083000",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"13.87\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"CEP Origem Invalido\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 32651,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 407582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 129883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 219229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 218598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 127622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 109046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "929122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 179831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 174150,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 62310113,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 35757,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 26986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.87",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 349699,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CEP Origem Invalido",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 32740,
  "status": "passed"
});
formatter.before({
  "duration": 13383,
  "status": "passed"
});
formatter.before({
  "duration": 11878,
  "status": "passed"
});
formatter.before({
  "duration": 25057,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 80,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 90,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 15,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 80,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"SEDEX\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem 129122200",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino 13083999",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"13.87\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"CEP Destino Invalido\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 25098,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 208492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 94215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 91491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 88046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 75426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SEDEX",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 53936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "129122200",
      "offset": 14
    }
  ],
  "location": "CalculoFreteSteps.cep_de_origem(int)"
});
formatter.result({
  "duration": 99353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083999",
      "offset": 15
    }
  ],
  "location": "CalculoFreteSteps.cep_de_destino(int)"
});
formatter.result({
  "duration": 81670,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 69314558,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 31040,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 30507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13.87",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 493044,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:172)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CEP Destino Invalido",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 113716,
  "status": "passed"
});
formatter.before({
  "duration": 54221,
  "status": "passed"
});
formatter.before({
  "duration": 50453,
  "status": "passed"
});
formatter.before({
  "duration": 27388,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "envio de dados do produto",
  "description": "",
  "id": "calcular-frete;envio-de-dados-do-produto;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "existe ao menos um pedido no carrinho",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "servico dos correios esta operacional",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "peso: 110,",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "largura: 20,",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "altura: 12,",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "comprimento: 40,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: \"\",",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem ",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino ",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "sistema solicita o calculo do frete",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "tempo de entrega",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "sistema verifica a validade dos dados",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "retorna valor do frete: \"\",",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: \"Alguns campos não foram preenchidos\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 46982,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 212438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "110",
      "offset": 6
    }
  ],
  "location": "CalculoFreteSteps.peso(Double)"
});
formatter.result({
  "duration": 274875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "CalculoFreteSteps.largura(Double)"
});
formatter.result({
  "duration": 215102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 8
    }
  ],
  "location": "CalculoFreteSteps.altura(Double)"
});
formatter.result({
  "duration": 80543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 79965,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega(String)"
});
formatter.result({
  "duration": 67334,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_origem()"
});
formatter.result({
  "duration": 131813,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_destino()"
});
formatter.result({
  "duration": 57468,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 74902695,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 32752,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 24446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "CalculoFreteSteps.retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 440590,
  "error_message": "java.lang.NumberFormatException: empty String\n\tat sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:1842)\n\tat sun.misc.FloatingDecimal.parseDouble(FloatingDecimal.java:110)\n\tat java.lang.Double.parseDouble(Double.java:538)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 19
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Alguns campos não foram preenchidos",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 46485,
  "status": "passed"
});
formatter.before({
  "duration": 22506,
  "status": "passed"
});
formatter.before({
  "duration": 13829,
  "status": "passed"
});
formatter.before({
  "duration": 13204,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Armazena dados de entrega no sistema",
  "description": "",
  "id": "calcular-frete;armazena-dados-de-entrega-no-sistema",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "Sistema tem acesso aos Correios",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Correios retorna prazo de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "valor do frete",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "valores sao armazenados no sistema",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_tem_acesso_aos_Correios()"
});
formatter.result({
  "duration": 204120,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.correios_retorna_prazo_de_entrega()"
});
formatter.result({
  "duration": 23001,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valor_do_frete()"
});
formatter.result({
  "duration": 29005,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valores_sao_armazenados_no_sistema()"
});
formatter.result({
  "duration": 349086,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.valores_sao_armazenados_no_sistema(CalculoFreteSteps.java:312)\n\tat ✽.Then valores sao armazenados no sistema(features/CalculoFrete.feature:47)\n",
  "status": "failed"
});
});