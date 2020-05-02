$("#search").click(function()
  {


     var dna1=$("#dna1").val();
     var dna2=$("#dna2").val();
     var l1=dna1.length;
     var l2=dna2.length;
     var dp=new Array();
     for(var i=0;i<=l1;i++)
     {
        dp[i]=new Array();
     }
     for(var i=0;i<=l1;i++)
     {
      dp[i][0]=-1*i;
     }
     for(var i=0;i<=l2;i++)
     {
      dp[0][i]=-1*i;
     }
     for(var i=1;i<=l1;i++)
  {
    for(var j=1;j<=l2;j++)
    {
      
      {
        if(dna1[i-1]==dna2[j-1])
        {
          dp[i][j]=dp[i-1][j-1]+1;
        }
        else
        {
                var m=dp[i-1][j-1]-1;
                var insert=dp[i][j-1]-1;
                var del=dp[i-1][j]-1;
                dp[i][j]=Math.max(m,Math.max(insert,del));
          
        }
      }
    }
  }

  var sa="";
  var sb="";
  var i=l1;
  var j=l2;
  while(i>0 || j>0)
  {
    //cout<<a[i-1]<<" "<<b[j-1]<<endl;
    //cout<<i<<" "<<j<<endl;
    //cout<<dp[i-1][j-1]<<" "<<dp[i-1][j]<<" "<<dp[i][j-1]<<" "<<dp[i][j]<<endl;
   
    if(i>0 && dp[i][j]==dp[i-1][j]-1)
    {

      sa+=dna1[i-1];
      sb+='-';
      i--;
      continue;
    }
    if( j>0 && dp[i][j]==dp[i][j-1]-1)
    {
      //cout<<"/";
      sa+='-';
      sb+=dna2[j-1];
      j--;
      continue;
    }
    if(i>0 && j>0 && dp[i-1][j-1]-1==dp[i][j])
    {
      //cout<<"*";
      sa+=dna1[i-1];
      sb+=dna2[j-1];
      i--;
      j--;
      continue;
    }
     if(i>0 && j>0 && dp[i][j]==dp[i-1][j-1]+1)
    {
      sa+=dna1[i-1];
      sb+=dna2[j-1];
      i--;
      j--;
      continue;
    }
  }
  sa=sa.split('').reverse().join('') ;
  sb=sb.split('').reverse().join('') ;
 console.log(sa);
 console.log(sb);
 $('#align_1').val(sa);
 $('#align_2').val(sb);
  

  });









