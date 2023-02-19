import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";


function PostSummaryList() {
    return(`
    <ul class="list-group" style="padding: 0px">
        ${posts.map((post) => {
            return PostSummaryItem(post);
        }).join("")}
    </ul>
    `);
}
export default PostSummaryList;
// $(PostSummaryList);