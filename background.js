window.found_bones = {}
let found_bones_number = 0

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (!window.found_bones[request.bone_name])
    {
        window.found_bones[request.bone_name] = []
    }
    found_bones_number++
    chrome.browserAction.setBadgeText({text: found_bones_number.toString()})
    // window.found_bones[request.bone_name].push({"url":request.url,"bone_value":request.bone_value})
    window.found_bones[request.bone_name].push(request.bone_value)
})


chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url:'popup.html'})
})
