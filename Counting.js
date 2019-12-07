/// Counting (Made by KadeDev)
//// When ever you kill someone, it says how many shots it took to kill them.
//// Good for 1 spam.

var numbers = {};

var tphrase = UI.AddTextbox( "Counting - Phrase (Used when you get a 1)" );

function hurt()
{
    attacker = Event.GetInt("attacker");
    attacker_index = Entity.GetEntityFromUserID(attacker);
    target = Event.GetInt("userid");
    if (Entity.IsLocalPlayer(attacker_index))
    {
        uid = Entity.GetEntityFromUserID(target);
        uid_name = Entity.GetName(uid);
        if (numbers[uid] != undefined)
            numbers[uid]++;
        else
            numbers[uid] = 1;
        Global.PrintColor( [ 255, 0, 0, 255 ], "[Kades-Scripting] Counting.js | " + uid_name + " is now at " + numbers[uid] + " shots." );
    }
}


function on_player_death( )
{
        attacker = Event.GetInt("attacker");
        attacker_index = Entity.GetEntityFromUserID(attacker);
        victim = Event.GetInt("userid");
        victim_index = Entity.GetEntityFromUserID(victim);
        attacker_name = Entity.GetName(attacker_index);
        victim_name = Entity.GetName(victim_index);
        if (Entity.IsLocalPlayer(attacker_index))
        {
            Global.PrintColor( [ 255, 0, 0, 255 ], "[Kades-Scripting] Counting.js | Player died." );
            uid = Entity.GetEntityFromUserID(victim);
            var phrase = UI.GetString(tphrase);
            if (numbers[uid] = 1)
                phrase = " " + phrase;
            Global.ExecuteCommand( "say " + numbers[uid] + phrase );
            if (doCount)
            {
                Global.PrintChat("Counting stats:\n")
                for (i = 0; i < numbers.length; i++)
                {
                    Globa.PrintChat(victim_name + " (" + uid + "): " + numbers[uid]);
                }
            }
            numbers[uid] = 0;
        }
        
}

function round_end( )
{
    Global.PrintColor( [ 255, 0, 0, 255 ], "[Kades-Scripting] Counting.js | Reset numbers." );
    numbers = {};
}

var doCount = UI.AddCheckbox("Counting - Print stats in chat.");

Global.PrintColor( [ 255, 0, 0, 255 ], "[Kades-Scripting] Loaded script: Counting.js | Created by KadeDev." );

Global.RegisterCallback("round_end", "round_end");

Global.RegisterCallback("player_death", "on_player_death");

Global.RegisterCallback("player_hurt", "hurt");
