import { render } from "./common";
import { recentPost } from "./data"

const id = new URLSearchParams(window.location.search).get("id");

const post = recentPost.find((item) => item.id == id);
const result = `
<div class="post border-b">
<div class="my-16">
    <a href="" class="text-5xl text-[#21243D] font-bold hover:underline">${post.name}</a>
</div>
<div class="my-16">
    <span class="mr-2 text-2xl">${post.date}</span>|
    <span class="ml-2 text-2xl">${post.tag}</span>
</div>
<div class="my-16 text-2xl">
    <p>${post.description}</p>
</div>
</div>
`;
render("recent-detail", result);