$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/BuscarEndereco.feature");
formatter.feature({
  "line": 1,
  "name": "Buscar endereco",
  "description": "No que o cliente digita um CEP, o sistema retorna um endereco por ele representado",
  "id": "buscar-endereco",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "cliente fornece um CEP valido",
  "description": "",
  "id": "buscar-endereco;cliente-fornece-um-cep-valido",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "o sistema está com acesso aos correios",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o cliente preencheu o CEP do endereco de entrega \u003cCEPdestino\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema recebe o endereco fornecido pelos correios \u003cenderecoDestino\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "buscar-endereco;cliente-fornece-um-cep-valido;",
  "rows": [
    {
      "cells": [
        "CEPdestino",
        "enderecoDestino"
      ],
      "line": 10,
      "id": "buscar-endereco;cliente-fornece-um-cep-valido;;1"
    },
    {
      "cells": [
        "13083000",
        "Avenida Doutor Luis de Tella, Barão Geraldo, Campinas"
      ],
      "line": 11,
      "id": "buscar-endereco;cliente-fornece-um-cep-valido;;2"
    },
    {
      "cells": [
        "13041445",
        "Rua da Abolicao, Ponte Preta, Campinas"
      ],
      "line": 12,
      "id": "buscar-endereco;cliente-fornece-um-cep-valido;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 870212,
  "status": "passed"
});
formatter.before({
  "duration": 67156,
  "status": "passed"
});
formatter.before({
  "duration": 53452,
  "status": "passed"
});
formatter.before({
  "duration": 63973,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "cliente fornece um CEP valido",
  "description": "",
  "id": "buscar-endereco;cliente-fornece-um-cep-valido;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "o sistema está com acesso aos correios",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o cliente preencheu o CEP do endereco de entrega 13083000",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema recebe o endereco fornecido pelos correios Avenida Doutor Luis de Tella, Barão Geraldo, Campinas",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuscarEnderecoSteps.o_sistema_está_com_acesso_aos_correios()"
});
formatter.result({
  "duration": 265286539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13083000",
      "offset": 49
    }
  ],
  "location": "BuscarEnderecoSteps.o_cliente_preencheu_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "duration": 4423670,
  "status": "passed"
});
formatter.match({
  "location": "BuscarEnderecoSteps.o_sistema_recebe_o_endereco_fornecido_pelos_correios_Avenida_Doutor_Luis_de_Tella_Barão_Geraldo_Campinas()"
});
formatter.result({
  "duration": 1770115,
  "status": "passed"
});
formatter.before({
  "duration": 43469,
  "status": "passed"
});
formatter.before({
  "duration": 40002,
  "status": "passed"
});
formatter.before({
  "duration": 39723,
  "status": "passed"
});
formatter.before({
  "duration": 37385,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "cliente fornece um CEP valido",
  "description": "",
  "id": "buscar-endereco;cliente-fornece-um-cep-valido;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "o sistema está com acesso aos correios",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "o cliente preencheu o CEP do endereco de entrega 13041445",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "o sistema recebe o endereco fornecido pelos correios Rua da Abolicao, Ponte Preta, Campinas",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuscarEnderecoSteps.o_sistema_está_com_acesso_aos_correios()"
});
formatter.result({
  "duration": 300565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "13041445",
      "offset": 49
    }
  ],
  "location": "BuscarEnderecoSteps.o_cliente_preencheu_o_CEP_do_endereco_de_entrega(int)"
});
formatter.result({
  "duration": 172235,
  "status": "passed"
});
formatter.match({
  "location": "BuscarEnderecoSteps.o_sistema_recebe_o_endereco_fornecido_pelos_correios_Rua_da_Abolicao_Ponte_Preta_Campinas()"
});
formatter.result({
  "duration": 61869,
  "status": "passed"
});
formatter.before({
  "duration": 50358,
  "status": "passed"
});
formatter.before({
  "duration": 44026,
  "status": "passed"
});
formatter.before({
  "duration": 35265,
  "status": "passed"
});
formatter.before({
  "duration": 43849,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "sistema dos correios desconectado",
  "description": "",
  "id": "buscar-endereco;sistema-dos-correios-desconectado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "o sistema não está com acesso aos correios",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "o cliente preencheu o CEP do endereco de entrega",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "o sistema informa um erro de falha de acesso",
  "keyword": "Then "
});
formatter.match({
  "location": "BuscarEnderecoSteps.o_sistema_não_está_com_acesso_aos_correios()"
});
formatter.result({
  "duration": 333959,
  "status": "passed"
});
formatter.match({
  "location": "BuscarEnderecoSteps.o_cliente_preencheu_o_CEP_do_endereco_de_entrega()"
});
formatter.result({
  "duration": 47779,
  "status": "passed"
});
formatter.match({
  "location": "BuscarEnderecoSteps.o_sistema_informa_um_erro_de_falha_de_acesso()"
});
formatter.result({
  "duration": 106873,
  "status": "passed"
});
});