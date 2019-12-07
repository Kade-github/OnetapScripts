/**
 *  Rainbow ESP
 *  Script by Kade (KadeDev) https://github.com/KadeDev/OnetapScripts/blob/master/RainbowESP.js
 *  Enjoy!
*/

Global.PrintChat("Rainbow ESP by KadeDev enabled!")

UI.AddCheckbox("Rainbow - ENEMIES");
UI.AddCheckbox("Rainbow - E - Glow");
UI.AddCheckbox("Rainbow - E - Box");
UI.AddCheckbox("Rainbow - E - Name");
UI.AddCheckbox("Rainbow - E - Skeleton");
UI.AddCheckbox("Rainbow - FRIENDLIES");
UI.AddCheckbox("Rainbow - F - Glow");
UI.AddCheckbox("Rainbow - F - Box");
UI.AddCheckbox("Rainbow - F - Name");
UI.AddCheckbox("Rainbow - F - Skeleton");


function main()
{
    // Just keep changing the values cuz rainbow shiz
    tickcount = Global.Tickcount();
    color = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);

    // Get settings

    var use = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script Items", "Rainbow Enabled" );

    var en = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - ENEMIES" );
    var en_glow = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - E - Glow");
    var en_box = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - E - Box");
    var en_name = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - E - Name");
    var en_skeleton = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - E - Skeleton");

    var fr = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - FRIENDLIES");
    var fr_glow = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - F - Glow");
    var fr_box = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - F - Box");
    var fr_name = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - F - Name");
    var fr_skeleton = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", "Rainbow - F - Skeleton");


    // I wouldn't say this looks pretty, but it works. And i'm not the best with JS, i'm good with C# so.
    // It's good for now at least.
        if (en)
        {
            if (en_glow)
                UI.SetColor("Visuals", "ENEMIES","ESP", "Glow", [color.r, color.g, color.b, 255]);
            if (en_box)
                UI.SetColor("Visuals", "ENEMIES","ESP", "Box", [color.r, color.g, color.b, 255]);
            if (en_name)
                UI.SetColor("Visuals", "ENEMIES","ESP", "Name", [color.r, color.g, color.b, 255]);
            if (en_skeleton)
                UI.SetColor("Visuals", "ENEMIES","ESP", "Skeleton", [color.r, color.g, color.b, 255]);
        }
        if (fr)
        {
            if (fr_glow)
                UI.SetColor("Visuals", "FRIENDLIES","ESP", "Glow", [color.r, color.g, color.b, 255]);
            if (fr_box)
                UI.SetColor("Visuals", "FRIENDLIES","ESP", "Box", [color.r, color.g, color.b, 255]);
            if (fr_name)
                UI.SetColor("Visuals", "FRIENDLIES","ESP", "Name", [color.r, color.g, color.b, 255]);
            if (fr_skeleton)
                UI.SetColor("Visuals", "FRIENDLIES","ESP", "Skeleton", [color.r, color.g, color.b, 255]);
        }
}

// From the UI.SetColor API Reference cuz i'm a lazy bitch
function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

start();

function start()
{
    // Callback our main function. (Looping)
    Global.RegisterCallback("Draw", "main")
}
