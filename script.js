let workOrderArray = [];

const main = document.querySelector('#main');

const workOrdersBtn = document.querySelector('#work-orders-button');
const submitWorkOrderBtn = document.querySelector('#submit-work-order-button');
const howToSubmitBtn = document.querySelector('#how-to-submit-button');


workOrdersBtn.addEventListener('click', function(){
    workOrdersBtn.classList.add("button-clicked");
    setTimeout(() => {
        workOrdersBtn.classList.remove("button-clicked");
    }, 200);

    workOrderArray = displayWorkOrders(main, workOrderArray);
});

submitWorkOrderBtn.addEventListener('click', function(){
    submitWorkOrderBtn.classList.add("button-clicked");
    setTimeout(() => {
        submitWorkOrderBtn.classList.remove("button-clicked");
    }, 200);

    workOrderArray = submitWorkOrderForm(main, workOrderArray);
    console.log(workOrderArray);
});

howToSubmitBtn.addEventListener('click', function(){
    howToSubmitBtn.classList.add("button-clicked");
    setTimeout(() => {
        howToSubmitBtn.classList.remove("button-clicked");
    }, 200);
});


function displayWorkOrders(main, workOrderArray){
    main.innerHTML = `<p>work orders placeholder</p>`;
    return workOrderArray;
}

function submitWorkOrderForm(main, workOrderArray){
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
        </fieldset>
        <button id="submit">Submit</button>
    </form>`;

    const form = document.querySelector('form');

    let workOrder = undefined;

    form.addEventListener('submit', function() {
        workOrder = {
            name: document.querySelector('#submitter-name').value,
            email: document.querySelector('#submitter-email').value,
            location: document.querySelector('#wo-location').value,
            room: document.querySelector('#wo-room-number').value,
            asset: document.querySelector('#wo-asset').value,
            manufacturer: document.querySelector('#wo-manufacturer').value,
            model: document.querySelector('#wo-model').value,
            title: document.querySelector('#wo-title').value,
            description: document.querySelector('#wo-description').value,
        }
    });

    workOrderArray.push(workOrder);
    return workOrderArray;
}
