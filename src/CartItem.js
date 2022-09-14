import React from "react";

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>Phone </div>
                    <div style={{color: '#777'}}>Rs. 999 </div>
                    <div style={{color: '#777'}}>Qty: 1 </div>
                    <div className="cart-item-actions">
                        {/*buttons*/}
                        <img alt = "increase" className="action-icons" src="https://t3.ftcdn.net/jpg/03/30/25/74/240_F_330257485_WEd8LDmLkdp4vbJjhbLY263gV0OvsiIF.jpg"/>
                        <img alt = "decrease" className="action-icons" src="https://t3.ftcdn.net/jpg/05/15/52/52/240_F_515525211_uXgI3FdevK7Gr2DioeChvCHsPuvNb580.jpg"/>
                        <img alt = "delete" className="action-icons" src="https://t4.ftcdn.net/jpg/01/90/89/15/240_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"/>
                    </div>
                </div>
            </div>
        ); 
    }
}

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
} 

export default CartItem;