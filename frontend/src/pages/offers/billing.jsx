import React, { Component } from "react";

export default function BillingInfo(props) {
  const myHeaderStyle = {
    padding: "2rem",
    backgroundColor: "#f1f1f1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "2rem",
    marginBottom: "1rem"
  };

  const myHeaderText = {
    "textAlign": "left",
    "fontSize": "2rem",
    "marginBottom": "1rem"
  };

  const myContainer = {
    width: "70vw",
    margin: "0 auto"
  };

  const myFlexContainer = {
    display: "-webkit-box",
    WebkitFlexWrap: "wrap",
    WebkitBoxPack: "justify",
    padding: "5%",


  };

  const myFlexItem = {
      WebkitBoxFlex: 1,
      WebkitFlex: 1,
      flex: "0 0 50%"

    // marginRight: "20%"
  };

  const myProductImage={
      maxWidth: "50%",
      maxHeight: "30rem"
  }

  const myFlexProductContainer={
    display: "-webkit-box",

    WebkitBoxPack: "center",
    padding: "5%",

  }

  const myProduct={
    margin: "2rem"
  }
  const myBillingHeader={
    padding: "2rem",
    backgroundColor: "#f1f1f1",
    display: "-webkit-box",
    WebkitBoxPack: "justify",
    alignItems: "center",
    borderRadius: "2rem",
    marginBottom: "5rem"
  }


  const calculateTotal=()=>{
    let total=0;
    props.products.filter(x => x.quantity > 0).map((product,i) =>
      total +=product.price*product.quantity
    )
    return total;
  }



  const BASE_URL='https://localhost:3000/'

  return (
    <div style={myContainer}>
      <div style={myHeaderStyle}>
        <h1 style={myHeaderText}>Billing Information</h1>
      </div>
      <div style={myFlexContainer}>
        <div style={myFlexItem}>
          <h3>First Name Last Name</h3>
          <p>
            {props.billingInfo.firstName} {props.billingInfo.lastName}
          </p>
        </div>
        <div style={myFlexItem}>
          <h3>Email</h3>
          <p>{props.billingInfo.email}</p>
        </div>
      </div>
      <div style={myFlexContainer}>
        <div style={myFlexItem}>
          <h3>Billing Address</h3>
          <p>{props.billingInfo.address}</p>
        </div>
        <div style={myFlexItem}>
          <h3>Telephone Number</h3>
          <p>{props.billingInfo.phoneNr}</p>
        </div>
      </div>
      <div style={myFlexContainer}>
        <div style={myFlexItem}>
          <h3>Postal Code</h3>
          <p>{props.billingInfo.postalCode}</p>
        </div>
      </div>

      <div style={myHeaderStyle}>
        <h1 style={myHeaderText}>Products</h1>
      </div>
      <div style={myFlexContainer}>
        {props.products.filter(x => x.quantity > 0).map((product,i) => (
          <div style={myFlexItem} key={i}>
          <div style={myFlexProductContainer}>
            <img src={`${BASE_URL}/images/items/${product.image}.png`} style={myProductImage} />
            <div >
            <h3>{product.title}</h3>
            <h3>{product.quantity}x </h3><span>${product.price}</span>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div style={myBillingHeader}>
        <h1 style={myHeaderText}>Total</h1>
        <h1 style={myHeaderText}>${calculateTotal().toFixed(2)}</h1>
      </div>
    </div>
  );
}
