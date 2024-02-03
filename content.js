const target = "https://gall.dcinside.com";

if (location.origin == target) {
    // remove stuffs
    document.querySelectorAll(".gnb_bar, .fl clear, .area_links, .join_tip, .tip_box_bd, .newvisit_history, .btn_nftbox, .cmt_write_box , .cmt_inner, .right_content, .dc_all, .info_policy, .recom_bottom_box, form[name='frmSearch'], #top > div.wrap_inner > div, .list_bottom_btnbox, .right_box, .appending_file_box").forEach(i => i.remove());

    // align main content
    document.querySelector(".left_content").style.width = "100%";
    document.querySelector(".gallery_box").style.width = "100%";

    // recommend box
    document.querySelector(".btn_recommend_box").style.margin = "0 auto 0";
    document.querySelector(".btn_recommend_box").style.border = "none";

    // replies
    document.querySelectorAll(".reply_box").forEach(i => i.style.background = "none");
    document.querySelectorAll(".ub-content").forEach(i => i.style.border = "0px");
    document.querySelectorAll(".reply_box").forEach(i => i.style.border = "0px");

    // post buttons
    document.querySelectorAll(".btn_grey, .btn_blue, .btn_white, .btn_write").forEach(i => {
        i.style.color = "#29367c";
        i.style.background = "#ffffff";
        i.style.textShadow = "none";
        i.style.borderWidth = "1px";
        i.style.borderColor = "#29367c";
    });

    // set width max of image wrappers
    document.querySelector(".writing_view_box").style.width = "100%";
    document.querySelector(".writing_view_box").style.maxWidth = "none";
    document.querySelector(".write_div").style.width = "100%";

    document.querySelectorAll(".imgwrap > img, .imgwrap > video").forEach(i => {
        i.style.width = "50%";
    });

    document.querySelectorAll(".imgwrap").forEach(i => {
        i.style.justifyContent = "center";
        i.style.display = "flex";
    });

    // on images loaded?
};
