function treasureHoardTier1() {
    var diceRoll = diceRollD100();
    console.log("initial hoard roll: ", diceRoll);
    if (diceRoll <= 36) {
        console.log("Nothing!")
        return
    }
    if (diceRoll <= 60) {
        var diceRoll6 = diceRollD6();
        console.log("Roll " + diceRoll6 + " times on Magic Item Table A")
        rollOnTableA(diceRoll6)
        return
    }
    if (diceRoll <= 75) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table B")
        rollOnTableB(diceRoll4)
        return
    }
    if (diceRoll <= 85) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table C")
        rollOnTableC(diceRoll4)
        return
    }
    if (diceRoll <= 97) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table F")
        rollOnTableF(diceRoll4)
        return
    }
    console.log("Roll once on Magic Item Table G")
    rollOnTableG()
    return
}

function rollOnTableA(diceRoll6) {
    var magicItemList = new Array(diceRoll6).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableAData);
    });
}
function rollOnTableB(diceRoll4) {
    var magicItemList = new Array(diceRoll4).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableBData);
    });
}
function rollOnTableC(diceRoll4) {
    var magicItemList = new Array(diceRoll4).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableCData);
    });
}
function rollOnTableF(diceRoll4) {
    var magicItemList = new Array(diceRoll4).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableFData);
    });
}
function rollOnTableG() {
    return genericTable(magicTableGData);
}
function rollOnTableArmor(diceRoll12) {
    var diceRoll12 = diceRollD12();
    var magicItemList = new Array(diceRoll12).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableArmorData);
    });
}

function diceRollD6() {
    return diceRollDX(6);
}
function diceRollD4() {
    return diceRollDX(4);
}
function diceRollD8() {
    return diceRollDX(8);
}
function diceRollD12() {
    return diceRollDX(12);
}
function diceRollD100() {
    return diceRollDX(100);
}

function diceRollDX(maxDieRoll) {
    return Math.floor(Math.random() * maxDieRoll) + 1
}


function genericTable(magicTableData) {
    // find some way to get the last item in the table;
    var lastItemInTable = magicTableData[magicTableData.length - 1];

    // get the maxium value in the last item
    var largestDiceRoll = lastItemInTable.maximumValue;

    // use maxium value to roll dX where x is maximum value
    var diceRoll = diceRollDX(largestDiceRoll)

    console.log(diceRoll);

    magicTableData.find(function (magicItemData) {
        var min = magicItemData.minimumValue;
        var max = magicItemData.maximumValue;
        var name = magicItemData.name;

        if (min <= diceRoll && diceRoll <= max) {
            console.log(min + "-" + max + " " + name)
            var subTable = magicItemData.subTable
            if (subTable) {
                genericTable(subTable);
            }
            return true;
        }

        return false;
    })
}

treasureHoardTier1()
