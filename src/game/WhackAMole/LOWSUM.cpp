#include <iostream>
#include <cstdio>
#include <cmath>
#include <algorithm>
#include <queue>

using namespace std;

const int maxn = 20333;

long long a[maxn], b[maxn];
int k[maxn];
pair <int, int> q[maxn];
int main(){
	int tc;
	scanf("%d", &tc);
	while (tc--){
		int n, m;
		scanf("%d%d", &n, &m);
		int i;
		for (i = 1; i <= n; i++)
			scanf("%lld", &a[i]);
		for (i = 1; i <= n; i++)
			scanf("%lld", &b[i]);
		for (i = 1; i <= m; i++){
			scanf("%d", &q[i].first);
			q[i].second = i;
			if (q[i].first > n*n) return 123;
		}
		sort(a + 1, a + n + 1);
		sort(b + 1, b + n + 1);
		sort(q + 1, q + m + 1);
		priority_queue <pair <long long, int>> f;
		for (i = 1; i <= n; i++){
			k[i] = 1;
			f.push(make_pair(-a[i] - b[1], i));
		}
		int cnt = 1;
		long long ans[555], cur = abs(f.top().first);
		int x = f.top().second;
		k[x]++;
		//cout<<cur<<endl;
		if (k[x] <= n) f.push(make_pair(-a[x] - b[k[x]], x));
		f.pop();
		for (i = 1; i <= m; i++){
			while (cnt < q[i].first){
				x = f.top().second;
				cur = abs(f.top().first);
				f.pop();
				k[x]++;
				if (k[x] <= n) f.push(make_pair(-a[x] - b[k[x]], x));
				cnt++;
			}
			ans[q[i].second] = cur;
		}
		for (i = 1; i <= m; i++)
			printf("%lld\n",ans[i]);
	}
	//system("pause");
}