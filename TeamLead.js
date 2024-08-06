let totalIncome = 0;
let totalExpenses = 0;

function updateTotals() {
  document.getElementById("totalIncome").textContent = totalIncome.toFixed(0);
  document.getElementById("totalExpenses").textContent =
    totalExpenses.toFixed(0);
  document.getElementById("remainingBalance").textContent = (
    totalIncome - totalExpenses
  ).toFixed(0);
}

document.getElementById("saveButton").addEventListener("click", function () {
  var dateInput = document.getElementById("dateInput").value;
  var amountInput = parseFloat(document.getElementById("amountInput").value);
  var areaInput = document.getElementById("areaInput").value;

  if (dateInput && amountInput && areaInput) {
    var table = document
      .getElementById("expensesTable")
      .getElementsByTagName("tbody")[0];
    var newRow = table.insertRow();

    newRow.insertCell(0).textContent = dateInput;
    newRow.insertCell(1).textContent = areaInput;
    newRow.insertCell(2).textContent = amountInput.toFixed(2);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Sil";
    deleteButton.className = "btn btn-danger";
    deleteButton.onclick = function () {
      table.deleteRow(newRow.rowIndex - 1);
      // Recalculate totals after deletion
      updateTotals();
    };
    newRow.insertCell(3).appendChild(deleteButton);

    // Update totals
    totalExpenses += amountInput;
    updateTotals();

    // Clear the form fields
    document.getElementById("dateInput").value = "";
    document.getElementById("amountInput").value = "";
    document.getElementById("areaInput").value = "";
  } else {
    alert("Lütfen tüm alanları doldurun.");
  }
});

document
  .getElementById("addIncomeButton")
  .addEventListener("click", function () {
    var incomeInput = parseFloat(document.getElementById("incomeInput").value);

    if (incomeInput) {
      totalIncome += incomeInput;
      updateTotals();

      // Clear the income input field
      document.getElementById("incomeInput").value = "";
    } else {
      alert("Lütfen bir gelir miktarı girin.");
    }
  });

document.querySelector(".gri").addEventListener("click", function () {
  document
    .getElementById("expensesTable")
    .getElementsByTagName("tbody")[0].innerHTML = "";
  totalIncome = 0;
  totalExpenses = 0;
  updateTotals();
});
