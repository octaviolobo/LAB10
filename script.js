let contacts = [ 
    {
        name: "Maxwell Wright", 
        phone: "019171916495", 
        email: "contact1@cctb.com" 
    }, 
    { 
        name: "Raja Villarreal", 
        phone: "0863982895", 
        email: "contact2@cctb.com" 
    }, 
    { 
        name: "Helen Richards", 
        phone: "080031111", 
        email: "contact3@cctb.edu" 
    }
];

let newContact = null; // Store the new contact temporarily

function displayContacts() {
    const contactsDiv = document.getElementById('contacts');
    contactsDiv.innerHTML = ''; // Clear the existing contacts list

    contacts.forEach((contact, index) => {
        const contactElement = document.createElement('div');
        contactElement.innerHTML = `<p>Contact ${index + 1}: ${contact.name}</p>
                                    <p>Phone: ${contact.phone}</p>
                                    <p>Email: ${contact.email}</p>`;
        contactsDiv.appendChild(contactElement);
    });
}

// Function to add new contacts
function addContact() {
    let name = prompt("Enter the contact's name:");
    let phone = prompt("Enter the contact's phone number:");
    let email = prompt("Enter the contact's email:");
    
    if (name && phone && email) {
        newContact = { name, phone, email };
        console.log(`${name} added to contacts. Press 'Update Contacts' to see the change.`);
    }
}

// Function to update contacts after a 3-second delay
function updateContacts() {
    if (newContact) {
        setTimeout(() => {
            contacts.push(newContact);
            newContact = null; // Clear the temporary new contact
            displayContacts();
            console.log("Contact list updated.");
        }, 3000); // 3-second delay
    } else {
        console.log("No new contacts to add.");
    }
}

// Function to find a contact
function findContact() {
    let nameToFind = prompt("Enter the name of the contact you're looking for:");
    if (nameToFind) {
        let contact = contacts.find(contact => contact.name.toLowerCase() === nameToFind.toLowerCase());
        if (contact) {
            console.log(`Name: ${contact.name}\nPhone: ${contact.phone}\nEmail: ${contact.email}`);
        } else {
            console.log(`${nameToFind} is not in your contacts.`);
        }
    }
}
const interactWithList = () => {
    do {
      const action = prompt("Enter 'add' to add a contact, 'find' to find a contact, 'view' to view the contacts, or 'quit' to exit:");
      switch (action.toLowerCase()) {
        case 'add':
          addContact();
          break;
        case 'find':
          findContact();
          break;
        case 'quit':
          return;
        case 'view':
          return;
        default:
          alert("Invalid action. Please try again.");
      }
    } while (true);
  };
  
  interactWithList();

// Log contact count every 5 seconds
function logContactCount() {
    setInterval(() => {
        console.log(`You have ${contacts.length} contacts.`);
    }, 5000); // Log count every 5 seconds
}

// Change the background color every 5 seconds
function changeBackgroundColor() {
    const colors = ["#a84632", "#32a89e", "#3357FF", "#F3FF33", "#FF33C4"];
    let index = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 5000); // Change color every 5 seconds
}

// Event listeners for the buttons
document.getElementById('add').addEventListener('click', addContact);
document.getElementById('find').addEventListener('click', findContact);
document.getElementById('update').addEventListener('click', updateContacts);

// Initialize the functions
changeBackgroundColor();
logContactCount();
displayContacts();
