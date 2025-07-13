import React from "react";

function InputBox({
   label, //
   amount, //
   OnAmountChange, // function
   OnCurrencyChange, // function
   currencyOptions = [], //
   selectCurrency = "usd", //
   amountDisable = false,

   
  className = "" }) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          value={amount}
          onChange={(e)=>{
            OnAmountChange && OnAmountChange(Number(e.target.value))
          }}
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select 
        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
        value={selectCurrency} // when from updated then it also updated
        onChange={(e)=>{
         OnCurrencyChange && OnCurrencyChange(e.target.value)
        }}
       
        >
        
        {currencyOptions.map((currency)=>(
          <option value={currency}>
              {currency}
          </option>
        ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
