// 存数据
// name：命名 data：数据
function saveData(name, data) {
    localStorage.setItem(name, JSON.stringify({ 'time': Date.now(), 'data': data }))
}

// 取数据
// name：命名 time：过期时长,单位分钟,如传入30,即加载数据时如果超出30分钟返回0,否则返回数据
function loadData(name, time) {
    let d = JSON.parse(localStorage.getItem(name));
    // 过期或有错误返回 0 否则返回数据
    if (d) {
        let t = Date.now() - d.time
        if (t < (time * 60 * 1000) && t > -1) return d.data;
    }
    return 0;
}

// 上面两个函数如果你有其他需要存取数据的功能，也可以直接使用

// 读取背景
try {
    let data = loadData('blogbg', 1440)
    if (data) changeBg(data, 1)
    else localStorage.removeItem('blogbg');
} catch (error) { localStorage.removeItem('blogbg'); }

// 切换背景函数
// 此处的flag是为了每次读取时都重新存储一次,导致过期时间不稳定
// 如果flag为0则存储,即设置背景. 为1则不存储,即每次加载自动读取背景.
function changeBg(s, flag) {
    let bg = document.getElementById('web_bg')
    if (s.charAt(0) == '#') {
        bg.style.backgroundColor = s
        bg.style.backgroundImage = 'none'
    } else bg.style.backgroundImage = s
    if (!flag) { saveData('blogbg', s) }
}

// 以下为2.0新增内容

// 创建窗口
var winbox = ''

function createWinbox() {
    let div = document.createElement('div')
    document.body.appendChild(div)
    winbox = WinBox({
        id: 'changeBgBox',
        index: 999,
        title: "切换背景",
        x: "center",
        y: "center",
        minwidth: '300px',
        height: "60%",
        background: '#49b1f5',
        onmaximize: () => { div.innerHTML = `<style>body::-webkit-scrollbar {display: none;}div#changeBgBox {width: 100% !important;}</style>` },
        onrestore: () => { div.innerHTML = '' }
    });
    winResize();
    window.addEventListener('resize', winResize)

    // 每一类我放了一个演示，直接往下复制粘贴 a标签 就可以，需要注意的是 函数里面的链接 冒号前面需要添加反斜杠\进行转义
    winbox.body.innerHTML = `
    <div id="article-container" style="padding:10px;">
    
    <p><button onclick="localStorage.removeItem('blogbg');location.reload();" style="background:#5fcdff;display:block;width:100%;padding: 15px 0;border-radius:6px;color:white;"><i class="fa-solid fa-arrows-rotate"></i> 点我恢复默认背景</button></p>
 
    <h2 id="图片（电脑）"><a href="#图片（电脑）" class="headerlink" title="图片（电脑）"></a>图片（电脑）</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)" class="imgbox" onclick="changeBg('url(https\://cn.bing.com/th?id=OHR.GBRTurtle_ZH-CN6069093254_1920x1080.jpg)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://raw.githubusercontent.com/yncaqy/pic_bed/main/test/home_bg.webp)" class="imgbox" onclick="changeBg('url(https\://raw.githubusercontent.com/yncaqy/pic_bed/main/test/home_bg.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://raw.githubusercontent.com/yncaqy/pic_bed/main/anzhiyu/aboutmmexport1723725166227.png)" class="imgbox" onclick="changeBg('url(https:\//raw.githubusercontent.com/yncaqy/pic_bed/main/anzhiyu/aboutmmexport1723725166227.png)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://raw.githubusercontent.com/yncaqy/pic_bed/main/bg/dm2.webp)" class="imgbox" onclick="changeBg('url(https\://raw.githubusercontent.com/yncaqy/pic_bed/main/bg/dm2.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://raw.githubusercontent.com/yncaqy/pic_bed/main/bg/dm1.webp)" class="imgbox" onclick="changeBg('url(https\://raw.githubusercontent.com/yncaqy/pic_bed/main/bg/dm1.webp)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://raw.githubusercontent.com/yncaqy/pic_bed/main/bg/dm12.webp)" class="imgbox" onclick="changeBg('url(https\://raw.githubusercontent.com/yncaqy/pic_bed/main/bg/dm12.webp)')"></a>
    </div>
    
    <h2 id="渐变色"><a href="#渐变色" class="headerlink" title="渐变色"></a>渐变色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #eecda3, #ef629f)" onclick="changeBg('linear-gradient(to right, #eecda3, #ef629f)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)" onclick="changeBg('linear-gradient(55deg, #0095c2 21%, #64E1C8 100%)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)" onclick="changeBg('linear-gradient(90deg, #ffd7e4 0%, #c8f1ff 100%)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)" onclick="changeBg('linear-gradient(45deg, #e5737b, #c6999e, #96b9c2, #00d6e8)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)" onclick="changeBg('linear-gradient(25deg, #31354b, #38536c, #3b738e, #3995b2)')"></a>
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)" onclick="changeBg('linear-gradient(26deg, #0e6183, #387ea6, #599dcb, #7abdf1)')"></a>
    </div>
    
    <h2 id="纯色"><a href="#纯色" class="headerlink" title="纯色"></a>纯色</h2>
    <div class="bgbox">
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #7D9D9C" onclick="changeBg('#7D9D9C')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #266b67" onclick="changeBg('#266b67')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #75276e" onclick="changeBg('#75276e')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #b8d0d0" onclick="changeBg('#b8d0d0')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #181fa4" onclick="changeBg('#181fa4')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #0dfff9" onclick="changeBg('#0dfff9')"></a> 
    <a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #232038" onclick="changeBg('#232038')"></a> 
    </div>
`;
}

// 适应窗口大小
function winResize() {
    let box = document.querySelector('#changeBgBox')
    if (!box || box.classList.contains('min') || box.classList.contains('max')) return // 2023-02-10更新
    var offsetWid = document.documentElement.clientWidth;
    if (offsetWid <= 768) {
        winbox.resize(offsetWid * 0.95 + "px", "90%").move("center", "center");
    } else {
        winbox.resize(offsetWid * 0.6 + "px", "70%").move("center", "center");
    }
}

// 切换状态，窗口已创建则控制窗口显示和隐藏，没窗口则创建窗口
function toggleWinbox() {
    if (document.querySelector('#changeBgBox')) winbox.toggleClass('hide');
    else createWinbox();
}

// 切换浅色和深色
function switchDarkMode() {
    "light" === ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? (activateDarkMode(),
        saveToLocal.set("theme", "dark", 2),
    void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)) : (activateLightMode(),
        saveToLocal.set("theme", "light", 2),
    void 0 !== GLOBAL_CONFIG.Snackbar && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),
    "function" == typeof utterancesTheme && utterancesTheme(),
    "object" == typeof FB && window.loadFBComment(),
    window.DISQUS && document.getElementById("disqus_thread").children.length && setTimeout(( () => window.disqusReset()), 200)
}