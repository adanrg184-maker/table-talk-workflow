import React, { useState, useEffect, useRef } from "react";
import * as Lucide from "lucide-react";

type OrderStatus = "pending" | "in-kitchen" | "cooking" | "ready" | "served";

interface Order {
  id: number;
  item: string;
  status: OrderStatus;
  progress: number;
}

const MENU_ITEMS = [
  { name: "Burger", emoji: "🍔" },
  { name: "Pasta", emoji: "🍝" },
  { name: "Salad", emoji: "🥗" },
  { name: "Pizza", emoji: "🍕" },
];

const App: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [customerDialogue, setCustomerDialogue] = useState("I'm hungry! What should I eat? 🤔");
  const [waiterDialogue, setWaiterDialogue] = useState("Welcome! I'm ready to take your order. 📝");
  const [kitchenDialogue, setKitchenDialogue] = useState("The kitchen is clean and ready to cook! 👨‍🍳");
  const orderIdRef = useRef(0);

  useEffect(() => {
    const cookingOrders = orders.filter((o) => o.status === "cooking");
    if (cookingOrders.length === 0) return;

    const interval = setInterval(() => {
      setOrders((prev) =>
        prev.map((order) => {
          if (order.status === "cooking") {
            const nextProgress = order.progress + 10;
            if (nextProgress >= 100) {
              setKitchenDialogue(`${order.item} is ready! ✅`);
              return { ...order, status: "ready", progress: 100 };
            }
            return { ...order, progress: nextProgress };
          }
          return order;
        })
      );
    }, 200);

    return () => clearInterval(interval);
  }, [orders.length, orders.some(o => o.status === "cooking")]);

  const addOrder = (item: string) => {
    const newOrder: Order = {
      id: ++orderIdRef.current,
      item,
      status: "pending",
      progress: 0,
    };
    setOrders((prev) => [...prev, newOrder]);
    setCustomerDialogue(`I'd like a ${item}, please! 😄`);
  };

  const sendToKitchen = (id: number) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id === id) {
          setWaiterDialogue(`One ${o.item}, coming right up! 🏃💨`);
          return { ...o, status: "in-kitchen" };
        }
        return o;
      })
    );
  };

  const startCooking = (id: number) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id === id) {
          setKitchenDialogue(`Frying up the ${o.item}! 🔥`);
          return { ...o, status: "cooking", progress: 0 };
        }
        return o;
      })
    );
  };

  const serveOrder = (id: number) => {
    setOrders((prev) =>
      prev.map((o) => {
        if (o.id === id) {
          setWaiterDialogue(`Here's your ${o.item}, enjoy! 🍽️`);
          setCustomerDialogue(`Mmm, delicious ${o.item}! Thank you! ❤️`);
          return { ...o, status: "served" };
        }
        return o;
      })
    );
  };

  const resetAll = () => {
    setOrders([]);
    setCustomerDialogue("I'm hungry! What should I eat? 🤔");
    setWaiterDialogue("Welcome! I'm ready to take your order. 📝");
    setKitchenDialogue("The kitchen is clean and ready to cook! 👨‍🍳");
    orderIdRef.current = 0;
  };

  const getStatusBadge = (status: OrderStatus) => {
    return <span className={`status-badge ${status}`}>{status.replace('-', ' ')}</span>;
  };

  return (
    <div className="app">
        <h1 className="text-center text-[2.2rem] font-bold text-[#3d2b1a] tracking-[-0.5px] mb-[6px] flex items-center justify-center gap-[10px] flex-wrap">
            🍽️ Restaurant Role-Play
            <small className="text-[1rem] font-normal bg-[#d9c6b0] p-[4px_16px] rounded-[40px] text-[#3d2b1a]">
                Single-Device Simulation
            </small>
        </h1>
        <p className="subhead text-center text-[#6b4f36] mb-[25px] italic border-b-2 border-dashed border-[#dcc9b6] pb-[12px]">
            A shared screen for three roles: Customer, Waiter, and Kitchen.
        </p>

        <div className="roles-grid grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[10px]">

            {/* Customer Panel */}
            <div className="role-card customer-card bg-white rounded-[32px] p-[20px_16px_24px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] border-2 border-[rgba(0,0,0,0.04)] flex flex-col min-h-[380px] border-t-[6px] border-t-[#1f6e8c] hover:translate-y-[-3px] transition-transform">
                <div className="role-header flex items-center gap-[12px] text-[1.5rem] font-semibold pb-[12px] border-b-[3px] border-[#f0e3d8] mb-[16px] text-[#1f6e8c]">
                    <span className="emoji-big text-[2rem]">🧑‍🤝‍🧑</span>
                    Customer
                </div>
                <div className="speech-bubble mb-[18px]">
                    {customerDialogue}
                </div>
                
                <div className="menu-grid flex flex-col gap-[10px] mb-[16px]">
                    {MENU_ITEMS.map(item => (
                        <div key={item.name} className="menu-item flex items-center justify-between bg-[#faf5f0] p-[8px_14px_8px_16px] rounded-[60px] border border-[#e5d6c8]">
                            <span className="font-medium text-[1rem]">{item.emoji} {item.name}</span>
                            <button className="btn-order bg-[#1f6e8c] border-none text-white font-semibold p-[5px_16px] rounded-[40px] text-[0.8rem] cursor-pointer hover:bg-[#135771] hover:scale-[0.96] active:scale-[0.92] transition-all" onClick={() => addOrder(item.name)}>
                                Order
                            </button>
                        </div>
                    ))}
                </div>

                <div className="delivered-area mt-auto bg-[#eef5ea] rounded-[16px] p-[10px_14px] border-2 border-dashed border-[#b8c9ad]">
                    <h4 className="text-[0.8rem] uppercase tracking-[0.5px] text-[#2d5530] mb-[8px] border-b border-dashed border-[#b8c9ad] pb-[4px] font-bold">Delivered Food</h4>
                    {orders.filter(o => o.status === 'served').map(o => (
                        <div key={o.id} className="order-item bg-[#f7f1ea] rounded-[16px] padding-[8px_14px] mb-[8px] flex items-center justify-between text-[0.95rem] border border-[#e8dbd0]">
                            <span className="item-name font-semibold">{o.item}</span>
                            {getStatusBadge(o.status)}
                        </div>
                    ))}
                    {orders.filter(o => o.status === 'served').length === 0 && <p className="text-slate-400 text-sm italic">Nothing yet.</p>}
                </div>
            </div>

            {/* Waiter Panel */}
            <div className="role-card waiter-card bg-white rounded-[32px] p-[20px_16px_24px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] border-2 border-[rgba(0,0,0,0.04)] flex flex-col min-h-[380px] border-t-[6px] border-t-[#2a6d4c] hover:translate-y-[-3px] transition-transform">
                <div className="role-header flex items-center gap-[12px] text-[1.5rem] font-semibold pb-[12px] border-b-[3px] border-[#f0e3d8] mb-[16px] text-[#2a6d4c]">
                    <span className="emoji-big text-[2rem]">💁</span>
                    Waiter
                </div>
                <div className="speech-bubble mb-[18px]">
                    {waiterDialogue}
                </div>

                <div className="order-section flex-1 mt-[6px]">
                    <h4 className="text-[0.8rem] uppercase tracking-[0.5px] color-[#6f5542] mb-[8px] border-b border-dashed border-[#ddd0c4] pb-[4px]">Pending Orders</h4>
                    {orders.filter(o => o.status === 'pending').map(o => (
                        <div key={o.id} className="order-item bg-[#f7f1ea] rounded-[16px] p-[8px_14px] mb-[8px] flex items-center justify-between text-[0.95rem] border border-[#e8dbd0]">
                            <span className="item-name font-semibold">{o.item}</span>
                            <button className="action-btn btn-send bg-[#2a6d4c] text-white border-none font-semibold p-[5px_14px] rounded-[40px] text-[0.8rem] cursor-pointer hover:scale-[0.95] active:scale-[0.90] transition-all" onClick={() => sendToKitchen(o.id)}>
                                Send to Kitchen
                            </button>
                        </div>
                    ))}
                    {orders.filter(o => o.status === 'pending').length === 0 && <p className="text-slate-400 text-sm italic">No pending orders.</p>}
                </div>

                <div className="order-section flex-1 mt-[10px]">
                    <h4 className="text-[0.8rem] uppercase tracking-[0.5px] color-[#6f5542] mb-[8px] border-b border-dashed border-[#ddd0c4] pb-[4px]">Ready to Serve</h4>
                    {orders.filter(o => o.status === 'ready').map(o => (
                        <div key={o.id} className="order-item bg-[#f7f1ea] rounded-[16px] p-[8px_14px] mb-[8px] flex items-center justify-between text-[0.95rem] border border-[#e8dbd0]">
                            <span className="item-name font-semibold">{o.item}</span>
                            <button className="action-btn btn-serve bg-[#b17d3e] text-white border-none font-semibold p-[5px_14px] rounded-[40px] text-[0.8rem] cursor-pointer hover:scale-[0.95] active:scale-[0.90] transition-all" onClick={() => serveOrder(o.id)}>
                                Serve
                            </button>
                        </div>
                    ))}
                    {orders.filter(o => o.status === 'ready').length === 0 && <p className="text-slate-400 text-sm italic">Nothing ready yet.</p>}
                </div>
            </div>

            {/* Kitchen Panel */}
            <div className="role-card kitchen-card bg-white rounded-[32px] p-[20px_16px_24px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] border-2 border-[rgba(0,0,0,0.04)] flex flex-col min-h-[380px] border-t-[6px] border-t-[#b13e3e] hover:translate-y-[-3px] transition-transform">
                <div className="role-header flex items-center gap-[12px] text-[1.5rem] font-semibold pb-[12px] border-b-[3px] border-[#f0e3d8] mb-[16px] text-[#b13e3e]">
                    <span className="emoji-big text-[2rem]">🍳</span>
                    Kitchen
                </div>
                <div className="speech-bubble mb-[18px]">
                    {kitchenDialogue}
                </div>
                
                <div className="order-section flex-1 mt-[6px]">
                    <h4 className="text-[0.8rem] uppercase tracking-[0.5px] color-[#6f5542] mb-[8px] border-b border-dashed border-[#ddd0c4] pb-[4px]">To Cook</h4>
                    {orders.filter(o => o.status === 'in-kitchen').map(o => (
                        <div key={o.id} className="order-item bg-[#f7f1ea] rounded-[16px] p-[8px_14px] mb-[8px] flex items-center justify-between text-[0.95rem] border border-[#e8dbd0]">
                            <span className="item-name font-semibold">{o.item}</span>
                            <button className="action-btn btn-cook bg-[#b13e3e] text-white border-none font-semibold p-[5px_14px] rounded-[40px] text-[0.8rem] cursor-pointer hover:scale-[0.95] active:scale-[0.90] transition-all" onClick={() => startCooking(o.id)}>
                                Cook
                            </button>
                        </div>
                    ))}
                    {orders.filter(o => o.status === 'in-kitchen').length === 0 && <p className="text-slate-400 text-sm italic">Queue empty.</p>}
                </div>

                <div className="order-section flex-1 mt-[10px]">
                    <h4 className="text-[0.8rem] uppercase tracking-[0.5px] color-[#6f5542] mb-[8px] border-b border-dashed border-[#ddd0c4] pb-[4px]">Currently Cooking</h4>
                    {orders.filter(o => o.status === 'cooking').map(o => (
                        <div key={o.id} className="order-item bg-[#f7f1ea] rounded-[16px] p-[8px_14px] mb-[8px] flex flex-col gap-2 text-[0.95rem] border border-[#e8dbd0]">
                            <div className="flex items-center justify-between w-full">
                                <span className="item-name font-semibold">{o.item}</span>
                                {getStatusBadge(o.status)}
                            </div>
                            <div className="cooking-progress-container">
                                <div 
                                    className="h-full bg-[#b13e3e] transition-all duration-200"
                                    style={{ width: `${o.progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                    {orders.filter(o => o.status === 'cooking').length === 0 && <p className="text-slate-400 text-sm italic">Stove is cold.</p>}
                </div>
            </div>
        </div>

         <button onClick={resetAll} className="btn-reset bg-[#6b4f36] text-white p-[8px_28px] border-none rounded-[60px] font-semibold mt-[20px] cursor-pointer text-[1rem] transition-all block mx-auto shadow-[0_4px_8px_rgba(0,0,0,0.05)] hover:bg-[#4d3826] hover:scale-[0.97]">
            Reset Simulation
        </button>
    </div>
  );
};

export default App;
