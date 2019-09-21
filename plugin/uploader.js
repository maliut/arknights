// $(document).ready(
    
    setTimeout((
        function() {

            // get video information
            let title = $(".tit")[0].innerText;
            // console.log(title);
            let ids = (/aid=(\d+)&cid=(\d+)&page=(\d+)/).exec($("#link2").val());
            // console.log($("#link2"));
            // console.log(ids);
            let pname = ($(".list-box>.on>a")[0] || {}).title || "";
            let indicate = pname + title;
            let json = JSON.stringify({ 
                title: title + " " + pname, 
                author: $(".username")[0].innerText,
                aid: ids[1],
                cid: ids[2],
                page: ids[3],
                level: _indicate(indicate),
                tuxi: indicate.indexOf("突袭") >= 0
            });
        
            $("body").append(`
        <div id="m-plugin-panel">
            <iframe id="m-plugin-frame" src="${'https://maliut.space/arknights/new#' + encodeURI(json)}"></iframe>
        </div>
            `);
        }
    ), 3000);

    function _indicate(name) {
        if (name.indexOf("切尔诺伯格") >= 0) {
            return "切尔诺伯格";
        } else if (name.indexOf("龙门外环") >= 0) {
            return "龙门外环";
        } else if (name.indexOf("龙门市区") >= 0) {
            return "龙门市区";
        }
        return (((/\w+(-\w+)+/).exec(indicate) || {})[0] || "").toUpperCase();
    }

// );//.call(this);