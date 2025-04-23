# Evershop Automation Testing with WebdriverIO

This project is a test automation framework built using **WebdriverIO** and **JavaScript** for automating the Evershop web application. It includes end-to-end test scenarios to ensure the quality and stability of key e-commerce functionalities.

## 🚀 Features

- ✅ End-to-end automation for Evershop
- 🔧 Built using WebdriverIO (v7+)
- 📊 Supports test reports (Allure)
- ⛓ Integrated with ChromeDriver
- 🧪 Includes sample test scenarios

## 🛠️ Technologies Used

- [WebdriverIO](https://webdriver.io/)
- JavaScript (Node.js)
- Mocha / Chai
- Allure Reporter
- ChromeDriver

## 📁 Folder Structure


## ✅ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Chrome browser installed

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/evershop-automation.git
cd evershop-automation
npm install

### Run Tests
To run all tests:
```  npx wdio run wdio.conf.js
```

### To generate Allure report:
allure generate allure-results --clean && allure open
