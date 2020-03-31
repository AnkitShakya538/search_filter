import React, {useState} from 'react'
import data from '../data.json'
import Product from './Product.js'
function SearchBox(){

    const [search, UpdateSearch] = useState("")

    let filteredSearch = data.filter(
        product => {
            return (
                search ?
                product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 :
                null
            )
        }
    )

        return(
            <div>
                <span>Functional Component Search: </span>
                <input type="text" placeholder="  search"
                value = {search}
                onChange = {e => {
                    UpdateSearch(e.target.value)
                }}
                ></input>
                <div >
                    {filteredSearch.map(
                        product => {
                            return <Product product={product} key={product.id} />
                        }
                    )}
                </div>
            </div>
        )
}

export default SearchBox