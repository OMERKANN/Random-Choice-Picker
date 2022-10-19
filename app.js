const textarea = document.getElementById("textarea");
const tagsAll = document.getElementById("tags");

textarea.focus()

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value)
    if(e.key === 'Enter'){
            setTimeout( () => {
                e.target.value = ''
            }, 10)

        randomSelect()
    }
});     


 function randomSelect(){
    
    const times = 10;

    const interval = setInterval( () => {
        const randomTag = pcrandomTag()

        highlitetag(randomTag)

        setTimeout( () => {
            unhighlitetag(randomTag)
         },100 )


    },100)

    setTimeout( () =>{
        clearInterval(interval)

        setTimeout(() => {

            const randomTag = pcrandomTag()

            highlitetag(randomTag)
        }, 100)
    }, times * 100)


    function pcrandomTag(){

        const tags = document.querySelectorAll('.tag');
        
        return tags[Math.floor(Math.random() * tags.length)]
        
    
    }
    
    function highlitetag(tag){
        tag.classList.add('highlite');
    }

    function unhighlitetag(tag){
        tag.classList.remove('highlite');
    }
    
 }

    function createTags(input){
        const tagsIn = input.split(',').filter(tag => tag.trim() !=='').map(tag => tag.trim())

        tagsAll.innerHTML = ''
    
        tagsIn.forEach(tag => {
            const tagEl = document.createElement('span')
            tagEl.classList.add('tag')
            tagEl.innerText = tag
            tagsAll.appendChild(tagEl)
        });
    };

    