let dataLikes = [125, 25, 5]; 
let dataTexts = ["котики", "хеллоу!", "цветы :D"] 
let dataImgs = ["https://img.freepik.com/free-photo/beautiful-kitten-with-colorful-clouds_23-2150752964.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Hello_kitty_character_portrait.png/220px-Hello_kitty_character_portrait.png", "https://alexmega.ru/image/data/catalog/IMG_2630.fw.png"] 
let korobkaPostov = document.getElementById("postsBox"); 
let originalPost = document.getElementById("firstPost"); 
 
for(let i = 0; i < 10; i++){ 
    let newPost = originalPost.cloneNode(true); 
 
    let img = newPost.getElementsByClassName("img")[0]; 
    img.setAttribute("src", dataImgs[i%3]); 
 
    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0] 
    numberOfLikes.innerHTML = dataLikes[i%3]; 
 
    let postText = newPost.getElementsByClassName("postText")[0] 
    postText.innerHTML = dataTexts[i%3]; 
 
    let likeBtn = newPost.getElementsByClassName("likeBtn")[0] 
    likeBtn.setAttribute("onclick", "like(" + i + ")") 
    
    let list = newPost.getElementsByClassName("list")[0] 
    list.setAttribute("id", 'list'+i) 

    let input = newPost.getElementsByClassName("input")[0] 
    input.setAttribute("id", 'input'+i) 

    let a = newPost.getElementsByClassName("a")[0] 
    a.setAttribute("onclick", "addComment(" + i + ")") 

    korobkaPostov.appendChild(newPost); 
} 
 
 
let c=0;
function like(i){
    c++;
    if(c%2!==0){
        document.getElementsByClassName('po4444')[i+1].style.backgroundColor = "red";
    }
    else{
        let a = newPost.getElementsByClassName("a")[0] 
        a.setAttribute("onclick", "addComment(" + i + ")") 
        document.getElementsByClassName('po4444')[i+1].style.backgroundColor = "white";
    }
}

function addComment(i) {
    var Input = document.getElementById('input'+i);
    var Text = Input.value;
    Input.value = "";
    if (Text.trim() === "фууу") {
        alert("сам фууу");
    } 
    if (Text.trim() !== "") {
        var List = document.getElementById('list'+i);
        var newComment = document.createElement("b");
        newComment.textContent = Text;
        List.appendChild(newComment);
    } else {
        alert("Пожалуйста, введите комментарий.");
    }
}