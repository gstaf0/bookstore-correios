$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalculoFrete.feature");
formatter.feature({
  "line": 1,
  "name": "Calcular Frete",
  "description": "O sistema recebe o valor do frete e o tempo de entrega.",
  "id": "calcular-frete",
  "keyword": "Feature"
});
formatter.before({
  "duration": 195898,
  "status": "passed"
});
formatter.before({
  "duration": 1962284,
  "status": "passed"
});
formatter.before({
  "duration": 558429,
  "status": "passed"
});
formatter.before({
  "duration": 157883,
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
  "duration": 450493677,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega()"
});
formatter.result({
  "duration": 43245,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_se_conecta_ao_servico_dos_Correios()"
});
formatter.result({
  "duration": 1706152,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.verifica_se_a_API_esta_online()"
});
formatter.result({
  "duration": 91581,
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
  "name": "eventual mensagem de erro: \u003cmensagemErro\u003e",
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
        "mensagemErro"
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
        "PAC",
        "129122200",
        "13083000",
        "4",
        "07",
        "0: Processamento com Sucesso"
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
        "SEDEX",
        "129122200",
        "13000000",
        "15",
        "03",
        "0: Processamento com Sucesso"
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
        "SEDEX10",
        "129122200",
        "12900001",
        "33",
        "01",
        "0: Processamento com Sucesso"
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
        "SEDEX",
        "129122200",
        "13083000",
        "13",
        "03",
        "0: Processamento com Sucesso"
      ],
      "line": 33,
      "id": "calcular-frete;envio-de-dados-do-produto;;5"
    },
    {
      "cells": [
        "4000",
        "90",
        "15",
        "80",
        "SEDEX",
        "129122200",
        "13083000",
        "13",
        "03",
        "-4: Peso excedido"
      ],
      "line": 34,
      "id": "calcular-frete;envio-de-dados-do-produto;;6"
    },
    {
      "cells": [
        "80",
        "106",
        "15",
        "80",
        "SEDEX",
        "129122200",
        "13083000",
        "13",
        "03",
        "-13: Largura Invalida"
      ],
      "line": 35,
      "id": "calcular-frete;envio-de-dados-do-produto;;7"
    },
    {
      "cells": [
        "80",
        "90",
        "106",
        "80",
        "SEDEX",
        "129122200",
        "13083000",
        "13",
        "03",
        "-14: Altura Invalida"
      ],
      "line": 36,
      "id": "calcular-frete;envio-de-dados-do-produto;;8"
    },
    {
      "cells": [
        "80",
        "90",
        "15",
        "15",
        "SEDEX",
        "129122200",
        "13083000",
        "13",
        "03",
        "-12: Comprimento Invalida"
      ],
      "line": 37,
      "id": "calcular-frete;envio-de-dados-do-produto;;9"
    },
    {
      "cells": [
        "80",
        "90",
        "15",
        "80",
        "SEDEX",
        "929122200",
        "13083000",
        "13",
        "03",
        "-2: CEP Origem Invalido"
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
        "SEDEX",
        "129122200",
        "13083999",
        "13",
        "03",
        "-3: CEP Destino Invalido"
      ],
      "line": 39,
      "id": "calcular-frete;envio-de-dados-do-produto;;11"
    },
    {
      "cells": [
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
      "line": 40,
      "id": "calcular-frete;envio-de-dados-do-produto;;12"
    },
    {
      "cells": [
        "130",
        "33",
        "8",
        "120",
        "SEDEX",
        "129122200",
        "13083000",
        "14",
        "07",
        "0: Processamento com Sucesso"
      ],
      "line": 41,
      "id": "calcular-frete;envio-de-dados-do-produto;;13"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 36005,
  "status": "passed"
});
formatter.before({
  "duration": 43355,
  "status": "passed"
});
formatter.before({
  "duration": 30557,
  "status": "passed"
});
formatter.before({
  "duration": 22315,
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
  "name": "tipo de entrega: PAC,",
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
  "name": "retorna valor do frete: 4,",
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
  "name": "eventual mensagem de erro: 0: Processamento com Sucesso",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 33411,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 336447,
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
  "duration": 3338807,
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
  "duration": 132802,
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
  "duration": 5013259,
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
  "duration": 169055,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_PAC()"
});
formatter.result({
  "duration": 88131,
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
  "duration": 7054783,
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
  "duration": 152364,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 55077,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 67748,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 98569,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "0",
      "offset": 27
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_Processamento_com_Sucesso(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 61901,
  "status": "passed"
});
formatter.before({
  "duration": 69535,
  "status": "passed"
});
formatter.before({
  "duration": 63786,
  "status": "passed"
});
formatter.before({
  "duration": 61543,
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
  "name": "tipo de entrega: SEDEX,",
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
  "name": "retorna valor do frete: 15,",
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
  "name": "eventual mensagem de erro: 0: Processamento com Sucesso",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 32032,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 275021,
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
  "duration": 153924,
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
  "duration": 156617,
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
  "duration": 114355,
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
  "duration": 111967,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX()"
});
formatter.result({
  "duration": 78460,
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
  "duration": 153256,
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
  "duration": 173004,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 38573,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 34692,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 38733,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "0",
      "offset": 27
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_Processamento_com_Sucesso(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 59955,
  "status": "passed"
});
formatter.before({
  "duration": 97291,
  "status": "passed"
});
formatter.before({
  "duration": 124243,
  "status": "passed"
});
formatter.before({
  "duration": 38134,
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
  "name": "tipo de entrega: SEDEX10,",
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
  "name": "retorna valor do frete: 33,",
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
  "name": "eventual mensagem de erro: 0: Processamento com Sucesso",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 28426,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 182557,
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
  "duration": 107843,
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
  "duration": 309106,
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
  "duration": 139084,
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
  "duration": 129077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 22
    }
  ],
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX(int)"
});
formatter.result({
  "duration": 157721,
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
  "duration": 206668,
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
  "duration": 136177,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 41597,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 30612,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 247307,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "0",
      "offset": 27
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_Processamento_com_Sucesso(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 31463,
  "status": "passed"
});
formatter.before({
  "duration": 22675,
  "status": "passed"
});
formatter.before({
  "duration": 30239,
  "status": "passed"
});
formatter.before({
  "duration": 24506,
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
  "name": "tipo de entrega: SEDEX,",
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
  "name": "retorna valor do frete: 13,",
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
  "name": "eventual mensagem de erro: 0: Processamento com Sucesso",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 48162,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 214982,
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
  "duration": 104791,
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
  "duration": 144359,
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
  "duration": 110296,
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
  "duration": 239262,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX()"
});
formatter.result({
  "duration": 34230,
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
  "duration": 135171,
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
  "duration": 131856,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 37098,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 33835,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 29718,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "0",
      "offset": 27
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_Processamento_com_Sucesso(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 39046,
  "status": "passed"
});
formatter.before({
  "duration": 95324,
  "status": "passed"
});
formatter.before({
  "duration": 26580,
  "status": "passed"
});
formatter.before({
  "duration": 42198,
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
  "name": "tipo de entrega: SEDEX,",
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
  "name": "retorna valor do frete: 13,",
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
  "name": "eventual mensagem de erro: -4: Peso excedido",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 32020,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 166307,
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
  "duration": 102327,
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
  "duration": 106875,
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
  "duration": 156820,
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
  "duration": 125141,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX()"
});
formatter.result({
  "duration": 41662,
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
  "duration": 110824,
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
  "duration": 222413,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 67191,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 40802,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 79977,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "4",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_Peso_excedido(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 44554,
  "status": "passed"
});
formatter.before({
  "duration": 47719,
  "status": "passed"
});
formatter.before({
  "duration": 23151,
  "status": "passed"
});
formatter.before({
  "duration": 29761,
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
  "name": "tipo de entrega: SEDEX,",
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
  "name": "retorna valor do frete: 13,",
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
  "name": "eventual mensagem de erro: -13: Largura Invalida",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 34946,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 243758,
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
  "duration": 112596,
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
  "duration": 124076,
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
  "duration": 146657,
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
  "duration": 131424,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX()"
});
formatter.result({
  "duration": 35550,
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
  "duration": 132396,
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
  "duration": 137333,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 41810,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 39011,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 40060,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "13",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_Largura_Invalida(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 55721,
  "status": "passed"
});
formatter.before({
  "duration": 38240,
  "status": "passed"
});
formatter.before({
  "duration": 36023,
  "status": "passed"
});
formatter.before({
  "duration": 24922,
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
  "name": "tipo de entrega: SEDEX,",
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
  "name": "retorna valor do frete: 13,",
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
  "name": "eventual mensagem de erro: -14: Altura Invalida",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 36103,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 253584,
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
  "duration": 192183,
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
  "duration": 96926,
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
  "duration": 166775,
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
  "duration": 162685,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX()"
});
formatter.result({
  "duration": 23043,
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
  "duration": 124681,
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
  "duration": 157640,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 41385,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 38318,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 36125,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "14",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_Altura_Invalida(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 43352,
  "status": "passed"
});
formatter.before({
  "duration": 45157,
  "status": "passed"
});
formatter.before({
  "duration": 32370,
  "status": "passed"
});
formatter.before({
  "duration": 58562,
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
  "name": "tipo de entrega: SEDEX,",
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
  "name": "retorna valor do frete: 13,",
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
  "name": "eventual mensagem de erro: -12: Comprimento Invalida",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 29193,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 289128,
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
  "duration": 130492,
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
  "duration": 132776,
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
  "duration": 126706,
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
  "duration": 117742,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX()"
});
formatter.result({
  "duration": 31379,
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
  "duration": 19131277,
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
  "duration": 192518,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 30246,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 40947,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 38361,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "12",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_Comprimento_Invalida(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 43677,
  "status": "passed"
});
formatter.before({
  "duration": 31660,
  "status": "passed"
});
formatter.before({
  "duration": 22046,
  "status": "passed"
});
formatter.before({
  "duration": 27673,
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
  "name": "comprimento: 80,",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "tipo de entrega: SEDEX,",
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
  "name": "retorna valor do frete: 13,",
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
  "name": "eventual mensagem de erro: -2: CEP Origem Invalido",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 36752,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 243114,
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
  "duration": 702549,
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
  "duration": 113624,
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
  "duration": 196424,
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
  "duration": 121590,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX()"
});
formatter.result({
  "duration": 36051,
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
  "duration": 122399,
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
  "duration": 128324,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 28800,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 36972,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "2",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_CEP_Origem_Invalido(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 37955,
  "status": "passed"
});
formatter.before({
  "duration": 368921,
  "status": "passed"
});
formatter.before({
  "duration": 58808,
  "status": "passed"
});
formatter.before({
  "duration": 24021,
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
  "name": "tipo de entrega: SEDEX,",
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
  "name": "retorna valor do frete: 13,",
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
  "name": "eventual mensagem de erro: -3: CEP Destino Invalido",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 26657,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 280304,
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
  "duration": 149599,
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
  "duration": 2214173,
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
  "duration": 116820,
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
  "duration": 99234,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX()"
});
formatter.result({
  "duration": 43656,
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
  "duration": 129637,
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
  "duration": 574902,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 33507,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 1915423,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 41977,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "3",
      "offset": 28
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_CEP_Destino_Invalido(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 49296,
  "status": "passed"
});
formatter.before({
  "duration": 80975,
  "status": "passed"
});
formatter.before({
  "duration": 24602,
  "status": "passed"
});
formatter.before({
  "duration": 91956,
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
  "name": "tipo de entrega: --,",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "CEP de origem --",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "CEP de destino --",
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
  "name": "retorna valor do frete: --,",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "prazo de entrega: --",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "eventual mensagem de erro: --",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 32943,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 189737,
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
  "duration": 148194,
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
  "duration": 174301,
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
  "duration": 103254,
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
  "duration": 98047,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega()"
});
formatter.result({
  "duration": 58268,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_origem()"
});
formatter.result({
  "duration": 25431,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.cep_de_destino()"
});
formatter.result({
  "duration": 36650,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 30659,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 35496,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 32219,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.retorna_valor_do_frete()"
});
formatter.result({
  "duration": 1604518,
  "error_message": "java.lang.AssertionError: expected:\u003c\u003e but was:\u003cnull\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\n\tat org.junit.Assert.assertEquals(Assert.java:118)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.retorna_valor_do_frete(CalculoFreteSteps.java:158)\n\tat ✽.And retorna valor do frete: --,(features/CalculoFrete.feature:23)\n",
  "status": "failed"
});
formatter.match({
  "location": "CalculoFreteSteps.prazo_de_entrega()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro()"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 41857,
  "status": "passed"
});
formatter.before({
  "duration": 29132,
  "status": "passed"
});
formatter.before({
  "duration": 29939,
  "status": "passed"
});
formatter.before({
  "duration": 22931,
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
  "name": "tipo de entrega: SEDEX,",
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
  "name": "retorna valor do frete: 14,",
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
  "name": "eventual mensagem de erro: 0: Processamento com Sucesso",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalculoFreteSteps.existe_ao_menos_um_pedido_no_carrinho()"
});
formatter.result({
  "duration": 31038,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.servico_dos_correios_esta_operacional()"
});
formatter.result({
  "duration": 234860,
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
  "duration": 95865,
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
  "duration": 97324,
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
  "duration": 80948,
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
  "duration": 150509,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tipo_de_entrega_SEDEX()"
});
formatter.result({
  "duration": 29553,
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
  "duration": 99322,
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
  "duration": 167018,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_solicita_o_calculo_do_frete()"
});
formatter.result({
  "duration": 40838,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.tempo_de_entrega()"
});
formatter.result({
  "duration": 27011,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.sistema_verifica_a_validade_dos_dados()"
});
formatter.result({
  "duration": 30336,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
      "val": "0",
      "offset": 27
    }
  ],
  "location": "CalculoFreteSteps.eventual_mensagem_de_erro_Processamento_com_Sucesso(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.before({
  "duration": 41349,
  "status": "passed"
});
formatter.before({
  "duration": 28191,
  "status": "passed"
});
formatter.before({
  "duration": 36066,
  "status": "passed"
});
formatter.before({
  "duration": 33269,
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
  "duration": 347066,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.correios_retorna_prazo_de_entrega()"
});
formatter.result({
  "duration": 26578,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valor_do_frete()"
});
formatter.result({
  "duration": 27917,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valores_sao_armazenados_no_sistema()"
});
formatter.result({
  "duration": 390638,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.valores_sao_armazenados_no_sistema(CalculoFreteSteps.java:317)\n\tat ✽.Then valores sao armazenados no sistema(features/CalculoFrete.feature:47)\n",
  "status": "failed"
});
});