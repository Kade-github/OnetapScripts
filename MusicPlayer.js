// ez music shit by KadeDev

// enjoy

// Link: https://github.com/KadeDev/OnetapScripts/blob/master/MusicPlayer.js

// Added pause and stop, thanks to https://onetap.su/members/callz.26598/
// More information here: https://github.com/C4LLZ/Onetap-Musicplayer

var filename = UI.AddTextbox( "Music - File Name" );
var oldname = "";

UI.AddCheckbox("Music - Play");
UI.AddCheckbox("Music - Stop");


function main()
{
    var play = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Music - Play");
    if (play)
    {
        
        UI.SetValue("Misc", "JAVASCRIPT", "Script Items", "Music - Play", false);
        var name = "music/" + UI.GetString.apply(this, filename) + ".wav";
        Global.Print("[Kade-Scripting] Playing sound: '" + name + "'\n");
        oldname = name;
        Global.PlaySound(name);
    }
}


function pause()
{
	var pause = UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Music - Stop");
	if (pause)
	{
        UI.SetValue("Music", "JAVASCRIPT", "script Items", "Music - Stop", false);
        var name = "music/stop.wav";
        Global.Print("[Kade-Scripting] Stopping the sound \n");
        Global.PlaySound(name);
	}
	
}


start();
stop();

function start()
{
    // Callback our main function. (Looping)
    Global.RegisterCallback("Draw", "main")
}


function stop()
{
    // Callback our main function. (Looping)
    Global.RegisterCallback("Draw", "pause")
}
