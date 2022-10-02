const API = 'https://youtube-v31.p.rapidapi.com/search?q=prometheus%2Bgreek%2Bmithology&part=snippet%2Cid&regionCode=US&maxResults=10&order=date';

//Object with the heathers to fetch the first 10 videos when searching: 'Prometheus greek mithology';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7736a58f76msh35ade376ff04e52p1a0287jsnf58241698e39',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

const content = null || document.querySelector('#content');

const fetchData = async function(){
    let response = await fetch(API, options);
    let data = await response.json();
    return data;
};

(async()=>{
    try{
        const data = await fetchData();
        const videos = data.items;
        console.log(videos[0].snippet.title);

        let view =  videos.map(video=>{
                let html = `<div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>`
            return html;
            }).join('');
        console.log(view);
        content.innerHTML = view;
    }catch(error){
        console.log(error);
    }
})();
