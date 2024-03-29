async function createInvestmentAccount() {
    try {
 
        const accountCreationUrl = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount";

  
        const accountInfo = {
            name: "Vedanshi Gupta",
            email: "vedanshi1868.be21@chitkara.edu.in",
            rollNumber: 2110991868, 
            phone: 7055001789 
        };

  
        const accountResponse = await fetch(accountCreationUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountInfo)
        })

        const { accountNumber } = await accountResponse.json();
        console.log("Investment account created successfully. Account Number:", accountNumber);

        const currentStockPrice = 1576.95;

        await buyStocks(accountNumber, currentStockPrice);
    } catch (error) {
        console.error("Error creating investment account:", error);
    }
}

async function buyStocks(accountNumber, currentStockPrice) {
    try {
        const buyStocksUrl = "https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks";


        const requestBody = {
            company: "Bajaj Finserv",
            currentPrice: currentStockPrice,
            accountNumber: accountNumber,
            githubRepoLink: "https://github.com/Vedanshi03/Bajaj.git"
        };


        const response = await fetch(buyStocksUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'bfhl-auth': 2110991868
            },
            body: JSON.stringify(requestBody)
        });


        if (response.ok) {
            console.log("Stocks in Bajaj Finserv bought successfully!");
        } else {
            console.error("Failed to buy stocks in Bajaj Finserv. Status code:", response.status);
        }
    } catch (error) {
        console.error("Error buying stocks:", error);
    }
}


createInvestmentAccount();
