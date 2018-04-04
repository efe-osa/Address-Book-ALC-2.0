window.onload = init
function init() {
    let addButton;
    let searchButton;
    var save;
    var fname, lname, number, email;
    //this will contains the contacts
    let contactslist;
    var addressbook;
};

// this adds contact input field 
function addcontactField() {
    contactslist = [];
    var addcontactdiv = document.querySelector(".addcontactdiv");
    addcontactdiv.innerHTML = "<label class='text-center mr-1'><em>Add/Edit <br> Contact </em></label>" +
        "<input type='text' name='fname' placeholder='First Name'>" +
        "<input type='text' name='lname' placeholder='Last Name'class='ml-1' >" +
        "<input type='text' name='number' placeholder='Phone Number' class='ml-1'>" +
        "<input type='text' name='email' placeholder='E-mail' class='ml-1'><button onclick ='addContact()' class='ml-1'>Add</button>"
        + "<button class='ml-1 saveButton'>Save changes</button>";
}
//this adds contact to the array
function addContact() {
    fname = document.querySelector("input[name=fname]").value;
    lname = document.querySelector("input[name=lname]").value;
    phone = document.querySelector("input[name=number]").value;
    email = document.querySelector("input[name=email]").value;
    var contact = {
        contactName: fname,
        surname: lname,
        number: phone,
        email: email
    };
    contactslist.push(contact);
    showContacts(contactslist);
    clearfield();
}
//shows contact list
function showContacts(contactslist) {
    addressbook = document.querySelector(".addressbook");
    var content = "";
    for (var i = 0; i < contactslist.length; i++) {
        document.querySelector(".addresspanel").innerHTML = "Contact List";
        content += "<p class='para mr-5' onclick ='showcontactsDetails(" + i + ")'><span>" + (contactslist[i].contactName) + "  " + (contactslist[i].surname) +
            "</span><a href='#' onclick = 'edit(" + i + ")'>      Edit</a> | <a href='#' onclick= 'del(" + i + ")'>Delete</a></p>" +
            "<p class='infocolor personinfo" + i + "'></p>";
        addressbook.innerHTML = content;
    }
}
function clearfield() {
    document.querySelector("input[name=fname]").value = "";
    document.querySelector("input[name=lname]").value = "";
    document.querySelector("input[name=number]").value = "";
    document.querySelector("input[name=email]").value = "";
}
function showcontactsDetails(i) {
    var personinfo = document.querySelector(".personinfo" + i);
    personinfo.innerHTML = contactslist[i].contactName + " " + contactslist[i].surname + " | "
        + contactslist[i].number + " | " + contactslist[i].email + "<hr>";
}

// this searches for the names from contact list

function searchField() {
    var searchdiv = document.querySelector(".searchdiv");
    searchdiv.innerHTML = "<br><label class='search'><em>Search </em></label>" +
        "<input type='text' name='name' id='searchname' onkeyup='searchContacts()' placeholder='Search' class='ml-3'>"
}
function searchContacts(evt) {
    var pnames;
    var input = document.querySelector("#searchname");
    var filter = input.value.toUpperCase();
    var para = document.querySelectorAll('.para');
    for (var i = 0; i < para.length; i++) {
        pnames = para[i].getElementsByTagName('span')[0];
        if (pnames.innerText.toUpperCase().indexOf(filter) > -1) {
            para[i].style.display = "block";
        } else {
            para[i].style.display = "none";
        }
    }
}

// this deletes person contact
function del(i) {
    var c = confirm('Are you sure you want to delete this contact?');
    if (c == true) {
        contactslist.splice(i, 1);
        showContacts(contactslist);
    }
}
//this edits info
function edit(i) {
    document.querySelector("input[name=fname]").value = contactslist[i].contactName;
    document.querySelector("input[name=lname]").value = contactslist[i].surname;
    document.querySelector("input[name=number]").value = contactslist[i].number;
    document.querySelector("input[name=email]").value = contactslist[i].email;
    document.querySelector('.saveButton').onclick = function () {
        savechanges(i);
    }
}
//this saves edited info
function savechanges(i) {
    console.log(contactslist[i].contactName);
    contactslist[i].contactName = document.querySelector("input[name=fname]").value;
    contactslist[i].surname = document.querySelector("input[name=lname]").value;
    contactslist[i].number = document.querySelector("input[name=number]").value;
    contactslist[i].email = document.querySelector("input[name=email]").value;
    showContacts(contactslist)
    clearfield()
}

