const content = document.querySelector('.album-content-img');
const imgWidth = 220;
// 获取图片信息

function getinfo() {
    let contentWidth = content.offsetWidth; // 宽度
    let column = Math.floor(contentWidth / imgWidth); // 每行个数
    let gapCount = column - 1; // 间隔数
    let freeSpace = contentWidth - imgWidth * column; // 剩余空间
    let gap = freeSpace / gapCount;  //间隔
    return {
        gap: gap,
        column: column,
    };
}

// 获取min
function getMinTop(nextTop) {
    let min = nextTop[0], index = 0;
    for(let i=0;i<nextTop.length;i++){
        if(nextTop[i]<min){
            min = nextTop[i];
            index = i;
        }
    }
    console.log(min, index);
    return{
        min:min,
        index:index,
    };
}

// 获取max
function getMaxTop(nextTop) {
    let max = nextTop[0], index = 0;
    for(let i=0;i<nextTop.length;i++){
        if(nextTop[i]>max){
            max = nextTop[i];
            index = i;
        }
    }
    return{
        max:max,
        index:index,
    };
}

// 布局
function layout() {
    let info = getinfo();
    let nextTop = new Array(info.column);
    nextTop.fill(0);

    for(let i=0;i<content.children.length;i++){
        const img = document.querySelector(`.album-content-img img:nth-child(${i+1})`);
        let minTop = getMinTop(nextTop);
        img.style.left = `${minTop.index * (imgWidth + info.gap)}px`;
        img.style.top = `${minTop.min + info.gap/2}px`;
        //更新数组
        nextTop[minTop.index] = nextTop[minTop.index] + img.offsetHeight + info.gap/2;
        let maxTop = getMaxTop(nextTop);
        content.style.height = maxTop.max + 'px';
    }
}

window.addEventListener('load', layout);  // 监听dom树加载，完成之后再做布局
window.addEventListener('resize', layout); // 监听窗口变化，重新布局
