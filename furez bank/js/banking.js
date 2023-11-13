 // JavaScript code for arithmetic operations
 const balanceElement = document.getElementById('balance');
 const amountInput = document.getElementById('amount');
 const withdrawBtn = document.getElementById('withdrawBtn');
 const balanceBtn = document.getElementById('balanceBtn');
 const statementBtn = document.getElementById('statementBtn');
 const depositBtn = document.getElementById('depositBtn');
 const sendBtn = document.getElementById('sendBtn');
 const statementList = document.getElementById('statement');
 const withdrawnElement = document.getElementById('withdrawn');
 const sentElement = document.getElementById('sent');
 const depositedElement = document.getElementById('deposited');

 // Initialize variables
 let balance = 0;
 let withdrawn = 0;
 let sent = 0;
 let deposited = 0;

 // Update the balance element with the current balance
 function updateBalance() {
   balanceElement.textContent = balance.toFixed(2);
 }

 // Update the finance tracker elements
 function updateFinanceTracker() {
   withdrawnElement.textContent = withdrawn.toFixed(2);
   sentElement.textContent = sent.toFixed(2);
   depositedElement.textContent = deposited.toFixed(2);
 }

 // Withdraw money
 withdrawBtn.addEventListener('click', function() {
   const amount = parseFloat(amountInput.value);
   if (amount > 0 && amount <= balance) {
     balance -= amount;
     withdrawn += amount;
     updateBalance();
     updateFinanceTracker();
     statementList.innerHTML += '<li>Withdrawn: -' + amount.toFixed(2) + '</li>';
   }
   amountInput.value = '';
 });

 // Balance inquiry
 balanceBtn.addEventListener('click', function() {
   alert('Current Balance: ' + balance.toFixed(2));
 });

 // Request statement
 statementBtn.addEventListener('click', function() {
   alert('Statement requested. Please check the Bank Transaction Statement section.');
 });

 // Deposit money
 depositBtn.addEventListener('click', function() {
   const amount = parseFloat(amountInput.value);
   if (amount > 0) {
     balance += amount;
     deposited += amount;
     updateBalance();
     updateFinanceTracker();
     statementList.innerHTML += '<li>Deposited: +' + amount.toFixed(2) + '</li>';
   }
   amountInput.value = '';
 });

 // Send money
 sendBtn.addEventListener('click', function() {
   const amount = parseFloat(amountInput.value);
   if (amount > 0 && amount <= balance) {
     balance -= amount;
     sent += amount;
     updateBalance();
     updateFinanceTracker();
     statementList.innerHTML += '<li>Sent: -' + amount.toFixed(2) + '</li>';
   }
   amountInput.value = '';
 });