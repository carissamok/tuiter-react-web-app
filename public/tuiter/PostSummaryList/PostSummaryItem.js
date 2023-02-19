const PostSummaryItem = (post) => {
    return(`
    <li class="list-group-item">
    <div class="row">
      <div class="col-10">
        <span class="text-muted">${post.topic}</span>
        <p style="margin: 0px">
          <b>${post.userName}</b>
          <i class="fas fa-check-circle"></i>
          <span class="col-3 text-muted" style="padding-left: 0px">
            - ${post.time}
          </span>
        </p>
        <b
          >${post.title}</b
        >
      </div>
      <div class="col-2">
        <img src=${post.image} class="img-fluid" />
      </div>
    </div>
  </li>
    `);
}
export default PostSummaryItem;