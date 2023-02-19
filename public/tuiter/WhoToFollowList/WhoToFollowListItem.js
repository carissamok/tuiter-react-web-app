const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item">
            <div class="row">
              <div
                class="col-2 align-middle"
                style="padding-left: 8 px padding-right: 0px"
              >
                <img
                  src=${who.avatarIcon}
                  class="img-fluid follow-propic"
                />
              </div>
              <div class="col-lg-7" style="padding: 0px">
                <p style="margin: 0px">
                  <b>${who.userName}</b>
                  <i class="fas fa-check-circle"></i>
                </p>
                @${who.handle}
              </div>
              <div class="col-lg-3" style="padding: 0px">
                <button type="button" class="btn btn-primary round">
                  Follow
                </button>
              </div>
            </div>
          </li>
    `);
};
export default WhoToFollowListItem;

  
