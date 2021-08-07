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
function treasureHoardTier2() {
    var diceRoll = diceRollD100();
    console.log("initial hoard roll: ", diceRoll);
    if (diceRoll <= 28) {
        console.log("Nothing!")
        return
    }
    if (diceRoll <= 44) {
        var diceRoll6 = diceRollD6();
        console.log("Roll " + diceRoll6 + " times on Magic Item Table A")
        rollOnTableA(diceRoll6)
        return
    }
    if (diceRoll <= 63) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table B")
        rollOnTableB(diceRoll4)
        return
    }
    if (diceRoll <= 74) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table C")
        rollOnTableC(diceRoll4)
        return
    }
    if (diceRoll <= 80) {
        console.log("Roll once on Magic Item Table D")
        rollOnTableD()
        return
    }
    if (diceRoll <= 94) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table F")
        rollOnTableF(diceRoll4)
        return
    }
    if (diceRoll <= 98) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table G")
        rollOnTableG(diceRoll4)
        return
    }
    console.log("Roll once on Magic Item Table H")
    rollOnTableH()
    return
}
function treasureHoardTier3() {
    var diceRoll = diceRollD100();
    console.log("initial hoard roll: ", diceRoll);
    if (diceRoll <= 15) {
        console.log("Nothing!")
        return
    }
    if (diceRoll <= 29) {
        var diceRoll4 = diceRollD4();
        var diceRoll6 = diceRollD6();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table A & " + diceRoll6 + " times on Magic Item Table B")
        rollOnTableA(diceRoll4)
        rollOnTableB(diceRoll6)
        return
    }
    if (diceRoll <= 50) {
        var diceRoll6 = diceRollD6();
        console.log("Roll " + diceRoll6 + " times on Magic Item Table C")
        rollOnTableC(diceRoll6)
        return
    }
    if (diceRoll <= 66) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table D")
        rollOnTableD(diceRoll4)
        return
    }
    if (diceRoll <= 74) {
        console.log("Roll once on Magic Item Table E")
        rollOnTableE()
        return
    }
    if (diceRoll <= 82) {
        var diceRoll4 = diceRollD4();
        console.log("Roll once on Magic Item Table F & " + diceRoll4 + " times on Magic Item Table G")
        rollOnTableF()
        rollOnTableG(diceRoll4)
        return
    }
    if (diceRoll <= 92) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table H")
        rollOnTableH(diceRoll4)
        return
    }
    console.log("Roll once on Magic Item Table I")
    rollOnTableI()
    return
}
function treasureHoardTier4() {
    var diceRoll = diceRollD100();
    console.log("initial hoard roll: ", diceRoll);
    if (diceRoll <= 2) {
        console.log("Nothing!")
        return
    }
    if (diceRoll <= 14) {
        var diceRoll8 = diceRollD8();
        console.log("Roll " + diceRoll8 + " times on Magic Item Table C")
        rollOnTableA(diceRoll8)
        return
    }
    if (diceRoll <= 46) {
        var diceRoll6 = diceRollD6();
        console.log("Roll " + diceRoll6 + " times on Magic Item Table D")
        rollOnTableD(diceRoll6)
        return
    }
    if (diceRoll <= 68) {
        var diceRoll6 = diceRollD6();
        console.log("Roll " + diceRoll6 + " times on Magic Item Table E")
        rollOnTableE(diceRoll6)
        return
    }
    if (diceRoll <= 72) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table G")
        rollOnTableG(diceRoll4)
        return
    }
    if (diceRoll <= 80) {
        var diceRoll4 = diceRollD4();
        console.log("Roll " + diceRoll4 + " times on Magic Item Table H")
        rollOnTableH(diceRoll4)
        return
    }
    console.log("Roll once on Magic Item Table I")
    rollOnTableI()
    return
}

function rollOnTableA(numberOfRolls) {
    var magicItemList = new Array(numberOfRolls).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableAData);
    });
}
function rollOnTableB(numberOfRolls) {
    var magicItemList = new Array(numberOfRolls).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableBData);
    });
}
function rollOnTableC(numberOfRolls) {
    var magicItemList = new Array(numberOfRolls).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableCData);
    });
}
function rollOnTableD(numberOfRolls) {
    var magicItemList = new Array(numberOfRolls).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableDData);
    });
}
function rollOnTableE(numberOfRolls) {
    var magicItemList = new Array(numberOfRolls).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableEData);
    });
}
function rollOnTableF(numberOfRolls) {
    var magicItemList = new Array(numberOfRolls).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableFData);
    });
}
function rollOnTableG(numberOfRolls) {
    var magicItemList = new Array(numberOfRolls).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableGData);
    });
}
function rollOnTableH(numberOfRolls) {
    var magicItemList = new Array(numberOfRolls).fill(null);
    return magicItemList.map(function () {
        return genericTable(magicTableHData);
    });
}
function rollOnTableArmor() {
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
            addItemToPage(name) // add to list on main page

            var subTable = magicItemData.subTable
            if (subTable) {
                genericTable(subTable);
            }
            return true;
        }

        return false;
    })
}
function clearPreviousItems() {
    $("#itemList>li").remove();
}
function addItemToPage(name) {
    var itemListElement = $("#itemList");
    var itemElement = $("<li></li>");

    itemElement.text(name);
    itemListElement.append(itemElement);
}
function setupTreasureButton() {
    var treasureButton = $("#treasureButton");

    treasureButton.click(function () {
        clearPreviousItems();
        treasureHoardTier1();
    })
}

$(document).ready(setupTreasureButton);
