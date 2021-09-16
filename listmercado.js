// let itemList = []

// let itemList = localStorage.getItem('items')

let itemList = localStorage.getItem('items')
if (itemList) {
    itemList = itemList.split(',')
} else {
    itemList = []
}

showList()


console.log('itemList 1', itemList)
function addItem() {
    let itemValue = document.getElementById('item').value
    if (itemValue.length > 0) {
        itemList.push(itemValue)
         localStorage.setItem('items', itemList)
        showList()
    } else {
        alert("Debes llenar los campos")
    }
    clean()
}


function showList() {
    let html = ''
    
    for (let i = 0; i < itemList.length; i++) {
        // html += ` <div class="row bg-warning"> <div class="col" style=""> ${itemList[i]}  <button class="btn btn-danger" style="">X</button> 
        // </div> </div>`
        html += ` <div class="d-flex justify-content-between" style="padding-top: 2%;">  ${itemList[i]}   <button onclick="RemoveItem()" class="btn btn-danger" style="">-</button> 
        </div>`
        
    }
    document.getElementById('showItemList').innerHTML = html


}



function clean() {
    let itemValue = document.getElementById('item')
    itemValue.value = ""
}


function RemoveItem(){
    localStorage.removeItem('items')
    itemList.splice(0,1)
    showList()
        
    
}
