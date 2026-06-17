import { useEffect, useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [amount , setAmount] = useState("");
  const [expenses , setExpenses] = useState(()=>{
    const saved = localStorage.getItem("expenses");
    return saved?JSON.parse(saved):[]
  });
  const [searchValue , setSearchValue] = useState("");
  const [editId , seteditId] = useState(null);
  const [filter , setFilter] = useState([]);
  const [editData , setEditData] = useState({
      item: "",
      amount:""
  })
const totalValue = expenses.reduce((total , expense)=>
    total+Number(expense.amount) ,0
)
useEffect(()=>{
  localStorage.setItem("expenses" , JSON.stringify(expenses));
}, [expenses])

const handleDelete=(id)=>{
    const deleteItem = expenses.filter((expense) =>
    expense.id !== id
   )
   setExpenses(deleteItem)
}

const handleEdit = (expense)=>{
    seteditId(expense.id);
    setEditData({
      item:expense.item,
      amount:expense.amount
    })
}


const filteredSearch = expenses.filter(expense => {
    return(expense.item.toLowerCase().includes(searchValue.toLowerCase())) 
})
const handleSearch=(e)=>{
   setSearchValue(e.target.value);
}
console.log(searchValue)
const submit = ()=>{
if (!editId && (!item.trim() || !amount.trim())) {
  alert("please fill both fields");
  return;
}
  if (editId) {
  const updateValue = expenses.map((expense) =>
    expense.id === editId
      ? { ...expense, ...editData }
      : expense
  );

  setExpenses(updateValue);
  seteditId(null);

  setEditData({ item: "", amount: "" });
}else{
    const newExpense = {
      id:Date.now(),
      item:item,
      amount:amount
    }
     setExpenses([...expenses, newExpense]);}
     setAmount("");
     setItem("")
}


  return (
    <div className="h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-md p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">

        {/* Title */}
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          Expense Tracker
        </h1>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Expense Item" onChange={(e)=>editId?setEditData({...editData,item:e.target.value}):setItem(e.target.value)}
          value={editId?editData.item:item}
          className="w-full mt-3 bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" 
        />

        <input
          type="number"
          placeholder="Amount"
          value={editId?editData.amount:amount}
          className="w-full mt-3 bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e)=>editId?setEditData({...editData,amount:e.target.value}):setAmount(e.target.value)}
        />

        {/* Add Button */}
        <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold py-2 rounded-lg shadow-lg" onClick={submit}>
          Add Expense
        </button>

        {/* Search */}
        <input
          type="text"
          placeholder="Search expenses..." onChange={handleSearch}
          className="w-full mt-5 bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
        />


          {filteredSearch?filteredSearch.map((expense)=>
        
        <div key={expense.id} className="mt-6 flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition">

      
          <div className="flex flex-col">
            <p className="text-white font-semibold">{expense.item}</p>
            <span className="text-slate-400 text-xs"> {new Date(expense.id).toLocaleDateString()}</span>
          </div>

          {/* Amount */}
          <div className="text-indigo-300 font-bold">
            {expense.amount} BDT
          </div>
       
          {/* Buttons */}
          <div className="flex gap-2">
            <button onClick={()=>handleEdit(expense)} className="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-1 rounded-md transition">
              Edit
            </button>
            <button onClick={()=>handleDelete(expense.id)} className="bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-md transition">
              Delete
            </button>
          </div>
        </div>

): expenses}
      </div>
      {/* Total Footer */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
        <div className="bg-indigo-600/20 border border-indigo-500/30 backdrop-blur-xl text-center text-white font-semibold py-3 rounded-xl shadow-lg cursor pointer">
          Total Expense: {totalValue} BDT
        </div>
      </div>

    </div>
  );
}

export default App;