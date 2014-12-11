var shell  = new ActiveXObject("WScript.Shell");
var args   = WScript.Arguments;

function ShellCommand ()
{     
	
	try {
	    shell.Run ("ipconfig -release", 3, true);           
            WScript.Sleep(1500);
            shell.Run ("ipconfig -renew", 0, true); 
	} catch(e) {
            WScript.Echo ("ShellCommand:  Exception in shell.Run: " + e);
	}
}

ShellCommand();