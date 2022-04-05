
let arr = []
const btnWashCar = document.getElementById("washCarEl")
const btnMowLawn = document.getElementById("mowLawnEl")
const btnPullWeeds = document.getElementById("pullWeedsEl")
const details = document.getElementById("detailsEl")
const amount = document.getElementById("amountEl")

btnWashCar.addEventListener("click", function () {
    arr.push({
        name: "Wash Car",
        price: 10
    })
    render()
})

btnMowLawn.addEventListener("click", function () {
    arr.push({
        name: "Mow Lawn",
        price: 20
    })
    render()    
})

btnPullWeeds.addEventListener("click", function() {
    arr.push({
        name: "Pull Weeds",
        price: 30
    })
    render()
})

function render() {
    let record = ""
    let total = 0
    for(let i = 0; i < arr.length; i++) {
        record += `
            <div class="item-task">
                <p>${arr[i].name} </p>
                <p>$${arr[i].price}</p>
            </div>
        `
        total += arr[i].price
    }
    
    details.innerHTML = record
    amount.textContent = `$${total}`
}
