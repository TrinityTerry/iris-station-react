import orderManager from "../../modules/orderManager";
import order_product_manager from "../../modules/order_product_manager";

export function setMessageHelper(setAddMessage) {
  console.log(setAddMessage);
  return (productId, message = "Added to Cart") => {
    setAddMessage((prevState) => {
      let newObj = { ...prevState };
      newObj[productId] = message;
      return newObj;
    });
    window.setTimeout(() =>
        setAddMessage((prevState) => {
          console.log("prevSTATE", prevState);
          console.log(productId);
          let newObj = { ...prevState };
          newObj[productId] = "";
          return newObj;
        }),
      2000
    );
  };
}

export function handleAddToCartHelper(token, setMessage, props) {
  return (productId) => {
    token
      ? orderManager.getOrders(token).then((arr) => {
          if (arr.length > 0) {
            if (arr[0].payment_type_id != null) {
              orderManager.postOrder(token).then((obj) => {
                const productRelationship = {
                  order_id: obj.id,
                  product_id: productId,
                };
                order_product_manager
                  .postNewOrder(token, productRelationship)
                  .then(() => {
                    setMessage(productId);
                    // props.history.push("/");
                  });
              });
            } else {
              const productRelationship = {
                order_id: arr[0].id,
                product_id: productId,
              };
              order_product_manager
                .postNewOrder(token, productRelationship)
                .then(() => {
                  setMessage(productId);
                  //   props.history.push("/");
                });
            }
          } else {
            orderManager.postOrder(token).then((obj) => {
              const productRelationship = {
                order_id: obj.id,
                product_id: productId,
              };
              order_product_manager
                .postNewOrder(token, productRelationship)
                .then(() => {
                  setMessage(productId);
                  //   props.history.push("/");
                });
            });
          }
        })
      : setMessage(productId, "You Have to Login");
  };
}
