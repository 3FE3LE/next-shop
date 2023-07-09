import { useContext } from "react"
import SushiCartContext from "@context/SushiCartContext"

const useSushiCart = ()=> {
  return useContext(SushiCartContext)
}

export default useSushiCart