// ez music shit by KadeDev

// enjoy

// Link: 


var filename = UI.AddTextbox( "Music - File Name" );
var oldname = "";

UI.AddCheckbox("Music - Play");

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

start();

Global.PrintChat("[onetap.su] Loaded script: Play Music | More information inside of the scripts options.");

function start()
{
    // Callback our main function. (Looping)
    Global.RegisterCallback("Draw", "main")
}
