import { getEmployees } from "./database.js"
import { getOrders } from './database.js'

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            let correctEmployee = null
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    correctEmployee = employee
                }
            }
            let productCount = 0
            for (const order of orders) {
                if (order.employeeId === (correctEmployee.id)) {
                    productCount++
                }
            }
            window.alert(`${correctEmployee.name} has sold ${productCount} products!`)
        }
    }
)