// global variables
var screenScrollY;
var sideMenu = false;
var translateX = 0;

// elements
var navbarEl = document.getElementById('navbar');
var menuEl = document.querySelectorAll('header .menues a');
var sideMenuEl = document.getElementById('sideMenu');
var menuIconEl = document.getElementById('menuIcon');
var menuIconDivEl = document.getElementById('menuIconDiv');
var cardsEl = document.querySelectorAll('.card');
var leftArrowEl = document.getElementById('left-arrow');
var rightArrowEl = document.getElementById('right-arrow');
const districtGallery = document.getElementById("district-gallery");


// changes when scroll page
document.addEventListener('scroll', () => {
    screenScrollY = window.scrollY;
    
    if(screenScrollY > 100){
        navbarEl.style.backgroundColor = '#e8e9eb';
        navbarEl.style.color = '#160647';
        navbarEl.style.top = 0;

        menuEl.forEach(menu =>{
            menu.style.color = "#160647b4";
            menu.addEventListener('mouseover', () => {
                menu.style.color = "#2F006B"
            })
            menu.addEventListener('mouseleave', () => {
                menu.style.color = "#160647"
            })
            
        })

        menuIconEl.style.color = "#160647b4"        
    }
    else{
        navbarEl.style.backgroundColor = 'transparent';
        navbarEl.style.color = '#e8e9eb';
        navbarEl.style.top = '5px';
        menuEl.forEach(menu =>{
            menu.style.color = "#e1e1e1";
            menu.addEventListener('mouseover', () => {
                menu.style.color = "#f3f3f3";
            })
            menu.addEventListener('mouseleave', () => {
                menu.style.color = "#e1e1e1";
            })
        })
        menuIconEl.style.color = "#bcbcbc"
    }
})

// side menu toggle
menuIconEl.addEventListener('click', () => {
    sideMenu = !sideMenu;

    if (sideMenu) {
        // menuIconDivEl.innerHTML = '<i class="fa fa-times menu-icon" id="menuIcon" aria-hidden="true"></i>';   
        sideMenuEl.style.display = 'flex';
        window.addEventListener('resize', ()=>{
            sideMenu = false
            if (window.innerWidth >= 1200) {
                sideMenu = false;
                    sideMenuEl.style.display = 'none'
            }
            else{
                sideMenu = true;
                sideMenuEl.style.display = 'flex';
            }
        })       
    }
    else{
        // menuIconDivEl.innerHTML = '<i class="fa fa-bars menu-icon" id="menuIcon" aria-hidden="true"></i>'
        sideMenuEl.style.display = 'none';
        sideMenu = false;

    }
})

// function for explore more button
function exploreMore() {
    window.scrollTo({
        top: window.innerHeight + window.screenScrollY,
        behavior: 'smooth'
    }) 
}

// distination section right left arrow function
leftArrowEl.addEventListener('click', ()=>{   
    if (translateX < 820) {
        translateX += 410
            cardsEl.forEach(card => {
            card.style.transform = "translateX(" + translateX + "px)";
        })
        leftArrowEl.style.display = 'flex';       
    }   
    else if (translateX > 410) {
        leftArrowEl.style.display = 'none';       
    }   
})

rightArrowEl.addEventListener('click', ()=>{   
    if (translateX > -820) {
        translateX -= 410
            cardsEl.forEach(card => {
            card.style.transform = "translateX(" + translateX + "px)";
        })
        rightArrowEl.style.display = 'flex';       
    }   
    else if (translateX < -410) {
        rightArrowEl.style.display = 'none';       
    }   
})

// Images District vise

function displayPlaces(district){
    districtGallery.innerHTML = ""

    var ampara = ['https://voiceofmedia.lk/wp-content/uploads/2023/04/hu.jpg', 'https://us.lakpura.com/cdn/shop/files/LKI9256041-01-E.jpg?v=1661430881&width=3840', 'https://srilankafinder.com/wp-content/uploads/2017/10/Lahugala-Sanctuary-700x500.jpg']
    var anuradhapura = ['https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/06/27/c813895d73c20cdb3d219e61d8e03b18_1000x1000.jpg', 'https://lanka-houses.com/media/Sightseeings/Isurumuniya_Temple/7.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_utp9BrNLz-Dfg7fHnFD1-qBT8sb0q-khg&s']
    var badulla = ['https://www.attractionsinsrilanka.com/wp-content/uploads/2019/09/Dunhinda-Falls-2.jpg', 'https://www.lovidhu.com/uploads/posts/2021/05//nine-arch-bridge-demodara-sri-lanka-945x630.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKU9V2wCSBTHYYNbjoi5mN6kh9B6Ag8ebXBg&s']
    var batticaloa = ['https://upload.wikimedia.org/wikipedia/commons/7/7b/Batticaloa_Lagoon.jpg', 'https://www.lakpura.com/images/LK94009246-02-E.JPG', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUBTHj32MY5YgXhaF2faA88Z_MKd-ujrLXqQ&s']
    var colombo = ['https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/648a5740fea840001d419200.jpg', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/7c/8a/e0/colombo-national-museum.jpg?w=900&h=-1&s=1', 'https://i.ytimg.com/vi/rwjo8rv10mM/maxresdefault.jpg']
    var galle = ['https://slrailwayforum.com/content/images/2023/04/Galle-Fort.jpg', 'https://d2ffdt0zxqize3.cloudfront.net/2022/10/PXL_20221009_023856632_2.jpg', 'https://www.ceylonexpeditions.com/medias/destination_places/big/49/hikkaduwa-marine-national-park-sri-lanka-5-1.jpg']
    var gampaha = ['https://www.lankatourexperts.com/wp-content/uploads/2023/11/Negombo-Beach-Sri-Lanka.webp', 'https://island.lk/wp-content/uploads/2021/11/madiwela.jpg', 'https://srilankafinder.com/wp-content/uploads/2017/10/Henarathgoda-Botanical-Garden-3.jpg']
    var hambantota = ['https://au.lakpura.com/cdn/shop/products/LK710A2062-02-E.jpg?v=1679654714&width=1445', 'https://c.files.bbci.co.uk/14BA6/production/_97120948_040777609.jpg', 'https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2021/07/mirijjawila-09.jpg?ssl=1']
    var jaffna = ['https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2013/12/DSCF2823.jpg?ssl=1', 'https://explore.vacations/wp-content/uploads/2023/06/Jaffna-Fort-Sri-Lanka-1.jpg', 'https://www.attractionsinsrilanka.com/wp-content/uploads/2020/05/Keerimalai-Hot-Springs-1.jpg']
    var kalutara = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoz-Kv_HcrZFsgTGWrMHG7dWNghDpmtFOV7w&s', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/fc/97/4d/caption.jpg?w=900&h=500&s=1', 'https://static.wixstatic.com/media/ba255b_2a3c5c546dba4711987ec4c727ceac50~mv2.jpg/v1/fill/w_1920,h_1101,al_c,q_90/Pahiyangala_Cave_14.jpg']
    var kegalle = ['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5b/ae/47/the-orphanage-was-founded.jpg?w=1200&h=-1&s=1', 'https://lh3.googleusercontent.com/pw/AM-JKLUH7XEFzHH-X3Xl1cDhgl7jd5-uwcCd9qGFawCipw-TG2TMYUy2ctFj51MWnwxonJqYWGiE1dZ8XfMQZLrIpPb5wtvpLVthMtFmO_XorvuUEbOpGNNrzrXXF2Q57h6R8w1H10Uarv1fqRHy3EjLmzT8OA=w1061-h779-no?authuser=2', 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/489862778.jpg?k=1c5e49a4745e2869bea560367bc290745155767c07d102d622bb9460eece509a&o=&hp=1']
    var kilinochchi = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnv78R-0FjfTa1s-H5H2_VHyypO_JvCbHbVg&s', 'https://www.attractionsinsrilanka.com/wp-content/uploads/2020/05/Elephant-Pass-War-Memorial.jpg', 'https://content.jdmagicbox.com/comp/tiruvannamalai/e6/9999p4175.4175.170315150651.v7e6/catalogue/apsara-nh-66-chengam-road-tiruvannamalai-water-parks-1cjkra7.jpg']
    var kurunegala = ['https://monomousumi.com/wp-content/uploads/Ckz9UmdVEAEIY2Y.jpg', 'https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/yapahuwa-06-900_orig.jpg', 'https://i0.wp.com/amazinglanka.com/wp/wp-content/uploads/2013/09/IMG_2019.jpg?resize=640%2C359&ssl=1']
    var mannar = ['https://mahaweli.lk/wp-content/uploads/2024/02/Mannar-Fort.jpg', 'https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2024/06/earth_from_space_adam_s_bridge/26180278-1-eng-GB/Earth_from_Space_Adam_s_Bridge.jpg', 'https://static.wixstatic.com/media/ba255b_7c84d4a295b3416b826cd465cea91380~mv2.jpg/v1/fill/w_1197,h_1084,al_c,q_85/Sri_Lanka_723awix.jpg']
    var matale = ['https://tripjive.com/wp-content/uploads/2024/10/Day-trip-to-Knuckles-Mountain-Range-from-Kandy.jpg', 'https://www.lakpura.com/images/LK94009697-01-E.JPG', 'https://wisdomleisure.com/wp-content/uploads/2023/05/caption-2.jpg']
    var matara = ['https://www.lovesrilanka.org/wp-content/uploads/2020/06/LSL_B2_Dondra-Head-Lighthouse_800x520.jpg', 'https://cdn.theatlantic.com/media/img/photo/2023/11/photos-star-forts/a01_1280046349-1/original.jpg', 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Dondra_Head_Lighthouse_-_ATennakoon.jpg']
    var monaragala = ['https://www.lakpura.com/images/LK94009912-01-E.JPG', 'https://tury.club/turyclub.img.php?src=7786c37b1057e8daa197cb1d7cc8aec7%2F2ptmhPHR%2F17mF5DWg_D.jpg&img=3604c858d7dec73777aef0606326e26d', 'https://www.bluelankatours.com/wp-content/uploads/2019/07/Gal-oya-national-park.jpg']
    var mullaitivu = ['https://dayouting.lk/img_uploads/tourist-places/4289781675840482.jpg', 'https://www.lakpura.com/images/LK94008142-04-E.JPG', 'https://sunwayholidays.lk/storage/destination/free-photo-of-people-standing-near-shipwrec-1325.jpg']
    var nuwaraEliya = ['https://tripjive.com/wp-content/uploads/2024/10/Day-trip-to-Hakgala-Botanical-Gardens-from-Nuwara-Eliya.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfaOnOEbEYtbxjPt8KQa1s1YL1aU0E3lYzxA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQBMlT8E2GYtxPyOCIjpO8kE-4501dz9qfog&s']
    var polonnaruwa = ['https://www.lakpura.com/images/LK94009746-01-E.JPG', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/09/33/ed/59.jpg', 'https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/6212668_orig.jpg']
    var puttalam = ['https://kitejungle.com/wp-content/uploads/2017/03/kalpitiya-lagoon-kite.jpg', 'https://www.sundaytimes.lk/211010/uploads/93.jpg', 'https://www.attractionsinsrilanka.com/wp-content/uploads/2021/01/Baththalangunduwa.jpg']
    var ratnapura = ['https://www.ceylonexpeditions.com/medias/destination_places/big/110/sri-pada-adam-s-peak-sri-lanka.jpg', 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/20/e8/11.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRVs65Hd_QUuh9vkrg0bKtZmhclEXZb79Tag&s']
    var trincomalee = ['https://ramayanatours.com/wp-content/uploads/2017/03/Thiru-Koneswaram-Temple-1024x680.jpg', 'https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_PigeonIslandDesktop_1920x7001.jpg', 'https://cdn-cmaji.nitrocdn.com/KIFZgOjkuClQKBjYuclpHfqgfzwfBwhH/assets/images/optimized/rev-a5bb756/mysltravel.com/wp-content/uploads/2022/08/Kanniya-Hotspring-4.jpg']
    var vavuniya = ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbhp0k20UPf_fM1ZtAArGXTKVF8e6HfOCwJg&s', 'https://media.evendo.com/locations-resized/LandmarkImages/360x263/2ef52d23-e44b-44b5-be09-ca5c98a62887', 'https://www.trodly.com/pictures/attraction/x6482.jpg.pagespeed.ic.mYuOWMQKZe.jpg']

    var places = undefined

    if (district.title == 'ampara') {
        places = ampara
    }
    else if (district.title == 'anuradhapura') {
        places = anuradhapura
    }
    else if (district.title == 'badulla') {
        places = badulla
    }
    else if (district.title == 'batticaloa') {
        places = batticaloa
    }
    else if (district.title == 'colombo') {
        places = colombo
    }
    else if (district.title == 'galle') {
        places = galle
    }
    else if (district.title == 'gampaha') {
        places = gampaha
    }
    else if (district.title == 'hambantota') {
        places = hambantota
    }
    else if (district.title == 'jaffna') {
        places = jaffna
    }
    else if (district.title == 'kalutara') {
        places = kalutara
    }
    else if (district.title == 'kegalle') {
        places = kegalle
    }
    else if (district.title == 'kilinochchi') {
        places = kilinochchi
    }
    else if (district.title == 'kurunegala') {
        places = kurunegala
    }
    else if (district.title == 'mannar') {
        places = mannar
    }
    else if (district.title == 'matale') {
        places = matale
    }
    else if (district.title == 'matara') {
        places = matara
    }
    else if (district.title == 'monaragala') {
        places = monaragala
    }
    else if (district.title == 'mullaitivu') {
        places = mullaitivu
    }
    else if (district.title == 'nuwaraEliya') {
        places = nuwaraEliya
    }
    else if (district.title == 'polonnaruwa') {
        places = polonnaruwa
    }
    else if (district.title == 'puttalam') {
        places = puttalam
    }
    else if (district.title == 'ratnapura') {
        places = ratnapura
    }
    else if (district.title == 'trincomalee') {
        places = trincomalee
    }
    else if (district.title == 'vavuniya') {
        places = vavuniya
    }

    places.map(place => {
        // Get the parent element
        // Create the gallery section
        const gallerySection = document.createElement("div");
        gallerySection.className = "gallery-section";

        // Create the card
        const card = document.createElement("div");
        card.className = "card";

        // Create the image element
        const img = document.createElement("img");
        img.src = place
        img.alt = "Sample Image";

        // Append the image to the card
        card.appendChild(img);

        // Append the card to the gallery section
        gallerySection.appendChild(card);

        // Append the gallery section to the district gallery
        districtGallery.appendChild(gallerySection);
    })  
}


