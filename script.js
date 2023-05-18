const workOrderArray = [
    {
        "type": "inc",
        "status": "open",
        "name": "Watkins, Gabriel",
        "email": "gabriel.watkins@barren.kyschools.us",
        "location": "NJ",
        "room": "129",
        "asset": "2201",
        "manufacturer": "Dell",
        "model": "Latitude",
        "title": "chromebook does not charged unless plugged in",
        "description": "chromebook will not charge unless i plug it in. help.",
        "requestedItem": null,
        "notes": []
    },
    {
        "type": "sr",
        "status": "open",
        "name": "Floyd, Isla",
        "email": "isla.floyd@barren.kyschools.us",
        "location": "BCHS",
        "room": "66",
        "asset": "16526",
        "manufacturer": "Dell",
        "model": "Chromebook",
        "title": "need new chromebook charger",
        "description": "one of my students took a chromebook charger and ate it while i wasnt looking. i need a new charger to replace it please.",
        "requestedItem": "cb-charger-c",
        "notes": []
    }
];

const main = document.querySelector('#main');

const workOrdersBtn = document.querySelector('#work-orders-button');
const createWorkOrderBtn = document.querySelector('#create-work-order-button');

const createIncBtn = document.createElement('button');
const createSRBtn = document.createElement('button');

const createWO = document.createElement('button');
createWO.id = "create-wo";

// work orders, create work order button events
workOrdersBtn.addEventListener('click', function(){
    workOrdersBtn.classList.add("button-clicked");
    setTimeout(() => {
        workOrdersBtn.classList.remove("button-clicked");
    }, 200);

    displayWorkOrders(workOrderArray);

});

createWorkOrderBtn.addEventListener('click', function(){
    createWorkOrderBtn.classList.add("button-clicked");
    setTimeout(() => {
        createWorkOrderBtn.classList.remove("button-clicked");
    }, 200);

    displayCreateWOButtons();
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

createWO.addEventListener('click', function(){
    workOrderArray.push( submitWorkOrderForm(workOrderType) );

    main.innerHTML = " ";
    displayWorkOrders(workOrderArray);
});


// click on work order event        code adapted from Ethan Combs thank you Ethan
main.addEventListener('click', function(ev){
    let woToView = ev.target;

    if (woToView.tagName == "P" && woToView.parentElement.id.substring(0, 3) == "wo-"){
        woToView = woToView.parentElement;

        main.innerHTML = " ";
        viewWorkOrder( parseInt(woToView.id.substring(3)), workOrderArray );
    }
    else if (woToView.id.substring(0, 3) == "wo-"){
        main.innerHTML = " ";
        viewWorkOrder( parseInt(woToView.id.substring(3)), workOrderArray ); 
    }

});



// display functions
function displayWorkOrders(workOrderArray){
    main.classList.remove('form');

    main.innerHTML = `<div class="work-order-head">
            <p class="wo-disp-num">&nbsp;</p>
            <p class="wo-disp-title">Title</p>
            <p class="wo-disp-requester">Requester</p>
            <p class="wo-disp-location">Location</p>
            <p class="wo-disp-status">Status</p>
        </div>`;

    for (i = (workOrderArray.length - 1); i >= 0 ; i--){
        console.log(workOrderArray[i]);

        let dispLocation = "";
        let dispStatus = "";

        if (workOrderArray[i].location == "annex"){
            dispLocation = "Annex";
        }
        else if (workOrderArray[i].location == "busGarage"){
            dispLocation = "Bus Garage";
        }
        else if (workOrderArray[i].location == "other"){
            dispLocation = "Other";
        }
        else {
            dispLocation = workOrderArray[i].location;
        }

        if (workOrderArray[i].status == "open"){
            dispStatus = "Open";
        }
        else if (workOrderArray[i].status == "closed"){
            dispStatus = "Closed";
        }
        else if (workOrderArray[i].status == "pending"){
            dispStatus = "Pending";
        }
        else if (workOrderArray[i].status == "inoffice"){
            dispStatus = "In Office";
        }
        else if (workOrderArray[i].status == "rtr"){
            dispStatus = "Ready to Return";
        }
        else if (workOrderArray[i].status == "escalated"){
            dispStatus = "Escalated";
        }
        else if (workOrderArray[i].status == "warranty"){
            dispStatus = "Warranty Service Requested";
        }
        else if (workOrderArray[i].status == "partsorder"){
            dispStatus = "Parts on Order";
        }
        else {
            dispStatus = workOrderArray[i].status;
        }

        main.innerHTML += `<div id="wo-${i}" class="work-order">
            <p class="wo-disp-num">#${workOrderArray[i].type.toUpperCase()}-${i}</p>
            <p class="wo-disp-title">${workOrderArray[i].title}</p>
            <p class="wo-disp-requester">${workOrderArray[i].name}</p>
            <p class="wo-disp-location">${dispLocation}</p>
            <p class="wo-disp-status">${dispStatus}</p>
        </div>
        `;
    }
    
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
    main.classList.add('form');

    main.innerHTML = `<form>
        <fieldset> <legend>Your Information</legend>
            <label for="submitter-name">Name (Last, First)</label>
            <input type="text" id="submitter-name" required>
            <br />
            <label for="submitter-email">Email Address</label>
            <input type="email" name="submitter-email" id="submitter-email" required>
        </fieldset>
        <br />
        <fieldset> <legend>Location</legend>
            <label for="wo-location">Location</label>
            <select name="wo-location" id="wo-location" required>
                <option value="BCHS">BCHS</option>
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
                <option value="other">Other (Please specify in Description)</option>
            </select>
            <label for="wo-room-number">Room Number</label>
            <input type="text" name="wo-room-number" id="wo-room-number" required>
        </fieldset>
        <br />
        <fieldset> <legend>Device</legend>
            <label for="wo-asset">Asset Tag Number</label>
            <input type="number" name="wo-asset" id="wo-asset" required>
            <br />
            <label for="wo-manufacturer">Manufacturer</label>
            <input type="text" name="wo-manufacturer" id="wo-manufacturer">
            <br />
            <label for="wo-model">Model Name/Number</label>
            <input type="text" name="wo-model" id="wo-model">
        </fieldset>
        <br />
        <fieldset> <legend>Issue</legend>
            <label for="wo-title">Title</label>
            <input type="text" name="wo-title" id="wo-title">
            <br />
            <label for="wo-description">Description</label>
            <br />
            <textarea name="wo-description" id="wo-description" cols="40" rows="10" placeholder="Please be as descriptive of your issue as possible..."></textarea>
        </fieldset>`;

    createWO.innerText = "Submit";
    main.append(createWO);

}

function displaySubmitSRForm(){
    displaySubmitIncForm(main);

    createWO.remove();

    main.innerHTML += `<br />
        <fieldset> <legend>Request Items</legend>
        <label for="wo-item">Item</label>
            <select name="wo-item" id="wo-item" required>
                <option value="cb-screen-nontouch">Chromebook Screen - Non-Touch - $80</option>
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
                <option value="usb-bluetooth">USB Bluetooth Dongle - $10</option>
            </select>
        </fieldset>
        <br />`;

    main.append(createWO);

}


// submit work order
function submitWorkOrderForm(woType){
    let newWorkOrder = {
        type: woType,
        status: "open",
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
        notes: []
    };

    newWorkOrder.name = document.getElementById("submitter-name").value;
    newWorkOrder.email = document.getElementById("submitter-email").value;

    newWorkOrder.location = document.getElementById("wo-location").value;

    newWorkOrder.room = document.getElementById("wo-room-number").value;
    newWorkOrder.asset = document.getElementById("wo-asset").value;
    newWorkOrder.manufacturer = document.getElementById("wo-manufacturer").value;
    newWorkOrder.model = document.getElementById("wo-model").value;
    newWorkOrder.title = document.getElementById("wo-title").value;
    newWorkOrder.description = document.getElementById("wo-description").value;

    if (woType == "sr"){
        newWorkOrder.requestedItem = document.getElementById("wo-item").value;
    }

    console.log(newWorkOrder);
    return(newWorkOrder);

}


// view work order information
function viewWorkOrder(viewWO, workOrderArray){

    console.log("Clicked Work Order:\t" + viewWO + ",");
    console.log(workOrderArray[viewWO]);

    let dispLocation = "";
    let dispStatus = "";

    if (workOrderArray[viewWO].location == "annex"){
        dispLocation = "Annex";
    }
    else if (workOrderArray[viewWO].location == "busGarage"){
        dispLocation = "Bus Garage";
    }
    else if (workOrderArray[viewWO].location == "other"){
        dispLocation = "Other";
    }
    else {
        dispLocation = workOrderArray[viewWO].location;
    }

    if (workOrderArray[viewWO].status == "open"){
        dispStatus = "Open";
    }
    else if (workOrderArray[viewWO].status == "closed"){
        dispStatus = "Closed";
    }
    else if (workOrderArray[viewWO].status == "pending"){
        dispStatus = "Pending";
    }
    else if (workOrderArray[viewWO].status == "inoffice"){
        dispStatus = "In Office";
    }
    else if (workOrderArray[viewWO].status == "rtr"){
        dispStatus = "Ready to Return";
    }
    else if (workOrderArray[viewWO].status == "escalated"){
        dispStatus = "Escalated";
    }
    else if (workOrderArray[viewWO].status == "warranty"){
        dispStatus = "Warranty Service Requested";
    }
    else if (workOrderArray[viewWO].status == "partsorder"){
        dispStatus = "Parts on Order";
    }
    else {
        dispStatus = workOrderArray[viewWO].status;
    }

    main.innerHTML = `<div class="work-order-info-buttons">
        <button id="back-button" class="button">Back</button>
        <button id="edit-wo-button" class="button">Edit</button>
    </div>
    `;

    let woInfo = `<div class="work-order-info">
        <div>
            <p class="wo-view-num">#${workOrderArray[viewWO].type.toUpperCase()}-${viewWO}</p>
            <p class="wo-view-title">${workOrderArray[viewWO].title}</p>

            <p class="wo-view-status">${dispStatus}</p>
        </div>
        <div>
            <h3 class="wo-view-requester">Requester</h3>
            <h3 class="wo-view-requester-email">Email Address</h3>
            <h3 class="wo-view-location">Location</h3>
            <h3 class="wo-view-room-num">Room</h3>
        </div>
        <div>
            <p class="wo-view-requester">${workOrderArray[viewWO].name}</p>
            <p class="wo-view-requester-email">${workOrderArray[viewWO].email}</p>
            <p class="wo-view-location">${dispLocation}</p>
            <p class="wo-view-room-num">${workOrderArray[viewWO].room}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p class="wo-view-description">${workOrderArray[viewWO].description}</p>
        </div>
    `;

    if (workOrderArray[viewWO].type == "sr"){
        let dispReqItem = null;
        let reqItemPrice = null;

        if (workOrderArray[viewWO].requestedItem == "cb-screen-nontouch"){
            dispReqItem = "Chromebook Screen - Non-Touch";
            reqItemPrice = "$80.00";
        }
        else if (workOrderArray[viewWO].requestedItem == "cb-screen-touch"){
            dispReqItem = "Chromebook Screen - Touch";
            reqItemPrice = "$80.00";
        }
        else if (workOrderArray[viewWO].requestedItem == "cb-battery"){
            dispReqItem = "Chromebook Battery";
        }
        else if (workOrderArray[viewWO].requestedItem == "cb-keyboard"){
            dispReqItem = "Chromebook Keyboard";
            reqItemPrice = "$60.00";
        }
        else if (workOrderArray[viewWO].requestedItem == "cb-charger-c"){
            dispReqItem = "Chromebook Charger - USB-C";
            reqItemPrice = "$40.00";
        }
        else if (workOrderArray[viewWO].requestedItem == "cb-charger-barrel"){
            dispReqItem = "Chromebook Charger - Barrel";
            reqItemPrice = "$40.00";
        }

        else {
            dispReqItem = workOrderArray[viewWO].requestedItem;
        }

        if (reqItemPrice != null){ // if the requested item has a price,
            woInfo += `<div>
                <h3>Requested Items</h3>
                <p class="wo-view-req-item">${dispReqItem}</p>
                <p class="wo-view-req-item-price">${reqItemPrice}</p>
            </div>
            `;
        }
        else { // if there is no price,
            woInfo += `<div>
                <h3>Requested Items</h3>
                <p class="wo-view-req-item">${dispReqItem}</p>
            </div>
            `;
        }
    }

    woInfo += `</div>`
    main.innerHTML += woInfo;

}