import React, { Component } from 'react';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: []
        };
    }

    componentDidMount() {
        // Get cart items from the database
        fetch('https://mywebsite.com/api/cartItems')
            .then(response => response.json())
            .then(data => this.setState({ cartItems: data }));
    }

    render() {
        return (
            <div className="cart">
                <h2>Carrito de compras</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.quantity * item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Total: {this.state.Items.reduce((total, item) => total + item.quantity * item.price, 0)}</h3>
            </div>
        );
    }
}

export default Cart;

const styles = StyleSheet.create({
    container: {
       flex: 1,
       justifyContent: "center",
       backgroundColor: "#ecf0f1",
       padding: 8,
    },
    inputContainer: {
       width: "100%",
       paddingHorizontal: 15,
       paddingVertical: 10,
       borderColor: "#d1d1d1",
       borderWidth: 1,
       borderRadius: 5,
    },
    inputField: {
       height: 40,
       fontSize: 14,
       color: "#000",
    },
    buttonContainer: {
       paddingHorizontal: 15,
       marginTop: 20,
    },
    stretch: {
       width: "100%",
       height: 100,
       resizeMode: "contain",
       marginBottom: 10,
       marginTop: 10,
       alignSelf: "center",
       justifyContent: "center",
       alignItems: "center",
       padding: 10,
    }
   });
   