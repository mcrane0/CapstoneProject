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
const woLocation = document.createElement('select');
woLocation.id = "wo-location";
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
const woItem = document.createElement('select');
woItem.id = "wo-item";
const woAddItem = document.createElement('button');
woAddItem.id = "wo-add-item";
const submitWO = document.createElement('button');
submitWO.id = "submit-wo";

// work orders, create work order, and how to create button events
workOrdersBtn.addEventListener('click', function(){
    workOrdersBtn.classList.add("button-clicked");
    setTimeout(() => {
        workOrdersBtn.classList.remove("button-clicked");
    }, 200);

    workOrderArray = displayWorkOrders(main, workOrderArray);
});

createWorkOrderBtn.addEventListener('click', function(){
    createWorkOrderBtn.classList.add("button-clicked");
    setTimeout(() => {
        createWorkOrderBtn.classList.remove("button-clicked");
    }, 200);

    displayCreateWOButtons(main);
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
    displaySubmitIncForm(main);
});

createSRBtn.addEventListener('click', function(){
    workOrderType = "sr";
    displaySubmitSRForm(main);
});

submitWO.addEventListener('click', function(){
    submitWorkOrderForm();
});


// display functions
function displayWorkOrders(mainHTML, workOrderArray){
    mainHTML.innerHTML = `<p>work orders placeholder</p>`;
    return workOrderArray;
}

function displayCreateWOButtons(mainHTML){
    createIncBtn.id = "create-incident-button";
    createIncBtn.classList.add('button');
    createIncBtn.innerText = "Incident";
    createSRBtn.id = "create-service-request-button";
    createSRBtn.classList.add('button');
    createSRBtn.innerText = "Service Request";

    const createBtnsDiv = document.createElement('div');
    createBtnsDiv.id = "create-buttons";

    mainHTML.innerHTML = `<h2 id="create-buttons-title">Create a...</h2>`;
    mainHTML.insertAdjacentElement(`beforeend`, createBtnsDiv);
    createBtnsDiv.append(createIncBtn);
    createBtnsDiv.append(createSRBtn);
}

function displaySubmitIncForm(mainHTML){
    mainHTML.innerHTML = "";
    mainHTML.append(form);

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

    fieldset2.innerHTML += `<label for="wo-location">Location</label>` + "\n";
        woLocation.required = true;
        woLocation.innerHTML = `<option value="BCHS">BCHS</option>
            <option value="ATC">ATC</option>
            <option value="BIZ">BIZ</option>
            <option value="BCTA">BCTA</option>
            <option value="BCMS">BCMS</option>
            <option value="AT">AT</option>
            <option value="EAST">EAST</option>
            <option value="HV">HV</option>
            <option value="NJ">NJ</option>
            <option value="PC">PC</option>
            <option value="RC">RC</option>
            <option value="TH">TH</option>
            <option value="CSC">CSC</option>
            <option value="annex">Annex</option>
            <option value="BAVEL">BAVEL</option>
            <option value="BOE">BOE</option>
            <option value="busGarage">Bus Garage</option>
            <option value="TWC">TWC</option>
            <option value="other">Other (Please specify in Description)</option>`;
    fieldset2.append(woLocation);

    fieldset2.innerHTML += `<label for="wo-room-number">Room Number</label>` + "\n";
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

function displaySubmitSRForm(mainHTML){
    displaySubmitIncForm(mainHTML);

    submitWO.remove();

    form.innerHTML += `<br />` + "\n";


    const fieldset5 = document.createElement('fieldset');
    fieldset5.innerHTML = "<legend>Request Items</legend>\n";

    form.append(fieldset5);

    fieldset5.innerHTML += `<label for="wo-item">Item</label>` + "\n";
        woItem.required = true;
        woItem.innerHTML = `<option value="cb-screen-nontouch">Chromebook Screen - Non-Touch - $80</option>
            <option value="cb-screen-touch">Chromebook Screen - Touch - $80</option>
            <option value="cb-battery">Chromebook Battery</option>
            <option value="cb-keyboard">Chromebook Keyboard - $60</option>
            <option value="cb-charger-c">Chromebook Charger - USB-C - $40</option>
            <option value="cb-charger-barrel">Chromebook Charger - Barrel - $40</option>
            <option value="cb-back-cover">Chromebook Back Cover - $25</option>
            <option value="cb-bezel">Chromebook Bezel</option>
            <option value="cb-hinge-covers">Chromebook Hinge Covers - $10</option>
            <option value="cb-replacement">Chromebook Replacement - $275</option>
            <option value="lat-screen">Latitude 3510/3520 Screen - $80</option>
            <option value="usb-bluetooth">USB Bluetooth Dongle - $10</option>`;
    fieldset5.append(woItem);

    fieldset5.innerHTML += `<br />` + "\n";

    woAddItem.innerText = "Request Another Item";
    fieldset5.append(woAddItem);


    form.append(submitWO);

}


//submit work order
function submitWorkOrderForm(){
    
}
