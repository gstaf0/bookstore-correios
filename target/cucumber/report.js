$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalculoFrete.feature");
formatter.feature({
  "line": 1,
  "name": "Calcular Frete",
  "description": "O sistema recebe o valor do frete e o tempo de entrega.",
  "id": "calcular-frete",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8568887,
  "status": "passed"
});
formatter.before({
  "duration": 187421,
  "status": "passed"
});
formatter.before({
  "duration": 135414,
  "status": "passed"
});
formatter.before({
  "duration": 333991,
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
  "duration": 1526136465,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega()"
});
formatter.result({
  "duration": 152275,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_se_conecta_ao_servico_dos_Correios()"
});
formatter.result({
  "duration": 2332979,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.verifica_se_a_API_esta_online()"
});
formatter.result({
  "duration": 119038,
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
        "07",
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
        "03",
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
        "01",
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
        "03",
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
        "07",
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
        "03",
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
        "03",
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
        "03",
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
        "03",
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
        "03",
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
        "03",
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
        "",
        "\"Alguns campos não foram preenchidos\""
      ],
      "line": 41,
      "id": "calcular-frete;envio-de-dados-do-produto;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 88642,
  "status": "passed"
});
formatter.before({
  "duration": 4325310,
  "status": "passed"
});
formatter.before({
  "duration": 122051,
  "status": "passed"
});
formatter.before({
  "duration": 49253,
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
  "name": "prazo de entrega: 07",
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
  "duration": 119149,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 494181,
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
  "duration": 13703899,
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
  "duration": 195799,
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
  "duration": 154649,
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
  "duration": 321285,
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
  "duration": 1897226,
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
  "duration": 1419501,
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
  "duration": 186972,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 2401037779,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 72521,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 111540,
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
  "duration": 1468100,
  "error_message": "java.lang.AssertionError: expected:\u003c4.1\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"4.10\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "07",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 44541,
  "status": "passed"
});
formatter.before({
  "duration": 54217,
  "status": "passed"
});
formatter.before({
  "duration": 43945,
  "status": "passed"
});
formatter.before({
  "duration": 109576,
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
  "name": "prazo de entrega: 03",
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
  "duration": 8237072,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 258801,
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
  "duration": 335963,
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
  "duration": 471975,
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
  "duration": 369970,
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
  "duration": 187939,
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
  "duration": 2632428,
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
  "duration": 340228,
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
  "duration": 242701,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 267653681,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 43930,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 32026,
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
  "duration": 391197,
  "error_message": "java.lang.AssertionError: expected:\u003c15.4\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"15.40\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 58891,
  "status": "passed"
});
formatter.before({
  "duration": 24017,
  "status": "passed"
});
formatter.before({
  "duration": 56732,
  "status": "passed"
});
formatter.before({
  "duration": 60976,
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
  "name": "prazo de entrega: 01",
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
  "duration": 60141,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 301865,
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
  "duration": 33858180,
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
  "duration": 150125,
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
  "duration": 219297,
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
  "duration": 11391411,
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
  "duration": 303067,
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
  "duration": 13051597,
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
  "duration": 187693,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 236444776,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 128069,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 39373,
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
  "duration": 573104,
  "error_message": "java.lang.AssertionError: expected:\u003c33.33\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"33.33\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "01",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 89824,
  "status": "passed"
});
formatter.before({
  "duration": 101200,
  "status": "passed"
});
formatter.before({
  "duration": 110123,
  "status": "passed"
});
formatter.before({
  "duration": 101438,
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
  "name": "prazo de entrega: 03",
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
  "duration": 91080,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 464530,
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
  "duration": 3339554,
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
  "duration": 157802,
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
  "duration": 334324,
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
  "duration": 321056,
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
  "duration": 7538412,
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
  "duration": 335049,
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
  "duration": 303638,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 225485971,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 57661,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 37610,
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
  "duration": 535514,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 700471,
  "status": "passed"
});
formatter.before({
  "duration": 67452,
  "status": "passed"
});
formatter.before({
  "duration": 61102,
  "status": "passed"
});
formatter.before({
  "duration": 47674,
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
  "name": "prazo de entrega: 07",
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
  "duration": 43735,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 300573,
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
  "duration": 130175,
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
  "duration": 187907,
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
  "duration": 134683,
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
  "duration": 127683,
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
  "duration": 108934,
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
  "duration": 327295,
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
  "duration": 202489,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 312098001,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 98616,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 77625,
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
  "duration": 1076820,
  "error_message": "java.lang.AssertionError: expected:\u003c14.55\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"14.55\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "07",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 138131,
  "status": "passed"
});
formatter.before({
  "duration": 42642,
  "status": "passed"
});
formatter.before({
  "duration": 37809,
  "status": "passed"
});
formatter.before({
  "duration": 73071,
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
  "name": "prazo de entrega: 03",
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
  "duration": 32088,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 423269,
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
  "duration": 1058208,
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
  "duration": 138335,
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
  "duration": 1914938,
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
  "duration": 145348,
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
  "duration": 93275,
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
  "duration": 285974,
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
  "duration": 362933,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 206831299,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 41308,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 34528,
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
  "duration": 1045934,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 34865,
  "status": "passed"
});
formatter.before({
  "duration": 28468,
  "status": "passed"
});
formatter.before({
  "duration": 16211,
  "status": "passed"
});
formatter.before({
  "duration": 25284,
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
  "name": "prazo de entrega: 03",
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
  "duration": 11559947,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 423880,
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
  "duration": 113817,
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
  "duration": 92706,
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
  "duration": 89813,
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
  "duration": 10924202,
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
  "duration": 95877,
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
  "duration": 306838,
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
  "duration": 120354,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 543859790,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 50106,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 32835,
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
  "duration": 1402693,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 89679,
  "status": "passed"
});
formatter.before({
  "duration": 89512,
  "status": "passed"
});
formatter.before({
  "duration": 103269,
  "status": "passed"
});
formatter.before({
  "duration": 87157,
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
  "name": "prazo de entrega: 03",
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
  "duration": 30544,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 1047240,
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
  "duration": 345543,
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
  "duration": 342273,
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
  "duration": 336009,
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
  "duration": 146048,
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
  "duration": 314206,
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
  "duration": 1542588,
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
  "duration": 634461,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 173232489,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 36199,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 35416,
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
  "duration": 703699,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 107441,
  "status": "passed"
});
formatter.before({
  "duration": 165159,
  "status": "passed"
});
formatter.before({
  "duration": 69498,
  "status": "passed"
});
formatter.before({
  "duration": 34562,
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
  "name": "prazo de entrega: 03",
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
  "duration": 45911,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 517932,
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
  "duration": 108950,
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
  "duration": 146442,
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
  "duration": 163772,
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
  "duration": 149896,
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
  "duration": 95563,
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
  "duration": 219700,
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
  "duration": 2053873,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 160441084,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 569395,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 84802,
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
  "duration": 969944,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 79608,
  "status": "passed"
});
formatter.before({
  "duration": 115144,
  "status": "passed"
});
formatter.before({
  "duration": 77614,
  "status": "passed"
});
formatter.before({
  "duration": 60439,
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
  "name": "prazo de entrega: 03",
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
  "duration": 90406,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 579170,
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
  "duration": 250592,
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
  "duration": 8787067,
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
  "duration": 128824,
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
  "duration": 215107,
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
  "duration": 238784,
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
  "duration": 232025,
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
  "duration": 252048,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 139569987,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 67368,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 111963,
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
  "duration": 608811,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 41964,
  "status": "passed"
});
formatter.before({
  "duration": 13295,
  "status": "passed"
});
formatter.before({
  "duration": 11344,
  "status": "passed"
});
formatter.before({
  "duration": 19345,
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
  "name": "prazo de entrega: 03",
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
  "duration": 35905,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 314631,
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
  "duration": 9434329,
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
  "duration": 110212,
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
  "duration": 124117,
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
  "duration": 107769,
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
  "duration": 101509,
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
  "duration": 12358069,
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
  "duration": 126739,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 133504581,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 50867,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 32265,
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
  "duration": 438142,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:171)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "03",
      "offset": 18
    }
  ],
  "location": "CalculoFreteSteps.prazo_de_entrega(int)"
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
  "duration": 52456,
  "status": "passed"
});
formatter.before({
  "duration": 103662,
  "status": "passed"
});
formatter.before({
  "duration": 33561,
  "status": "passed"
});
formatter.before({
  "duration": 87729,
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
  "name": "prazo de entrega: ",
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
  "duration": 29631,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 255876,
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
  "duration": 116242,
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
  "duration": 297781,
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
  "duration": 193354,
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
  "duration": 99739,
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
  "duration": 9935489,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_origem()"
});
formatter.result({
  "duration": 325608,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_destino()"
});
formatter.result({
  "duration": 214878,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 162590381,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 53594,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 36359,
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
  "duration": 562747,
  "error_message": "java.lang.NumberFormatException: empty String\n\tat sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:1842)\n\tat sun.misc.FloatingDecimal.parseDouble(FloatingDecimal.java:110)\n\tat java.lang.Double.parseDouble(Double.java:538)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:170)\n\tat ✽.And retorna valor do frete: \"\",(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.prazo_de_entrega()"
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
  "duration": 74883,
  "status": "passed"
});
formatter.before({
  "duration": 46813,
  "status": "passed"
});
formatter.before({
  "duration": 28959,
  "status": "passed"
});
formatter.before({
  "duration": 37213,
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
  "duration": 838137,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.correios_retorna_prazo_de_entrega()"
});
formatter.result({
  "duration": 63807,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valor_do_frete()"
});
formatter.result({
  "duration": 95090,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valores_sao_armazenados_no_sistema()"
});
formatter.result({
  "duration": 646083,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.valores_sao_armazenados_no_sistema(CalculoFreteSteps.java:304)\n\tat ✽.Then valores sao armazenados no sistema(features/CalculoFrete.feature:47)\n",
  "status": "failed"
});
});