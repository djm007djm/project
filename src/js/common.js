

/**
 * [生成任意范围内的随机整数]
 * @param  {[Number]} min [最小值]
 * @param  {[Number]} max [最大值]
 * @return {[Number]}     [随机整数]
 */
function randomNumber(min,max){
    return parseInt(Math.random()*(max-min+1))+min;
}

/**
 * [生成随机16位进制的颜色]
 * @param  {[Number]} n [是否生成16位进制]
 * @return {[String]}   [返回随机颜色]
 */
function randomColor(n){
    if(n===16){
        var str = '1234567890abcdef';
        var color = '#';

        for(var i=0;i<6;i++){
            //随机获取一个字符
            var idx = parseInt(Math.random()*str.length);
            color += str[idx];
        }
        return color;
    }

}


function getElementsByClassName(name){
    var ele = document.getElementsByClassName('*');
    var res = [];
    for(var i=0;i<ele.length;i++){
        var className = ele[i].className.split(' ');
    }
}


/**
 * [获取css样式，兼容IE8-]
 * @param  {[Element]} ele [获取样式的元素]
 * @param  {[String]} key [css属性]
 * @return {[String]}     [返回key对应的css属性值]
 */
function getCss(ele,key){
    //判断是否支持getComputedStyle
    if(window.getComputedStyle){
        //标准浏览器
        return getComputedStyle(ele)[key];
    }else if(ele.currentStyle){
        //IE8-
        return ele.currentStyle[key];
    }else{
        //返回内联样式
        return ele.style[key];
    }
}
// getCss(box,'fontSize')



/**
 * [动画函数]
 * @param  {[Element]} ele    [动画元素]
 * @param  {[String]} attr   [动画属性]
 * @param  {[Number]} target [动画目标值]
 * @param  {[Function]} callback [回调函数]
 */
function animation(ele,attr,target,callback){
    ele.timer = setInterval(function(){
        //获取当前值 （得到ele的css属性）（有可能带单位 px deg ）
        var current = getCss(ele,attr); //string
        //提取单位
        var unit = current.match(/[a-z]*$/)[0];

        //提取当前值number
        current = Number(current.replace(unit,''));

        // 提取当前值(number)
        current = parseFloat(current);

        //计算缓冲速度
        var speed = (target - current)/10;

        //判断如果是opacity
        if(attr === 'opacity'){
            speed = speed >0 ? 0.05 : -0.05;
        }else{
            //避免过小或为0
            //如果是正数就向上取整(0.5==>1),如果是负数就向下取整(-0.5==>-1)
            speed = speed >0 ? Math.ceil(speed) : Math.floor(speed);
        }
        //输出值=当前值+缓冲速度（可正可负）
        current = current + speed ;

        if(current === target || current === 0){
            clearInterval(ele.timer);
            current = target;

            //动画结束
            if(typeof callback ==='function'){
                callback();
            }
            
        }
        // 输出        输出值+ 上面获取的单位
        ele.style[attr] = current + unit ;

    },50)
}
//animation(box,width,300,function(){...})

/**
 * [动画函数增强版]
 * @param  {[Element]} ele    [动画元素]
 * @param  {[Object]} obj   [动画属性与目标值]
 * @param  {[Function]} callback [回调函数]
 */
function animate(ele,obj,callback){
        //使用属性timerlen记录定时器数量
        ele.timerlen = 0;
        for(var attr in obj){
            //有多少个属性动画就添加多少次
            ele.timerlen++;
            //遍历数组对象中的属性和属性值
            (function(attr){
                //给每个属性各自起一个定时器名字
                var timerName = attr + 'Timer';
                //获取目标值，就是对应属性的属性值
                var target = obj[attr];
                clearInterval(ele[timerName]);
                ele[timerName] = setInterval(()=>{
                    //获取当前值
                    var current = getCss(ele,attr);
                    //截取单位
                    var unit = current.match(/[a-z]*$/)[0];

                    // 提取当前值(number)
                    current = parseFloat(current);

                    //缓冲速度
                    var speed = (target - current)/5;
                    //判断属性是否为'opacity'
                    if(attr === 'opacity'){
                        //如果是 只能正负0.05变化
                        speed = speed>0 ? 0.05 : -0.05; 
                    }else{
                        //如果不是  正数要向上取整   负数要向下取整
                        speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
                    }
                    //输出值 = 当前值 + 变化速度值
                    current = current + speed;
                    //当   当前值等于目标值的时候  
                    //          清除定时器   
                    if(current === target){
                        clearInterval(ele[timerName]);
                        current = target;
                        //每清除一次定时器 ，属性timerlen减一次
                        ele.timerlen--;

                        //动画完成后  属性timerlen=0  执行回调函数 
                        if(typeof callback === 'function' && ele.timerlen ===0){
                            callback();
                        }
                    }
                    
                    ele.style[attr] = current + unit ;
                },50)
            })(attr);
            
        }
    }


// 放bass.js
// function buildCar(data){
//         var href = location.href;
//             href = href.charAt(href.length-1);
//             var url = '';
//             if(href!=="/"){
//                 url += "../";
//             }
            
//             var allPrice = 0;
//             var sum = 0;
//             var str = `<ul class="goodslist">`;
//             data.forEach(function(item){
//                 str += `
//                     <li data-id="${item.id}">
//                         <div class="img">
//                             <img src="${url}img/goodslist/${item.url}"/>
//                         </div>
//                         <div class="name">
//                             ${item.name}
//                         </div>
//                         <div class="money">
//                             <p class="price">￥${item.price} x ${item.qty}</p>
//                             <p class="delete">删除</p>
//                         </div>
//                     </li>
//                     `
//                     allPrice += item.price*item.qty;
//                     sum += item.qty*1;
//             })
//             str += `</ul>`;
//             $("#shoppingCar").html(str);
//             $(".goodsQty").html(sum);
//             $(".top_car_pay_xia").html(`
//                         <span>共${sum}件商品&nbsp;&nbsp;<strong>￥${allPrice}</strong></span><button>去结算</button>
//                 `);
//             $(".goodsAllPrice").html("￥"+allPrice);
//     }


// 购物车页面、
// function buildShoppingCar(){
//         $.ajax({
//         url:"../api/shoppingCar.php",
//         dataType:"json",
//         success:function(data){
//             // console.log(data)

//             var str ="";

//             data.forEach(function(item){
//                 var w = randomNumber(250,1000);
//                 str += `
//                     <li data-id="${item.id}">
//                         <div class="choose">
//                             <input type="checkbox" class="check"/>
//                         </div>
//                         <div class="goodsName">
//                             <img src="../img/goodslist/${item.url}" title="${item.name}"/>
//                             <h5>${item.name}</h5>
//                         </div>
//                         <div class="goodsPrice list_price">￥${item.price}</div>
//                         <div class="goodsNum list_num">
//                             <button class="lessBtn">-</button>
//                             <input type="text" value="${item.qty}"/>
//                             <button class="addBtn">+</button>
//                         </div>
//                         <div class="allPrice list_totle">￥${item.price*item.qty}</div>
//                         <div class="weight list_W">${w}g</div>
//                         <div class="doing">
//                             <span>移入收藏</span>
//                             <span class="delete">删除</span>
//                         </div>
//                     </li>
//                 `
//             })
//             $("#goodsCar").html(str);


//         }

//     })
//     }