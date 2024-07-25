import { useEffect, useState } from "react";
import { getAllInventorys } from "../api/service.api";
import { InventoryCard } from "./InventoryCard";

export function InventoryList() {

const [inventorys, setInventory] = useState([]);

    useEffect(() => {
        async function loadInventorys() {
            const res = await getAllInventorys();
            console.log(res);
            setInventory(res.data);
        }
        loadInventorys(); // Llama a la función para ejecutar la solicitud
    }, []);

    return (<div>
        {inventorys.map(inventory => (<InventoryCard key={inventory.id} inventory={inventory}/>))}
    </div>
    )
}