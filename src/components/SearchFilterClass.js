import React, { Component } from 'react'
import data from '../data.json'
import ProductClass from './ProductClass'
class SearchBoxClass extends Component {

    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    UpdateSearch(event) {
        this.setState({ search: event.target.value })
    }

    render() {
        let filteredSearch = data.filter(
            product => {
                return (
                    this.state.search ?
                    product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 :
                    null
                )
            }
        )
        return (
            <div>
                <span>Class Component Search: </span>
                <input type="text" placeholder="  search"
                    value={this.state.search}
                    onChange={this.UpdateSearch.bind(this)}
                ></input>
                <div >
                    {filteredSearch.map(
                        product => {
                            return <ProductClass product={product} key={product.id} />
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default SearchBoxClass