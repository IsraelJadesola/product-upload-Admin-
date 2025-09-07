document.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        uploadBtn()
    }
})

let productArray = localStorage['store'] ? JSON.parse(localStorage['store']) : []
productShow()

let editItem;

function uploadBtn() {
    if (pName.value.trim() === "" || pPrice.value.trim() === "" || pQty.value.trim() === "") {
        alert('Please fill up all areas')
    } else {
        let nameOfProduct = pName.value.trim()
        let priceOfProduct = pPrice.value.trim()
        let quantityOfProduct = pQty.value.trim()

        let productDetails = { name: nameOfProduct, price: priceOfProduct, quantity: quantityOfProduct }
        productArray.push(productDetails)
        localStorage.setItem('store', JSON.stringify(productArray))

        productShow()
    }
}

function productShow() {
    if (localStorage['store'] != undefined) {
        display.innerHTML =
            `<tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <td class="edit-del-td">edit/delete item(s)</td>
            </tr>`

        for (s = 0; s < productArray.length; s++) {
            document.querySelector('#display tbody').innerHTML +=
                `<tr>
                    <td>$${productArray[s].name}</td>
                    <td>${productArray[s].price}</td>
                    <td>${productArray[s].quantity}</td>
                    <td><button onclick="editBtn(${s})" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-success edit">Edit</button>
                    <button onclick="delBtn(${s})" class="btn btn-danger del">Delete</button></td>
                </tr>`

            pName.value = ''
            pPrice.value = ''
            pQty.value = ''
        }
    } else {
        display.innerHTML = `No product Yet`
    }
}

function delBtn(del) {
    let confirmationAlert = confirm('This item will be deleted')

    if (confirmationAlert) {
        productArray.splice(del, 1)
        localStorage.setItem('store', JSON.stringify(productArray))
        productShow()
    }
}

function editBtn(edit) {
    pName2.value = productArray[edit].name
    pPrice2.value = productArray[edit].price
    pQty2.value = productArray[edit].quantity
}

function realEdit() {
    let nameOfProduct2 = pName2.value.trim()
    let priceOfProduct2 = pPrice2.value.trim()
    let quantityOfProduct2 = pQty2.value.trim()

    let productDetails2 = { name: nameOfProduct2, price: priceOfProduct2, quantity: quantityOfProduct2 }

    let displayAlert = true

    if (displayAlert) {
        productArray.splice(editItem, 1, productDetails2)
        localStorage.setItem('store', JSON.stringify(productArray))
        alert('changes made ✅')
        productShow()

    } else {
        productShow()
    }
}

