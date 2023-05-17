let workOrderArray = [];

const main = document.querySelector('#main');

const workOrdersBtn = document.querySelector('#work-orders-button');
const createWorkOrderBtn = document.querySelector('#create-work-order-button');
const howToCreateBtn = document.querySelector('#how-to-create-button');

const createIncBtn = document.createElement('button');
const createSRBtn = document.createElement('button');

const form = document.createElement('form');
const submitterName = document.createElement('input');
submitterName.id = "submitter-name";
const submitterEmail = document.createElement('input');
submitterEmail.id = "submitter-email";
    const woLocBCHS = document.createElement('input');
    woLocBCHS.id = "woLocBCHS";
    woLocBCHS.name = "woLocation";
    woLocBCHS.type = "radio";
    const woLocATC = document.createElement('input');
    woLocATC.id = "woLocATC";
    woLocATC.name = "woLocation";
    woLocATC.type = "radio";
    const woLocBIZ = document.createElement('input');
    woLocBIZ.id = "woLocBIZ";
    woLocBIZ.name = "woLocation";
    woLocBIZ.type = "radio";
    const woLocBCTA = document.createElement('input');
    woLocBCTA.id = "woLocBCTA";
    woLocBCTA.name = "woLocation";
    woLocBCTA.type = "radio";
    const woLocBCMS = document.createElement('input');
    woLocBCMS.id = "woLocBCMS";
    woLocBCMS.name = "woLocation";
    woLocBCMS.type = "radio";
    const woLocAT = document.createElement('input');
    woLocAT.id = "woLocAT";
    woLocAT.name = "woLocation";
    woLocAT.type = "radio";
    const woLocEAST = document.createElement('input');
    woLocEAST.id = "woLocEAST";
    woLocEAST.name = "woLocation";
    woLocEAST.type = "radio";
    const woLocHV = document.createElement('input');
    woLocHV.id = "woLocHV";
    woLocHV.name = "woLocation";
    woLocHV.type = "radio";
    const woLocNJ = document.createElement('input');
    woLocNJ.id = "woLocNJ";
    woLocNJ.name = "woLocation";
    woLocNJ.type = "radio";
    const woLocPC = document.createElement('input');
    woLocPC.id = "woLocPC";
    woLocPC.name = "woLocation";
    woLocPC.type = "radio";
    const woLocRC = document.createElement('input');
    woLocRC.id = "woLocRC";
    woLocRC.name = "woLocation";
    woLocRC.type = "radio";
    const woLocTH = document.createElement('input');
    woLocTH.id = "woLocTH";
    woLocTH.name = "woLocation";
    woLocTH.type = "radio";
    const woLocCSC = document.createElement('input');
    woLocCSC.id = "woLocCSC";
    woLocCSC.name = "woLocation";
    woLocCSC.type = "radio";
    const woLocAnnex = document.createElement('input');
    woLocAnnex.id = "woLocAnnex";
    woLocAnnex.name = "woLocation";
    woLocAnnex.type = "radio";
    const woLocBAVEL = document.createElement('input');
    woLocBAVEL.id = "woLocBAVEL";
    woLocBAVEL.name = "woLocation";
    woLocBAVEL.type = "radio";
    const woLocBOE = document.createElement('input');
    woLocBOE.id = "woLocBOE";
    woLocBOE.name = "woLocation";
    woLocBOE.type = "radio";
    const woLocBusGarage = document.createElement('input');
    woLocBusGarage.id = "woLocBusGarage";
    woLocBusGarage.name = "woLocation";
    woLocBusGarage.type = "radio";
    const woLocTWC = document.createElement('input');
    woLocTWC.id = "woLocTWC";
    woLocTWC.name = "woLocation";
    woLocTWC.type = "radio";
    const woLocOther = document.createElement('input');
    woLocOther.id = "woLocOther";
    woLocOther.name = "woLocation";
    woLocOther.type = "radio";
const woRoom = document.createElement('input');
woRoom.id = "wo-room-number";
const woAsset = document.createElement('input');
woAsset.id = "wo-asset";
const woManufacturer = document.createElement('input');
woManufacturer.id = "wo-manufacturer";
const woModel = document.createElement('input');
woModel.id = "wo-model";
const woTitle = document.createElement('input');
woTitle.id = "wo-title";
const woDescription = document.createElement('textarea');
woDescription.id = "wo-description";
    const woItmCBScreenNontouch = document.createElement('input');
    woItmCBScreenNontouch.id = "woItmCBScreenNontouch";
    woItmCBScreenNontouch.name = "woItem";
    woItmCBScreenNontouch.type = "radio";
    const woItmCBScreenTouch = document.createElement('input');
    woItmCBScreenTouch.id = "woItmCBScreenTouch";
    woItmCBScreenTouch.name = "woItem";
    woItmCBScreenTouch.type = "radio";
    const woItmCBBattery = document.createElement('input');
    woItmCBBattery.id = "woItmCBBattery";
    woItmCBBattery.name = "woItem";
    woItmCBBattery.type = "radio";
    const woItmCBKeyboard = document.createElement('input');
    woItmCBKeyboard.id = "woItmCBKeyboard";
    woItmCBKeyboard.name = "woItem";
    woItmCBKeyboard.type = "radio";
    const woItmCBChargerC = document.createElement('input');
    woItmCBChargerC.id = "woItmCBChargerC";
    woItmCBChargerC.name = "woItem";
    woItmCBChargerC.type = "radio";
    const woItmCBChargerBarrel = document.createElement('input');
    woItmCBChargerBarrel.id = "woItmCBChargerBarrel";
    woItmCBChargerBarrel.name = "woItem";
    woItmCBChargerBarrel.type = "radio";
    const woItmCBBackCover = document.createElement('input');
    woItmCBBackCover.id = "woItmCBBackCover";
    woItmCBBackCover.name = "woItem";
    woItmCBBackCover.type = "radio";
    const woItmCBBezel = document.createElement('input');
    woItmCBBezel.id = "woItmCBBezel";
    woItmCBBezel.name = "woItem";
    woItmCBBezel.type = "radio";
    const woItmCBHingeCovers = document.createElement('input');
    woItmCBHingeCovers.id = "woItmCBHingeCovers";
    woItmCBHingeCovers.name = "woItem";
    woItmCBHingeCovers.type = "radio";
    const woItmCBReplacement = document.createElement('input');
    woItmCBReplacement.id = "woItmCBReplacement";
    woItmCBReplacement.name = "woItem";
    woItmCBReplacement.type = "radio";
    const woItmLatScreen = document.createElement('input');
    woItmLatScreen.id = "woItmLatScreen";
    woItmLatScreen.name = "woItem";
    woItmLatScreen.type = "radio";
    const woItmUSBBluetooth = document.createElement('input');
    woItmUSBBluetooth.id = "woItmUSBBluetooth";
    woItmUSBBluetooth.name = "woItem";
    woItmUSBBluetooth.type = "radio";
const submitWO = document.createElement('button');
submitWO.id = "submit-wo";

// work orders, create work order, and how to create button events
workOrdersBtn.addEventListener('click', function(){
    workOrdersBtn.classList.add("button-clicked");
    setTimeout(() => {
        workOrdersBtn.classList.remove("button-clicked");
    }, 200);

    workOrderArray = displayWorkOrders(workOrderArray);
});

createWorkOrderBtn.addEventListener('click', function(){
    createWorkOrderBtn.classList.add("button-clicked");
    setTimeout(() => {
        createWorkOrderBtn.classList.remove("button-clicked");
    }, 200);

    displayCreateWOButtons();
});

howToCreateBtn.addEventListener('click', function(){
    howToCreateBtn.classList.add("button-clicked");
    setTimeout(() => {
        howToCreateBtn.classList.remove("button-clicked");
    }, 200);
});


// create work order
let workOrderType = null;

createIncBtn.addEventListener('click', function(){
    workOrderType = "inc";
    main.innerHTML = " ";
    displaySubmitIncForm();
});

createSRBtn.addEventListener('click', function(){
    workOrderType = "sr";
    main.innerHTML = " ";
    displaySubmitSRForm();
});

submitWO.addEventListener('click', function(){
    main.innerHTML = " ";
    submitWorkOrderForm(workOrderType);
});


// display functions
function displayWorkOrders(workOrderArray){
    main.innerHTML = `<p>work orders placeholder</p>`;
    return workOrderArray;
}

function displayCreateWOButtons(){
    createIncBtn.id = "create-incident-button";
    createIncBtn.classList.add('button');
    createIncBtn.innerText = "Incident";
    createSRBtn.id = "create-service-request-button";
    createSRBtn.classList.add('button');
    createSRBtn.innerText = "Service Request";

    const createBtnsDiv = document.createElement('div');
    createBtnsDiv.id = "create-buttons";

    main.innerHTML = `<h2 id="create-buttons-title">Create a...</h2>`;
    main.insertAdjacentElement(`beforeend`, createBtnsDiv);
    createBtnsDiv.append(createIncBtn);
    createBtnsDiv.append(createSRBtn);
}

function displaySubmitIncForm(){
    main.append(form);

    const fieldset1 = document.createElement('fieldset');
    fieldset1.innerHTML = "<legend>Your Information</legend>\n";

    form.append(fieldset1);

    fieldset1.innerHTML += `<label for="submitter-name">Name (Last, First)</label>` + "\n";
        submitterName.type = "text";
        submitterName.required = true;
    fieldset1.append(submitterName);
    fieldset1.innerHTML += `<br />` + "\n";

    fieldset1.innerHTML += `<label for="submitter-email">Email Address</label>` + "\n";
        submitterEmail.type = "email";
        submitterEmail.required = true;
    fieldset1.append(submitterEmail);

    form.innerHTML += `<br />` + "\n";


    const fieldset2 = document.createElement('fieldset');
    fieldset2.innerHTML = "<legend>Location</legend>\n";

    form.append(fieldset2);

    const fieldset2_5 = document.createElement('fieldset');
    fieldset2_5.innerHTML = "<legend>Department</legend>\n";

    fieldset2.append(fieldset2_5);

    woLocBCHS.value = "BCHS";
        fieldset2_5.append(woLocBCHS);
        fieldset2_5.innerHTML += `<label for="woLocBCHS">BCHS</label>` + "&nbsp;\n";
    woLocATC.value = "ATC";
        fieldset2_5.append(woLocATC);
        fieldset2_5.innerHTML += `<label for="woLocATC">ATC</label>` + "&nbsp;\n";
    woLocATC.value = "BIZ";
        fieldset2_5.append(woLocBIZ);
        fieldset2_5.innerHTML += `<label for="woLocBIZ">BIZ</label>` + "&nbsp;\n";
    woLocATC.value = "BCTA";
        fieldset2_5.append(woLocBCTA);
        fieldset2_5.innerHTML += `<label for="woLocBCTA">BCTA</label>` + "&nbsp;\n";
    woLocATC.value = "BCMS";
        fieldset2_5.append(woLocBCMS);
        fieldset2_5.innerHTML += `<label for="woLocBCMS">BCMS</label>` + "&nbsp;\n";
    woLocATC.value = "AT";
        fieldset2_5.append(woLocAT);
        fieldset2_5.innerHTML += `<label for="woLocAT">AT</label>` + "&nbsp;\n";
    woLocATC.value = "EAST";
        fieldset2_5.append(woLocEAST);
        fieldset2_5.innerHTML += `<label for="woLocEAST">EAST</label>` + "&nbsp;\n";
    woLocATC.value = "HV";
        fieldset2_5.append(woLocHV);
        fieldset2_5.innerHTML += `<label for="woLocHV">HV</label>` + "&nbsp;\n";
    woLocATC.value = "NJ";
        fieldset2_5.append(woLocNJ);
        fieldset2_5.innerHTML += `<label for="woLocNJ">NJ</label>` + "&nbsp;\n";
    woLocATC.value = "PC";
        fieldset2_5.append(woLocPC);
        fieldset2_5.innerHTML += `<label for="woLocPC">PC</label>` + "&nbsp;\n";
    woLocATC.value = "RC";
        fieldset2_5.append(woLocRC);
        fieldset2_5.innerHTML += `<label for="woLocRC">RC</label>` + "&nbsp;\n";
    woLocATC.value = "TH";
        fieldset2_5.append(woLocTH);
        fieldset2_5.innerHTML += `<label for="woLocTH">TH</label>` + "&nbsp;\n";
    woLocATC.value = "CSC";
        fieldset2_5.append(woLocCSC);
        fieldset2_5.innerHTML += `<label for="woLocCSC">CSC</label>` + "&nbsp;\n";
    woLocATC.value = "annex";
        fieldset2_5.append(woLocAnnex);
        fieldset2_5.innerHTML += `<label for="woLocAnnex">Annex</label>` + "&nbsp;\n";
    woLocATC.value = "BAVEL";
        fieldset2_5.append(woLocBAVEL);
        fieldset2_5.innerHTML += `<label for="woLocBAVEL">BAVEL</label>` + "&nbsp;\n";
    woLocATC.value = "BOE";
        fieldset2_5.append(woLocBOE);
        fieldset2_5.innerHTML += `<label for="woLocBOE">BOE</label>` + "&nbsp;\n";
    woLocATC.value = "busGarage";
        fieldset2_5.append(woLocBusGarage);
        fieldset2_5.innerHTML += `<label for="woLocBusGarage">Bus Garage</label>` + "&nbsp;\n";
    woLocATC.value = "TWC";
        fieldset2_5.append(woLocTWC);
        fieldset2_5.innerHTML += `<label for="woLocTWC">TWC</label>` + "&nbsp;\n";
    woLocATC.value = "other";
        fieldset2_5.append(woLocOther);
        fieldset2_5.innerHTML += `<label for="woLocOther">Other</label>` + "&nbsp;\n";

    fieldset2.innerHTML += `<label for="wo-room-number">Room Number</label>` + "&nbsp;\n";
        woRoom.type = "text";
        woRoom.required = true;
    fieldset2.append(woRoom);

    form.innerHTML += `<br />` + "\n";


    const fieldset3 = document.createElement('fieldset');
    fieldset3.innerHTML = "<legend>Device</legend>\n";

    form.append(fieldset3);

    fieldset3.innerHTML += `<label for="wo-asset">Asset Tag Number</label>` + "\n";
        woAsset.type = "number";
        woAsset.required = true;
    fieldset3.append(woAsset);
    fieldset3.innerHTML += `<br />` + "\n";

    fieldset3.innerHTML += `<label for="wo-manufacturer">Manufacturer</label>` + "\n";
        woManufacturer.type = "text";
    fieldset3.append(woManufacturer);
    fieldset3.innerHTML += `<br />` + "\n";

    fieldset3.innerHTML += `<label for="wo-model">Model Name/Number</label>` + "\n";
        woModel.type = "text";
    fieldset3.append(woModel);

    form.innerHTML += `<br />` + "\n";


    const fieldset4 = document.createElement('fieldset');
    fieldset4.innerHTML = "<legend>Issue</legend>\n";

    form.append(fieldset4);

    fieldset4.innerHTML += `<label for="wo-title">Title</label>` + "\n";
        woTitle.type = "text";
        woTitle.required = true;
    fieldset4.append(woTitle);
    fieldset4.innerHTML += `<br />` + "\n";

    fieldset4.innerHTML += `<label for="wo-description">Description</label>` + "\n<br />\n";
        woDescription.cols = 40;
        woDescription.rows = 10;
        woDescription.placeholder = "Please be as descriptive of your issue as possible...";
    fieldset4.append(woDescription);


    submitWO.innerText = "Submit";
    form.append(submitWO);

}

function displaySubmitSRForm(){
    displaySubmitIncForm(main);

    submitWO.remove();

    form.innerHTML += `<br />` + "\n";


    const fieldset5 = document.createElement('fieldset');
    fieldset5.innerHTML = "<legend>Request Items</legend>\n";

    form.append(fieldset5);

    woItmCBScreenNontouch.value = "CBScreenNontouch";
        fieldset5.append(woItmCBScreenNontouch);
        fieldset5.innerHTML += `<label for="woItmCBScreenNontouch">Chromebook Screen - Non-Touch - $80</label>` + "\n<br />\n";
    woItmCBScreenTouch.value = "CBScreenTouch";
        fieldset5.append(woItmCBScreenTouch);
        fieldset5.innerHTML += `<label for="woItmCBScreenTouch">Chromebook Screen - Touch - $80</label>` + "\n<br />\n";
    woItmCBBattery.value = "CBBattery";
        fieldset5.append(woItmCBBattery);
        fieldset5.innerHTML += `<label for="woItmCBBattery">Chromebook Battery</label>` + "\n<br />\n";
    woItmCBKeyboard.value = "CBKeyboard";
        fieldset5.append(woItmCBKeyboard);
        fieldset5.innerHTML += `<label for="woItmCBKeyboard">Chromebook Keyboard - $60</label>` + "\n<br />\n";
    woItmCBChargerC.value = "CBChargerC";
        fieldset5.append(woItmCBChargerC);
        fieldset5.innerHTML += `<label for="woItmCBChargerC">Chromebook Charger - USB-C - $40</label>` + "\n<br />\n";
    woItmCBChargerBarrel.value = "CBChargerBarrel";
        fieldset5.append(woItmCBChargerBarrel);
        fieldset5.innerHTML += `<label for="woItmCBChargerBarrel">Chromebook Charger - Barrel - $40</label>` + "\n<br />\n";
    woItmCBBackCover.value = "CBBackCover";
        fieldset5.append(woItmCBBackCover);
        fieldset5.innerHTML += `<label for="woItmCBBackCover">Chromebook Back Cover - $25</label>` + "\n<br />\n";
    woItmCBBezel.value = "CBBezel";
        fieldset5.append(woItmCBBezel);
        fieldset5.innerHTML += `<label for="woItmCBBezel">Chromebook Bezel</label>` + "\n<br />\n";
    woItmCBHingeCovers.value = "CBHingeCovers";
        fieldset5.append(woItmCBHingeCovers);
        fieldset5.innerHTML += `<label for="woItmCBHingeCovers">Chromebook Hinge Covers - $10</label>` + "\n<br />\n";
    woItmCBReplacement.value = "CBReplacement";
        fieldset5.append(woItmCBReplacement);
        fieldset5.innerHTML += `<label for="woItmCBReplacement">Chromebook Replacement - $275</label>` + "\n<br />\n";
    woItmLatScreen.value = "LatScreen";
        fieldset5.append(woItmLatScreen);
        fieldset5.innerHTML += `<label for="woItmLatScreen">Latitude 3510/3520 Screen - $80</label>` + "\n<br />\n";
    woItmUSBBluetooth.value = "USBBluetooth";
        fieldset5.append(woItmUSBBluetooth);
        fieldset5.innerHTML += `<label for="woItmUSBBluetooth">USB Bluetooth Dongle - $10</label>` + "\n<br />\n";


    form.append(submitWO);

}


//submit work order
function submitWorkOrderForm(woType){
    let newWorkOrder = {
        type: woType,
        name: null,
        email: null,
        location: null,
        room: null,
        asset: null,
        manufacturer: null,
        model: null,
        title: null,
        description: null,
        requestedItem: null,
    };

    newWorkOrder.name = submitterName.value;
    newWorkOrder.email = submitterEmail.value;

    

}
