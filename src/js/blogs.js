


window.addEventListener("scroll", (event) => {
    let scroll = window.scrollY;
        console.log(scroll);
        let postItem = document.querySelector('.blogs-side-bar')
        let blogs = document.querySelector('.blogs')
        console.log('высота' + blogs.clientHeight);

        if(scroll >= 670 && blogs.clientHeight > 900){
            postItem.classList.remove('active');
            postItem.style.position = 'fixed';
            postItem.style.top = '70px';
            postItem.style.bottom = 'null';
        }
        else if(scroll <= 550 ){
            postItem.classList.add('active');
            postItem.style.position = 'absolute'
            postItem.style.top = '0';
            postItem.style.right = '';
         
        }
        if( scroll > blogs.clientHeight && blogs.clientHeight > 900){
            postItem.style.position = 'absolute'
            postItem.style.right = '';
            postItem.style.top = '';
            postItem.style.bottom = '0';
        }

       
    });