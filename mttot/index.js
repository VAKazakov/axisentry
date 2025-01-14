const { thargoiddata, weapondata } = require("./data");

const thargoids = thargoiddata();
const weapons = weapondata();

function arrayTotal(arr) {
    var total = 0;
    for(var i in arr) { total += arr[i]; }
    return total
}

function calcDPS(target, inputcode, range) {
    let multi;
    //if (range = undefined) { range = 1500 }
    try {
        if (inputcode.match(/^\d/)) {
            multi = inputcode.charAt(0); // Get Multiplier
            inputcode = inputcode.substring(1); // Remove Multiplier from code
        }

        switch (inputcode) {
            case "mgauss":
                inputcode = "mfgc";
                break;
            case "sgauss":
                inputcode = "sfgc";
                break;
            case "mfgauss":
                inputcode = "mfgc";
                break;
            case "sfgauss":
                inputcode = "sfgc";
                break;
            case "m":
                inputcode = "mfgc";
                break;
            case "s":
                inputcode = "sfgc";
                break;
        }

        let nDPS = weapons[inputcode].sustaxdps * multi;
        let DPS = nDPS * weapons[inputcode].ap / thargoids[target].ar;
        let finaldamage = DPS * Math.min((1 - ((range - weapons[inputcode].falloff) / (weapons[inputcode].maxrange - weapons[inputcode].falloff))), 1)

        let finaldamagestd = finaldamage * weapons[inputcode].stdammopercent
        let finaldamageprem = finaldamage * weapons[inputcode].premammopercent

        let result = { "basic": finaldamage, "standard": finaldamagestd, "premium": finaldamageprem }
        return result;

    } catch (err) {
        console.log(err);
    }

}

module.exports = {
    calcMTTOT: (target, weapons, range) => {
        try {
            if (range == undefined) { range = 1500 }

            let basic = [];
            let standard = [];
            let premium = [];

            // Calculate each weapon adjDPS
            for (let i = 0; i < weapons.length; i++) {
                let ans = calcDPS(target, weapons[i], range)
                basic.push(ans.basic)
                standard.push(ans.standard)
                premium.push(ans.premium)
            }

            let basicTotal = arrayTotal(basic);
            let standardTotal = arrayTotal(standard);
            let premiumTotal = arrayTotal(premium);

            let Basic = thargoids[target].hp / (basicTotal - thargoids[target].regen)
            let Standard = thargoids[target].hp / (standardTotal - thargoids[target].regen)
            let Premium = thargoids[target].hp / (premiumTotal - thargoids[target].regen)

            let Basic50 = thargoids[target].hp / (basicTotal / 2 - thargoids[target].regen)
            let Basic75 = thargoids[target].hp / (basicTotal / 4 * 3 - thargoids[target].regen)

            let Standard50 = thargoids[target].hp / (standardTotal / 2 - thargoids[target].regen)
            let Standard75 = thargoids[target].hp / (standardTotal / 4 * 3 - thargoids[target].regen)

            let Premium50 = thargoids[target].hp / (premiumTotal / 2 - thargoids[target].regen)
            let Premium75 = thargoids[target].hp / (premiumTotal / 4 * 3 - thargoids[target].regen)

            let result = { 
                "basic": Basic.toFixed(2) + "sec", 
                "standard": Standard.toFixed(2) + "sec", 
                "premium": Premium.toFixed(2) + "sec", 
                "basic50": Basic50.toFixed(2) + "sec", 
                "standard50": Standard50.toFixed(2) + "sec", 
                "premium50": Premium50.toFixed(2) + "sec", 
                "basic75": Basic75.toFixed(2) + "sec", 
                "standard75": Standard75.toFixed(2) + "sec", 
                "premium75": Premium75.toFixed(2) + "sec" 
            }

            if (result.basic.includes("-")) { result.basic = "Impossible" }
            if (result.basic50.includes("-")) { result.basic50 = "Impossible" }
            if (result.basic75.includes("-")) { result.basic75 = "Impossible" }

            if (result.standard.includes("-")) { result.standard = "Impossible" }
            if (result.standard50.includes("-")) { result.standard50 = "Impossible" }
            if (result.standard75.includes("-")) { result.standard75 = "Impossible" }

            if (result.premium.includes("-")) { result.premium = "Impossible" }
            if (result.premium50.includes("-")) { result.premium50 = "Impossible" }
            if (result.premium75.includes("-")) { result.premium75 = "Impossible" }
            
            return result

        } catch (err) {
            console.log(err);
        }
    }
}
