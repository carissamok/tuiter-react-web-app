const NavigationSidebar = () => {
    return (`
      <ul class="list-group">
        <li class="list-group-item d"><i class="fab fa-twitter"></i></li>
        <a class="list-group-item" href="./home.html">
          <i class="fas fa-house me-2"></i>
          <div class="d-none d-xl-inline">Home</div>
        </a>
        <a class="list-group-item active" href="./explore.html">
          <i class="fa fa-hashtag me-2"></i>
          <div class="d-none d-xl-inline">Explore</div>
        </a>
        <a class="list-group-item" href="./notifications.html">
          <i class="fa fa-bell me-2"></i>
          <div class="d-none d-xl-inline">Notifications</div>
        </a>
        <a class="list-group-item" href="./messages.html">
          <i class="fa fa-envelope me-2"></i>
          <div class="d-none d-xl-inline">Messages</div>
        </a>
        <a class="list-group-item" href="./bookmarks.html">
          <i class="fa fa-bookmark me-2"></i>
          <div class="d-none d-xl-inline">Bookmarks</div>
        </a>
        <a class="list-group-item" href="./lists.html">
          <i class="fa fa-list me-2"></i>
          <div class="d-none d-xl-inline">Lists</div>
        </a>
        <a class="list-group-item" href="./profile.html">
          <i class="fa fa-user me-2"></i>
          <div class="d-none d-xl-inline">Profile</div>
        </a>
        <a class="list-group-item" href="./more.html">
          <span class="fa-stack" style="font-size: 0.5em">
            <i class="fas fa-circle fa-stack-2x"></i>
            <i class="fa-solid fa-ellipsis fa-stack-1x fa-inverse"></i>
          </span>
          <div class="d-none d-xl-inline">More</div>
        </a>
      </ul>
      <div class="d-grid gap-2 mt-2">
        <button type="button" class="btn btn-primary btn-block round">
          Tweet
        </button>
      </div>
    `);
};
export default NavigationSidebar;
// $(NavigationSidebar);
