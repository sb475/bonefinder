document.addEventListener('DOMContentLoaded', function () {
    // document.querySelector('button').addEventListener('click',onclick, false)

    // function onclick () {
    //     chrome.tabs.query({currentWindow: true, active: true},
    //         function (tabs) {
    //             chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
    //         })
    // }

    // function setCount (res) {
    //     const div = document.createElement('div')
    //     div.textContent = `${res.count} bears`
    //     document.body.appendChild(div)
    // }

    // const bg = chrome.extension.getBackgroundPage()
    // Object.keys(bg.found_bones).forEach(function (url) {
    //     const div = document.createElement('div')
    //     div.textContent = `${url}: ${bg.found_bones[url]}`
    //     document.body.appendChild(div)

    // const bg = chrome.extension.getBackgroundPage()
    // bg.found_bones.forEach(function (bone_found) {
    //     const div = document.createElement('div')
    //     div.textContent = `${bone_found}`
    //     document.body.appendChild(div)

    const bg = chrome.extension.getBackgroundPage()
    Object.keys(bg.found_bones).forEach(function (bone_found) {
        const url_with_bone = []
        found_bones[bone_found].forEach(function (bone_value){
            url_with_bone.push(bone_value['url'] + "  :::  " + bone_value['bone_value'])
            console.log(bone_value['bone_value'])
        })
        const div = document.createElement('div') 
        // div.textContent = `${bone_found}: ${bg.found_bones[bone_found][0]["bone_value"]}`
        div.textContent = `${bone_found}: ${url_with_bone}`
        document.body.appendChild(div)
    })
}, false )