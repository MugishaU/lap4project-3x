import React from 'react'
import { Link } from 'react-router-dom'

class Stock extends React.Component {
    render() {
        return (
            <>
                <div className='stock'>
                    <h3>{this.props.stock.name} </h3>
                    <p>{this.props.stock.shares} @ ${this.props.stock.price.toFixed(2)} for ${this.props.stock.position.toFixed(2)} </p>
                    <Link to={{
                            pathname:'/dashboard/trade',
                            stock:{ 
                                stock: this.props.stock.ticker
                            }
                        }}>TRADE
                    </Link>
                </div>
            </>
        )
    }
}

export default Stock;