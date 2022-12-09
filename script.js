// l0DBE0jobQdM8bduNq8enegnYy9aSzkwBjLJRvW3

// https://api.nasa.gov/planetary/apod?api_key=l0DBE0jobQdM8bduNq8enegnYy9aSzkwBjLJRvW3

/* --- Gets data from the APOD API---*/

async function getb4Aft(b4Start,aftEnd) {
    console.log('--- getb4Aft(b4Start,aftEnd) ---')

    // In order to prevent the fetch every single time you refresh the page, the new call only occurs if there's no data. This means that anything that wants new data must clear the current data first in their own functions.
    if (!sessionStorage.getItem('currentData')) { 
        console.log('getb4Aft(): Condition 1 - LocalStorage is empty.')

        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=l0DBE0jobQdM8bduNq8enegnYy9aSzkwBjLJRvW3&start_date=${b4Start}&end_date=${aftEnd}`)
            const json = await response.json()
            //https://learnwithparam.com/blog/how-to-handle-fetch-errors/

            if(response.status >= 200 && response.status <= 299) {

                sessionStorage.setItem('currentData',JSON.stringify(json))
            
            console.log(`::DATA UPDATE::getb4Aft(): Data requested FINISHED from: ${b4Start} To: ${aftEnd}`)
            
            console.log('getb4Aft(): Now that data is gotten from the API, setting the stored data to the currentData variable by running loadDataFromStorage()')
            loadDataFromStorage()

            console.log('getb4Aft(): Recieved arrTodayIndex from calcOneMonthB4AndAftr(): ' + arrTodayIndex)

            console.log('getb4Aft(): Updating page and displaying arrows, now that data is available.')
                 
            $backADay.style.display = 'block'
            $forwardADay.style.display = 'block'
            updatePage() 

            console.log('--- END: getb4Aft(b4Start,aftEnd) ---')

        } else {
            console.log(response.status, response.statusText);
            console.log('Due to error with API, resetting to initial state. Clearing local storage, session storage and requesting date for todays date.');
            sessionStorage.removeItem('currentData')
            sessionStorage.removeItem('selectedDate')
            loadDataFromStorage()
        } 

    } else {
        console.log('getb4Aft(): Condition 2 - currentData exists, not fetching data.')
    }
}


const initialImages = [
    "https://apod.nasa.gov/apod/image/2210/stsci-pillarsofcreation1280c.jpg", 
    "https://apod.nasa.gov/apod/image/2210/Ngc7497Cirrus_Trottier_2976.jpg",
    "https://apod.nasa.gov/apod/image/2210/GalaxyFlower_Strand_1200.jpg",
    "https://apod.nasa.gov/apod/image/2210/GrbRings_SwiftMiller_1458.jpg",
    "https://apod.nasa.gov/apod/image/2209/ShastaSky_Rohner_960_annotated.jpg",
    "https://apod.nasa.gov/apod/image/2209/WaterlessEarth2_woodshole_960.jpg",
    "https://apod.nasa.gov/apod/image/2209/WR140_WebbSchmidt_960.jpg",
    "https://apod.nasa.gov/apod/image/2210/SquidFinal3smaller1024.jpg",
    "https://apod.nasa.gov/apod/image/2210/Pelican_Almeida_2000.jpg",
    "https://apod.nasa.gov/apod/image/2209/NeptuneTriton_webb1059.png",
    "https://apod.nasa.gov/apod/image/2209/FairyPillar_Hubble_960.jpg",
    "https://apod.nasa.gov/apod/image/2209/DSCF4968_PS_Lioce-1024.jpg",
    "https://apod.nasa.gov/apod/image/2210/ngc4631_sherick1024.jpg",
    "https://apod.nasa.gov/apod/image/2210/M16Eagle_Akar_960.jpg",
    "https://apod.nasa.gov/apod/image/2210/Europa_JunoLuck_1080.jpg",
    "https://apod.nasa.gov/apod/image/2209/HorseheadIr_HubbleNachman_960.jpg",
    "https://apod.nasa.gov/apod/image/2209/potw1805bc_ngc7331.jpg",
    "https://apod.nasa.gov/apod/image/2209/NGC3576_Willocks_960.jpg",
    "https://apod.nasa.gov/apod/image/2210/NGC1300_HST_1080.jpg",
    "https://apod.nasa.gov/apod/image/2210/LAT_221009A_burst_opt_1080.gif",
    "https://apod.nasa.gov/apod/image/2210/2T2A3056_1024.jpg",
    "https://apod.nasa.gov/apod/image/2209/PIA24924_1045.jpg",
    "https://apod.nasa.gov/apod/image/2209/LightningStarTrails_Llimos_960.jpg",
    "https://apod.nasa.gov/apod/image/2209/CallanishAnalemma_Petricca_960_Dates.jpg",
    "https://apod.nasa.gov/apod/image/2210/CannonSupernova_English_960.jpg",
    "https://apod.nasa.gov/apod/image/2210/Lu20220729-0826_1050.jpg",
    "https://apod.nasa.gov/apod/image/2209/SunriseATWImageCollageFinal1067.jpg",
    "https://apod.nasa.gov/apod/image/2209/liciacube_leia_l0_1664234215_00000_01_c.jpg",
    "https://apod.nasa.gov/apod/image/2209/HarvestMoonCastiglioneSicily1024.jpg",
    "https://apod.nasa.gov/apod/image/2209/Tarantula-HST-ESO-Webb-SS1024.jpg",
    "https://apod.nasa.gov/apod/image/2210/LunarAnalemma_Turksoy_1080_dates.jpg",
    "https://apod.nasa.gov/apod/image/2210/aurora_kwon_960.jpg",
    "https://apod.nasa.gov/apod/image/2210/2017K2_2022-09-21_web-label.jpg",
    "https://apod.nasa.gov/apod/image/2210/JovianEclipse1024c.jpg",
    "https://apod.nasa.gov/apod/image/2209/GreatLacerta_Ruuth_960.jpg",
    "https://apod.nasa.gov/apod/image/2209/SnakingFilament_Friedman_960.jpg"
]
        const $gridRow = document.getElementById('grid')
        const $nav = document.getElementById('nav')
        const $search = document.getElementById('search')
        const $initialWhiteout = document.getElementById('initial-whiteout')
        const $favs = document.getElementById('favs')
        const $dailyBrowser = document.getElementById('daily-browser')
        const $dBrowHeader = document.getElementById('DBrow-header')
        const $dBrowExpl = document.getElementById('DBrow-expl')
        const $dBrowImage = document.getElementById('DBrow-image')
        const $nav1 = document.getElementById('nav1') 
        const $nav2 = document.getElementById('nav2') 
        const $nav3 = document.getElementById('nav3')
        const $backADay = document.getElementById('back-aday')
        const $forwardADay = document.getElementById('forward-aday')
        const $info = document.getElementById('info')
        const $infoHeader = document.getElementById('infoHeader')
        const $infoExpl = document.getElementById('infoExpl')
        const $infoImg = document.getElementById('infoImg')
        const $pageHeader = document.getElementById('pageHeader')
        const $CTA = document.getElementById('CTA')
        const $favbutton = document.getElementById('favbutton')
        const $favbuttonInfo = document.getElementById('favbuttonInfo')
        const $btn = document.getElementById('btn')
        const $main = document.getElementById('main')
        const $favGridImg = document.getElementById('favGridImg')
        const $favButtonFull = document.getElementById('favButtonFull')
        const $fullImg = document.getElementById('full-img')
        const $full = document.getElementById('full')
    
    /* --- End: DOM Selectors---*/

    /* --- Date specific variables---*/

        let date = new Date()
        const today = dateFormater(date)
        const oneMonthAgo = dateFormater(addMonths(date,-1))

    /* --- End: Date specific variables---*/


    /* --- Data variables---*/
        let gridHtml = []
        let count = 0
        let currentData = []
        // dayMultiplier can be changed if we want to request differnt sizes of arrays from the API.
        let dayMultiplier = 10
        let daysback = dayMultiplier + 1
        let daysbackDate = ''
        let favs = []
        let displayEntry = currentData[currentData.length-1]
        let direction = 'unset'
        let requestedDate = today    
        let arrTodayIndex = 0
        let remainingDataBack = 0
        let availableDataBack = 0
        let remainingDataForward = 0
        let requestedPlusMultiple = 0 
        let time = Date.parse(requestedDate)
        let todayDate = new Date()
        let todaysEpoch = Date.parse(today)
        let dateDisplayed = ''
        let arrowClicks = 0
        let displayDataSinceEpoch = null
        let oneMonthForwardFromRequested = ''
        let oneMonthBackwardFromRequested = ''
        let arrayIndex = 0
        let afterEpoch = 0
        let beforeEpoch = 0
        let isfav = false
        let infoOverlay = false
        let infoFull = false
        // Used dateMatch() with .findIndex to get the index value of the fav in the favs array.
        // From: https://www.programiz.com/javascript/library/array/findindex
        let favIndex = -1
        
        console.log('Initial arrTodayIndex = ' + arrTodayIndex) 
        console.log('Initial dayMultiplier = ' + dayMultiplier)
        console.log('Initial daysBack = ' + daysback)
        // Days back is set to dayMultiplier plus 1 because thats the size of an initial array

/* --- Pulls data if missing from Local Storage ---*/
console.log('~~~ Page refresh: running loadDataFromStorage()')
loadDataFromStorage()

function loadDataFromStorage() {
    console.log('--- loadDataFromStorage(): ---')
     if (sessionStorage.getItem('currentData') === null ) {
        console.log("loadDataFromStorage(): Condition 0 - Data missing from storage. Making request for: " + requestedDate)
        calcOneMonthB4AndAftr()
        getb4Aft(oneMonthBackwardFromRequested,oneMonthForwardFromRequested)
                    
        console.log('--- End: loadDataFromStorage()  ---')
  
        } else {
            console.log('loadDataFromStorage(): There is data for this session. ')
            console.log('loadDataFromStorage(): Setting currentData to the stored data. ')
            currentData = JSON.parse(sessionStorage.getItem('currentData'))
            console.log('loadDataFromStorage(): checking for a selected date for session.')
            if (sessionStorage.getItem('selectedDate')){
    
                requestedDate = sessionStorage.getItem('selectedDate')
                console.log('loadDataFromStorage(): Condition 1a. There is a selected date in session. Requested date is: ' + requestedDate)
                console.log('loadDataFromStorage(): Calling calcOneMonthB4AndAftr() to get the arrTodayIndex. .')
                calcOneMonthB4AndAftr()
                console.log('The new arrTodayIndex is: ' + arrTodayIndex)
                console.log('loadDataFromStorage(): Setting the display entry.')
                displayEntry = currentData[arrTodayIndex]
                console.log('The current display entry date is now: ' + displayEntry.date)

            } else {
                console.log('loadDataFromStorage(): Condition 1b. There is NO selected date for this current session. Requested date will remain as initially set, i.e. today: ' + requestedDate)
                console.log('loadDataFromStorage(): due to no current session, the array index will remain: ' + arrTodayIndex)
                console.log('loadDataFromStorage(): Setting the display entry.')
                displayEntry = currentData[arrTodayIndex]
                console.log('The current display entry date is now: ' + displayEntry.date)
                
            }
        }
        console.log('--- End: loadDataFromStorage()  ---')
    }

// Calculates the days before and after so that getb4Aft(b4Start,aftEnd) knows which days to request. This is run by anything that requests new data. It also calculates the arrayindex, which is used by getb4Aft(b4Start,aftEnd) to ensure the correct displayEntry after the new array is loaded from the API. It takes the optional direction value to ensure that if the date requested is too near the ends of the API limits, it shortens the request.
function calcOneMonthB4AndAftr() {

    console.log('--- calcOneMonthB4AndAftr() ---')
    console.log('calcOneMonthB4AndAftr(): requested Date for calc: ' + requestedDate)

    if(sessionStorage.getItem('selectedDate')) {
        requestedDate = sessionStorage.getItem('selectedDate')
    }

    time = Date.parse(requestedDate)
    todayDate = new Date()
    let firstAPOD = new Date(1996-06-16)
    let firstAPODepoch = Date.parse(firstAPOD)
    // todaysEpoch = Date.parse(today)
    // original todaysEpoch was innaccurate due to UTC...
    // From https://stackoverflow.com/questions/9756120/how-do-i-get-a-utc-timestamp-in-javascript
    todaysEpoch = Math.floor((new Date()).getTime())
    
    afterEpoch = (time + ((86400*1000) * dayMultiplier))
    beforeEpoch = (time - ((86400*1000) * dayMultiplier))

    let arrBack = Math.trunc((afterEpoch - time)/(86400*1000))
    console.log('calcOneMonthB4AndAftr(): Days back from the end of the array: ' + arrBack)
    arrTodayIndex = arrBack + 1
    console.log('calcOneMonthB4AndAftr(): new arrTodayIndex from setArrTodayIndex(): ' + arrTodayIndex)
    
    if (beforeEpoch < firstAPODepoch) {
        beforeEpoch = firstAPODepoch
        console.log('calcOneMonthB4AndAftr(): Condition: 1 - Requested start date is before 1996-06-16, setting date to: ' + firstAPOD)
    }

 
    if (afterEpoch > todaysEpoch){
        afterEpoch = todaysEpoch 
        console.log('calcOneMonthB4AndAftr(): Condition: 2 - Requested end date is after today, setting date to: ' + todayDate)
        }
    
 
    let beforeDate = new Date(beforeEpoch)
    let afterDate = new Date(afterEpoch)

    oneMonthBackwardFromRequested = dateFormater(beforeDate)
    oneMonthForwardFromRequested = dateFormater(afterDate)

    console.log('calcOneMonthB4AndAftr(): Before date calculated: ' + oneMonthBackwardFromRequested)
    console.log('calcOneMonthB4AndAftr(): After date calculated: ' + oneMonthForwardFromRequested)
    
    daysback = 0
    console.log('calcOneMonthB4AndAftr(): days back set to ' + daysback)
    console.log('--- End: calcOneMonthB4AndAftr() ---')
}

// browseAray is how the dailybrowser displays the correct day, by updating the displayEntry according to the daysback from the event listener. Then when it's able to request for more data when needed.

function browseArray() {

    console.log('---browseArray(): --- User is browsing the array!')
    console.log('browseArray(): Initial daysBack = ' + daysback)
    console.log('browseArray(): Current arrTodayIndex = ' + arrTodayIndex)
    console.log('requested date: ' + requestedDate)
    count = arrTodayIndex+daysback
    console.log('browseArray(): Setting count to: ' + count)  
    displayEntry = currentData[count]  
    console.log('browseArray(): Checking forward arrow by running: checkForwardaArrow().') 
    checkForwardaArrow()
    console.log('browseArray(): Checking back arrow by running: checkBackArrow().') 
    checkBackArrow()

    if (displayEntry) {

        console.log('browseArray(): condition 1: displayEntry still exists, setting the requestedDate to ' + displayEntry.date)
        requestedDate = displayEntry.date
        console.log('browseArray(): condition 1: setting the session storage selectedDate to ' + requestedDate)
        sessionStorage.setItem('selectedDate', requestedDate)
    } else {
        console.log('browseArray(): Lost the display entry')
    }
    
    if (count == 1 || count == 20) { 

        console.log('browseArray(): Out of data, hiding arrows')
        $backADay.style.display = 'none'
        $forwardADay.style.display = 'none'
        console.log('browseArray(): requesting  before and after date...')
        calcOneMonthB4AndAftr() 
        console.log('browseArray(): clearing old data: ')
        sessionStorage.removeItem('currentData')
        console.log('browseArray() is calling getb4Aft() with start date: ' + oneMonthBackwardFromRequested + ', and end date of: ' + oneMonthForwardFromRequested)
        getb4Aft(oneMonthBackwardFromRequested,oneMonthForwardFromRequested)
    }
    
    console.log('---END: browseArray()---')
}

/* --- Removes forward element if today is current---*/
checkForwardaArrow()


function checkForwardaArrow() {
    console.log('---checkForwardArrow(): --- ')
    
    if(displayEntry) {
        console.log('checkForwardaArrow(): displayEntry date read: ' + displayEntry)
        console.log('checkForwardaArrow(): today date read: ' + today)
    if (displayEntry.date == today) {
        console.log('checkForwardaArrow(): condition 0: displayEntry and today dates are equal, there is no more forward data, hiding forward arrow.')
        $forwardADay.style.display = 'none'
        } else {
            console.log('checkForwardaArrow(): condition 1: DATA is OK, showing forward arrow.')
            $forwardADay.style.display = 'block'
        }
    }
    console.log('---End: checkForwardaArrow(): --- ')
}
   
/* ---End: Removes forward element if today is current ---*/
checkBackArrow()
function checkBackArrow() {
    console.log('---checkBackArrow(): --- ')
    
    if(displayEntry) {
        console.log('checkBackArrow(): displayEntry date read: ' + displayEntry)
        console.log('checkBackArrow(): today date read: ' + today)
        if (displayEntry.date == '1996-06-16') {
            console.log('checkBackArrow(): condition 0: displayEntry is equal to 1996-06-16, theres no more back data, hiding back arrow.')
            $backADay.style.display = 'none'
        } else {
            console.log('checkBackArrow(): condition 1: DATA is OK, showing back arrow.')
            $backADay.style.display = 'block'
        }
    }
    console.log('---End: checkBackArrow(): --- ')
}

/* ---Fav array shuffler---*/
/* ---From: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array---*/
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  /* ---Fav array shuffler---*/


/* ---Display grid---*/
console.log('--- PageRefresh calling: displayFavGrid() ---')
displayFavGrid()

if (favs){

    if (favs.length > 0 ) {
    $favs.style.display = 'flex'
    $nav1.classList.add('active')
    $nav2.classList.remove('active')
    $nav3.classList.remove('active')
    $info.style.display = 'none'
    $full.style.display = 'none'
    $initialWhiteout.style.display = 'none'
    $dailyBrowser.style.display = 'none'
    $search.style.display = 'none'
    document.body.classList.remove('body-overlay')
    document.body.classList.remove('initial-state')
    }
}

function displayFavGrid() {
    console.log('--- displayFavGrid() ---')

    if (localStorage.getItem('favs')) {
        console.log('displayFavGrid(): Condition 1 - there is fav data.')
        
        favs = JSON.parse(localStorage.getItem('favs'))

        
        // shuffle(favs) Could be an interesting feature to add as a button. An automatic shuffle isn't useful at the moment.
        if(favs.length > 0){
            console.log('displayFavGrid(): Condition 1a - there is fav data and its length is greater than zero.')
            if (favs.length >= 1 ) {
                if (favs.length == 1) {
                    for (let i=0; i < favs.length; ){
                        gridHtml.push(`
                        <div class="grid-col">
                        `)
                        for (let j=0; j < 2; j++ , i++) {
                            if(favs[i])
                            {
                                gridHtml.push(`
                                <img id="favGridImg" class="favGridImg singleImg" src="${favs[i].url}" title="${favs[i].date + " - " + favs[i].title}" data-date="${favs[i].date}" alt="Click for description">
                                `
                                )
                            }
                        }
                        
                        gridHtml.push(`
                        </div>
                        `)
                        }
                        
                    }

                if (favs.length > 1) {
                    for (let i=0; i < favs.length; ){
                        gridHtml.push(`
                        <div class="grid-col">
                        `)
                        for (let j=0; j < 2; j++ , i++) {
                            if(favs[i])
                            {
                                gridHtml.push(`
                                <img id="favGridImg" class="favGridImg" src="${favs[i].url}" title="${favs[i].date + " - " + favs[i].title}" data-date="${favs[i].date}" alt="Click for description">
                                `
                                )
                            }
                        }
                        
                        gridHtml.push(`
                        </div>
                        `)
                        }
                    } 
                    
                if (3 > favs.length > 5 ) {
                    for (let i=0; i < favs.length; ){
                        gridHtml.push(`
                        <div class="grid-col">
                        `)
                        for (let j=0; j < 4; j++ , i++) {
                            if(favs[i])
                            {
                                gridHtml.push(`
                                <img id="favGridImg" class="favGridImg" src="${favs[i].url}" title="${favs[i].date + " - " + favs[i].title}" data-date="${favs[i].date}" alt="Click for description">
                                `
                                )
                            }
                        }
                        
                        gridHtml.push(`
                        </div>
                        `)
                        }
                    } 
                if(5 > favs.length > 7) {
                    for (let i=0; i < favs.length; ){
                        gridHtml.push(`
                        <div class="grid-col">
                        `)
                        for (let j=0; j < 6; j++ , i++) {
                            if(favs[i])
                            {
                                gridHtml.push(`
                                <img id="favGridImg" class="favGridImg" src="${favs[i].url}" title="${favs[i].date + " - " + favs[i].title}" data-date="${favs[i].date}" alt="Click for description">
                                `
                                )
                            }
                        }
                        
                        gridHtml.push(`
                        </div>
                        `)
                    }
                }
                
            }
            
            $gridRow.innerHTML = gridHtml.join('')
            gridHtml = []

        } else {
            console.log('displayFavGrid(): Condition 1B - there is fav data and its length is zero.')
            for (let i=0; i < initialImages.length; ){

                gridHtml.push(`
                    <div class="grid-col">
                    `)
                    for (let j=0; j < 6; j++ + i++) {
                        if(initialImages[i]){
                        gridHtml.push(`
                        <img src="${initialImages[i]}"  alt="Text">
                        `
                        )
                    }
                }
                
                gridHtml.push(`
                </div>
                `)
            }

            $gridRow.innerHTML = gridHtml.join('')
        }

        gridHtml = []
    } else {
        console.log('displayFavGrid(): Condition 0 - there is NO fav data.')
            for (let i=0; i < initialImages.length; ){

            gridHtml.push(`
                <div class="grid-col">
                `)
                for (let j=0; j < 6; j++ + i++) {
                    if(initialImages[i]){
                    gridHtml.push(`
                    <img src="${initialImages[i]}"  alt="Text">
                    `
                    )
                }
            }
            
            gridHtml.push(`
            </div>
            `)
        }

        $gridRow.innerHTML = gridHtml.join('')
    }
}


/* ---End Display initial grid ---*/

/* --- Function used to add/subtract a month from a date ---*/

    // From https://stackoverflow.com/questions/2706125/javascript-function-to-add-x-months-to-a-date

    function addMonths(date, months) {
        let d = date.getDate();
        date.setMonth(date.getMonth() + +months)
        if (date.getDate() != d) {
        date.setDate(0)
        }
        return date
    }
/* ---End: Function used to subtract a month from a date ---*/

/* --- Function used to format the date into yyyy-mm-dd---*/

    function dateFormater(date) {
        let $d = date.getDate() 
        if ($d < 10){
            $d = '0' + $d
        }
    
        let $m = date.getMonth() + 1
        if ($m < 10){
            $m = '0' + $m
        }
        let $y = date.getFullYear()
        
        let format = $y + '-' + $m + '-' + $d

        return format
    }

/* ---End:  Function used to format the date into yyyy-mm-dd ---*/




/* ---End: Current displayed Index ---*/

/* ---End: Sets the current displayed APOD ---*/

/* --- Page update functions ---*/

    function updateSearch() {
        if(today){
            $search.innerHTML = /*html*/`
            <h2>
                APOD Search
            </h2>
            <form action="#" method="get" target="_self" id="datePicker">
                <label for="date">Search for past APODs.  Enter a date between 1996-06-16 and today:</label>
                <input min="1996-06-16" max="${today}" id="date" type="date" name="date">
                <button type="submit"><img src="imgs/telescope.svg"  alt="A telescope icon.">Search</button>
            </form>
            `
            
        }
        
    }

    function updateHeader() {
        if (displayEntry) {
            if (infoOverlay == false) {
                $dBrowHeader.innerHTML = `${displayEntry.date + " - " + displayEntry.title}<br><span class="mobile-more" href="#" > &#91;Tap for details&#93;</span>`
                $infoHeader.innerHTML = `${displayEntry.date + " - " + displayEntry.title}<br>` 
            } 
           
        }        
    }

    function updateExpl() {
        // From: https://mundrisoft.com/tech-bytes/show-specific-number-of-words-in-string-using-javascript/
        if (displayEntry) {
            if (infoOverlay == false) {
            let explArray = displayEntry.explanation.split(" ")
            let shortExpl = explArray.splice(0, 14).join(" ")
            $dBrowExpl.innerHTML = `${shortExpl + '...'} <a class="more-link" href="#" >More</a>`
            $infoExpl.innerHTML = displayEntry.explanation
            } 

        }
    }

    function updateImg() {
        if(displayEntry){
        //data-date="${displayEntry.date} in images will be used to set the displayEntry date when selecting the image from the array.

            if(displayEntry.url){
                const urlDomain = displayEntry.url.split('/')
                if (urlDomain[2] == 'apod.nasa.gov') {

                    $dBrowImage.innerHTML = `
                    
                    <img src="${displayEntry.url}" data-date="${displayEntry.date}" alt="See description text. Click to enlarge.">`

                    $infoImg.innerHTML = `
                    <img src="${displayEntry.url}" data-date="${displayEntry.date}" alt="See description text. Click to enlarge.">`

                    $fullImg.innerHTML = `
                    <img src="${displayEntry.hdurl}" data-date="${displayEntry.date}" alt="Close to see explanation.">`
                    
            
                } else{
                    $dBrowImage.innerHTML = `
                    <iframe src="${displayEntry.url}" data-date="${displayEntry.date}"></iframe>`

                    $infoImg.innerHTML = `
                    <iframe src="${displayEntry.url}" data-date="${displayEntry.date}"></iframe>`

                    $fullImg.innerHTML = `                
                    <img src="${displayEntry.url}" data-date="${displayEntry.date}" alt="Close to see explanation.">`

            }       } else {
                        //occurred once for 2010 June 8, so I made a 404 image to handle this and any others.
                        
                        $dBrowImage.innerHTML = `<img class="image404" src="imgs/404.png" data-favArr="${favs}"data-date="${displayEntry.date}" alt="A woman holding a magnifying glass. Text that reads 'Image not found'">`
                        
                        $infoImg.innerHTML = `<img class="404image" src="imgs/404.png" data-date="${displayEntry.date}" alt="A woman holding a magnifying glass. Text that reads 'Image not found'">`
                        
                        $fullImg.innerHTML = `
                        <img  class="404image" src="imgs/404.png" data-date="${displayEntry.date}" alt="A woman holding a magnifying glass. Text that reads 'Image not found'">`
                    } 
        }
    }

    function checkForFavs(isfav) {
        

        favs = JSON.parse(localStorage.getItem('favs'))
        if (localStorage.getItem('favs')) {
            for (let fav of favs) {
            
                if (fav.date === displayEntry.date) {
                    isfav = true
                } 
            }
        } 

        return isfav
    }


    

    // Used dateMatch() with findIndex to get the index value of the fav in the favs array.
    // From: https://www.programiz.com/javascript/library/array/findindex
    function dateMatch(date) {
        return date.date === displayEntry.date
    }
     

function updateFavButtons(){
    console.log('--- updateFavButtons() ---')
    favs = JSON.parse(localStorage.getItem('favs'))   

    if(favs){
        console.log('updateFavButtons(): Number of favs detected from local storage: ' + favs.length)
        /* updateFavButtons(): Using method: findIndex() get the index value of the currenyly displayed array. dateMatch(date) checks whether the dispayEntry.date is equal to one of the favs array date entries. If true, findIndex() can load favIndex with the index number of the match in the fav array. */
       
        favIndex = favs.findIndex(dateMatch)
        if (favIndex == -1) {
            console.log('updateFavButtons(): Condition 0 - displayEntry is not a fav.')
        }else {
            console.log('updateFavButtons(): Condition 1 - displayEntry IF a fav with index of: ' + favIndex)
        }
    }

    if (localStorage.getItem('favs')) {
        console.log('updateFavButtons(): Condition 1 - There is a fav array in localStorage')
        if(checkForFavs(isfav) === false){
            console.log('updateFavButtons(): Condition 1a - This displayeEntry is NOT a fav, setting $favbutton.innerHTML to ~Add to favourites~ ')

            $favbutton.innerHTML = ` 
            <button id="btn">
                <img src="imgs/heart.svg" alt="A heart icon.">Add to favourites
            </button>
            `

            $favbuttonInfo.innerHTML = `
                <button id="btnInfo">
                    <img src="imgs/heart.svg" alt="A heart icon.">Add to favourites
                </button>
            `
            $favButtonFull.innerHTML = `
                <button>
                    <img src="imgs/heart.svg" alt="A heart icon.">Add to favourites
                </button>
            `

        } 
        
        if(checkForFavs(isfav) === true) {
            console.log('updateFavButtons(): Condition 1b - This displayEntry IS a fav, setting $favbutton.innerHTML to ~remove from favourites~')

            $favbutton.innerHTML = `
                <button id="btn">
                    <img src="imgs/remove.svg" alt="A remove icon.">Remove from favourites
                </button>
            `

            $favbuttonInfo.innerHTML = `
                <button id="btnInfo">
                    <img src="imgs/remove.svg" alt="A remove icon.">Remove from favourites
                </button>
            `
            $favButtonFull.innerHTML = `
                <button>
                    <img src="imgs/remove.svg" alt="A remove icon.">Remove from favourites
                </button>
            `
            
            
        }
    } else {
            console.log('updateFavButtons(): Condition 2 - no isfav array in localStorage, setting $favbutton.innerHTML to ~Add to favourites~ ')
            
            $favbutton.innerHTML = `
            <button id="btn">
                <img src="imgs/heart.svg" alt="A heart icon.">Add to favourites
            </button>
            ` 

            $favbuttonInfo.innerHTML = `
                <button id="btnInfo">
                    <img src="imgs/heart.svg" alt="A heart icon.">Add to favourites
                </button>
            `
            $favButtonFull.innerHTML = `
                <button>
                    <img src="imgs/heart.svg" alt="A heart icon.">Add to favourites
                </button>
            `

        }
        console.log('--- updateFavButtons() ---')
}
            


    function updateOverlayInfo() {
        
        $dailyBrowser.style.display = 'none'
        $favs.style.display = 'none'
        $pageHeader.style.display = 'none'
        $search.style.display = 'none'
        $info.style.display = 'flex'
        $full.style.display = 'none'
        document.body.classList.add('body-overlay')
        document.body.classList.remove('full')
        updateFavButtons()
 
    }

    function updateOverlayFull() {
        console.log('updateOverlayFull(): info overlay is true: ' + infoOverlay + 'setting to false.')
        $favs.style.display = 'none'
        $info.style.display = 'none'
        $full.style.display = 'flex'
       
    }

    function updatePage() { 

        console.log('---updatePage()---')

        console.log('updatePage() is running: updateSearch(), updateHeader(), updateExpl(), updateImg(), updateFavButtons(), ')
        updateSearch()
        updateHeader()
        updateExpl()
        updateImg()
        updateFavButtons()
        checkForwardaArrow()
        checkBackArrow()   
        
        
        if (localStorage.getItem('favs')) {
            for(let fav of favs){
                console.log('Current Favs: ' + fav.date)
            }   
        }
        
    }

/* ---End: Page update functions ---*/

/* --- Event Listener Actions ---*/

    document.body.addEventListener('click', function(e) {
        e.preventDefault

        if (e.target.classList.contains('newfav')){
            
            console.log('Eventlistner~~newfav is resetting classes and styles for request. ')
            $nav1.classList.remove('active')
            $nav2.classList.add('active')
            $nav3.classList.add('active')
            $search.style.display = 'flex'
            $initialWhiteout.style.display = 'none'
            $favs.style.display = 'none'
            $info.style.display = 'none'
            $full.style.display = 'none'
            $dailyBrowser.style.display = 'flex'
            document.body.classList.remove('initial-state')
            

            console.log('Eventlistner~~newfav is calling: updatePage() ')
            updatePage()

            
        }

        if (e.target.classList.contains('more-link')) {

            $dBrowExpl.innerHTML = `${displayEntry.explanation + "\u00A0\u00A0\u00A0"} <a class="less-link" href="#" >Less</a>`
        }

        if (e.target.classList.contains('less-link')) {

            updateExpl()
        }

        if (e.target.classList.contains('home')) {

            

            console.log('Eventlistner is calling: displayFavGrid() ')
            if (favs){

                if (favs.length > 0 ) {
                    displayFavGrid()
                    $favs.style.display = 'flex'
                    $nav1.classList.add('active')
                    $nav2.classList.remove('active')
                    $nav3.classList.remove('active')
                    $initialWhiteout.style.display = 'none'
                    $dailyBrowser.style.display = 'none'
                    $full.style.display = 'none'
                    $search.style.display = 'none'
                    document.body.classList.remove('initial-state')

                } else {

                    displayFavGrid()
                    $favs.style.display = 'flex'
                    $nav1.classList.add('active')
                    $nav2.classList.remove('active')
                    $nav3.classList.remove('active')
                    $initialWhiteout.style.display = 'flex'
                    $full.style.display = 'none'
                    $dailyBrowser.style.display = 'none'
                    $search.style.display = 'none'
                    document.body.classList.add('initial-state')
                }
            } else {

                displayFavGrid()
                $favs.style.display = 'flex'
                $nav1.classList.add('active')
                $nav2.classList.remove('active')
                $nav3.classList.remove('active')
                $full.style.display = 'none'
                $initialWhiteout.style.display = 'flex'
                $dailyBrowser.style.display = 'none'
                $search.style.display = 'none'
                document.body.classList.add('initial-state')
            }
            
            
        }
        
        if (e.target.closest('.daily-browser-back')) {
        
                 
            --daysback 
            browseArray()
            
            updatePage()
            
        }

        if (e.target.closest('.daily-browser-forward')) {

            ++daysback 
            browseArray()
            updatePage()
        }

        if (e.target.closest('.DBrow-image')) {
            console.log(' Event listener~~.DBrow-image :  USER is clicking on the image')
            if (infoOverlay == false) {
                console.log(' Event listener~~.DBrow-image: infoOverlay == false,calling: updateOverlayInfo()')
                infoOverlay = true
                $favs.style.display = 'none'
                updateOverlayInfo()
            } else {
                infoFull = true
                console.log(' Event listener~~.DBrow-image: infoOverlay == true,calling: updateOverlayFull()')
                $favs.style.display = 'none'
                updateOverlayFull()
            }

            
            
        }

        if (e.target.closest('.back-x')) {
            
            if (infoFull == false) {
                infoOverlay = false
                $dailyBrowser.style.display = 'flex'
                $pageHeader.style.display = 'flex'
                $search.style.display = 'flex'
                $info.style.display = 'none'
                document.body.classList.remove('body-overlay')
                checkForwardaArrow()
                checkBackArrow()
            } else {
                
                $full.style.display= 'none' 
                infoFull = false
                $favs.style.display = 'none'
                $info.style.display = 'flex'
                checkForwardaArrow()
                checkBackArrow()
            
            }
            
        }



        if (e.target.closest('.fav-button')){

            if (localStorage.getItem('favs')) {

                if(!checkForFavs(isfav)) {
                    favs.push(displayEntry)
                    console.log('new favourite added to favourites with date = ' + favs[favs.length-1].date)
                    localStorage.setItem('favs', JSON.stringify(favs))
                } else {
                    
                    console.log('removing a favourite with date = ' + displayEntry.date)
                    favs.splice(favIndex)
                    localStorage.setItem('favs', JSON.stringify(favs))
                }
                console.log([favs])
            } else {

                favs = []
                favs.push(displayEntry)
                    console.log('new favourite added to favourites with date = ' + favs[favs.length-1].date)
                    localStorage.setItem('favs', JSON.stringify(favs))      
            }
            updateFavButtons()
            
            }
            
           

        if (e.target.closest('.CTA')){
            $nav1.classList.remove('active')
            $nav2.classList.add('active')
            $nav3.classList.add('active')
            $search.style.display = 'flex'
            $initialWhiteout.style.display = 'none'
            $favs.style.display = 'none'
            $info.style.display = 'none'
            $full.style.display = 'none'
            $dailyBrowser.style.display = 'flex'
            document.body.classList.remove('initial-state')

            
            updatePage()
        }

        if (e.target.classList.contains('favGridImg')) {
            const el = e.target

            console.log('--- Event listener~favGridImg~ ---')

            //From: https://gomakethings.com/managing-data-attributes-with-the-dataset-property-in-vanilla-javascript/

            // console.log([el].childNodes[0].nodeValue)
            
            let data = el.dataset
            // console.log('data: ')
            // console.log([data])
            console.log('::::::DATE::::'+ data.date)

        
            requestedDate = data.date

            sessionStorage.setItem('selectedDate',data.date)
        
            console.log('Event listener~favGridImg~ running calcOneMonthB4AndAftr()---')
            calcOneMonthB4AndAftr()
            console.log('Event listener~favGridImg~ confirming new start date of: ' + oneMonthBackwardFromRequested + 'and new end date of: ' + oneMonthForwardFromRequested)
            console.log('Event listener~favGridImg~ USER Selected Date: ' + requestedDate)
            console.log('Event listener~favGridImg~ clearing old data: ')
            sessionStorage.removeItem('currentData')
            console.log('Event listener~favGridImg~ running getb4Aft()  ')
            getb4Aft(oneMonthBackwardFromRequested,oneMonthForwardFromRequested)
            console.log('Event listener~favGridImg~ running updateOverlayInfo()  ')
            updateOverlayInfo()
            

            
            $nav1.classList.remove('active')
            $nav2.classList.add('active')
            $nav3.classList.add('active')

            console.log('--- End Event listener~favGridImg~ ---')
            
            
            
           
        }

    }
    )

   

    document.body.addEventListener('submit', function(e){
        console.log('--- Event listener~submit~ ---')
        e.preventDefault()
        const selectedDate = datePicker.elements['date']
        
        requestedDate = selectedDate.value
        sessionStorage.setItem('selectedDate',selectedDate.value)
        
        console.log('Event listener~submit~ running calcOneMonthB4AndAftr()---')
        calcOneMonthB4AndAftr()
        console.log('Event listener~submit~ confirming new start date of: ' + oneMonthBackwardFromRequested + 'and new end date of: ' + oneMonthForwardFromRequested)
        console.log('Event listener~submit~ USER Selected Date: ' + requestedDate)
        console.log('Event listener~submit~ clearing old data: ')
        sessionStorage.removeItem('currentData')
        console.log('Event listener~submit~ running getb4Aft()  ')
        getb4Aft(oneMonthBackwardFromRequested,oneMonthForwardFromRequested)
        console.log('Event listener~submit~ running updateOverlayInfo()  ')
        updatePage()
        
              
        console.log('--- End Event listener~submit~ ---')
    })
/* ---End: Event Listener Actions ---*/




