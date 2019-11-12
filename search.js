const { remote } = require('webdriverio')


async function search(x) {
    try {
    
    const browser = await remote({
            logLevel: 'trace',
            capabilities: {
                browserName: 'chrome',
                deviceName: 'emulator-5554',
                platformName: "android",
                platformVersion: "10",
                automationName: 'UiAutomator2',
                chromedriverExecutable: 'C:/Users/Shushu HaShual/AppData/Roaming/npm/node_modules/appium/node_modules/appium-chromedriver/chromedriver/win/chromedriver.exe'}
                 })

        await browser.url('https://cakes-automation-course.herokuapp.com/index.html')
        const inputSearch = await browser.$('#inputSearch')
        const search = await browser.$("#inputSearchSubmit")
                
        
        if (x == 'about'){
            await inputSearch.setValue(x)
            await search.click() 
            await browser.pause(5000)
            if(await browser.getUrl() == 'https://cakes-automation-course.herokuapp.com/about.html'){
            console.log("you are at ABOUT page")}}
           

        else if( x=="products"){
            await inputSearch.setValue(x)
            await search.click()
            await browser.pause(5000)
            if (await browser.getUrl() == 'https://cakes-automation-course.herokuapp.com/products.html'){
                console.log("you are at PRODUCTS page")}
    
            }

        else if (x == 'contact'){
            await inputSearch.setValue(x)
            await search.click()
            await browser.pause(5000)
            if (await browser.getUrl() == 'https://cakes-automation-course.herokuapp.com/contact.html'){
                console.log("you are at CONTACT page")}
            }

        else if (x == 'store'){
            await inputSearch.setValue(x)
            await search.click()
            await browser.pause(5000)
            if(await browser.getUrl() == 'https://cakes-automation-course.herokuapp.com/store.html'){
                console.log("you are at STORE page")}
           }

        else if (x == 'home'){
            await inputSearch.setValue(x)
            await search.click()
            await browser.pause(5000)
            if (await browser.getUrl() == 'https://cakes-automation-course.herokuapp.com/index.html'){
                console.log("you are at HOME page")}
            }
            
        else{
            console.log('its not a valid word')}}
        


       
    catch (error) {
        console.error(error)
    }}



search('about')
