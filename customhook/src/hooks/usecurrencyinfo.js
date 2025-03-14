import React,{useState,useEffect} from "react"


function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((res) => {
                if (res[currency]) setData(res[currency]);
            })
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);
    console.log("returndata",data)
    
    return data;
}
export default useCurrencyInfo;
