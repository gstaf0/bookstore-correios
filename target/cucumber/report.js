$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalculoFrete.feature");
formatter.feature({
  "line": 1,
  "name": "Calcular Frete",
  "description": "O sistema recebe o valor do frete e o tempo de entrega.",
  "id": "calcular-frete",
  "keyword": "Feature"
});
formatter.before({
  "duration": 729462,
  "status": "passed"
});
formatter.before({
  "duration": 64950,
  "status": "passed"
});
formatter.before({
  "duration": 73023,
  "status": "passed"
});
formatter.before({
  "duration": 61051,
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
  "duration": 439104841,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega()"
});
formatter.result({
  "duration": 43088,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_se_conecta_ao_servico_dos_Correios()"
});
formatter.result({
  "duration": 1753394,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.verifica_se_a_API_esta_online()"
});
formatter.result({
  "duration": 44694,
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
  "name": "sistema retorna valor do frete: \u003cvalorFrete\u003e,",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \u003cprazoEntrega\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "eventual mensagem de erro: \u003cmensagemRetorno\u003e",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 26,
      "value": "# TODO: Completar essa tabela com mais casos de uso."
    }
  ],
  "line": 27,
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
      "line": 28,
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
      "line": 29,
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
      "line": 30,
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
      "line": 31,
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
        "\"15.40\"",
        "\"3\"",
        "\"Processamento com Sucesso\""
      ],
      "line": 32,
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
        "\"15.40\"",
        "\"3\"",
        "\"Processamento com Sucesso\""
      ],
      "line": 33,
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
        "\"\"",
        "\"\"",
        "\"Peso excedido\""
      ],
      "line": 34,
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
        "\"\"",
        "\"\"",
        "\"Largura Invalida\""
      ],
      "line": 35,
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
        "\"\"",
        "\"\"",
        "\"Altura Invalida\""
      ],
      "line": 36,
      "id": "calcular-frete;envio-de-dados-do-produto;;9"
    },
    {
      "cells": [
        "80",
        "90",
        "15",
        "130",
        "\"SEDEX\"",
        "129122200",
        "13083000",
        "\"\"",
        "\"\"",
        "\"Comprimento Invalido\""
      ],
      "line": 37,
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
        "\"\"",
        "\"\"",
        "\"CEP Origem Invalido\""
      ],
      "line": 38,
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
        "\"\"",
        "\"\"",
        "\"CEP Destino Invalido\""
      ],
      "line": 39,
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
      "line": 40,
      "id": "calcular-frete;envio-de-dados-do-produto;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 30980,
  "status": "passed"
});
formatter.before({
  "duration": 20334,
  "status": "passed"
});
formatter.before({
  "duration": 14767,
  "status": "passed"
});
formatter.before({
  "duration": 20735,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
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
  "name": "sistema retorna valor do frete: \"4.10\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"7\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 31947,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 203717,
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
  "duration": 2154017,
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
  "duration": 141407,
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
  "duration": 114788,
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
  "duration": 147707,
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
  "duration": 1241217,
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
  "duration": 820446,
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
  "duration": 173084,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 834994031,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 29001746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4.10",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 183270,
  "status": "passed"
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
  "duration": 169332,
  "status": "passed"
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
  "duration": 88349,
  "status": "passed"
});
formatter.before({
  "duration": 35721,
  "status": "passed"
});
formatter.before({
  "duration": 26496,
  "status": "passed"
});
formatter.before({
  "duration": 16608,
  "status": "passed"
});
formatter.before({
  "duration": 23348,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
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
  "name": "sistema retorna valor do frete: \"15.40\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 26843,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 388536,
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
  "duration": 100005,
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
  "duration": 115278,
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
  "duration": 183515,
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
  "duration": 158011,
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
  "duration": 254693,
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
  "duration": 182601,
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
  "duration": 124484,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 1025933,
  "error_message": "java.lang.NullPointerException\n\tat com.github.tomakehurst.wiremock.client.ResponseDefinitionBuilder.withBody(ResponseDefinitionBuilder.java:89)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.sistema_solicita_o_calculo_do_frete(CalculoFreteSteps.java:157)\n\tat ✽.When sistema solicita o calculo do frete(features/CalculoFrete.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "15.40",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 49667,
  "status": "passed"
});
formatter.before({
  "duration": 37262,
  "status": "passed"
});
formatter.before({
  "duration": 35488,
  "status": "passed"
});
formatter.before({
  "duration": 48664,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
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
  "name": "sistema retorna valor do frete: \"33.33\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"1\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 85834,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 258497,
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
  "duration": 95263,
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
  "duration": 85145,
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
  "duration": 207273,
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
  "duration": 78612,
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
  "duration": 59131,
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
  "duration": 79052,
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
  "duration": 92139,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 22997561,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 70318654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "33.33",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 199358,
  "status": "passed"
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
  "duration": 435934,
  "status": "passed"
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
  "duration": 133129,
  "status": "passed"
});
formatter.before({
  "duration": 40138,
  "status": "passed"
});
formatter.before({
  "duration": 44027,
  "status": "passed"
});
formatter.before({
  "duration": 56299,
  "status": "passed"
});
formatter.before({
  "duration": 96273,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
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
  "name": "sistema retorna valor do frete: \"15.40\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 43753,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 240495,
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
  "duration": 190253,
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
  "duration": 120580,
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
  "duration": 88877,
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
  "duration": 115400,
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
  "duration": 96935,
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
  "duration": 114126,
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
  "duration": 87969,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 101419713,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 59037142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15.40",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 121243,
  "status": "passed"
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
  "duration": 81757,
  "status": "passed"
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
  "duration": 80813,
  "status": "passed"
});
formatter.before({
  "duration": 53778,
  "status": "passed"
});
formatter.before({
  "duration": 84258,
  "status": "passed"
});
formatter.before({
  "duration": 47791,
  "status": "passed"
});
formatter.before({
  "duration": 45027,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
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
  "name": "sistema retorna valor do frete: \"15.40\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"3\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 34542,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 181078,
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
  "duration": 140865,
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
  "duration": 113258,
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
  "duration": 102097,
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
  "duration": 141234,
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
  "duration": 153433,
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
  "duration": 104503,
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
  "duration": 112284,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 48509044,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 31687726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15.40",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "duration": 80919,
  "status": "passed"
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
  "duration": 111134,
  "status": "passed"
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
  "duration": 56239,
  "status": "passed"
});
formatter.before({
  "duration": 152572,
  "status": "passed"
});
formatter.before({
  "duration": 40852,
  "status": "passed"
});
formatter.before({
  "duration": 18496,
  "status": "passed"
});
formatter.before({
  "duration": 24897,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
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
  "name": "sistema retorna valor do frete: \"\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 30593,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 213285,
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
  "duration": 92516,
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
  "duration": 84431,
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
  "duration": 78380,
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
  "duration": 229516,
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
  "duration": 57577,
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
  "duration": 80315,
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
  "duration": 95387,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 490190,
  "error_message": "java.lang.NullPointerException\n\tat com.github.tomakehurst.wiremock.client.ResponseDefinitionBuilder.withBody(ResponseDefinitionBuilder.java:89)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.sistema_solicita_o_calculo_do_frete(CalculoFreteSteps.java:157)\n\tat ✽.When sistema solicita o calculo do frete(features/CalculoFrete.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 42255,
  "status": "passed"
});
formatter.before({
  "duration": 18469,
  "status": "passed"
});
formatter.before({
  "duration": 40569,
  "status": "passed"
});
formatter.before({
  "duration": 18626,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
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
  "name": "sistema retorna valor do frete: \"\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 32933,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 259983,
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
  "duration": 94449,
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
  "duration": 168150,
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
  "duration": 89234,
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
  "duration": 154907,
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
  "duration": 73696,
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
  "duration": 106583,
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
  "duration": 86767,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 476227,
  "error_message": "java.lang.NullPointerException\n\tat com.github.tomakehurst.wiremock.client.ResponseDefinitionBuilder.withBody(ResponseDefinitionBuilder.java:89)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.sistema_solicita_o_calculo_do_frete(CalculoFreteSteps.java:157)\n\tat ✽.When sistema solicita o calculo do frete(features/CalculoFrete.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 52434,
  "status": "passed"
});
formatter.before({
  "duration": 27941,
  "status": "passed"
});
formatter.before({
  "duration": 16204,
  "status": "passed"
});
formatter.before({
  "duration": 79425,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
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
  "name": "sistema retorna valor do frete: \"\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 30654,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 212716,
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
  "duration": 100841,
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
  "duration": 208171,
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
  "duration": 108681,
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
  "duration": 102859,
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
  "duration": 128435,
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
  "duration": 99252,
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
  "duration": 243709,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 611703,
  "error_message": "java.lang.NullPointerException\n\tat com.github.tomakehurst.wiremock.client.ResponseDefinitionBuilder.withBody(ResponseDefinitionBuilder.java:89)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.sistema_solicita_o_calculo_do_frete(CalculoFreteSteps.java:157)\n\tat ✽.When sistema solicita o calculo do frete(features/CalculoFrete.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 40122,
  "status": "passed"
});
formatter.before({
  "duration": 22412,
  "status": "passed"
});
formatter.before({
  "duration": 87782,
  "status": "passed"
});
formatter.before({
  "duration": 15673,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
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
  "name": "comprimento: 130,",
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
  "name": "sistema retorna valor do frete: \"\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "eventual mensagem de erro: \"Comprimento Invalido\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 45429,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 168417,
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
  "duration": 93366,
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
  "duration": 156632,
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
  "duration": 90918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "130",
      "offset": 13
    }
  ],
  "location": "CalculoFreteSteps.comprimento(Double)"
});
formatter.result({
  "duration": 159707,
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
  "duration": 79677,
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
  "duration": 85407,
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
  "duration": 138707,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 609307,
  "error_message": "java.lang.NullPointerException\n\tat com.github.tomakehurst.wiremock.client.ResponseDefinitionBuilder.withBody(ResponseDefinitionBuilder.java:89)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.sistema_solicita_o_calculo_do_frete(CalculoFreteSteps.java:157)\n\tat ✽.When sistema solicita o calculo do frete(features/CalculoFrete.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "status": "skipped"
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
      "val": "Comprimento Invalido",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 37415,
  "status": "passed"
});
formatter.before({
  "duration": 17566,
  "status": "passed"
});
formatter.before({
  "duration": 11141,
  "status": "passed"
});
formatter.before({
  "duration": 9910,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
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
  "name": "sistema retorna valor do frete: \"\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 35399,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 292975,
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
  "duration": 114220,
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
  "duration": 108037,
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
  "duration": 120013,
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
  "duration": 121515,
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
  "duration": 107227,
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
  "duration": 112194,
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
  "duration": 812457,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 472070,
  "error_message": "java.lang.NullPointerException\n\tat com.github.tomakehurst.wiremock.client.ResponseDefinitionBuilder.withBody(ResponseDefinitionBuilder.java:89)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.sistema_solicita_o_calculo_do_frete(CalculoFreteSteps.java:157)\n\tat ✽.When sistema solicita o calculo do frete(features/CalculoFrete.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 35058,
  "status": "passed"
});
formatter.before({
  "duration": 12172,
  "status": "passed"
});
formatter.before({
  "duration": 21929,
  "status": "passed"
});
formatter.before({
  "duration": 10467,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
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
  "name": "sistema retorna valor do frete: \"\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 44630,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 153370,
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
  "duration": 681018,
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
  "duration": 103942,
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
  "duration": 85000,
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
  "duration": 1791698,
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
  "duration": 87694,
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
  "duration": 4391168,
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
  "duration": 80948,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 426940,
  "error_message": "java.lang.NullPointerException\n\tat com.github.tomakehurst.wiremock.client.ResponseDefinitionBuilder.withBody(ResponseDefinitionBuilder.java:89)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.sistema_solicita_o_calculo_do_frete(CalculoFreteSteps.java:157)\n\tat ✽.When sistema solicita o calculo do frete(features/CalculoFrete.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 53320,
  "status": "passed"
});
formatter.before({
  "duration": 51038,
  "status": "passed"
});
formatter.before({
  "duration": 12402,
  "status": "passed"
});
formatter.before({
  "duration": 25941,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
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
  "name": "sistema retorna valor do frete: \"\",",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "prazo de entrega: \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
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
  "duration": 28852,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 351510,
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
  "duration": 98639,
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
  "duration": 79180,
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
  "duration": 128276,
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
  "duration": 104793,
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
  "duration": 7188698,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_origem()"
});
formatter.result({
  "duration": 402979,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_destino()"
});
formatter.result({
  "duration": 83261,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 62714466,
  "error_message": "java.lang.NumberFormatException: For input string: \"Error!!!\"\n\tat sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:2043)\n\tat sun.misc.FloatingDecimal.parseDouble(FloatingDecimal.java:110)\n\tat java.lang.Double.parseDouble(Double.java:538)\n\tat br.unicamp.bookstore.Correios.calcularFrete(Correios.java:124)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.sistema_solicita_o_calculo_do_frete(CalculoFreteSteps.java:159)\n\tat ✽.When sistema solicita o calculo do frete(features/CalculoFrete.feature:20)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 33
    }
  ],
  "location": "CalculoFreteSteps.sistema_retorna_valor_do_frete(String)"
});
formatter.result({
  "status": "skipped"
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
  "duration": 2111348,
  "status": "passed"
});
formatter.before({
  "duration": 62642,
  "status": "passed"
});
formatter.before({
  "duration": 22106,
  "status": "passed"
});
formatter.before({
  "duration": 18091,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Armazena dados de entrega no sistema",
  "description": "",
  "id": "calcular-frete;armazena-dados-de-entrega-no-sistema",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "Sistema tem acesso aos Correios",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Correios retorna prazo de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "valor do frete",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "valores sao armazenados no sistema",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_tem_acesso_aos_Correios()"
});
formatter.result({
  "duration": 222742,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.correios_retorna_prazo_de_entrega()"
});
formatter.result({
  "duration": 22440,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valor_do_frete()"
});
formatter.result({
  "duration": 21092,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valores_sao_armazenados_no_sistema()"
});
formatter.result({
  "duration": 411931,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.valores_sao_armazenados_no_sistema(CalculoFreteSteps.java:323)\n\tat ✽.Then valores sao armazenados no sistema(features/CalculoFrete.feature:46)\n",
  "status": "failed"
});
});