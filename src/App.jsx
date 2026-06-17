import { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [amount , setAmount] = useState("");
  const [expenses , setExpenses] = useState([]);
  const [searchValue , setSearchValue] = useState("");
  const [editId , seteditId] = useState(null);
  const [filter , setFilter] = useState([]);
  const [editData , setEditData] = useState({
      item: "",
      amount:""
  })
  const handleItem=(e)=>{
       setItem(e.target.value);
  }
const handleAmount = (e)=>{
  (setAmount(e.target.value))
}
const handleEdit = (expense)=>{
    seteditId(expense.id);
    setEditData({
      item:expense.item,
      amount:expense.amount
    })
}
console.log(editData)

const filteredSearch = expenses.filter(expense => {
    return(expense.item.toLowerCase().includes(searchValue.toLowerCase())) 
})
const handleSearch=(e)=>{
   setSearchValue(e.target.value);
}
console.log(searchValue)
const submit = ()=>{
  if(!item.trim() ||!amount.trim()){
    alert("please fill both fields")

    return
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
          placeholder="Expense Item" onChange={handleItem}
          className="w-full mt-3 bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" 
        />

        <input
          type="number"
          placeholder="Amount"
          className="w-full mt-3 bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500" onChange={handleAmount}
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
        
        <div className="mt-6 flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition">

      
          <div className="flex flex-col">
            <p className="text-white font-semibold">{expense.item}</p>
            <span className="text-slate-400 text-xs">{expense.id}</span>
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
            <button className="bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-md transition">
              Delete
            </button>
          </div>
        </div>

): expenses}
      </div>
      {/* Total Footer */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md px-4">
        <div className="bg-indigo-600/20 border border-indigo-500/30 backdrop-blur-xl text-center text-white font-semibold py-3 rounded-xl shadow-lg cursor pointer">
          Total Expense: 1000 BDT
        </div>
      </div>

    </div>
  );
}

export default App;