import react,{ useState } from 'react'

import useCurrencyInfo from './Hooks/useCurrencyInfo'
import InputBox from './components/InputBox'

function App() {
  const [Amount, setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const [convertedAmount,setCovertedAmount] = useState(0)

  

  const currencyInfo = useCurrencyInfo(from)

  console.log(currencyInfo)
  const options = currencyInfo ? Object.keys(currencyInfo) : []
//   const options = Object.keys(currencyInfo)

  const convert = ()=>{
    setCovertedAmount(Amount * currencyInfo[to])
  }

  const swap = ()=>{
    const temp = from
    setFrom(to)
    setTo(temp)

    const temp2 = Amount
    setAmount(convertedAmount)
    setCovertedAmount(temp2)
    
  }

 const BackgroundImage = 'https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
 return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {Amount}
                                currencyOptions={options}
                                OnCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                OnAmountChange={(Amount)=> setAmount(Amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {convertedAmount}
                                currencyOptions={options}
                                OnCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable = {true}
                            />
                        </div>
                        <button onClick={()=>{
                            convert()
                        }} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}    

export default App;