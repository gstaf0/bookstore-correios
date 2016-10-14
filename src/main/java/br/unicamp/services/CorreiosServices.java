package br.unicamp.services;


// Classe que implementa alguns dos serviços prestados pelos correios para que o teste possa ser executado corretamente.
public class CorreiosServices {

	String retMessage;
	int respCode;
	String prazoEntrega;

	public String calcFrete(Double peso, Double largura, Double altura, Double comprimento, String tipoEntrega, Long cepOrig, Long cepDest) {

		respCode = 200;
		retMessage = "Processamento com Sucesso";
		String frete = "-1";
		
		System.out.println("Peso: "+peso);
		if(peso==null || peso==-1) {
			retMessage = "Campo Peso não foi preenchido";
			respCode = 501;
			System.out.println("Error: "+retMessage);
			return frete;
		}
		
		if(tipoEntrega.equals("") || tipoEntrega==null) {
			retMessage = "Campo Tipo de Entrega não foi preenchido";
			respCode = 508;
			System.out.println("Error: "+retMessage);
			return frete;
		}
		
		System.out.println("CEP Origem: "+cepOrig);
		if(cepOrig==null || cepOrig==-1) {
			retMessage = "Campo CEP Origem não foi preenchido";
			respCode = 509;
			System.out.println("Error: "+retMessage);
			return frete;
		}

		System.out.println("CEP Destino: "+cepDest);
		if(cepDest==null || cepDest==-1) {
			retMessage = "Campo CEP Destino não foi preenchido";
			respCode = 510;
			System.out.println("Error: "+retMessage);
			return frete;
		}

		if(cepOrig==929122200) {
			retMessage = "CEP Origem Invalido";
			respCode = 502;
			System.out.println("Error: "+retMessage);
			return frete;
		}

		if(cepDest==13083999) {
			respCode = 503;
			retMessage = "CEP Destino Invalido";
			System.out.println("Error: "+retMessage);
			return frete;
		}

		if(peso > 1000) {
			respCode = 504;
			retMessage = "Peso excedido";
			System.out.println("Error: "+retMessage);
			return frete;
		}

		if(largura > 100) {
			respCode = 505;
			retMessage = "Largura Invalida";
			System.out.println("Error: "+retMessage);
			return frete;
		}

		if(altura > 100) {
			respCode = 506;
			retMessage = "Altura Invalida";
			System.out.println("Error: "+retMessage);
			return frete;
		}

		if(comprimento > 120) {
			respCode = 507;
			retMessage = "Comprimento Invalido";
			System.out.println("Error: "+retMessage);
			return frete;
		}

		if(tipoEntrega.equals("PAC")) {
			frete = "4.10";
		}else if(tipoEntrega.equals("SEDEX")) {
			frete = "15.40";
		} else if(tipoEntrega.equals("SEDEX10")) {
			frete = "33.33";
		} else {
			frete = "Frete Error!!!";
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

		if(respCode!=200) {
			ret = "-1";
		} else {
			if(tipoEntrega.equals("PAC")) {
				ret = "7";
			}else if(tipoEntrega.equals("SEDEX")) {
				ret = "3";
			} else if(tipoEntrega.equals("SEDEX10")) {
				ret = "1";
			} else {
				ret = "Prazo Error!!!";
			}	
		}

		return ret;
	}
}
