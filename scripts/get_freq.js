//USES KMP (Knuth Morris Pratt) Pattern Searching for searching the tareget
//sequence in the given strand in Linear Time
//O(n) is the time complexity
//alert("Connected");
$("#search").click(function()
{
   var dna1=$("#dna1").val();
   var target_sequence=$("#dna2").val();
   var dna2=" ";
   var dna1_length=dna1.length;
   var target_sequence_length=target_sequence.length;
   var lps=new Array();
   var arr=new Array();
   computeLPSArray(target_sequence, target_sequence_length, lps); 
   var count=0;
   //var k=0;
   var  i = 0; // index for dna1[] 
   var j = 0; // index for target_sequence[] 
   while (i < dna1_length) { 
      if (target_sequence[j] == dna1[i]) { 
         j++; 
         i++; 
      } 

      if (j == target_sequence_length) { 
       arr[count]=i-j;
         count++;
         j = lps[j - 1]; 
      } 
      else if (i < dna1_length && target_sequence[j] != dna1[i]) { 
         if (j != 0) 
            j = lps[j - 1]; 
         else
            i = i + 1; 
      } 
   }  
   //console.log(dna2);
   var k=0;
   j=0;
   for(var i=0;i<dna1_length;i++)
   {
      if(i==arr[k])
      {

         dna2+='_';
         dna2+=dna1[i];
         j=k;
         k++;
         //i+=target_sequence_length;

      }
      else
      {
         dna2+=dna1[i];
      }
   }
   //console.log(dna2);
   
//making the longest suffix-prefix table
function computeLPSArray( target_sequence,  target_sequence_length, lps) 
{
   var len = 0; 

   lps[0] = 0;
   var i = 1; 
   while (i < target_sequence_length) { 
      if (target_sequence[i] == target_sequence[len]) { 
         len++; 
         lps[i] = len; 
         i++; 
      } 
      else 
      { 
         if (len != 0) { 
            len = lps[len - 1]; 

         
         } 
         else 
         { 
            lps[i] = 0; 
            i++; 
         } 
      } 
   } 
} 
$('#freq').val(count);
if(count!=0)
{$('#seq').val(dna2);}

});
