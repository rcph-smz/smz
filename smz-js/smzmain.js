
// randomRange from unity
function randomRange(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}


const folderName = "mp3/"
const musicList = [
    "DoctorNoSense - Safe to Say (Official Audio).mp3",
    "kamome sano - Lovesick (feat ぷにぷに電機).mp3",
    "Moe Shop - Baby Pink (w YUCe).mp3",
    "f(x) - 4 Walls (Zekk Remix).mp3",
    "lapix - Day by day (PSYQUI Remix).mp3",
    "PSYQUI - Are You Kidding Me (ft Mami)  Jpop Future Core.mp3",
    "Moe Shop - Notice (w TORIENA).mp3",
    "PSYQUI - dont you want me ft Such.mp3",
    "PSYQUI - Fly to the moon feat 中村さんそ.mp3",
    "Nightcore - No Friends (Lyrics).mp3",
    "PSYQUI - Love & Roll (ft SUCH) Speed Garage J-Pop.mp3",
    "PSYQUI - Hype feat Such.mp3",
    "PSYQUI - OYASUMI in my dream.mp3",
    "PSYQUI - Up n Up  Future Core.mp3",
    "PSYQUI - Secret Dance Hall (ft SUCH)  J-pop 2019.mp3",
    "PSYQUI - Multitalents.mp3",
    "PSYQUI - Your Voice So Zekk Full Spec Remix (Ft SUCH)  Future Core.mp3",
    "PSYQUI - ヒステリックナイトガール feat Such (android52 Edit).mp3",
    "PSYQUI - ヒステリックナイトガール (Awakening) (ft SUCH)  J-Pop.mp3",
    "PSYQUI feat Marpril - Girly Cupid.mp3",
    "Signal (feat Such).mp3",
    "PSYQUI - Rainbow Dream (ft Mo∀)  Future Core.mp3",
    "Still in my heart (feat ぷにぷに電機).mp3",
    "Zakku x Nakanojojo - Matcha Love (feat アリガトユイナ).mp3",
    "[Blue Archive] Theme 109.mp3",
    "Your voice so (feat such).mp3",
    "「Footwork」[PSYQUI] Too Late.mp3",
          
]
    // <!-- music -->
let coreMusic = new Audio(folderName + musicList[randomRange(0,musicList.length)])
let removeInterval = false
window.addEventListener('click', () => {
    // console.log("click")
    Play()
})
function coreMusicPromise() {
    return new Promise((resolved,rejected) => {
        removeInterval = true
        const localInterval = setInterval(() => {
            if(coreMusic.ended){
                coreMusic = new Audio(folderName + musicList[randomRange(0,musicList.length)])
                coreMusic.play()
                resolved()
            }
            else {
                coreMusic.play()
            }
            // console.log("Promise Interval")
        },1000)
        // console.log("promise")
    })
}
async function Play() {
    if(removeInterval == false){
        await coreMusicPromise()
        Play()
    }
    // console.log("play")
}
    // <!-- lucia kawaii - 
const luciadawn = document.createElement('div')
const lucia = document.body.appendChild(luciadawn)
lucia.setAttribute('class','lucia')
const luciaimage = document.createElement('img')
const img = lucia.appendChild(luciaimage)
img.setAttribute('src','img/luciakawaii.png')
img.setAttribute('class','imglucia')

        // ripple effect 
document.body.addEventListener('click', function(e) {
    let x = e.clientX
    let y = e.clientY
    let ripple = document.createElement('span')
    ripple.setAttribute('class','rippleeffect')
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    this.appendChild(ripple)
    setTimeout(() => {
         ripple.remove()
    }, 1000)
})

const fm_ctr = document.querySelector(".smz-srch-ctr")
const srch = document.querySelector(".smz-search")
const bgn = document.querySelector(".bgn")
const wb_srch = [
    ["yt:","https://www.youtube.com/results","search_query"],
    ["g:","https://www.google.com/search","q"],
    ["fb:","https://www.facebook.com/search/top","q"]
]
let flink = false
srch.addEventListener("keyup",(e) => {
    for(i of wb_srch){
        if(srch.value.trim().toLowerCase().startsWith(i[0])) {
            fm_ctr.setAttribute("action",i[1].toString())
            srch.setAttribute("name",i[2])
            flink = true
            break
        }
        else {
            fm_ctr.setAttribute("action",`${location.pathname.substring(0,location.pathname.lastIndexOf("/"))}/${srch.value}`)
            // srch.setAttribute("name","")
            srch.removeAttribute("name")
            flink = false
        }
    }
    if(e.keyCode == 13 && flink) {
        srch.value = srch.value.substring(srch.value.indexOf(":") + 1).trim()
        bgn.click()
    }
    bgn_click()
})
function bgn_click() {
    //execute bgn click when the button was click
}
let jk = "."+location.pathname.substring(0,location.pathname.lastIndexOf("/")).substring(location.pathname.substring(0,location.pathname.lastIndexOf("/")).lastIndexOf("/"))

console.log(jk)
