$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalculoFrete.feature");
formatter.feature({
  "line": 1,
  "name": "Calcular Frete",
  "description": "O sistema recebe o valor do frete e o tempo de entrega.",
  "id": "calcular-frete",
  "keyword": "Feature"
});
formatter.before({
  "duration": 432051,
  "status": "passed"
});
formatter.before({
  "duration": 84004,
  "status": "passed"
});
formatter.before({
  "duration": 975629,
  "status": "passed"
});
formatter.before({
  "duration": 333532,
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
  "duration": 463011185,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega()"
});
formatter.result({
  "duration": 74571,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_se_conecta_ao_servico_dos_Correios()"
});
formatter.result({
  "duration": 1716143,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.verifica_se_a_API_esta_online()"
});
formatter.result({
  "duration": 34171,
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
  "duration": 1091900,
  "status": "passed"
});
formatter.before({
  "duration": 105001,
  "status": "passed"
});
formatter.before({
  "duration": 103205,
  "status": "passed"
});
formatter.before({
  "duration": 87127,
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
  "duration": 35806,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 230733,
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
  "duration": 1893043,
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
  "duration": 190284,
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
  "duration": 129526,
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
  "duration": 137001,
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
  "duration": 1620756,
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
  "duration": 3296185,
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
  "duration": 142030,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 56605,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 50383,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 87959,
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
  "duration": 733330,
  "error_message": "java.lang.AssertionError: expected:\u003c4.1\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"4.10\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 34560,
  "status": "passed"
});
formatter.before({
  "duration": 31470,
  "status": "passed"
});
formatter.before({
  "duration": 28433,
  "status": "passed"
});
formatter.before({
  "duration": 41796,
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
  "duration": 38820,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 418696,
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
  "duration": 199550,
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
  "duration": 115033,
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
  "duration": 128958,
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
  "duration": 126419,
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
  "duration": 73335,
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
  "duration": 168655,
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
  "duration": 98979,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 30039,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 32620,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 34030,
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
  "duration": 282521,
  "error_message": "java.lang.AssertionError: expected:\u003c15.4\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"15.40\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 33530,
  "status": "passed"
});
formatter.before({
  "duration": 48642,
  "status": "passed"
});
formatter.before({
  "duration": 37089,
  "status": "passed"
});
formatter.before({
  "duration": 30854,
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
  "duration": 322701166,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 332867,
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
  "duration": 199269,
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
  "duration": 150943,
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
  "duration": 155393,
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
  "duration": 124990,
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
  "duration": 89711,
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
  "duration": 164006,
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
  "duration": 136616,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 34215,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 32860,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 37112,
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
  "duration": 458356,
  "error_message": "java.lang.AssertionError: expected:\u003c33.33\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"33.33\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 32510,
  "status": "passed"
});
formatter.before({
  "duration": 30512,
  "status": "passed"
});
formatter.before({
  "duration": 23444,
  "status": "passed"
});
formatter.before({
  "duration": 25073,
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
  "duration": 39700,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 190564,
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
  "duration": 149725,
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
  "duration": 160684,
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
  "duration": 123347,
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
  "duration": 91492,
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
  "duration": 100776,
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
  "duration": 158073,
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
  "duration": 3606228,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 45902074,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 30556,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 31035,
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
  "duration": 455277,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 57581,
  "status": "passed"
});
formatter.before({
  "duration": 60491,
  "status": "passed"
});
formatter.before({
  "duration": 42662,
  "status": "passed"
});
formatter.before({
  "duration": 59228,
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
  "duration": 39038,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 10894665,
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
  "duration": 126049,
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
  "duration": 92279,
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
  "duration": 100304,
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
  "duration": 89161,
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
  "duration": 69575,
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
  "duration": 108670,
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
  "duration": 153561,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 44481,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 31813,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 40543,
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
  "duration": 452689,
  "error_message": "java.lang.AssertionError: expected:\u003c14.55\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"14.55\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 46018,
  "status": "passed"
});
formatter.before({
  "duration": 34532,
  "status": "passed"
});
formatter.before({
  "duration": 27066,
  "status": "passed"
});
formatter.before({
  "duration": 26706,
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
  "duration": 40041,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 762771,
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
  "duration": 127145,
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
  "duration": 132615,
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
  "duration": 400614,
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
  "duration": 127671,
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
  "duration": 116890,
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
  "duration": 230353,
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
  "duration": 132014,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 30239,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 25488,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 26240,
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
  "duration": 329552,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 49046,
  "status": "passed"
});
formatter.before({
  "duration": 1816242,
  "status": "passed"
});
formatter.before({
  "duration": 43046,
  "status": "passed"
});
formatter.before({
  "duration": 64719,
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
  "duration": 363418,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 3512427,
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
  "duration": 158972,
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
  "duration": 516481,
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
  "duration": 113204,
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
  "duration": 119992,
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
  "duration": 77399,
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
  "duration": 90471,
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
  "duration": 116882,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 22079,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 24745,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 20957,
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
  "duration": 291816,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 111916,
  "status": "passed"
});
formatter.before({
  "duration": 472677,
  "status": "passed"
});
formatter.before({
  "duration": 52634,
  "status": "passed"
});
formatter.before({
  "duration": 54319,
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
  "duration": 60684,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 401175,
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
  "duration": 122041,
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
  "duration": 128728,
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
  "duration": 120988,
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
  "duration": 104918,
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
  "duration": 92013,
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
  "duration": 194096,
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
  "duration": 106698,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 28424,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 22562,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 23009,
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
  "duration": 766840,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 36524,
  "status": "passed"
});
formatter.before({
  "duration": 1597427,
  "status": "passed"
});
formatter.before({
  "duration": 84078,
  "status": "passed"
});
formatter.before({
  "duration": 2239940,
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
  "duration": 31301,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 334015,
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
  "duration": 121864,
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
  "duration": 874748,
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
  "duration": 7665058,
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
  "duration": 99616,
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
  "duration": 129591,
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
  "duration": 105621,
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
  "duration": 1066652,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 20449,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 27763,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 124425,
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
  "duration": 458294,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 66833,
  "status": "passed"
});
formatter.before({
  "duration": 4133377,
  "status": "passed"
});
formatter.before({
  "duration": 76341,
  "status": "passed"
});
formatter.before({
  "duration": 17901,
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
  "duration": 30180,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 9409831,
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
  "duration": 109065,
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
  "duration": 129925,
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
  "duration": 93160,
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
  "duration": 156783,
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
  "duration": 434036,
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
  "duration": 98380,
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
  "duration": 621310,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 29788,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 34911,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 33156,
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
  "duration": 341161,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 25159,
  "status": "passed"
});
formatter.before({
  "duration": 13933,
  "status": "passed"
});
formatter.before({
  "duration": 51073,
  "status": "passed"
});
formatter.before({
  "duration": 19942,
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
  "duration": 263524,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 42877,
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
  "duration": 109341,
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
  "duration": 120744,
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
  "duration": 4145866,
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
  "duration": 238769,
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
  "duration": 89944,
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
  "duration": 127023,
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
  "duration": 184456,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 80213,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 31364,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 40078,
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
  "duration": 504304,
  "error_message": "java.lang.AssertionError: expected:\u003c13.87\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:139)\n\tat ✽.And retorna valor do frete: \"13.87\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 35999,
  "status": "passed"
});
formatter.before({
  "duration": 17996,
  "status": "passed"
});
formatter.before({
  "duration": 69277,
  "status": "passed"
});
formatter.before({
  "duration": 445769,
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
  "duration": 41509,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 192020,
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
  "duration": 80462,
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
  "duration": 114793,
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
  "duration": 185104,
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
  "duration": 82473,
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
  "duration": 60938,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_origem()"
});
formatter.result({
  "duration": 247331,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_destino()"
});
formatter.result({
  "duration": 69549,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 29418,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 31249,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 29336,
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
  "duration": 495288,
  "error_message": "java.lang.NumberFormatException: empty String\n\tat sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:1842)\n\tat sun.misc.FloatingDecimal.parseDouble(FloatingDecimal.java:110)\n\tat java.lang.Double.parseDouble(Double.java:538)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:138)\n\tat ✽.And retorna valor do frete: \"\",(features/CalculoFrete.feature:23)\n",
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
  "duration": 62429,
  "status": "passed"
});
formatter.before({
  "duration": 23252,
  "status": "passed"
});
formatter.before({
  "duration": 31524,
  "status": "passed"
});
formatter.before({
  "duration": 63103,
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
  "duration": 236182,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.correios_retorna_prazo_de_entrega()"
});
formatter.result({
  "duration": 25984,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valor_do_frete()"
});
formatter.result({
  "duration": 17912,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valores_sao_armazenados_no_sistema()"
});
formatter.result({
  "duration": 261343,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.valores_sao_armazenados_no_sistema(CalculoFreteSteps.java:272)\n\tat ✽.Then valores sao armazenados no sistema(features/CalculoFrete.feature:47)\n",
  "status": "failed"
});
});