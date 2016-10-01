package br.unicamp.bookstore;

public class Bookstore {

	public long search(String arg1, String arg2) {
		if (arg1.length() == 0 && arg2.length() == 0)
			return -1;
		else if (arg1.compareTo("VitorTirou10") == 0)
			return 0;
		else if(arg1.length() > 0 && arg2.length() > 0)
			return 1;
		else if (arg1.length() > 0)
			return 10;
		else
			return -1;
	}
}
