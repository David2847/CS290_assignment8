import OrderTable from '../components/OrderTable.jsx';

function OrderPage({ items }) {
    //console.log(items);
    return (
      <>
        <h2>Order</h2>
        <p> Increment or decrement the items below until you have the desired quantity.</p>
        <OrderTable items={items}/>
      </>
    );
  }
  export default OrderPage;