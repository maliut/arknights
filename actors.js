const actors = {
    "狙击": [
        { name: "能天使", star: 6 },
        { name: "黑", star: 6 },
        { name: "守林人", star: 5 },
        { name: "陨星", star: 5 },
        { name: "蓝毒", star: 5 },
        { name: "普罗旺斯", star: 5 },
        { name: "白金", star: 5 },
        { name: "流星", star: 4 },
        { name: "白雪", star: 4 },
        { name: "杰西卡", star: 4 },
        { name: "空爆", star: 3 },
        { name: "克洛丝", star: 3 },
        { name: "安德切尔", star: 3 },
        { name: "巡林者", star: 2 },
    ],
    "术师": [
        { name: "艾雅法拉", star: 6 },
        { name: "伊芙利特", star: 6 },
        { name: "阿米娅", star: 5 },
        { name: "夜魔", star: 5 },
        { name: "天火", star: 5 },
        { name: "夜烟", star: 4 },
        { name: "远山", star: 4 },
        { name: "格雷伊", star: 3 },
        { name: "史都华德", star: 3 },
        { name: "炎熔", star: 3 },
        { name: "杜林", star: 2 },
        { name: "12F", star: 2 },
    ],
    "先锋": [
        { name: "推进之王", star: 6 },
        { name: "凛冬", star: 5 },
        { name: "格拉尼", star: 5 },
        { name: "德克萨斯", star: 5 },
        { name: "红豆", star: 4 },
        { name: "清道夫", star: 4 },
        { name: "讯使", star: 4 },
        { name: "桃金娘", star: 4 },
        { name: "香草", star: 3 },
        { name: "翎羽", star: 3 },
        { name: "芬", star: 3 },
        { name: "夜刀", star: 2 },
    ],
    "近卫": [
        { name: "银灰", star: 6 },
        { name: "赫拉格", star: 6 },
        { name: "斯卡蒂", star: 6 },
        { name: "陈", star: 6 },
        { name: "暴行", star: 5 },
        { name: "芙兰卡", star: 5 },
        { name: "拉普兰德", star: 5 },
        { name: "星极", star: 5 },
        { name: "因陀罗", star: 5 },
        { name: "幽灵鲨", star: 5 },
        { name: "诗怀雅", star: 5 },
        { name: "猎蜂", star: 4 },
        { name: "艾丝黛尔", star: 4 },
        { name: "慕斯", star: 4 },
        { name: "霜叶", star: 4 },
        { name: "缠丸", star: 4 },
        { name: "杜宾", star: 4 },
        { name: "泡普卡", star: 3 },
        { name: "玫兰莎", star: 3 },
        { name: "月见夜", star: 3 },
        { name: "Castle-3", star: 1 },
    ],
    "重装": [
        { name: "塞雷娅", star: 6 },
        { name: "星熊", star: 6 },
        { name: "火神", star: 5 },
        { name: "可颂", star: 5 },
        { name: "雷蛇", star: 5 },
        { name: "临光", star: 5 },
        { name: "古米", star: 4 },
        { name: "角峰", star: 4 },
        { name: "蛇屠箱", star: 4 },
        { name: "坚雷", star: 4 },
        { name: "米格鲁", star: 3 },
        { name: "卡缇", star: 3 },
        { name: "斑点", star: 3 },
        { name: "黑角", star: 2 },
    ],
    "医疗": [
        { name: "夜莺", star: 6 },
        { name: "闪灵", star: 6 },
        { name: "白面鸮", star: 5 },
        { name: "锡兰", star: 5 },
        { name: "华法琳", star: 5 },
        { name: "赫默", star: 5 },
        { name: "苏苏洛", star: 4 },
        { name: "末药", star: 4 },
        { name: "嘉维尔", star: 4 },
        { name: "调香师", star: 4 },
        { name: "芙蓉", star: 3 },
        { name: "安赛尔", star: 3 },
        { name: "Lancet-2", star: 1 },
    ],
    "辅助": [
        { name: "安洁莉娜", star: 6 },
        { name: "格劳克斯", star: 5 },
        { name: "初雪", star: 5 },
        { name: "梅尔", star: 5 },
        { name: "空", star: 5 },
        { name: "真理", star: 5 },
        { name: "深海色", star: 4 },
        { name: "地灵", star: 4 },
        { name: "梓兰", star: 3 },
    ],
    "特种": [
        { name: "狮蝎", star: 5 },
        { name: "红", star: 5 },
        { name: "食铁兽", star: 5 },
        { name: "崖心", star: 5 },
        { name: "砾", star: 4 },
        { name: "暗索", star: 4 },
        { name: "阿消", star: 4 },
    ]
};

function getSelectedTagHTML(name, star) {
    return `
<button class="btn m-tag-${star}x" type="button" id="m-sel-${name}" onclick="onCancelSelect('${name}')" 
    title="${name}" style="margin:4px">
    ${name} <span class="badge">X</span>
</button>
    `;
}

function getPoolTagHTML({ name, star }) {
    return `
<button class="btn m-tag-${star}x" type="button" id="m-pol-${name}" data-toggle="button" aria-pressed="false" 
    autocomplete="off" onclick="onTagClick('${name}', ${star})" style="margin:4px">
    ${name}
</button>
    `;
}

function onTagClick(name, star) {
    ($(`#m-pol-${name}`)[0].getAttribute("aria-pressed") === "true" ? onCancelSelect : onDoSelect)(name, star);
}

function onDoSelect(name, star) {
    $(".m-toggle-current").first().next().append($(getSelectedTagHTML(name, star)));
    $(`#m-pol-${name}`).hide();
    $("#m-actors-count").text($("#m-include-panel").children().length);
}

function onCancelSelect(name) {
    $(`#m-sel-${name}`).remove();
    $(`#m-pol-${name}`).removeClass("active").attr("aria-pressed", false).show();
    $("#m-actors-count").text($("#m-include-panel").children().length);
}

function getCurrentSelectedActors() {
    return {
        include: $("#m-include-panel").children().map(function () { return this.title; }).get(),
        exclude: $("#m-exclude-panel").children().map(function () { return this.title; }).get(),
    };
}

function onToggleMode() {
    // 因为当前选中的按钮禁止点击，所以点的是另一个，一定触发 toggle
    ["#m-include-panel", "#m-exclude-panel"].forEach(id => {
        $(id).prev().toggleClass("m-toggle-current");
    });
}

// init panel
function initPanel(mode) {
    $("#m-actors-panel-parent").append($(`
<table class="table">
    <tbody id="m-actors-panel">
        <tr>
            <th class="m-th m-toggle-current" scope="row">
                <button class="btn btn-default" type="button" onclick="onToggleMode()">包含</button>
            </th>
            <td id="m-include-panel"></td>
        </tr>
        <tr ${mode === 0 ? 'style="display:none"' : ''}>
            <th class="m-th" scope="row">
                <button class="btn btn-default" type="button" onclick="onToggleMode()">不含</button>
            </th>
            <td id="m-exclude-panel"></td>
        </tr>
    </tbody>
</table>
    `));
    let panel = $("#m-actors-panel");
    for (let job in actors) {
        let row = $(`
<tr class="m-actors-row">
    <th class="m-th" scope="row">
        <button class="btn" type="button" style="pointer-events:none;cursor:default">${job}</button>
    </th>
    <td></td>
</tr>`);
        let td = row.children().last();
        let arr = actors[job];
        for (let i = 0; i < arr.length; i++) {
            td.append($(getPoolTagHTML(arr[i])));
        }
        panel.append(row);
    }
};

AV.init({
    appId: "GBgdo3k2960psIzy5mkON7DK-MdYXbMMI",
    appKey: "9puSndCeiEqlzWkWSFhy7zVz"
});
