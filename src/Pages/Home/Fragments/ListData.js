import React,{useState,useEffect} from 'react';
import dynamic from 'next/dynamic';
import { productData } from "../Data"
import Link from 'next/link'

const ListData = () => {
	
    const [data, setdata] = useState([])

    return (
        <div>
            {
                productData.map(item=>(
                    <div>
                    <Link href="/about">
                        <a>
                        <img src={item.image} style={{width:30}}/>
                        {item.name}
                        </a>
                    </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default ListData;
