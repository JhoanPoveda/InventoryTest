import { InventoryList } from "../components/inventoryList";
import { InvetoryForm } from "../components/InventoryForm";
import { useEffect, useState  } from "react";
import { getAllProductsType } from '../api/service.api';

export function InventoryPages() {
  const [productTypes, setProductTypes] = useState([]);
  useEffect(() => {
    getAllProductsType().then(response => {
      setProductTypes(response.data);
    });
  }, []);

  return (  
    <div>
        <div className="row justify-content-evenly" style={{ width: "100%"}}>
          <div className="col-4">
            <InvetoryForm productTypes={productTypes}/> 
          </div>
          <div className="col-4">
            <InventoryList productTypes={productTypes}/>
          </div>
      </div>
    </div>
  )

}

