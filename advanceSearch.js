const { remote } = require('webdriverio')


async function advanceS() {
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
    
    await browser.url('https://cakes-automation-course-mobile.herokuapp.com/index.html')
    await browser.pause(5000)
    const advanceSearch = await browser.$('#advancedSearchIcon')
    await advanceSearch.click()
    console.log('you are clicked')
    await browser.pause(5000)
    const choco = await browser.$('#advancedForm > input:nth-child(2)')
    await choco.click()
    console.log("choco clicked")
    const cheese = await browser.$('#advancedForm > input:nth-child(4)')
    await cheese.click()
    console.log("cheese clicked")
    const mousse = await browser.$('#advancedForm > input:nth-child(6)')
    await mousse.click()
    console.log("mousse clicked")
    await browser.pause(5000)
    const rating03 = await browser.$('#advancedForm > input:nth-child(9)')
    await rating03.click()
    console.log('rating03 clicked')
    const rating4 = await browser.$('#advancedForm > input:nth-child(11)')
    await rating4.click()
    console.log('rating4 clicked')
    const rating5 = await browser.$('#advancedForm > input:nth-child(13)')
    await rating5.click()
    console.log('rating5 clicked')
    await browser.pause(5000)
    const date = await browser.$('#advancedForm > input.inputDesign.formText.inputDate')
    await date.click()
    await date.addValue('3/11/2019')
    // const set = await browser.$('.android.widget.Button')
    // await set.click()
    await browser.pause(5000)
    const words = await browser.$('#input1')
    await words.setValue('bla, bla')
    const phrase = await browser.$('#input2')
    await phrase.setValue('blablabla')
    await browser.pause(5000)
    const send = await browser.$('#btnForm')
    await send.click()
    const text = await browser.$('#advancedSearchWindow > div')
    await text.getText()

    }
    catch (error) {
        console.error(error)
    }}


advanceS()
