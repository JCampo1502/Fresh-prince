import getData from "../app/helpers/getData.js"
import { showData } from "../app/modules/show.js"

const url ="http://localhost:3000/ropa"
const main = document.getElementById("main")
const ropa=await getData(url)

showData(ropa,main)