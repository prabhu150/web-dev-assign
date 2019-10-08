/*eslint-env browser*/

let productList = [
  [4824, "Shirt", 10, 15.99],
  [6343, "Jeans", 22, 39.99],
  [3223, "Socks", 36, 9.99],
  [2233, "Hat", 12, 14.99],
  [9382, "Jacket", 5, 49.99]
];

main();

function displayMenu() {
  let menu =
    "Welcome to VectaCorp Employee Managament System \n Supported Commands:\n 1.Show \n 2.Update \n 3.Exit\n Enter a command in the prompt to begin.\n";
  console.log(menu);
}

function main() {
  // handle all commands
  while (true) {
    displayMenu();
    var command = window.prompt(
      "Enter a command! Check console(F12) for details."
    );

    switch (command.toLowerCase()) {
      case "1":
      case "show":
        viewInventory();
        break;
      case "2":
      case "update":
        updateInventory();
        break;
      case "3":
      case "exit":
        let confirm = window.confirm(
          "Are you sure you want to exit? Unsaved information will be lost."
        );
        if (confirm) {
          console.clear();
          console.log("Thank you for using my system!");
          return;
        }
        break;
      default:
        window.alert(
          "Invalid command! Please pick from one of proper options."
        );
        break;
    }
  }
}

function updateInventory() {
  // update an existing item
  let skuNumber = parseInt(
    window.prompt("Enter unique sku number for product!")
  );

  if (!Number.isNaN(skuNumber)) {
    let products = productList.filter(
      currentProduct => currentProduct[0] == skuNumber
    );

    if (products.length == 0 || products.length > 1) {
      window.alert(
        `Invalid SKU. ${
          products.length == 0 ? "No" : "Multiple"
        } corresponding products found!`
      );
      return;
    }
    let newStockQuantity = parseInt(window.prompt("Enter new stock quantity!"));
    products[productList.indexOf(products[0])][2] = newStockQuantity;

    console.log(
      `Item: ${skuNumber} Quantity: ${newStockQuantity} \n Updated Successfully!`
    );
  } else {
    window.alert("Invalid input. Please enter proper values for sku number!");
  }
}

function viewInventory() {
  // see all items currently included in inventory

  let sortedList = productList.sort(
    (product1, product2) => product1[0] - product2[0]
  );

  for (let product of sortedList)
    console.log(`${product[0]} ${product[1]} (${product[2]})  $${product[3]}`);
}
