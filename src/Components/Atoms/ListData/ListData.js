import React from 'react';
import dynamic from 'next/dynamic';
import { productData } from "../Data"

const ListData = () => {
	
    return (
        <div>
            {
                productData.map(item=>(
                    <div>
                        {item.name}
                    </div>
                ))
            }
        </div>
    );
};

export default ListData;
