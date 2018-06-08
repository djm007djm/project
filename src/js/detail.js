



// hover小图  更换展示区图  和 放大区的图
$(function(){
     $(".smallImg img").hover(
        function(){
            var idx = $(this).index();
            $(this).css("borderColor","#FD7400").siblings().css("borderColor","#fff")
            $(".fatherImg img").eq(idx).show().siblings().hide();
            $(".bigImg img").eq(idx).show().siblings().hide();
        })

});

// 商品放大镜
$(function(){
    var shadeWidth = $(".shade").width(),//获取遮罩层的宽
        shadeHeight = $(".shade").height(),//获取遮罩层的高
        fatherWidth = $(".fatherImg").width(),//获取展示区的宽
        fatherHeight = $(".fatherImg").height(),//获取展示区的高
        bigImgWidth = $(".bigImg").width(),//获取放大区的宽
        bigImgHeight = $(".bigImg").height(),//获取放大区的高
        changeX = bigImgWidth/shadeWidth,//获取放大区与遮罩层的比例
        changeY = bigImgHeight/shadeHeight;//获取放大区与遮罩层的比例


        $(".fatherImg").hover(
            function(){
                $(".shade").show();
                $(".bigImg").show();
            },function(){
                $(".shade").hide();
                $(".bigImg").hide();
            }).mousemove(function(e){
                // 记录光标位置
                var x = e.pageX;
                var y = e.pageY;

                //设置阴影区的位置  尽量保持光标在阴影区的中心
                //offset() 方法返回或设置匹配元素相对于文档的偏移（位置）
                $(".shade").offset({
                    top:y-shadeHeight/2,
                    left:x-shadeWidth/2
                })

                //放大区的位置定位跟随光标
                // $(".bigImg").css({
                //     top:y-320,
                //     left:x+shadeWidth/2
                // })

               //获取阴影区相对父元素的位置
               var cur = $(".shade").position(),
                    _top = cur.top,
                    _left = cur.left,

                    // 遮罩层定位的最大值
                    maxTop = fatherHeight-shadeHeight,
                    maxLeft = fatherWidth-shadeWidth;

                    if(_top > maxTop){
                        _top = maxTop;
                    }else if(_top < 0 ){
                        _top = 0;
                    }
                    if(_left > maxLeft){
                        _left = maxLeft;
                    }else if(_left < 0){
                        _left = 0;
                    }

                    // 设置遮罩层的定位
                    $(".shade").css({
                        top:_top,
                        left:_left
                    })

                    // 设置放大区里面图片的相对应定位
                    $(".bigImg img").css({
                        top:-_top*changeX,
                        left:-_left*changeY
                    })




            })

});

// 详情文字选中规格    详情文字数量  增减
$(function(){
    $("#comp li").click(function(){
        $(this).css("borderColor","#FD7400").siblings().css("borderColor","#ccc");
    })
    var number = document.querySelector("#number");

    var num;

    $("#less").click(function(){
        num = number.value;
        num--;
        if(num<1){
            num = 1
        }
        number.value = num;
    })
    $("#add").click(function(){
        num = number.value;
        num++;

        number.value = num;
    })
});


// 下面评分/大图  显示和隐藏
$(function(){
    // 默认第一个高亮
    $("#bigImg .rightPic .title li:eq(0)").addClass("active");
    $("#bigImg .rightPic .title li").click(function(){
        var idx = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $("#bigImg .rightPic .bottom .class").eq(idx).show().siblings().hide();
        console.log()
    })

});


// 右侧上下轮播图
$(function(){
    var nav_img = document.querySelector("#nav_img");
    var ul = nav_img.children[0];

    // 复制ul里面的第一个和最后一个孩子
    ul.appendChild(ul.children[0].cloneNode(true));
    ul.insertBefore(ul.children[ul.children.length-2].cloneNode(true),ul.children[0]);

    // console.log(ul)
    var liHeight = ul.children[0].offsetHeight;
    // console.log(liHeight)
    

    // 默认让ul定位显示第二个孩子
    ul.style.top = -liHeight +"px";


    var index = 1;
    var timer;

    timer = setInterval(timeShow,3000)


    $("#nav_img").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(timeShow,3000)
    })
    $("#nav_img .prev").click(function(){
        index--;
        autoShow();
    })
    $("#nav_img .next").click(function(){
        index++;
        autoShow();
    })



    function timeShow(){
        index++;
        autoShow();
    }


    function autoShow(){
        if(index>=ul.children.length){
            ul.style.top = -liHeight +"px";
            index = 2;
        }else if(index<0){
            ul.style.top = -liHeight*(ul.children.length-2) +"px";
            index = ul.children.length-3;
        }
        $("#nav_img ul").animate({
            top:-index*liHeight
        })

    }

});


// 点击二级  传对应的class  回到列表页
$(function(){
    
    $("#nav .navTwo .item h3 a").click(function(){
        var lei = $(this).attr("class");
        var prefix = location.href.slice(0,28);
        // console.log(prefix)
        // console.log(location.href)
        var href = prefix + "list.html?"+lei;
        $(this).attr("href",href);
    }); 

});


// 获取主页或者列表页  点击商品时生成相对应的数据  
$(function(){
    // 获取？后面的
    var lei = location.search;

    // 获取？后面 指定的id
    lei = lei.slice(1);
    //获取相对应的商品类别
    var goodsClass = lei.charAt(0);
    var way="";
    if(goodsClass==="a"||goodsClass==="b"||goodsClass==="c"||goodsClass==="d"||goodsClass==="e"||goodsClass==="f"||goodsClass==="g"){
        way = "goodslist/";
    }


    
    $.ajax({
        url:"../api/detail.php",
        data:{id:lei},
        dataType:"json",
        success:function(data){
            // console.log(data)
            // var goodsClass;
            var newObj = search(data)
            var str ='';
            newObj.forEach(function(item){
                // console.log(item.url)
                $(".top_name").html(item.name);
                $(".goods_img").attr("src","../img/"+way+item.url);
                $(".flyCar img").attr("src","../img/"+way+item.url);
                $(".Goods_money").html(`
                        <ul>
                            <li>市场价：<span style="text-decoration:line-through;">${item.price*1+30}</span></li>
                            <li>商城价：<span class="price">${item.price}</span></li>        
                        </ul>
                    `);

                for(let i=0;i<5;i++){
                    str+=`<li><img src="../img/${way}${item.url}"/></li>`
                }
                $(".bottom_pic").html(str);
                $(".sales span").html(randomNumber(50,300));
            })

            



        }


    })




            function search(obj){
                for(let i in obj){
                    var value = obj[i];
                    if(value.length === 0){
                        delete obj[i];
                    }
                }
                var newObj = obj;
                // console.log(newObj)
                for(let key in newObj){
                    var arr = newObj[key];
                }
                return arr;
            }
});



// 生成的数据要用事情委托    点击加入购物车  传到数据库  
$(function(){
    $("#detail").on("click",".carBtn",function(){
        

        var qty = document.querySelector("#number").value;
        // 获取数量
        console.log(qty)
            // 获取？后面的
        var lei = location.search;

        // 获取？后面 指定的id
        var goodsId = lei.slice(1);
        $.ajax({
            url:"../api/shoppingCar.php",
            data:{id:goodsId,qty:qty},
            dataType:"json",
            success:function(data){
                console.log(data)
                buildCar(data);
            }
        })
    })
});


