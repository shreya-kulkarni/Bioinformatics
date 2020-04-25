$("#calculate").click(function()
{
	var parent1=$("#parent1").val();
	var parent2=$("#parent2").val();
	var g=$("#g").val();
	var parent11=new Array();
	var parent22=new Array();
	var gg=new Array();
	//console.log(parent1+" "+parent2+" "+g);
	for(var i=0;i<parent1.length;i++)
	{
		if(parent1[i]>='A' && parent1[i]<='Z')
		{
			parent11[i]=1;
		}
		else
		{
			parent11[i]=0;
		}
		if(parent2[i]>='A' && parent2[i]<='Z')
		{
			parent22[i]=1;
		}
		else
		{
			parent22[i]=0;
		}
		if(g[i]>='A' && g[i]<='Z')
		{
			gg[i]=1;
		}
		else
		{
			gg[i]=0;
		}
		
	}
	var ans=1;
	var phenotype=1;
	for(var i=0;i<parent1.length;i=i+2)
	{
		//c1 c2 c3 c4 are combinations formed by parental allels
        var c1=new Array();
        c1[0]=Math.min(parent11[i],parent22[i]);
        c1[1]=Math.max(parent11[i],parent22[i]);
        var c2=new Array();
        c2[0]=Math.min(parent11[i+1],parent22[i]);
        c2[1]=Math.max(parent11[i+1],parent22[i]);
        var c3=new Array();
        c3[0]=Math.min(parent11[i],parent22[i+1]);
        c3[1]=Math.max(parent11[i],parent22[i+1]);
        var c4=new Array();
        c4[0]=Math.min(parent11[i+1],parent22[i+1]);
        c4[1]=Math.max(parent11[i+1],parent22[i+1]);

        var g1=new Array();
        g1[0]=Math.min(gg[i],gg[i+1]);
        g1[1]=Math.max(gg[i],gg[i+1]);
        var count=0;
        if(c1[0]==g1[0] && c1[1]==g1[1])
        {
        	count++;
        }
        if(c2[0]==g1[0] && c2[1]==g1[1])
        {
        	count++;
        }
        if(c3[0]==g1[0] && c3[1]==g1[1])
        {
        	count++;
        }
        if(c4[0]==g1[0] && c4[1]==g1[1])
        {
        	count++;
        }
        ans=ans*count;
        if(g1[1]==1)
        {
        	var dominant=0;
        	if(c1[1]==1)
        	{
        		dominant++;
        	}
        	if(c2[1]==1)
        	{
        		dominant++;
        	}
        	if(c3[1]==1)
        	{
        		dominant++;
        	}
        	if(c4[1]==1)
        	{
        		dominant++;
        	}
        	phenotype=phenotype*dominant;
        }
        else if(g[1]==0)
        {
        	var recessive=0;
        	if(c1[1]==0)
        	{
        		recessive++;
        	}
        	if(c2[1]==0)
        	{
        		recessive++;
        	}
        	if(c3[1]==0)
        	{
        		recessive++;
        	}
        	if(c4[1]==0)
        	{
        		recessive++;
        	}
        	phenotype=phenotype*recessive;
        }


        

	}
	if(ans==0)
	{
		phenotype=0;
	}
	var total_combinations=Math.pow(2,parent1.length);
	console.log(ans/total_combinations);
    $("#o3").val(ans);
	$("#o1").val(ans/total_combinations);
	$("#o2").val(phenotype);
	$("#o4").val(phenotype/total_combinations);
	
});

$("#reset").click(function()
{
   $("#o1").val(0);
	$("#o2").val(0);
	 $("#o3").val(0);
	$("#o4").val(0);  

});
