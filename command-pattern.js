class OrderManager {
  constructor() {
    this.orders = [];
  }

  execute(command, ...arg) {
    console.log(...arg);
    return command.execute(this.orders, ...arg);
  }
}

class Command {
  constructor(execute) {
    this.execute = execute;
  }
}

function PlaceOrderCommand(order, id) {
    return new Command((orders) => {
      orders.push(id);
      return `You have successfully ordered ${order} (${id})`;
    });
  }
  
  function CancelOrderCommand(id) {
    return new Command((orders) => {
      orders = orders.filter((order) => order.id !== id);
      return `You have canceled your order ${id}`;
    });
  }
  
  function TrackOrderCommand(id) {
    return new Command(() => `Your order ${id} will arrive in 20 minutes.`);
  }

  const manager = new OrderManager();

console.log(manager.execute( PlaceOrderCommand("Pad Thai", "1234")))
console.log(manager.execute( TrackOrderCommand("1234")))