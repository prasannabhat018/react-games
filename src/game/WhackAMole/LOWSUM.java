import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.TreeSet;

public class Main {

	static long [] a;

	static long [] b;

	static Main main;

	public class Pair implements Comparable<Pair>{
		int i ;
		int j ;
		public Pair(int ii , int jj) {
			i = ii;
			j = jj;
		}
		public int compareTo(Pair p) {
			long s1 = a[i] + b[j] ;
			long s2 = a[p.i] + b[p.j];
			int comp = new Long(s1).compareTo(s2);
			if(comp!=0) {
				return comp;
			}
			comp = new Integer(i).compareTo(p.i);
			if(comp!=0) {
				return comp;
			}
			return new Integer(j).compareTo(p.j);
		}
	}

	public static void main(String [] args ) {
		long st = System.currentTimeMillis();
		main = new Main();
		try{
			String str;			
			BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
			BufferedOutputStream bos = new BufferedOutputStream(System.out);
			String eol = System.getProperty("line.separator");
			byte [] eolb = eol.getBytes();
			str  = br.readLine();
			int t = Integer.parseInt(str);
			for(int i = 0 ; i < t ; i++) {
				str  = br.readLine();
				int blank = str.indexOf( " ");
				int num = Integer.parseInt(str.substring(0,blank));
				int q = Integer.parseInt(str.substring(blank+1));
				a = new long[num];
				b = new long[num];
				int j=0;
				int s=0;
				int k =0;
				str = br.readLine();
				int length = str.length();
				while(j<length) {
					while(j<length) {
						if(str.charAt(j) == ' ') {
							break;
						}else {
							j++;
						}
					}
					a[k] = Long.parseLong(str.substring(s,j)) ;
					k++;
					j++;
					s=j;			
				}
				j=0;
				s=0;
				k =0;
				str = br.readLine();
				length = str.length();
				while(j<length) {
					while(j<length) {
						if(str.charAt(j) == ' ') {
							break;
						}else {
							j++;
						}
					}
					b[k] = Long.parseLong(str.substring(s,j)) ;
					k++;
					j++;
					s=j;			
				}
				Arrays.sort(a);
				Arrays.sort(b);
				int [] queries = new int[q];
				int maxQ = 0;
				for(int p = 0 ; p < q ;p++) {
					str = br.readLine();
					queries[p] = Integer.parseInt(str);
					maxQ = Math.max(maxQ,queries[p]);
				}
				TreeSet<Pair> tree = new TreeSet<Pair>();
				tree.add(main.new Pair(0,0));
				int iter = 0;
				long []answer = new long[maxQ];
				while(iter < maxQ) {
					Pair p = tree.pollFirst();
					int x = p.i;
					int y = p.j;
					if(x<num-1) {
						tree.add(main.new Pair(x+1,y));
					}
					if(y<num-1) {
						tree.add(main.new Pair(x,y+1));
					}
					answer[iter] = a[x] +b[y];
					iter++;
				}
				for(int p = 0 ;p < q ;p++) {
					bos.write(new Long(answer[queries[p]-1]).toString().getBytes());
					bos.write(eolb);
				}
			}
			bos.flush();
		}  catch(IOException ioe) {
			ioe.printStackTrace();
		}
		long en = System.currentTimeMillis();
		//System.err.println("time = " + (en-st));
	}
}
