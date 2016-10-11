$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalculoFrete.feature");
formatter.feature({
  "line": 1,
  "name": "Calcular Frete",
  "description": "O sistema recebe o valor do frete e o tempo de entrega.",
  "id": "calcular-frete",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2936012,
  "status": "passed"
});
formatter.before({
  "duration": 164202,
  "status": "passed"
});
formatter.before({
  "duration": 797708,
  "status": "passed"
});
formatter.before({
  "duration": 571795,
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
  "duration": 547434563,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_cliente_preenche_o_CEP_do_endereco_de_entrega()"
});
formatter.result({
  "duration": 83470,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.o_sistema_solicita_o_acesso_ao_sistema_do_correios()"
});
formatter.result({
  "duration": 10112505,
  "status": "passed"
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
  "duration": 87617,
  "status": "passed"
});
formatter.before({
  "duration": 59564,
  "status": "passed"
});
formatter.before({
  "duration": 44985,
  "status": "passed"
});
formatter.before({
  "duration": 34319,
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
  "duration": 14876796,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 84108,
  "status": "passed"
});
formatter.before({
  "duration": 51434,
  "status": "passed"
});
formatter.before({
  "duration": 55503,
  "status": "passed"
});
formatter.before({
  "duration": 58506,
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
  "duration": 709797,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 67999,
  "status": "passed"
});
formatter.before({
  "duration": 195863,
  "status": "passed"
});
formatter.before({
  "duration": 59828,
  "status": "passed"
});
formatter.before({
  "duration": 137160,
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
  "duration": 418013,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 63037,
  "status": "passed"
});
formatter.before({
  "duration": 43838,
  "status": "passed"
});
formatter.before({
  "duration": 77282,
  "status": "passed"
});
formatter.before({
  "duration": 36847,
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
  "duration": 510071,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 42324,
  "status": "passed"
});
formatter.before({
  "duration": 41321,
  "status": "passed"
});
formatter.before({
  "duration": 33154,
  "status": "passed"
});
formatter.before({
  "duration": 67451,
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
  "duration": 535616,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 41733,
  "status": "passed"
});
formatter.before({
  "duration": 45134,
  "status": "passed"
});
formatter.before({
  "duration": 45165,
  "status": "passed"
});
formatter.before({
  "duration": 117192,
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
  "duration": 541486,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 65118,
  "status": "passed"
});
formatter.before({
  "duration": 58428,
  "status": "passed"
});
formatter.before({
  "duration": 53743,
  "status": "passed"
});
formatter.before({
  "duration": 51236,
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
  "duration": 15225011,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 104387,
  "status": "passed"
});
formatter.before({
  "duration": 138685,
  "status": "passed"
});
formatter.before({
  "duration": 66956,
  "status": "passed"
});
formatter.before({
  "duration": 32036,
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
  "duration": 8040038,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 43405,
  "status": "passed"
});
formatter.before({
  "duration": 46032,
  "status": "passed"
});
formatter.before({
  "duration": 43552,
  "status": "passed"
});
formatter.before({
  "duration": 25243,
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
  "duration": 488353,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 72177,
  "status": "passed"
});
formatter.before({
  "duration": 70574,
  "status": "passed"
});
formatter.before({
  "duration": 153002,
  "status": "passed"
});
formatter.before({
  "duration": 46372,
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
  "duration": 524256,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 01(features/CalculoFrete.feature:10)\n",
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
  "duration": 81609,
  "status": "passed"
});
formatter.before({
  "duration": 7177680,
  "status": "passed"
});
formatter.before({
  "duration": 67548,
  "status": "passed"
});
formatter.before({
  "duration": 114383,
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
  "duration": 419412,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.o_numero_de_produtos(CalculoFreteSteps.java:65)\n\tat ✽.Given o numero de produtos: 02(features/CalculoFrete.feature:10)\n",
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
  "duration": 113476,
  "status": "passed"
});
formatter.before({
  "duration": 45244,
  "status": "passed"
});
formatter.before({
  "duration": 102588,
  "status": "passed"
});
formatter.before({
  "duration": 31254,
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
  "duration": 60513,
  "status": "passed"
});
formatter.before({
  "duration": 28030,
  "status": "passed"
});
formatter.before({
  "duration": 60807,
  "status": "passed"
});
formatter.before({
  "duration": 59336,
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
  "duration": 597900180,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.correios_retorna_prazo_de_entrega()"
});
formatter.result({
  "duration": 86543,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valor_do_frete()"
});
formatter.result({
  "duration": 121378,
  "status": "passed"
});
formatter.match({
  "location": "CalculoFreteSteps.valores_sao_armazenados_no_sistema()"
});
formatter.result({
  "duration": 509981,
  "error_message": "java.lang.NullPointerException\n\tat br.unicamp.bookstore.steps.CalculoFreteSteps.valores_sao_armazenados_no_sistema(CalculoFreteSteps.java:189)\n\tat ✽.Then valores sao armazenados no sistema(features/CalculoFrete.feature:39)\n",
  "status": "failed"
});
});