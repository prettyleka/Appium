const { remote } = require('webdriverio')
function locateBy(locatorType = "resourceId", locatorValue, locatorClass = "") {
    const locators = {
        resourceId: `android=new UiSelector().resourceId("${locatorValue}")`,
        text: `android=new UiSelector().text("${locatorValue}").className("${locatorClass}")`,
        xpath: `${locatorValue}`
    }
    return locators[locatorType];
}

async function mailSend() {

    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            deviceName: 'emulator-5554',
            platformName: "android",
            platformVersion: "10",
            automationName: 'UiAutomator2',
            appPackage: "com.google.android.gm",
            appActivity: "com.google.android.gm.ConversationListActivityGmail"
        }
    })

    try {

        let gotIt = await browser.$(locateBy("resourceId", `com.google.android.gm:id/welcome_tour_got_it`));
        await gotIt.click()
        await browser.pause(5000)
        let enter = await browser.$(locateBy('resourceId', 'com.google.android.gm:id/action_done'))
        await enter.click()
        await browser.pause(5000)
        let next = await browser.$(locateBy('resourceId', 'com.google.android.gm:id/gm_dismiss_button'))
        await next.click()
        await browser.pause(5000)
        let ok = await browser.$(locateBy('resourceId', 'com.google.android.gm:id/gm_dismiss_button'))
        await ok.click()
        await browser.pause(5000)
        let newLetter = await browser.$("~Compose")
        await newLetter.click()
        await browser.pause(5000)
        let gotItTwo = await browser.$(locateBy('resourceId', 'android:id/button1'))
        await gotItTwo.click()
        await browser.pause(5000)
        let to = await browser.$(locateBy('resourceId', 'com.google.android.gm:id/to'))
        await to.setValue('shira.n@elevation.ac')
        await browser.pause(5000)
        let subject = await browser.$(locateBy('resourceId', 'com.google.android.gm:id/subject'))
        await subject.setValue('mail 2 from appium')
        await browser.pause(5000)
        let attach = await browser.$(locateBy('resourceId', 'com.google.android.gm:id/add_attachment'))
        await attach.click()
        await browser.pause(5000)
        let fromPC = await browser.$(locateBy('xpath', '/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView'))
        await fromPC.click()
        await browser.pause(5000)
        let photos = await browser.$(locateBy('xpath', '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/androidx.drawerlayout.widget.DrawerLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.HorizontalScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]'))
        await photos.click()
        await browser.pause(5000)
        let gif = await browser.$(locateBy('xpath', '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[2]'))
        await gif.click()
        await browser.pause(5000)
        let getGif = await browser.$(locateBy('resourceId', 'com.google.android.apps.photos:id/checkbox'))
        await getGif.click()
        await browser.pause(5000)
        let done = await browser.$(locateBy('xpath', "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.support.v7.widget.LinearLayoutCompat"))
        await done.click()
        await browser.pause(10000)
        let send = await browser.$(locateBy('resourceId', 'com.google.android.gm:id/send'))
        await send.click()
        await browser.pause(5000)
    }

    catch (error) {
        console.error(error)

    }
}

mailSend()