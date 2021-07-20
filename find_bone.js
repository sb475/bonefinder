//alert('Grrrr.')
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     const re = new RegExp('bear', 'gi')
//     const matches = document.documentElement.innerHTML.match(re)
//     sendResponse({count: matches.length})
// })


const Built_In = [
    {name:"test", key_type:"test", key_re:"bear"},
    {name:"Twitter Access Token", key_type:"Access Token", key_re:"[1-9][ 0-9]+-[0-9a-zA-Z]{40}"},
    {name:"Facebook Access Token", key_type:"Access Token", key_re:"EAACEdEose0cBA[0-9A-Za-z]+"},
    {name:"Facebook OAuth 2.0", key_type:"OAuth 2.0", key_re:"[A-Za-z0-9]{125} (counting letters [2])"},
    {name:"Instagram OAuth 2.0", key_type:"OAuth 2.0", key_re:"[0-9a-fA-F]{7}\\.[0-9a-fA-F]{32}"},
    {name:"Google API Key", key_type:"API Key", key_re:"AIza[0-9A-Za-z-_]{35}"},
    // {name:"Google OAuth 2.0", key_type:"OAuth 2.0", key_re:"random opaque key up to 256 bytes"},
    // {name:"LinkedIn OAuth 2.0", key_type:"OAuth 2.0", key_re:"undocumented/random opaque string"},
    {name:"GitHub OAuth 2.0", key_type:"OAuth 2.0", key_re:"[A-Za-z0-9_]{255}"},
    {name:"Gmail OAuth 2.0", key_type:"OAuth 2.0", key_re:"[0-9(+-[0-9A-Za-z_]{32}\\.apps\\.qooqleusercontent\\.com"},
    {name:"Foursquare Client Key", key_type:"Client Key", key_re:"[0-9a-zA-Z_][5,31]"},
    {name:"Foursquare Secret Key", key_type:"Secret Key", key_re:"R_[0-9a-f]{32}"},
    {name:"Picatic API Key", key_type:"API Key", key_re:"sk_live_[0-9a-z]{32}"},
    {name:"Stripe Standard API Key", key_type:"Standard API Key", key_re:"sk_live_[0-9a-zA-Z]{24}"},
    {name:"Stripe Restricted API Key", key_type:"Restricted API Key", key_re:"sk_live_[0-9a-zA-Z]{24}"},
    {name:"Square Access Token", key_type:"Access Token", key_re:"sqOatp-[0-9A-Za-z\\-_]{22}"},
    {name:"Square OAuth Secret", key_type:"OAuth Secret", key_re:"q0csp-[0-9A-Za-z\\-_]{43}"},
    {name:"Paypal - Braintree Access Token", key_type:"Access Token", key_re:"access_token\\,production\\$[0-9a-z]{161[0-9a,]{32}"},
    {name:"AMS Auth Token", key_type:"Auth Token", key_re:"amzn\\.mws\\.[0-9a-f]{8}-[0-9a-f]{4}-10-9a-f1{4}-[0-9a,]{4}-[0-9a-f]{12}"},
    {name:"Twilio API Key", key_type:"API Key", key_re:"55[0-9a-fA-F]{32}"},
    {name:"MailGun API Key", key_type:"API Key", key_re:"key-[0-9a-zA-Z]{32}"},
    {name:"MailChimp API Key", key_type:"API Key", key_re:"[0-9a-f]{32}-us[0-9]{1,2}"},
    {name:"Slack API Key", key_type:"API Key", key_re:"xox[baprs]-[0-9]{12}-[0-9]{12}-[0-9a-zA-Z]{24}"},
    {name:"Slack Access Token", key_type:"Access Token", key_re:"T[a-zA-Z0-9_]{8}/B[a-zA-Z0-9_]{8}/[a-zA-Z0-9_]{24}"},
    {name:"Amazon Web Services Access Key ID", key_type:"Access Key ID", key_re:"AKIA[0-9A-Z]{16}"},
    {name:"Amazon Web Services Secret Key", key_type:"Secret Key", key_re:"[0-9a-zA-Z/+]{40}"},
    {name:"Google Cloud Platform OAuth 2.0", key_type:"OAuth 2.0", key_re:"[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"},
    {name:"Google Cloud Platform API Key", key_type:"API Key", key_re:"[A-Za-z0-9_]{21}--[A-Za-z0-9_]{8}"},
    {name:"Heroku API Key", key_type:"API Key", key_re:"[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"},
    {name:"Heroku OAuth 2.0", key_type:"OAuth 2.0", key_re:"[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"}
]

class Bone {
    constructor(key_type, key_re) {
        this.key_type = key_type
        this.key_re = new RegExp(key_re)
    }
}

let bones = {};

Built_In.forEach(bone => bones[bone.name] = new Bone(bone.key_type, bone.key_re))


for (const [key, value] of Object.entries(bones)) {
    // console.log(key, value)
    const matches = document.documentElement.innerHTML.match(bones[key]["key_re"]) || []
    console.log(matches)
    // if (bones[key]["key_re"].test(document.documentElement.innerHTML)) {
    //     console.log("name: " + key + " regex: "+bones[key]["key_re"]  + " matched!")
    //     chrome.runtime.sendMessage({
    //         url: window.location.href,
    //         bone_name: key,
    //         bone_value: 
    //     })


    if (matches.length > 0) {
        matches.forEach(function (match) {
            console.log("name: " + key + " regex: "+ match  + " matched!")
            chrome.runtime.sendMessage({
                url: window.location.href,
                bone_name: key,
                bone_value: match
            })

        })

    }
  }


// bones.forEach(bone => console.log(bones[bone].key_re))




const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re) || []
