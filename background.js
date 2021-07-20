window.found_bones = {}
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (!window.found_bones[request.bone_name])
    {
        window.found_bones[request.bone_name] = []
    }
    window.found_bones[request.bone_name].push({"url":request.url,"bone_value":request.bone_value})
})

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.create({url:'popup.html'})
})
