import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js';
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, setPersistence, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

var user_name = window.localStorage.getItem('userName')
console.log(user_name)

const firebaseConfig = {
    databaseURL: "https://gdsc-solution-pydb-default-rtdb.asia-southeast1.firebasedatabase.app",
    apiKey: "AIzaSyAnYxWWdqD4nPSIGVCmKZv_Y_oKHQK6P7A",
    authDomain: "gdsc-solution-pydb.firebaseapp.com",
    projectId: "gdsc-solution-pydb",
    storageBucket: "gdsc-solution-pydb.appspot.com",
    messagingSenderId: "999689302163",
    appId: "1:999689302163:web:8f9a5328c64a99958c5d66",
    measurementId: "G-CJT6EKCHHH"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app)

const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button');
const itemsDB = ref(database, `community`);
addButton.addEventListener("click", addToDB);

function filterProfanity(text) {
    const profanityList = ["abbo","abo","abortion","abuse","addict","addicts","african","alla","allah","alligatorbait","anal","analannie","analsex","angie","anus","arabs","areola","argie","aroused","arse","arsehole","ass","assassin","assassinate","assassination","assault","assbagger","assblaster","assclown","asscowboy","asses","assfuck","assfucker","asshat","asshole","assholes","asshore","assjockey","asskiss","asskisser","assklown","asslick","asslicker","asslover","assman","assmonkey","assmunch","assmuncher","asspacker","asspirate","asspuppies","assranger","asswhore","asswipe","athletesfoot","attack","australian","babe","babies","backdoor","backdoorman","backseat","badfuck","balllicker","balls","ballsack","banging","baptist","barelylegal","barf","barface","barfface","bast","bastard ","bazongas","bazooms","beaner","beast","beastality","beastial","beastiality","beatoff","beat-off","beatyourmeat","beaver","bestial","bestiality","bi","biatch","bible","bicurious","bigass","bigbastard","bigbutt","bigger","bisexual","bi-sexual","bitch","bitcher","bitches","bitchez","bitchin","bitching","bitchslap","bitchy","biteme","black","blackman","blackout","blacks","blind","blow","blowjob","boang","bogan","bohunk","bollick","bollock","bomb","bombers","bombing","bombs","bomd","bondage","boner","bong","boob","boobies","boobs","booby","boody","boom","boong","boonga","boonie","booty","bootycall","bountybar","bra","brea5t","breast","breastjob","breastlover","breastman","brothel","bugger","buggered","buggery","bullcrap","bulldike","bulldyke","bullshit","bumblefuck","bumfuck","bunga","bunghole","buried","burn","butchbabes","butchdike","butchdyke","butt","buttbang","butt-bang","buttface","buttfuck","butt-fuck","buttfucker","butt-fucker","buttfuckers","butt-fuckers","butthead","buttman","buttmunch","buttmuncher","buttpirate","buttplug","buttstain","byatch","cacker","cameljockey","cameltoe","canadian","cancer","carpetmuncher","carruth","catholic","catholics","cemetery","chav","cherrypopper","chickslick","children's","chin","chinaman","chinamen","chinese","chink","chinky","choad","chode","christ","christian","church","cigarette","cigs","clamdigger","clamdiver","clit","clitoris","clogwog","cocaine","cock","cockblock","cockblocker","cockcowboy","cockfight","cockhead","cockknob","cocklicker","cocklover","cocknob","cockqueen","cockrider","cocksman","cocksmith","cocksmoker","cocksucer","cocksuck ","cocksucked ","cocksucker","cocksucking","cocktail","cocktease","cocky","cohee","coitus","color","colored","coloured","commie","communist","condom","conservative","conspiracy","coolie","cooly","coon","coondog","copulate","cornhole","corruption","cra5h","crabs","crack","crackpipe","crackwhore","crack-whore","crap","crapola","crapper","crappy","crash","creamy","crime","crimes","criminal","criminals","crotch","crotchjockey","crotchmonkey","crotchrot","cum","cumbubble","cumfest","cumjockey","cumm","cummer","cumming","cumquat","cumqueen","cumshot","cunilingus","cunillingus","cunn","cunnilingus","cunntt","cunt","cunteyed","cuntfuck","cuntfucker","cuntlick ","cuntlicker ","cuntlicking ","cuntsucker","cybersex","cyberslimer","dago","dahmer","dammit","damn","damnation","damnit","darkie","darky","datnigga","dead","deapthroat","death","deepthroat","defecate","dego","demon","deposit","desire","destroy","deth","devil","devilworshipper","dick","dickbrain","dickforbrains","dickhead","dickless","dicklick","dicklicker","dickman","dickwad","dickweed","diddle","die","died","dies","dike","dildo","dingleberry","dink","dipshit","dipstick","dirty","disease","diseases","disturbed","dive","dix","dixiedike","dixiedyke","doggiestyle","doggystyle","dong","doodoo","doo-doo","doom","dope","dragqueen","dragqween","dripdick","drug","drunk","drunken","dumb","dumbass","dumbbitch","dumbfuck","dyefly","dyke","easyslut","eatballs","eatme","eatpussy","ecstacy","ejaculate","ejaculated","ejaculating ","ejaculation","enema","enemy","erect","erection","ero","escort","ethiopian","ethnic","european","evl","excrement","execute","executed","execution","executioner","explosion","facefucker","faeces","fag","fagging","faggot","fagot","failed","failure","fairies","fairy","faith","fannyfucker","fart","farted ","farting ","farty ","fastfuck","fat","fatah","fatass","fatfuck","fatfucker","fatso","fckcum","fear","feces","felatio ","felch","felcher","felching","fellatio","feltch","feltcher","feltching","fetish","fight","filipina","filipino","fingerfood","fingerfuck ","fingerfucked ","fingerfucker ","fingerfuckers","fingerfucking ","fire","firing","fister","fistfuck","fistfucked ","fistfucker ","fistfucking ","fisting","flange","flasher","flatulence","floo","flydie","flydye","fok","fondle","footaction","footfuck","footfucker","footlicker","footstar","fore","foreskin","forni","fornicate","foursome","fourtwenty","fraud","freakfuck","freakyfucker","freefuck","fu","fubar","fuc","fucck","fuck","fucka","fuckable","fuckbag","fuckbuddy","fucked","fuckedup","fucker","fuckers","fuckface","fuckfest","fuckfreak","fuckfriend","fuckhead","fuckher","fuckin","fuckina","fucking","fuckingbitch","fuckinnuts","fuckinright","fuckit","fuckknob","fuckme ","fuckmehard","fuckmonkey","fuckoff","fuckpig","fucks","fucktard","fuckwhore","fuckyou","fudgepacker","fugly","fuk","fuks","funeral","funfuck","fungus","fuuck","gangbang","gangbanged ","gangbanger","gangsta","gatorbait","gay","gaymuthafuckinwhore","gaysex ","geez","geezer","geni","genital","german","getiton","gin","ginzo","gipp","girls","givehead","glazeddonut","gob","god","godammit","goddamit","goddammit","goddamn","goddamned","goddamnes","goddamnit","goddamnmuthafucker","goldenshower","gonorrehea","gonzagas","gook","gotohell","goy","goyim","greaseball","gringo","groe","gross","grostulation","gubba","gummer","gun","gyp","gypo","gypp","gyppie","gyppo","gyppy","hamas","handjob","hapa","harder","hardon","harem","headfuck","headlights","hebe","heeb","hell","henhouse","heroin","herpes","heterosexual","hijack","hijacker","hijacking","hillbillies","hindoo","hiscock","hitler","hitlerism","hitlerist","hiv","ho","hobo","hodgie","hoes","hole","holestuffer","homicide","homo","homobangers","homosexual","honger","honk","honkers","honkey","honky","hook","hooker","hookers","hooters","hore","hork","horn","horney","horniest","horny","horseshit","hosejob","hoser","hostage","hotdamn","hotpussy","hottotrot","hummer","husky","hussy","hustler","hymen","hymie","iblowu","idiot","ikey","illegal","incest","insest","intercourse","interracial","intheass","inthebuff","israel","israeli","israel's","italiano","itch","jackass","jackoff","jackshit","jacktheripper","jade","jap","japanese","japcrap","jebus","jeez","jerkoff","jesus","jesuschrist","jew","jewish","jiga","jigaboo","jigg","jigga","jiggabo","jigger ","jiggy","jihad","jijjiboo","jimfish","jism","jiz ","jizim","jizjuice","jizm ","jizz","jizzim","jizzum","joint","juggalo","jugs","junglebunny","kaffer","kaffir","kaffre","kafir","kanake","kid","kigger","kike","kill","killed","killer","killing","kills","kink","kinky","kissass","kkk","knife","knockers","kock","kondum","koon","kotex","krap","krappy","kraut","kum","kumbubble","kumbullbe","kummer","kumming","kumquat","kums","kunilingus","kunnilingus","kunt","ky","kyke","lactate","laid","lapdance","latin","lesbain","lesbayn","lesbian","lesbin","lesbo","lez","lezbe","lezbefriends","lezbo","lezz","lezzo","liberal","libido","licker","lickme","lies","limey","limpdick","limy","lingerie","liquor","livesex","loadedgun","lolita","looser","loser","lotion","lovebone","lovegoo","lovegun","lovejuice","lovemuscle","lovepistol","loverocket","lowlife","lsd","lubejob","lucifer","luckycammeltoe","lugan","lynch","macaca","mad","mafia","magicwand","mams","manhater","manpaste","marijuana","mastabate","mastabater","masterbate","masterblaster","mastrabator","masturbate","masturbating","mattressprincess","meatbeatter","meatrack","meth","mexican","mgger","mggor","mickeyfinn","mideast","milf","minority","mockey","mockie","mocky","mofo","moky","moles","molest","molestation","molester","molestor","moneyshot","mooncricket","mormon","moron","moslem","mosshead","mothafuck","mothafucka","mothafuckaz","mothafucked ","mothafucker","mothafuckin","mothafucking ","mothafuckings","motherfuck","motherfucked","motherfucker","motherfuckin","motherfucking","motherfuckings","motherlovebone","muff","muffdive","muffdiver","muffindiver","mufflikcer","mulatto","muncher","munt","murder","murderer","muslim","naked","narcotic","nasty","nastybitch","nastyho","nastyslut","nastywhore","nazi","necro","negro","negroes","negroid","negro's","nig","niger","nigerian","nigerians","nigg","nigga","niggah","niggaracci","niggard","niggarded","niggarding","niggardliness","niggardliness's","niggardly","niggards","niggard's","niggaz","nigger","niggerhead","niggerhole","niggers","nigger's","niggle","niggled","niggles","niggling","nigglings","niggor","niggur","niglet","nignog","nigr","nigra","nigre","nip","nipple","nipplering","nittit","nlgger","nlggor","nofuckingway","nook","nookey","nookie","noonan","nooner","nude","nudger","nuke","nutfucker","nymph","ontherag","oral","orga","orgasim ","orgasm","orgies","orgy","osama","paki","palesimian","palestinian","pansies","pansy","panti","panties","payo","pearlnecklace","peck","pecker","peckerwood","pee","peehole","pee-pee","peepshow","peepshpw","pendy","penetration","peni5","penile","penis","penises","penthouse","period","perv","phonesex","phuk","phuked","phuking","phukked","phukking","phungky","phuq","pi55","picaninny","piccaninny","pickaninny","piker","pikey","piky","pimp","pimped","pimper","pimpjuic","pimpjuice","pimpsimp","pindick","piss","pissed","pisser","pisses ","pisshead","pissin ","pissing","pissoff ","pistol","pixie","pixy","playboy","playgirl","pocha","pocho","pocketpool","pohm","polack","pom","pommie","pommy","poo","poon","poontang","poop","pooper","pooperscooper","pooping","poorwhitetrash","popimp","porchmonkey","porn","pornflick","pornking","porno","pornography","pornprincess","pot","poverty","premature","pric","prick","prickhead","primetime","propaganda","pros","prostitute","protestant","pu55i","pu55y","pube","pubic","pubiclice","pud","pudboy","pudd","puddboy","puke","puntang","purinapricness","puss","pussie","pussies","pussy","pussycat","pussyeater","pussyfucker","pussylicker","pussylips","pussylover","pussypounder","pusy","quashie","queef","queer","quickie","quim","ra8s","rabbi","racial","racist","radical","radicals","raghead","randy","rape","raped","raper","rapist","rearend","rearentry","rectum","redlight","redneck","reefer","reestie","refugee","reject","remains","rentafuck","republican","rere","retard","retarded","ribbed","rigger","rimjob","rimming","roach","robber","roundeye","rump","russki","russkie","sadis","sadom","samckdaddy","sandm","sandnigger","satan","scag","scallywag","scat","schlong","screw","screwyou","scrotum","scum","semen","seppo","servant","sex","sexed","sexfarm","sexhound","sexhouse","sexing","sexkitten","sexpot","sexslave","sextogo","sextoy","sextoys","sexual","sexually","sexwhore","sexy","sexymoma","sexy-slim","shag","shaggin","shagging","shat","shav","shawtypimp","sheeney","shhit","shinola","shit","shitcan","shitdick","shite","shiteater","shited","shitface","shitfaced","shitfit","shitforbrains","shitfuck","shitfucker","shitfull","shithapens","shithappens","shithead","shithouse","shiting","shitlist","shitola","shitoutofluck","shits","shitstain","shitted","shitter","shitting","shitty ","shoot","shooting","shortfuck","showtime","sick","sissy","sixsixsix","sixtynine","sixtyniner","skank","skankbitch","skankfuck","skankwhore","skanky","skankybitch","skankywhore","skinflute","skum","skumbag","slant","slanteye","slapper","slaughter","slav","slave","slavedriver","sleezebag","sleezeball","slideitin","slime","slimeball","slimebucket","slopehead","slopey","slopy","slut","sluts","slutt","slutting","slutty","slutwear","slutwhore","smack","smackthemonkey","smut","snatch","snatchpatch","snigger","sniggered","sniggering","sniggers","snigger's","sniper","snot","snowback","snownigger","sob","sodom","sodomise","sodomite","sodomize","sodomy","sonofabitch","sonofbitch","sooty","sos","soviet","spaghettibender","spaghettinigger","spank","spankthemonkey","sperm","spermacide","spermbag","spermhearder","spermherder","spic","spick","spig","spigotty","spik","spit","spitter","splittail","spooge","spreadeagle","spunk","spunky","squaw","stagg","stiffy","strapon","stringer","stripclub","stroke","stroking","stupid","stupidfuck","stupidfucker","suck","suckdick","sucker","suckme","suckmyass","suckmydick","suckmytit","suckoff","suicide","swallow","swallower","swalow","swastika","sweetness","syphilis","taboo","taff","tampon","tang","tantra","tarbaby","tard","teat","terror","terrorist","teste","testicle","testicles","thicklips","thirdeye","thirdleg","threesome","threeway","timbernigger","tinkle","tit","titbitnipply","titfuck","titfucker","titfuckin","titjob","titlicker","titlover","tits","tittie","titties","titty","tnt","toilet","tongethruster","tongue","tonguethrust","tonguetramp","tortur","torture","tosser","towelhead","trailertrash","tramp","trannie","tranny","transexual","transsexual","transvestite","triplex","trisexual","trojan","trots","tuckahoe","tunneloflove","turd","turnon","twat","twink","twinkie","twobitwhore","uck","uk","unfuckable","upskirt","uptheass","upthebutt","urinary","urinate","urine","usama","uterus","vagina","vaginal","vatican","vibr","vibrater","vibrator","vietcong","violence","virgin","virginbreaker","vomit","vulva","wab","wank","wanker","wanking","waysted","weapon","weenie","weewee","welcher","welfare","wetb","wetback","wetspot","whacker","whash","whigger","whiskey","whiskeydick","whiskydick","whit","whitenigger","whites","whitetrash","whitey","whiz","whop","whore","whorefucker","whorehouse","wigger","willie","williewanker","willy","wn","wog","women's","wop","wtf","wuss","wuzzie","xtc","xxx","yankee","yellowman","zigabo","zipperhead"];
    const regex = new RegExp(profanityList.map(word => {
        const wordPattern = word.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const substitutionPattern = word.replace(/[aeiou]/gi, '[aeiou@*%!&#]');
        return `\\b(?:${wordPattern}|${substitutionPattern})\\b`;
    }).join('|'), 'gi');

    return text.replace(regex, function (match) {
        return '*'.repeat(match.length);
    });
}

function addToDB () {
    const userInput = inputField.value;
    const filteredText = filterProfanity(userInput);
    console.log(filteredText)
    let inputVal = filteredText;
    const d = new Date();
    let time = d.toLocaleString();
    let userContent = [user_name,inputVal,time]
    if (inputVal.length>0) {
        push(itemsDB, userContent);
        console.log(`${inputVal} added to database`);
        clearInput();
    }
    else {
        let invalid = document.getElementById('input-field');
        invalid.classList.add('shake')
        invalid.addEventListener('animationend', () => {
            invalid.classList.remove('shake')
        })
    }
}

function showAlert(message) {
    let alertBox = document.createElement('div')
    alertBox.classList.add('alert-box')
    alertBox.id = "alert";
    alertBox.innerHTML = message;
    document.body.appendChild(alertBox)
    alertBox.addEventListener('animationend', function() {
        alertBox.classList.add('disappear')
    })
}

function clearInput () {
    inputField.value = "";
}

onValue(itemsDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemList = Object.entries(snapshot.val())
        document.getElementById('cart-items').innerHTML = "";
        for (let i of itemList) {
            let curItem = i;
            console.log(curItem)
            addItem(curItem);
        }
    }
    else {
        document.getElementById('cart-items').innerHTML = "";
    }
})

function addItem (val) {
    let curItemKey = val[0]
    let curItemUser = val[1][0]
    let curItemTime = val[1][2]
    console.log(curItemUser)
    let curItemVal = val[1][1]
    var cart = document.getElementById('cart-items')
    var item = document.createElement('li');
    var msg_div = document.createElement('div'); 
    const d = new Date()
    var date_time = document.createElement('p');
    date_time.classList.add('date-time');
    date_time.innerHTML = curItemTime;
    msg_div.classList.add('msg-div')
    var name_header = document.createElement('p');
    name_header.classList.add('name-header')
    var msg = document.createElement('p');
    msg.classList.add('msg')
    name_header.innerHTML = curItemUser;
    item.classList.add('cart-item')
    msg.innerHTML = curItemVal;
    item.appendChild(name_header); item.appendChild(msg); item.appendChild(date_time);
    msg_div.appendChild(item);
    if (item.firstChild.innerHTML == user_name) {
        msg_div.style.justifyContent = "right";
        item.style.backgroundColor = "white";
        item.style.borderRadius = "10px 10px 0 10px"
    }
    cart.appendChild(msg_div); 
    item.addEventListener('dblclick', function() {
        let itemLoc = ref(database, `community/${curItemKey}`)
        if (item.firstChild.innerHTML == `${user_name}`) {
            remove(itemLoc)
        } 
    })
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user)
        console.log(uid);
        const display_name = auth.currentUser.displayName;
        document.getElementById('app-title').innerHTML = `Welcome ${display_name}`
        console.log(auth.currentUser.displayName)
        // var userId = document.createElement('div')
        // userId.id = "user-id";
        // userId.innerHTML = uid;
        // userId.style.display = "none";
        // document.body.appendChild(userId)
        // ...
    } else {
        // User is signed out
        // ...
        window.location.href = "index.html";
    }
});
