
    function pop()
    {
    var js = document.getElementById("JS").value;
    
    var html = document.getElementById("HTML").value;
    
    var css = document.getElementById("CSS").value;
    
    var janela = window.open("", "janela","width=500px, height=500px, scrollbars=yes");
    
    janela.document.write("<html>\n<head>\n");
    
    janela.document.write("<style>\n"+css+"\n</style>\n");
    
    janela.document.write("</head>\n<body>\n"+html+"\n");
    
    janela.document.write("</body>\n<script>\n"+js+"\n");
    
    janela.document.write("</script>\n</html>");
    }
    
    //-->


    var js = document.getElementById("JS").value;

var html = document.getElementById("HTML").value;

var css = document.getElementById("CSS").value;


pag = function ()
{
var el = document.createElement('iframe');
el.setAttribute('id','exibir') ;
el.width ="100%";
el.height="100%";
document.body.appendChild(el);
}
    


