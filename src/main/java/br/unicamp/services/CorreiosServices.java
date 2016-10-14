package br.unicamp.services;


// Classe que implementa alguns dos serviços prestados pelos correios para que o teste possa ser executado corretamente.
public class CorreiosServices {
	
	String retMessage;
	int respCode;
	String prazoEntrega;

	public String calcFrete(Double peso, Double largura, Double altura, Double comprimento, String tipoEntrega, Long cepOrig, Long cepDest) {

		respCode = 200;
		retMessage = "Processamento com Sucesso";
		String frete = null;

		if(tipoEntrega=="" || tipoEntrega==null || cepOrig==null || cepDest==null) {
			retMessage = "Alguns campos não foram preenchidos";
			respCode = 501;
			return frete;
		}

		if(cepOrig==929122200) {
			retMessage = "CEP Origem Invalido";
			respCode = 502;
			return frete;
		}

		if(cepDest==13083999) {
			respCode = 503;
			retMessage = "CEP Destino Invalido";
			return frete;
		}
		
		if(peso > 1000) {
			respCode = 504;
			retMessage = "Peso excedido";
			return frete;
		}
		
		if(largura > 100) {
			respCode = 505;
			retMessage = "Largura Invalida";
			return frete;
		}

		if(altura > 100) {
			respCode = 506;
			retMessage = "Altura Invalida";
			return frete;
		}
		
		if(comprimento > 120) {
			respCode = 507;
			retMessage = "Comprimento Invalido";
			return frete;
		}
		
		if(tipoEntrega.equals("PAC")) {
			frete = "4.10";
		}else if(tipoEntrega.equals("SEDEX")) {
			frete = "15.40";
		} else if(tipoEntrega.equals("SEDEX10")) {
			frete = "33.33";
		} else {
			frete = "Error!!!";
		}
		
		return frete;
	}

	public String getMensagemRetorno() {
		return retMessage;
	}
	
	public int getStatus() {
		return respCode;
	}
	
	public String calcPrazo(String tipoEntrega) {
		String ret;
		if(tipoEntrega.equals("PAC")) {
			ret = "7";
		}else if(tipoEntrega.equals("SEDEX")) {
			ret = "3";
		} else if(tipoEntrega.equals("SEDEX10")) {
			ret = "1";
		} else {
			ret = "Error!!!";
		}
		
		return ret;
	}
}
