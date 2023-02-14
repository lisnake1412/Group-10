#include<bits/stdc++.h>
#define ll unsigned long long
using namespace std;
const int MOD=1e9+7;
ll pow1(ll a,ll b){
	if(b==0) return 1;
	if(b==1) return a;
	ll x= pow1(a,b/2);
	if(b%2==1) return ((a*x)%MOD*x)%MOD;
	else return (x*x)%MOD;
}
int main(){
	int t;
	cin>>t;
	while(t--){
		ll a,n;
		cin>>a>>n;
		pow1(a,n);
		cout<<pow1<<endl;
	}return 0;
}

