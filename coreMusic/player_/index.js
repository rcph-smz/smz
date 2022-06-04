        let plist_vl = []
        let pathList = []
        let currentPlay = null
        let currentAudio = new Audio()

        const media = document.querySelector(".media")

        const sd_pg = document.querySelector(".sd-pg")
        const sd_btn = document.querySelector(".sd-btn")
        const sd_wrapper = document.querySelector(".sd-wrapper")

        const curr_icon = document.querySelector(".curr-icon")
        const curr_player = document.querySelector(".curr-pause")
        const title = document.querySelector(".title")
        const range = document.querySelector(".range")

        const playlist_icon = document.querySelector(".playlist-icon")
        const playlist_holder = document.querySelector(".playlist-holder")

        setInterval(() => {
            if(currentAudio.ended && plist_vl[0] != undefined){
                for(data of pathList){
                    for(let k = 0; k < data[1].length; ++k){
                        if(`${data[0]}/${data[1][k]}` == `${data[0]}/${plist_vl[0]}`){
                            initialize_list(plist_vl[0],data[0])
                            audio_play()
                            display_title()
                            display_icon(plist_vl[0],data[0])
                            display_media()
                            shift_playlist()
                        }
                    }
                }
            }
        }, 1000)
        function delay_content(content,secs) {
            setTimeout(() => {
                content
            }, secs);
        }
        function add_ctr_lists(lists,folder_name = "") {
            pathList.push([folder_name,lists])

            const ctr_lists = document.createElement("div")
            ctr_lists.setAttribute("class","ctr-lists")

            const body = document.body
            for(bchild of body.children){
                if(bchild.getAttribute("class") == "ctr-wrapper"){
                    lists.forEach((list,i) => {

                        const ctr_list = document.createElement("div")
                        ctr_list.setAttribute("class","ctr-list")
            
                        const ctr_vlist = document.createElement("video")
                        ctr_vlist.setAttribute("class","ctr-vlist")
                        ctr_vlist.setAttribute("poster","Character-CrimsonAbyss-Portrait.webp")
                        ctr_vlist.currentTime = 10
                        // ctr_vlist.src = `${folder_name}/${list}`
                        // ctr_vlist.preload = "auto"
                        // ctr_vlist.muted = true
            
                        const plist_add = document.createElement("div")
                        plist_add.setAttribute("class","plist-add")
                        plist_add.textContent = "+"
                        if(innerWidth <= 400){
                            plist_add.style.transform = ""
                        }
            
                        ctr_list.appendChild(ctr_vlist)
                        ctr_list.appendChild(plist_add)
                        //find ctr-lists 
                        ctr_lists.appendChild(ctr_list)
                        bchild.appendChild(ctr_lists)
                        
                        ctr_vlist.addEventListener("click",() => {
                            ctrPlay(list,folder_name)
                        })
                        plist_add.addEventListener("click",() => {
                            add_playlist(list,folder_name)
                        })  
                        function ctr_pointerover() {
                            if(innerWidth <= 400){
                                ctr_vlist.play()
                            }
                            else {
                                ctr_list.style.boxShadow = "4px 4px 4px rgb(180, 184, 227), -4px -4px 4px rgb(180, 184, 227),4px -4px 4px rgb(180, 184, 227),-4px 4px 4px rgb(180, 184, 227)"
                                ctr_list.style.transform = "scale(1.2)"

                                ctr_vlist.play()
                            }
                        }
                        function ctr_pointerleave() {
                            if(innerWidth <= 400){
                                ctr_vlist.pause()
                                ctr_vlist.currentTime = 10
                            }
                            else {
                                ctr_list.style.boxShadow = ""
                                ctr_list.style.transform = ""
                                
                                ctr_vlist.pause()
                                ctr_vlist.currentTime = 10
                            }
                        }
                        function ctr_screen_out() {
                            ctr_list.style.boxShadow = ""
                            ctr_list.style.transform = ""
                            
                            ctr_vlist.pause()
                            ctr_vlist.currentTime = 10
                        }
                        ctr_list.addEventListener("pointerover",() => {
                            ctr_pointerover()
                        })
                        ctr_list.addEventListener("pointerleave",() => {
                            ctr_pointerleave()
                        })
                        const ctr_list_observer = new IntersectionObserver(entries => {
                            entries.forEach(entry => {
                                entry.target.classList.toggle("manifest-ctr-list",entry.isIntersecting)
                            })
                        })
                        ctr_list_observer.observe(ctr_list)

                        const ctr_vlist_observer = new IntersectionObserver(entries => {
                            entries.forEach(entry => {
                                if(!entry.isIntersecting){
                                    entry.target.src = ""
                                }
                                else {
                                    entry.target.src = `${folder_name}/${list}`
                                    ctr_screen_out()
                                }
                            })
                        })
                        ctr_vlist_observer.observe(ctr_vlist)
                    })
                }
            }
        }
        function add_ctr_h(folder_name){
            const ctr_h = document.createElement("div")
            ctr_h.setAttribute("class","ctr-h")
            ctr_h.textContent = folder_name

            const body = document.body
            for(bchild of body.children){
                if(bchild.getAttribute("class") == "ctr-wrapper"){
                    bchild.appendChild(ctr_h)
                }
            }
        }
        function ctr_template_scroller(lists,folder_name) {
            add_ctr_h(folder_name)
            add_ctr_lists(lists,folder_name)
        }

        function add_playlist(list,folder_name) {
            plist_vl.push(list)

            const plist = document.createElement("div")
            plist.setAttribute("class","playlist")
            const plist_ilist = document.createElement("video")
            plist_ilist.setAttribute("class","playlist-icon")
            plist_ilist.setAttribute("poster","Character-CrimsonAbyss-Portrait.webp")
            plist_ilist.currentTime = 10
            plist_ilist.src = `${folder_name}/${list}`
            const plist_holder = document.createElement("div")
            plist_holder.setAttribute("class","playlist-holder")
            const plist_title = document.createElement("div")
            plist_title.setAttribute("class","playlist-title")
            plist_title.textContent = list
            plist.appendChild(plist_ilist)
            plist.appendChild(plist_holder)
            plist_holder.appendChild(plist_title)
            sd_wrapper.appendChild(plist)
        }
        function shift_playlist() {
            plist_vl.shift()
            sd_wrapper.children[0].remove()
        }

        function ctrPlay(list,folder_name) {
            if(list == currentPlay && !currentAudio.paused) return
            else if(list == currentPlay && currentAudio.paused){
                audio_play()
            }
            else {
                initialize_list(list,folder_name)
                audio_status()
                display_title()
                display_icon(list,folder_name)
                display_media()
            }
        }

        function goAt(sec){
            currentAudio.currentTime = sec
            media.currentTime = sec
        }

        function initialize_list(list,folder_name) {
            currentPlay = list
            currentAudio.src = `${folder_name}/${list}`
            media.src = `${folder_name}/${list}`
        }

        //audio_status
        function audio_status() {
            if(currentPlay == undefined || null) return
            if(currentAudio.paused){
                audio_play()
            } else {
                audio_pause()
            }
        }
        //audio_controller
        function audio_play() {
            curr_player.textContent = "| |"
            currentAudio.play()
            media.play()
        }
        function audio_pause() {
            curr_player.textContent = ">"
            currentAudio.pause()
            media.pause()
        }

        //display
        function display_title(file_name){
            title.textContent = currentPlay
        }
        function display_icon(icon,folder_name){
            curr_icon.src = `${folder_name}/${icon}`
            curr_icon.play()
            curr_icon.muted = true
            setTimeout(() => {
                curr_icon.currentTime = 10
                curr_icon.pause()
            }, 200);
        }
        function display_media(list) {
            media.muted = true
        }
        function thumb_status() {
            
        }
        //etc
        function random_int(min,max) {
            return Math.floor(Math.random() * (max - min)) + min
        }
        let sd_option = true
        function sd_switch() {
            if(sd_option){
                // sd_pg.style.right = 0
                sd_option = false
                sd_btn.textContent = "X"
                sd_btn.style.animation = "sd-btn .5s"
                sd_pg.style.animation = "sd_out .5s forwards"
            }
            else {
                // sd_pg.style.right = "clamp(-100vw,-40vw,-300px)"
                sd_option = true
                sd_btn.textContent = "☰"
                sd_btn.style.animation = "sd-btn .5s"
                sd_pg.style.animation = "sd_in .5s forwards"
            }
        }

        // range.addEventListener("timeupdate",thumb_status)
        curr_player.addEventListener("click",audio_status)
        sd_btn.addEventListener("click",sd_switch)

        ctr_template_scroller([
            "f(x) - 4 Walls (Zekk Remix).mp4",
"greyl - Trendy.mp4",
"kamome sano - Lovesick (feat ぷにぷに電機).mp4",
"OYASUMI in my dream (Original Mix).mp4",
"PSYQUI & Houou Karin - Shining Lights  Speed Garage.mp4",
"Moe Shop - Baby Pink (w YUCe).mp4",
"Nightcore - No Friends (Lyrics).mp4",
"PSYQUI - Are You Kidding Me (ft Mami)  Jpop Future Core.mp4",
"PSYQUI - Fly to the moon feat 中村さんそ.mp4",
"PSYQUI - Hype feat Such.mp4",
"PSYQUI - dont you want me ft Such.mp4",
"PSYQUI - Secret Dance Hall (ft SUCH)  J-pop 2019.mp4",
"PSYQUI - Multitalents.mp4",
"PSYQUI - OYASUMI in my dream.mp4",
"PSYQUI - Still in my heart feat ぷにぷに電機  Lyrics [CC].mp4",
"PSYQUI - ヒステリックナイトガール (Awakening) (ft SUCH)  J-Pop.mp4",
"PSYQUI feat Marpril - Girly Cupid.mp4",
"PSYQUI - Your Voice So Zekk Full Spec Remix (Ft SUCH)  Future Core.mp4",
"Still in my heart (feat ぷにぷに電機).mp4",
"Signal (feat Such).mp4",
"Rejection - Signal (ft SUCH)  Future Core 2020.mp4",
"Your voice so (feat such).mp4",
"Ujico  Snails House - Pixel Dream.mp4",
"Zakku x Nakanojojo - Matcha Love (feat アリガトユイナ).mp4",
"[Blue Archive] Theme 109.mp4",
"[Future Garage] f(x) - 4 Walls (Zekk Remix).mp4",
"PSYQUI - ヒステリックナイトガール feat Such (android52 Edit).mp4",
"「Footwork」[PSYQUI] Too Late.mp4"
        ],"MaidCat")
        ctr_template_scroller(["Bad Computer & Danyka Nadeau - Chasing Clouds.mp4",
        "Just Love (feat PSYQUI).mp4",
        "Kunaru & Kachi - One More Time.mp4",
        "masara - Tegami (ft yutsuki & Hikaru Station).mp4",
        "PSYQUI & Houou Karin - Shining Lights  Speed Garage.mp4",
        "PSYQUI - Beautiful Future.mp4",
        "PSYQUI - Education.mp4",
        "Zekk - City Lights (Remix).mp4",
        ],"Nyahn")