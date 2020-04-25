//Uses find longest substring algorithm
//O(m*n) is the time complexity
//alert("Co");
$("#search").click(function()
{
   var dna1=$("#dna1").val();
   var dna2=$("#dna2").val();
   //var dna2=" ";
   var l1=dna1.length;
   var l2=dna2.length;
 
//if(count==0)
{
   printLCSubStr(dna1,dna2,l1,l2);
   function printLCSubStr(dna1, dna2,l1,l2) 
{ 
    var LCSuff=new Array();
    for(var i=0;i<l1+1;i++)
    {
      LCSuff[i]=new Array();
    } 
    var len = 0; 
    var row, col; 
  
    for (var  i = 0; i <= l1; i++) { 
        for (var j = 0; j <= l2; j++) { 
            if (i == 0 || j == 0) 
                LCSuff[i][j] = 0; 
  
            else if (dna1[i - 1] == dna2[j - 1]) { 
                LCSuff[i][j] = LCSuff[i - 1][j - 1] + 1; 
                if (len < LCSuff[i][j]) { 
                    len = LCSuff[i][j]; 
                    row = i; 
                    col = j; 
                } 
            } 
            else
                LCSuff[i][j] = 0; 
        } 
    } 

    if (len == 0) { 
        console.log("No common sequence");
        return; 
    } 
    var n=len;
   var result_seq=new Array();
    while (LCSuff[row][col] != 0) { 
        result_seq[--len] = dna1[row - 1]; // or dna2[col-1] 
  
        // move diagonally up to previous cell 
        row--; 
        col--; 
    } 
    var common="";
    for(var i=0;i<n;i++)
    {
      common+=result_seq[i];
    }
  
    // required longest common substring 
    console.log(common);
    $('#common').val(common);
} 
  

}

});
