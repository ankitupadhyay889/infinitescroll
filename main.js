const container = document.querySelector(".container");

let limit = 4;
let pageCount = 1;
let postCount = 1;

const getPost = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}_page=${pageCount}`);
    const data = await response.json();

    data.map((curEl , index) => {
        const htmlData = `
        <div class="posts">
            <p class="post-id"> ${postCount++} </p>
            <h2 class="title"> ${curEl.title} </h2>
            <p class="post-info"> ${curEl.body} </p>
        </div>
        `;

        container.insertAdjacentHTML('beforeend' , htmlData);
    })
}

getPost();

const showData = () => {
    setTimeout(() => {
        pageCount++;
        getPost();
    },300)
}

window.addEventListener('scroll' , () => {
    const {scrollHeight , scrollTop , clientHeight } = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight){
        showData();
    }
})