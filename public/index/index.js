const countryCodes = ["KRW", "USD", "JPY", "CNY", "EUR"];


// countryCodes to select
document.querySelectorAll("#fromCurrencyArea select, #toCurrencyArea  select").forEach((element) => {
    for(const c of countryCodes){
        element.innerHTML+=`<option code="${c}">${c.substring(0, 2)}</option>`
    }
})

// fromCurrencyArea set KR
document.querySelector("#fromCurrencyArea select").value = "US"
document.querySelector("#fromCurrencyArea img").src = "https://flagsapi.com/US/flat/64.png"
// fromCurrencyArea set US
document.querySelector("#toCurrencyArea select").value = "KR"
document.querySelector("#toCurrencyArea img").src = "https://flagsapi.com/KR/flat/64.png"


// change flag whe change select value
function changeCountry(element){
    element.closest(".currencyContainer").querySelector("img").src = `https://flagsapi.com/${element.value}/flat/64.png`
}

// excahnge button event
document.querySelector("#exchnageButton").addEventListener("click", async function(){
    const amount = document.querySelector("#intputAmount").value;
    const fromCurrency = document.querySelector("#fromCurrencyArea select").selectedOptions[0].getAttribute("code");
    const toCurrency = document.querySelector("#toCurrencyArea select").selectedOptions[0].getAttribute("code");

    if(!amount){ alert("변환할 값을 입력하세요"); return }
    if(!fromCurrency || !toCurrency){ alert("국가를 선택해주세요."); return }

    const response = await fetch("/exchageRate/getCurrency", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fromCurrency, toCurrency })
    })
    
    if (response.status === 429) { return alert("API 요청 한도가 초과되었습니다.") }
    if (!response.ok) { return alert("오류가 발생했습니다.") }

    const data = await response.json();
    if (!data.amount) { return alert("환율 정보를 가져오는 데 실패했습니다.") }

    document.querySelector("#outputAmount").value = `${amount} ${fromCurrency} = ${(data.amount * amount).toFixed(1)} ${toCurrency}`;
})