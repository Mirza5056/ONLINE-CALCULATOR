$(document).ready(function() {
    let displayValue='';
    const display=$("#display");
    $(".calculator button").click(function(){
        const buttonText=$(this).text();
            if(buttonText=='=')
            {
                try
                {
                const result=eval(displayValue);
                display.val(result);
                displayValue=result.toString();
                }catch(error)
                {
                    display.val("Error");
                }
            }
        else if(buttonText=='C')
        {
            display.val("");
            displayValue="";
        }
        else
        {
            displayValue+=buttonText;
            display.val(displayValue);
        }
    });
});
  $("button").button({
    classes: {
        "ui-button": "ui-corner-all",
        "ui-button": "highlight"
    }
    });