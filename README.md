# Description
특정 통화를 다른 통화로 변환할 수 있는 환율 계산기 입니다. 
환율 API를 사용하여 실시간 환율 데이터를 가져옵니다.

# How to install
```
npm install
```

# How to Run
```
npm start
```

## Photo should look like this:

```SAMPLE NOT ACTUAL PHOTO```

<img width="271" alt="image" src="https://github.com/user-attachments/assets/f8068429-a534-4dda-b4a2-cd163d2b18d3" />

## CoinMarketCap API Usage

```python
import requests

# Replace with your CoinMarketCap API Key
API_KEY = 'your_api_key_here'

# Base URL for CoinMarketCap API
BASE_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'

# Headers for the API request
headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': API_KEY,
}

# Get user input for the cryptocurrency to compare with CAMT
coin_to_compare = input("Enter the symbol of the coin to compare with CAMT (e.g., BTC, ETH, TRX): ").upper()

# Symbols to fetch data for
symbols = f"{coin_to_compare},CAMT"

# Parameters for the request
params = {
    'symbol': symbols,
}

# Make the API request
response = requests.get(BASE_URL, headers=headers, params=params)

# Check for successful response
if response.status_code == 200:
    data = response.json()
    try:
        # Extract data for the input coin and CAMT
        coin_data = data['data'][coin_to_compare]['quote']['USD']
        camt_data = data['data']['CAMT']['quote']['USD']

        # Get prices
        coin_price = coin_data['price']
        camt_price = camt_data['price']

        # Calculate how many CAMT tokens are equivalent to the value of the input coin
        camt_equivalent = coin_price / camt_price

        # Display results
        print(f"\n{coin_to_compare} - Price: ${coin_price:.2f}")
        print(f"CAMT - Price: ${camt_price:.6f}")
        print(f"1 {coin_to_compare} is equivalent to {camt_equivalent:.2f} CAMT tokens.")
    except KeyError:
        print("Error: Unable to fetch data for the provided coin symbol.")
else:
    print("Error: Failed to retrieve data from CoinMarketCap API.")
```
