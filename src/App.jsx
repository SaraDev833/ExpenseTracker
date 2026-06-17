import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 flex items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-md p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">

        {/* Title */}
        <h1 className="text-white text-2xl font-bold text-center mb-4">
          Expense Tracker
        </h1>

        {/* Inputs */}
        <input
          type="text"
          placeholder="Expense Item"
          className="w-full mt-3 bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="text"
          placeholder="Amount"
          className="w-full mt-3 bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Add Button */}
        <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold py-2 rounded-lg shadow-lg">
          Add Expense
        </button>

        {/* Search */}
        <input
          type="text"
          placeholder="Search expenses..."
          className="w-full mt-5 bg-white/10 text-white placeholder:text-slate-400 px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Expense Item */}
        <div className="mt-6 flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-white/10 transition">

          {/* Left */}
          <div className="flex flex-col">
            <p className="text-white font-semibold">Lunch</p>
            <span className="text-slate-400 text-xs">12/03/2025</span>
          </div>

          {/* Amount */}
          <div className="text-indigo-300 font-bold">
            1000 BDT
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button className="bg-purple-600 hover:bg-purple-500 text-white text-xs px-3 py-1 rounded-md transition">
              Edit
            </button>
            <button className="bg-red-600 hover:bg-red-500 text-white text-xs px-3 py-1 rounded-md transition">
              Delete
            </button>
          </div>
        </div>

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