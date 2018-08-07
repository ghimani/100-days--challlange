#include<stdio.h>
#include<conio.h>
  void main(){scr();
   clr
   int i,j,num,arr[5];
	printf("enter decimal num");
	scanf("%d",&num);
	i=0;
	while(num>0){
	    arr[i]=num%2;
	    num/=2;
	    i++;
   }
       printf("printing the binary number...........");
	for(j=i-1;j>=0;j--){
	 printf("%d",arr[j]);
	 getch();
	 }
	 }