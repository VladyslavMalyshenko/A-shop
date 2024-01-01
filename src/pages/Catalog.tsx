import React from "react"
import "../styles/pages/Catalog.scss"

import { useGetGoodsQuery } from "../redux/goodsApi"

import Card from "../components/UI/Card"
import { useParams } from "react-router-dom"

const Catalog = () => {
    const params = useParams()
    const {data = []}: any = useGetGoodsQuery(params.category)

    const toggleSidebar = () => {
        const sidebar = document.querySelector(".sidebar")

        if (sidebar) {
            sidebar.classList.toggle('closed')
        }
    }

    return (
        <div className="catalog-container"> {/* Main container */}
            <div className="sidebar"> {/* Sidebar */}
                <div onClick={toggleSidebar} className="close-sidebar-button">
                </div>
            </div>
            <div className="main-content-container">
                <nav className="navbar"> {/* Navbar */}

                </nav>

                <div className="catalog-content"> {/* Catalog */}
                    {data &&
                        data.map((item: any) => (
                            <Card key={item.id} title={item.title} image={item.image} id={item.id} status={item.status} price={item.price} rate={item.rate}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Catalog;