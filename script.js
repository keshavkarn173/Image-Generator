const searchimage = document.querySelector('#search-image')
const searchbox = document.querySelector('#search-box')
const searchresult = document.querySelector('#search-result')
const show_more_btn = document.querySelector('#show-more-btn')
const searchbtn = document.querySelector('#btn')
const accesskey = 'TTnXptwbPD6sS2BkkkxVM4rbL4zcGwcoTRdd9mkiRJ8'

let keyword = ''
let page = 1 ;
async function searchimages(){
    keyword = searchbox.value ;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

    const response = await fetch(url) ;
    const data = await response.json() ;
    const results = data.results ;

    if(page === 1){
        searchresult.innerHTML = "" ;
    }
 

    results.map((result) => {
        const image = document.createElement('img') ;
        image.src = result.urls.small ; // ye jo urls.small hai ye jab tum unsplash se fetch karoge to uske saath jo object aata hai us object me ye bhi information rehta hai jise tum easily access kar sakte ho

        const imagelink = document.createElement('a') ;
        imagelink.href = result.links.html
        imagelink.target = '_blank' ;
// yaha par imagelink ke andar image store kiya hai naa ki image ke andar imagelink because tum image ko 1 link bhi bana sakte ho aur ye best way hai isliye aisa kiya gaya hai
        imagelink.appendChild(image) ;
        searchresult.appendChild(imagelink)
    })

    show_more_btn.style.display = 'block' ;

}

searchimage.addEventListener("submit" , (e) => {
    e.preventDefault() ;
    page = 1 ;
    searchimages() ;
})

show_more_btn.addEventListener('click' , ()=>{
    page++ ;
    searchimages() ;
})