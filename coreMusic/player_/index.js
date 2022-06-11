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

        async function plist_promise() {
            try {
                pathdata = sd_wrapper.children[0].children[0].src.split("/")

                if(currentAudio.ended && plist_vl[0] != undefined){
                    for(data of pathList){
                        for(let k = 0; k < data[1].length; ++k){
                            if(`${data[0]}/${data[1][k]}` == `${data[0]}/${plist_vl[0]}` && plist_vl[0] == decodeURI(pathdata[pathdata.length - 1])){
                                    initialize_list(plist_vl[0],data[0])
                                    await audio_play()
                                    display_title()
                                    await display_icon(plist_vl[0],data[0])
                                    display_media()
                                    shift_playlist()
                                    console.log("plist promise end")
                            }
                        }
                    }
                }
            } catch (err){
                
            }
        }
        setInterval(() => {
            plist_promise()
        }, 1000)

        // setInterval(() => {
        //     if(currentAudio.ended){
        //         rndpath = random_int(0,pathList.length)
        //         list = random_int(0,pathList[rndpath][1].length)
        //         initialize_list(pathList[rndpath][1][list],pathList[rndpath][0])
        //         audio_play()
        //         display_title()
        //         display_icon(pathList[rndpath][1][list],pathList[rndpath][0])
        //         display_media()
        //         var no_source = setTimeout(() => {
        //             if(currentAudio.currentTime == 0){

        //                 rndpath = random_int(0,pathList.length)
        //                 list = random_int(0,pathList[rndpath][1].length)
        //                 initialize_list(pathList[rndpath][1][list],pathList[rndpath][0])
        //                 audio_play()
        //                 display_title()
        //                 display_icon(pathList[rndpath][1][list],pathList[rndpath][0])
        //                 display_media()

        //                 no_source
        //             }
        //         }, 1000);
        //     }
        // }, 1000);

        function delay_content(content,secs) {
            setTimeout(() => {
                content
            }, secs);
        }
        function add_ctr_lists(lists,path = "") {
            pathList.push([path,lists])

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
                        // ctr_vlist.src = `${path}/${list}`
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
                            ctrPlay(list,path)
                        })
                        plist_add.addEventListener("click",() => {
                            add_playlist(list,path)
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
                            
                            // ctr_vlist.pause()
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
                                    entry.target.preload = "none"
                                }
                                else {
                                    entry.target.preload = "auto"
                                    ctr_screen_out()
                                }
                                entry.target.src = `${path}/${list}`
                            })
                        })
                        ctr_vlist_observer.observe(ctr_vlist)
                    })
                }
            }
        }
        function add_ctr_h(path){
            const ctr_h = document.createElement("div")
            ctr_h.setAttribute("class","ctr-h")
            ctr_h.textContent = path

            const body = document.body
            for(bchild of body.children){
                if(bchild.getAttribute("class") == "ctr-wrapper"){
                    bchild.appendChild(ctr_h)
                }
            }
        }
        function ctr_template_scroller(lists,path,caption) {
            if(!caption) caption = path
            add_ctr_h(caption)
            add_ctr_lists(lists,path)
        }

        function add_playlist(list,path) {
            plist_vl.push(list)

            const plist = document.createElement("div")
            plist.setAttribute("class","playlist")
            const plist_ilist = document.createElement("video")
            plist_ilist.setAttribute("class","playlist-icon")
            plist_ilist.setAttribute("poster","Character-CrimsonAbyss-Portrait.webp")
            plist_ilist.currentTime = 10
            // plist_ilist.src = `${path}/${list}`
            const plist_holder = document.createElement("div")
            plist_holder.setAttribute("class","playlist-holder")
            const plist_title = document.createElement("div")
            plist_title.setAttribute("class","playlist-title")
            plist_title.textContent = list
            plist.appendChild(plist_ilist)
            plist.appendChild(plist_holder)
            plist_holder.appendChild(plist_title)
            sd_wrapper.appendChild(plist)

            function playlist_screen_out() {
                plist_ilist.currentTime = 10
            }
            
            //bug 
            const plist_ilist_observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if(!entry.isIntersecting){
                        entry.target.preload = "none"
                    }
                    else if(entry.isIntersecting) {
                        entry.target.preload = "auto"
                        playlist_screen_out()
                    }
                    entry.target.src = `${path}/${list}`
                })
            })
            plist_ilist_observer.observe(plist_ilist)
        }
        function shift_playlist() {
            plist_vl.shift()
            sd_wrapper.children[0].remove()
            sd_wrapper.children[0].children[0].preload = "auto"
        }


        function ctrPlay(list,path) {
            if(list == currentPlay && !currentAudio.paused) return
            else if(list == currentPlay && currentAudio.paused){
                audio_play()
            }
            else {
                initialize_list(list,path)
                audio_status()
                display_title()
                display_icon(list,path)
                display_media()
            }
        }

        function goAt(sec){
            currentAudio.currentTime = sec
            media.currentTime = sec
        }

        function initialize_list(list,path) {
            currentPlay = list
            currentAudio.src = `${path}/${list}`
            media.src = `${path}/${list}`
        }

        //audio_controller
        function audio_play() {
            return new Promise((resolved,rejected) => {
                try {
                    if(sd_wrapper.children[0].children[0].readyState > 1){
                        curr_player.textContent = "| |"
                        currentAudio.play()
                        media.play()
                        console.log("audio done")
                        resolved()
                    }
                    else {
                        curr_player.textContent = "| |"
                        currentAudio.play()
                        media.play()
                        console.log("audio done")
                        resolved()
                    }
                } catch(err){
                        curr_player.textContent = "| |"
                        currentAudio.play()
                        media.play()
                        console.log("audio done")
                        resolved()
                }
            })
        }
        function audio_pause() {
            curr_player.textContent = ">"
            currentAudio.pause()
            media.pause()
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

        //display
        function display_title(file_name){
            title.textContent = currentPlay
        }
        function display_icon(icon,path){
            return new Promise((resolved,rejected) => {
                try {
                    if(sd_wrapper.children[0].children[0].readyState > 1){
                        curr_icon.src = `${path}/${icon}`
                        curr_icon.play()
                        curr_icon.muted = true
                        setTimeout(() => {
                            curr_icon.currentTime = 10
                            curr_icon.pause()
                            console.log("icon done")
                            resolved()
                        }, 200);
                    }
                    else {
                        curr_icon.src = `${path}/${icon}`
                        curr_icon.play()
                        curr_icon.muted = true
                        setTimeout(() => {
                            curr_icon.currentTime = 10
                            curr_icon.pause()
                            console.log("icon done")
                            resolved()
                        }, 200);
                    }
                } catch (err){
                    curr_icon.src = `${path}/${icon}`
                    curr_icon.play()
                    curr_icon.muted = true
                    setTimeout(() => {
                        curr_icon.currentTime = 10
                        curr_icon.pause()
                        console.log("icon done")
                        resolved()
                    }, 200);
                }
            })
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
//         ctr_template_scroller([
// "1_Hour_Most_Popular_Songs_by_PSYQUI_(NON-STOP_Collection_Vol._1_+_BONUS_TRACK)(720p).mp4",
// "1_Hour_PSYQUI_Vol._2(480p).mp4",
// "1st_Single_【_REDHEART_】(1080p)(1).mp4",
// "Amatsuka_Uto_Stream_Intro(1080p).mp4",
// "Android_52_-_The_New_Shrimp_Groove(720p).mp4",
// "Anime_Moan_Remix__Remastered(720p).mp4",
// "Auburn_-_All_About_Him_(slowed_+_reverb)(720p).mp4",
// "aori_-_ぱられループ_を歌ってみた_(Jeku_Remix)(1080p).mp4",
// "ayiko_-_Teichopsia_(ft._Shoko)(1080p).mp4",
// "Azla_-_Flash(1080p).mp4",
// "ayiko_-_Teichopsia_(ft._Shoko)(720p).mp4",
// "Beethoven_-_Für_Elise_(Klutch_Dubstep_Trap_Remix)(720p).mp4",
// "BEST_NIGHTCORE_✘_MASHUP_J-POP(1080p).mp4",
// "BB_Yukus_-_Northern_Sky(1080p).mp4",
// "Brandon_Liew_-_DREAMERS_(feat._TOFIE)(1080p).mp4",
// "Brain_Power(1080p).mp4",
// "Brandon_Liew_-_DREAMERS_(feat._TOFIE)(720p).mp4",
// "Anime Live Wallpaper_3720.mp4",
// "Chiisana_Koi_no_Uta(1080p).mp4",
// "Christmas_Song_-_N.A.M.E(1080p).mp4",
// "Cloudier_-_A_Centimetre_Apart_(Systile_Remix)(1080p).mp4",
// "Cold_Youth_-_Nearby(480p).mp4",
// "Chiisana_Koi_no_Uta(720p).mp4",
// "Colate_-_Dot_to_Dot(1080p).mp4",
// "Colate_-_Good_Night_(Feat._Nanahira)_(Nor_Remix)(1080p).mp4",
// "damper_&_Devious_-_soda_street(1080p).mp4",
// "Crazed_Bucket_-_Still_Lovely(1080p).mp4",
// "Dankel_Rose_-_Blueberry's_Dreamy_Eyes(1080p).mp4",
// "Couple_N_-_Sweet_Garden(1080p).mp4",
// "DJ_Noriken_-_Stargazer_Feat._YUC'e_「_Xignality_Remix_」(1080p).mp4",
// "DJ_Noriken_-_Stargazer_Feat._YUC'e_「_Xignality_Remix_」(360p).mp4",
// "dark_cat_-_BUBBLE_TEA_(feat._juu_&_cinders)(720p).mp4",
// "DJ_Noriken_-_スターゲイザ_(Stargazer)ー_feat._YUC'e_(PSYQUI_Remix)(1080p).mp4",
// "DoctorNoSense_-_Safe_to_Say(720p).mp4",
// "DoctorNoSense_-_Love_Me_Now(720p).mp4",
// "DoctorNoSense_-_Safe_to_Say_(Official_Audio)(1080p).mp4",
// "eleline△_-_Koto_no_Town(1080p).mp4",
// "dark_cat_-_CRAZY_MILK(720p).mp4",
// "DoctorNoSense_-_Safe_to_Say(1080p).mp4",
// "Eli_Noir_–_Wonder_Why_(prod._Noden)_(Lyrics)_[CC](1080p).mp4",
// "excuse.mp4",
// "Elliot_Hsu_-_夢のかたち_(feat._Yuca)(360p).mp4",
// "Ferst_-_Sparkle_(feat._Nobelz)(1080p).mp4",
// "Future_Cαke(720p).mp4",
// "Future_Cαndy(1080p).mp4",
// "EmoCosine_-_Step_to_Sky(480p).mp4",
// "glance_-_Epic_Score__w__nabil%21___noguchii_(480p).mp4",
// "fuwuvi_-_Hyper_Neko(1080p)(1).mp4",
// "Ghostrifter_Official_-_Soaring(1080p).mp4",
// "Gotoubun_no_Hanayome_Opening_-_Gotoubun_no_Kimochi_Full_Version_(Color_Coded)_+_Lyrics(1080p)(1).mp4",
// "greyl_-_MYC(720p).mp4",
// "greyl_-_MYC(720p)(1).mp4",
// "glance_-_Epic_Score__w__nabil%21___noguchii_(720p).mp4",
// "Hardwell_ft._Jake_Reese_-_Run_Wild_(HANAEL_Remix)(720p).mp4",
// "Hanatan_→「_Yuuhi_Saka_」(1080p).mp4",
// "Hatsune_Miku_-_OVER(720p).mp4",
// "Hikanira_&_Mayuru_-_Baka!(1080p).mp4",
// "HoneyComeBear_-_Natsuzora(ナツゾラ)(20XX_Remix)(1080p).mp4",
// "HoneyComeBear_-_Natsuzora_(ナツゾラ)(1080p)(1).mp4",
// "Hazy_Skyscraper(1080p).mp4",
// "hyleo_-_Trigger_(feat._Such)(720p).mp4",
// "Hyp3rsleep_&_SoLush_-_Lovestruck(1080p).mp4",
// "HoneyComeBear_-_Natsuzora_(20XX_Remix)(1080p).mp4",
// "Japanese_Acoustic_Song_•_Zen_Zen_Zense_-_(Cover_by._粉ミルク)__Lyrics_Video(1080p).mp4",
// "Jotori_-_サイキ_(Saiki)(720p).mp4",
// "Hyp3rsleep_–_First_light(1080p).mp4",
// "Jotori_-_Summer_Rain(1080p).mp4",
// "Kamaboko_-_Colorful(720p)(1).mp4",
// "Kanaria_-_KING_covered_by_amatsukauto_໒꒱·_ﾟ(1080p).mp4",
// "Kamaboko_-_Colorful(720p).mp4",
// "Kana_Hanazawa_-_Renai_Circulation_(Lone_Alpha_Remix)(1080p).mp4",
// "Kano_→「_Sentimental_Love_Heart_」(1080p).mp4",
// "Kawaii_Future_Bass_♫_Kawaii_EDM_♫_Kawaii_Music_Mix___Vol.01(720p).mp4",
// "Kenneyon_&_NY~ON!_-_Espresso(1080p)(1).mp4",
// "Kano_-_Dreamin_Chuchu_♡♡♡(1080p)(1).mp4",
// "Kenneyon_-_Boba(1080p)(1).mp4",
// "Kenneyon_-_Citrus(1080p).mp4",
// "Kenneyon_-_Boba(1080p).mp4",
// "Kenneyon_-_Taiko(1080p).mp4",
// "Kirara_Magic_-_Chaos_Nya(720p).mp4",
// "kiino_-_lucky(720p).mp4",
// "Kagi_-_Daydream(1080p).mp4",
// "NETNEGATIVE_-_Sugar_Rush_(_AkoMusic_Release_)(1080p).mp4",
// "MojiX!_x_Elkuu_-_Minamo(720p).mp4",
// "Nightcore_-_4℃_「_CHIHIRO_」(1080p).mp4",
// "Nightcore_-_Aishiteru_「_Wotamin_」(1080p).mp4",
// "Nightcore_-_Asayake_Kimi_No_Uta「Kano」(1080p).mp4",
// "Nightcore_-_BRAVE_「_8utterfly_Feat._CLIFF_EDGE_」(1080p).mp4",
// "Nightcore_-_Butter_Sugar_Cream_「_Tomggg_Feat._Tsvaci_」(1080p).mp4",
// "Nightcore_-_Daisy_Blue_「_Kano_」(1080p).mp4",
// "Nightcore_-_Baby_I_Love_You__「_TEE_」(1080p).mp4",
// "Nightcore_-_Dakedo,_Kimi_Shika_Mienakute..._「_8utterfly_Feat._Zawachin_」(1080p).mp4",
// "Nightcore_-_Daisy_Blue_「_Kano_」(720p).mp4",
// "Mtell_-_Paimon(1080p).mp4",
// "Nightcore_-_Ghost_「_Kano_」(1080p).mp4",
// "Nightcore_-_Girl's_Talk_「_CHIHIRO_」(360p)(1).mp4",
// "Nightcore_-_Demons_(Switching_Vocals)_-_(Lyrics)(1080p).mp4",
// "Nightcore_-_Hello!_How_are_you__Lyrics(1080p).mp4",
// "Nightcore_-_Girl's_Talk_「_CHIHIRO_」(1080p).mp4",
// "Nightcore_-_Ice_Cream_(Switching_Vocals)_-_(Lyrics)(1080p).mp4",
// "Nightcore_-_In_My_Mind_(Remix)_-_(Lyrics)(1080p).mp4",
// "Nightcore_-_Ima_wo_Kakeru_Shoujo_「_Kano_」(1080p)(1).mp4",
// "Nightcore_-_Itsumo_Soba_de_「_KG_Feat._Maiko_Nakamura_」(720p).mp4",
// "Nightcore_-_Kuroneko_「_Akagami_」(360p).mp4",
// "Nightcore_-_Lonely_「_CHIHIRO_」(1080p)(1).mp4",
// "Nightcore_-_Hello,_How_Are_You_「_Kano_」(720p).mp4",
// "Nightcore_-_LOVE_SONG%E3%80%8C_Yuka_Masaki____%E7%9C%9F%E5%B4%8E%E3%82%86%E3%81%8B_%E3%80%8D(1080p).mp4",
// "Nightcore_-_Miss_U「_CHIHIRO_feat._ZANE_(three_NATION)_」(1080p).mp4",
// "Nightcore_-_Mata_Futari_koi_o_Suru「Wotamin」(1080p).mp4",
// "Nightcore_-_Love_Letter_~Eien_no_Shiawase~_「_jyA-Me_」(1080p).mp4",
// "Nightcore_-_Nemurenai_Hodo_「_Yuka_Masaki_Feat._WISE__」(1080p)(1).mp4",
// "Nightcore_-_Nemurenai_Hodo_「_Yuka_Masaki_Feat._WISE__」(1080p).mp4",
// "Nightcore_-_Niwaka_Ame_「_Hanatan_」(1080p).mp4",
// "Nightcore_-_Motto_Aishitakatta_「Yuka_Masaki」(1080p).mp4",
// "Nightcore_-_Nothing_To_Say_~会いたいなんて言えない_I_Love_You~_「_8utterfly_」(1080p).mp4",
// "Nightcore_-_Once_More_Again_~_Mou_Ichido_Dakishimete「_May_J_Feat._LGYankees_」(1080p).mp4",
// "Nightcore_-_No_Friends_(Lyrics)(1080p).mp4",
// "Nightcore_-_Nitamono_Doushi_「_Hiromi_」(1080p).mp4",
// "Nightcore_-_Please_Dont_Say_You_Love_Me_-_(Lyrics)(1080p).mp4",
// "Nightcore_-_Pura_Pura_Lupa_(English_Version)_-_(Lyrics)(1080p).mp4",
// "Nightcore_-_RESET_「_CHIHIRO_」(1080p).mp4",
// "Nightcore_-_Precious_「_Yuna_Ito_」(1080p)(1).mp4",
// "Nightcore_-_Sad_Song_(Switching_Vocals)_-_(Lyrics)(1080p).mp4",
// "Nightcore_-_Sasabune_「_YuRiCa_」(1080p).mp4",
// "Nightcore_-_Sakura_no_Zenya_「_Kano_」(720p).mp4",
// "Nightcore_-_Sayonara_Aishiteta「Saki_Kayama」(360p).mp4",
// "Nightcore_-_Sayonara_My_Love「_Maiko_Nakamura_Feat._NERDHEAD_」(720p).mp4",
// "Nightcore_-_Sayonara_Kono_Natsu_Ni_「_Shota_Shimizu_」(1080p).mp4",
// "Nightcore_-_Setsunakute_「_Da-iCE_」(720p).mp4",
// "Nightcore_-_Secret_Summer_「_NERDHEAD_Feat._Chihiro_」(1080p).mp4",
// "Nightcore_-_Souzou_Forest_「_Kano_」(1080p).mp4",
// "Nightcore_-_Shinpakusuu_♯0822_「_Akie_」(1080p).mp4",
// "Nightcore_-_____Ichibyou_Demo_SORA_x_Se(1080p).mp4",
// "Nikoi0227_-_Wake_Up(1080p).mp4",
// "Nightcore_–_Miss_You_More_(Lyrics)(1080p).mp4",
// "Omoshiroebi_-_Mille_Feuille_(Orig._Stepic)(1080p).mp4",
// "Omoshiroebi_-_Sakura_Saku_Remix_(orig._Yunomi)(720p).mp4",
// "Nikoi0227_-_Sweetie_cocoa(1080p).mp4",
// "Owl_City_-_Fireflies_(dark_cat_remix)(1080p).mp4",
// "Oceanus_-_Keep_A_Secret(1080p).mp4",
// "Owl_City_-_Fireflies_(Official_Video)(480p).mp4",
// "PIKASONIC_-_Friendship!_(Diona,_Qiqi_&_Klee)(1080p).mp4",
// "PIKASONIC_-_Klee!(1080p).mp4",
// "PIKASONIC_-_Emptiness(1080p).mp4",
// "owarin_-_late_for_school!(1080p).mp4",
// "PIKASONIC_-_Pets!_♡_Qiqi_&_Klee_Version(1080p).mp4",
// "PLEEG_-_Peace(720p).mp4",
// "PIKASONIC_-_Nation(1080p).mp4",
// "Polykeeper_-_Restart_Chronicle_(feat._Hatsune_Miku)(720p).mp4",
// "Polykeeper_-_Unconventional_(feat._Hatsune_Miku)(1080p).mp4",
// "POI!!_Ohhh~(1080p).mp4",
// "Pixel_Galaxy(1080p).mp4",
// "the_peggies「センチメートル」Music_Video(1080p).mp4",
// "t+pazolite_-_Chrome_VOX_(Uncut_Edition)(720p).mp4",
// "Sylrica_-_Sweetie(720p).mp4",
// "Teikyou_-_Deadly_Slot_Game(720p).mp4",
// "Tomggg_(Cover._@Taiyoudayo___)_-_Butter_Sugar_Cream(720p).mp4",
// "Tomggg_(Cover._@Taiyoudayo___)_-_Butter_Sugar_Cream(480p).mp4",
// "Tsukachi_-_Together_Is_Better(720p).mp4",
// "Ugumugu_-_Usagi_Ni_Datte_Randoseru(1080p).mp4",
// "Viuk,_Setka_&_Love_Club_-_Tea_Groove_♪(720p).mp4",
// "Varien_hai.mp3",
// "Ultrasonic_exported_0.mp4",
// "Wave_Meow_&_Zentra_-_Cloud_Surfing(1080p).mp4",
// "YOASOBI_-_もう少しだけ_(DoctorNoSense_Remix)(720p).mp4",
// "Xomu_&_Justin_Klyvis_-_Setsuna_(Kirara_Magic_Remix)(1080p).mp4",
// "Your_voice_so..._(Zekk's_'FULL_SPEC'_Remix)_(feat._Such)(720p).mp4",
// "YUC'e_x_Snail's_House_-_Cosmic_Air_Ride(720p).mp4",
// "Xomu_-_Walpurgis_Night(720p).mp4",
// "YUC_e_-_Future_Candy__Kaivaan_Remix_(720p).mp4",
// "Yunomi_&_nicamoq_-_インドア系ならトラックメイカー_(ミカヅキBIGWAVE_Remix)(1080p).mp4",
// "YOASOBI「夜に駆ける」_Official_Music_Video(720p).mp4",
// "Yunomi_&_nicamoq_–_インドア系ならトラックメイカー(720p).mp4",
// "Yunomi_-_Aimai_Trip_(feat._桃箱_&_miko)(1080p).mp4",
// "Yunomi_-_Shugorei_(守護霊)_feat._nicamoq_(Tecchi_Remix)(1080p).mp4",
// "Yunomi_-_ジェリーフィッシュ_(feat._ローラーガール)(1080p).mp4",
// "Yunomi_-_守護霊_(feat._nicamoq)(720p).mp4",
// "YUMMI_-_Starfall_(MoeTunes_Release)(1080p).mp4",
// "Yunomi_-_Yumeiro_Parade_(Feat._Momobako_&_Miko)(720p).mp4",
// "Yunomi_–_ゆのみっくにお茶して_(feat.nicamoq)_(Hibiki_Remix)(1080p).mp4",
// "[16]_Kirara_Magic_♡_10_Kawaii_Japanese_Songs_♡_Anime_Moe!~__Kawaii_Music_Mix♫(720p).mp4",
// "[Blue_Archive]_Theme_109(720p).mp4",
// "Zakku_x_Nakanojojo_-_Matcha_Love_(feat._アリガトユイナ)(1080p).mp4",
// "[15]_Nya!_Arigato_♡_10_Most_Kawaii_Songs_♡_Anime_Moe!~__Kawaii_Music_Mix♫(480p).mp4",
// "[MV]_wannabe-_DEMONDICE(720p).mp4",
// "[MV]_Gang_Gang,_Kawaii!!_(DEMONDICE)_-_American_Saikoro_XFD(720p).mp4",
// "[ORIGINAL]_REFLECT_-_Gawr_Gura(1080p).mp4",
// "[ORIGINAL_SONG]__失礼しますが、RIP♡__“Excuse_My_Rudeness,_But_Could_You_Please_RIP”_-_Calliope_Mori(1080p).mp4",
// "一首好聽的日語歌《彼女は旅に出る》冰鎮豆沙君【中日歌詞Lyrics】(1080p).mp4",
// "ヨルシカ_-_ただ君に晴れ_(MUSIC_VIDEO)(720p).mp4",
// "インドア系ならトラックメイカー_covered_by_Uto_＆_Nabi(1080p).mp4",
// "米津玄師__MV「Lemon」(1080p).mp4",
// "💳💸_sakehands_-_PLASTIC_ft._Good_Intent_中英文歌詞_Lyrics(720p).mp4",
// "不登校のあなたへ(1080p).mp4",
// "🌸_Cloudier_-_A_Centimetre_Apart_[_Sylrica_Remix_]_🎧(720p).mp4"

//         ],"D:/nyahn_collection/nyeow","nyeowwwww")