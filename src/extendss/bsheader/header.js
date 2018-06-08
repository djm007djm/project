//先引入jquery,并且定义一个bsheader模块
define(['jquery'], function($) {
	return $.fn.extend({
		bsheader: function(option) {
			var html = `
<!-- 右侧导航 -->
<div id="right_link">
			<ul class="center">
				<li>
					<a href="#"><i></i></a>
					<div class="move">
						个人中心
						<span></span>
					</div>
				</li>
				<li class="shoppingCar"><a href="../html/shoppingCar.html"><i style="background-position: 12px -20px;"></i><div>购物车</div><span class="goodsQty">0</span></a></li>
				<li>
					<a href="#"><i style="background-position: 12px -105px;"></i></a>
					<div class="move">
						我的足迹
						<span></span>
					</div>
				</li>
				<li>
					<a href="#"><i style="background-position: 12px -75px;"></i></a>
					<div class="move">
						我的收藏
						<span></span>
					</div>
				</li>
			</ul>
			<ul class="bottom">
				<li>
					<a href="#"><i style="background: url('../img/right_girl.jpg') no-repeat 7px 5px;"></i></a>
					<div class="move">
						在线客服
						<span></span>
					</div>
				</li>
				<li>
					<a href="#"><i style="background-position: 12px -165px;"></i></a>
					<div class="move">
						客服热线
						<span></span>
					</div>
				</li>
				<li><a href="#"><i style="background-position: 12px -295px;"></i></a></li>
				<li class="goTop"><i style="background-position: 12px -195px;"></i></li>
			</ul>
</div>

<!--头部开始  -->
<div id="top">
			<!-- 头部最顶端 -->
			<div id="maxTop">
				<div class="container">
					<ul class="fl">
						<li class="welcome">欢迎光临依谷网!</li>
						<li><i></i><a href="http://localhost:12345/">收藏依谷网</a></li>
					</ul>
					<ul class="fr">
						<li class="w-70"><a href="html/login.html">登录</a></li>
						<li class="w-80"><a href="#">免费注册</a></li>
						<li class="w-70"><a href="../html/shoppingCar.html">购物车</a></li>
						<li id="concern">
							<i></i>
							<a href="http://localhost:12345/">关注依谷网</a>
							<img src="../img/top_ewm.jpg">
						</li>
					</ul>
				</div>
			</div>
			<!-- 头部大图 -->
			<div style="height:120px;background-image:url('../img/wxye.jpg');background-origin: padding-box;background-position: center top;background-repeat: no-repeat;background-size: auto auto;"></div>
			<!-- 头部Logo 搜索 -->
			<div id="header">
				<div class="container">
					<div class="logo fl">
						<a href="http://localhost:12345/"><img src="../img/logo.png"></a>
					</div>
					<div class="top_search fl">
						<form action="#">
							<input type="text" placeholder="新西兰佳沛阳光金奇异果">
							<button>搜索</button>
						</form>
						<ul>
							<li><a href="#">粽子礼盒</a></li>
							<li><a href="#">甘美西瓜</a></li>
							<li><a href="#">健康油</a></li>
						</ul>
					</div>
					<div class="top_car fr">
						<div class="num">
							<i class="goodsQty">0</i>
						</div>
						<div class="pay">
							<a href="../html/shoppingCar.html" id="pay">立即去结算</a>
							<div class="top_car_pay">
								<div class="top_car_pay_top">
									<h4>最新加入的商品</h4>
									<div id="shoppingCar">
										<em class="pay_list"> 
											<img src="../img/cart_k.png" width="50px">
										</em>
										<em>你的购物车空空的，赶紧选购吧！</em>
									</div>
								</div>
								<div class="top_car_pay_xia">
									<span>共0件商品&nbsp;&nbsp;<strong>￥0.00</strong></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 头部导航 -->
			<div id="nav">
				<div class="container">
					<div class="allGoods">
						<div class="navOne">
							<h2><a href="#">全部商品分类</a><span></span></h2>
						</div>
						<!-- 二级导航 -->
						<div class="navTwo">
							<div class="item">
								<h3>
									<span></span>
									<a href="list.html" class="a">水果蔬菜</a>
								</h3>
								<!-- 三级导航 -->
								<div class="navThree">
									<dl class="kind">
										<dt><a href="#">国产水果</a></dt>
										<dd><a href="#">苹果</a></dd>
										<dd><a href="#">梨</a></dd>
										<dd><a href="#">柑橙柚</a></dd>
										<dd><a href="#">桃李杏</a></dd>
										<dd><a href="#">瓜类</a></dd>
										<dd><a href="#">热带水果</a></dd>
										<dd><a href="#">富含维C</a></dd>
										<dd><a href="#">其他</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">进口水果</a></dt>
										<dd><a href="#">美国</a></dd>
										<dd><a href="#">智利</a></dd>
										<dd><a href="#">新西兰</a></dd>
										<dd><a href="#">澳大利亚</a></dd>
										<dd><a href="#">泰国</a></dd>
										<dd><a href="#">越南</a></dd>
										<dd><a href="#">其他</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">新鲜蔬菜</a></dt>
										<dd><a href="#">叶菜</a></dd>
										<dd><a href="#">根茎/瓜类</a></dd>
										<dd><a href="#">菌菇类</a></dd>
										<dd><a href="#">茄果/豆类</a></dd>
										<dd><a href="#">特色蔬菜</a></dd>
										<dd><a href="#">其他蔬菜</a></dd>
									</dl>
								</div>
							</div>
							<div class="item">
								<h3>
									<span style="background-position:3px 0;"></span>
									<a href="list.html" class="b">肉禽蛋奶</a>
								</h3>
								<!-- 三级导航 -->
								<div class="navThree">
									<dl class="kind">
										<dt><a href="#">无肉不欢</a></dt>
										<dd><a href="#">进口肉类</a></dd>
										<dd><a href="#">牛肉</a></dd>
										<dd><a href="#">猪肉</a></dd>
										<dd><a href="#">家禽</a></dd>
										<dd><a href="#">其他</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">水产海鲜</a></dt>
										<dd><a href="#">虾兵蟹将</a></dd>
										<dd><a href="#">鲍参翅肚</a></dd>
										<dd><a href="#">淡鱼海鱼</a></dd>
										<dd><a href="#">珍品贝类</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">新鲜蛋品</a></dt>
										<dd><a href="#">生态养殖蛋</a></dd>
										<dd><a href="#">蛋制品</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">方便速食</a></dt>
										<dd><a href="#">速食品</a></dd>
										<dd><a href="#">手工面点</a></dd>
										<dd><a href="#">丸子</a></dd>
										<dd><a href="#">豆制品</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">牛奶乳品</a></dt>
										<dd><a href="#">有机奶</a></dd>
										<dd><a href="#">纯牛奶</a></dd>
										<dd><a href="#">酸奶</a></dd>
										<dd><a href="#">奶制品</a></dd>
									</dl>
								</div>
							</div>
							<div class="item">
								<h3>
									<span style="background-position:-60px 0;"></span>
									<a href="list.html"  class="c">粮油副食</a>
								</h3>
								<!-- 三级导航 -->
								<div class="navThree">
									<dl class="kind">
										<dt><a href="#">干货特产</a></dt>
										<dd><a href="#">臻品干货</a></dd>
										<dd><a href="#">山珍海味</a></dd>
										<dd><a href="#">腌腊食品</a></dd>
										<dd><a href="#">其他特产</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">米面杂粮</a></dt>
										<dd><a href="#">五常稻花香</a></dd>
										<dd><a href="#">大米</a></dd>
										<dd><a href="#">五谷杂粮</a></dd>
										<dd><a href="#">面/粉/及制品</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">健康食油</a></dt>
										<dd><a href="#">花生油</a></dd>
										<dd><a href="#">玉米油</a></dd>
										<dd><a href="#">橄榄油</a></dd>
										<dd><a href="#">山茶油</a></dd>
										<dd><a href="#">调和油</a></dd>
										<dd><a href="#">其他油类</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">五味生香</a></dt>
										<dd><a href="#">调味品</a></dd>
										<dd><a href="#">汤料/底料</a></dd>
										<dd><a href="#">果酱</a></dd>
										<dd><a href="#">沙拉酱</a></dd>
										<dd><a href="#">辣椒酱</a></dd>
										<dd><a href="#">其他浆料</a></dd>
									</dl>
								</div>
							</div>
							<div class="item">
								<h3>
									<span style="background-position:-90px 0;"></span>
									<a href="list.html"  class="d">零食酒饮</a>
								</h3>
								<!-- 三级导航 -->
								<div class="navThree">
									<dl class="kind">
										<dt><a href="#">吃货精选</a></dt>
										<dd><a href="#">进口零食</a></dd>
										<dd><a href="#">坚果炒货</a></dd>
										<dd><a href="#">果干蜜饯</a></dd>
										<dd><a href="#">糕点饼干</a></dd>
										<dd><a href="#">糖果巧克力</a></dd>
										<dd><a href="#">膨化食品</a></dd>
										<dd><a href="#">飘香肉铺</a></dd>
										<dd><a href="#">海苔</a></dd>
										<dd><a href="#">其他</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">冲调饮料</a></dt>
										<dd><a href="#">咖啡</a></dd>
										<dd><a href="#">冲调品</a></dd>
										<dd><a href="#">饮料</a></dd>
										<dd><a href="#">蜂蜜</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">茶香四溢</a></dt>
										<dd><a href="#">大红袍</a></dd>
										<dd><a href="#">普洱</a></dd>
										<dd><a href="#">果茶</a></dd>
										<dd><a href="#">铁观音</a></dd>
										<dd><a href="#">乌龙茶</a></dd>
										<dd><a href="#">红茶</a></dd>
										<dd><a href="#">绿茶</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">美酒佳酿</a></dt>
										<dd><a href="#">红酒</a></dd>
										<dd><a href="#">啤酒</a></dd>
										<dd><a href="#">洋酒</a></dd>
										<dd><a href="#">白酒</a></dd>
										<dd><a href="#">其他酒品</a></dd>
									</dl>
								</div>
							</div>
							<div class="item">
								<h3>
									<span style="background-position:-127px 0;"></span>
									<a href="list.html"  class="e">主题场景</a>
								</h3>
								<!-- 三级导航 -->
								<div class="navThree">
									<dl class="kind">
										<dt><a href="#">心动时刻</a></dt>
										<dd><a href="#">鲜花</a></dd>
										<dd><a href="#">蛋糕</a></dd>
										<dd><a href="#">巧克力</a></dd>
										<dd><a href="#">红酒</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">新派料理</a></dt>
										<dd><a href="#">慢享烘焙</a></dd>
										<dd><a href="#">健身减脂</a></dd>
										<dd><a href="#">异国风味</a></dd>
										<dd><a href="#">中华烹饪</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">年节惊喜</a></dt>
										<dd><a href="#">恭贺新禧</a></dd>
										<dd><a href="#">真情邂逅</a></dd>
										<dd><a href="#">端午安康</a></dd>
										<dd><a href="#">花好月圆</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">家常宴客</a></dt>
										<dd><a href="#">省心家宴</a></dd>
										<dd><a href="#">烛光晚餐</a></dd>
										<dd><a href="#">生日派对</a></dd>
										<dd><a href="#">香辣火锅</a></dd>
										<dd><a href="#">热情烧烤</a></dd>
										<dd><a href="#">小菜一碟</a></dd>
									</dl>
								</div>
							</div>
							<div class="item">
								<h3>
									<span style="background-position:-157px 0;"></span>
									<a href="list.html"  class="f">这箱有利</a>
								</h3>
								<!-- 三级导航 -->
								<div class="navThree">
									<dl class="kind">
										<dt><a href="#">走亲访友</a></dt>
										<dd><a href="#">父母长辈</a></dd>
										<dd><a href="#">同事好友</a></dd>
										<dd><a href="#">情侣夫妻</a></dd>
										<dd><a href="#">儿女小辈</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">情礼兼到</a></dt>
										<dd><a href="#">拜年必备</a></dd>
										<dd><a href="#">滋补养生</a></dd>
										<dd><a href="#">粮油干货</a></dd>
										<dd><a href="#">水果休闲</a></dd>
									</dl>
								</div>
							</div>
							<div class="item">
								<h3>
									<span style="background-position:-185px 0;"></span>
									<a href="list.html"  class="g">生活用品</a>
								</h3>
								<!-- 三级导航 -->
								<div class="navThree">
									<dl class="kind">
										<dt><a href="#">家具用品</a></dt>
										<dd><a href="#">洗漱用品</a></dd>
										<dd><a href="#">家居小电器</a></dd>
										<dd><a href="#">床上用品</a></dd>
										<dd><a href="#">其他用品</a></dd>
									</dl>
									<dl class="kind">
										<dt><a href="#">厨房用品</a></dt>
										<dd><a href="#">烹饪锅具</a></dd>
										<dd><a href="#">餐具杯具</a></dd>
										<dd><a href="#">厨房小电器</a></dd>
										<dd><a href="#">厨房配件</a></dd>
										<dd><a href="#">其他用品</a></dd>
									</dl>
								</div>
							</div>
						</div>
					</div>
					<ul class="nav">
						<li><a href="http://localhost:12345/">首页</a></li>
						<li><a href="#">礼品卡卷</a></li>
						<li><a href="#">安心宅配</a></li>
						<li><a href="#">产地特色预定</a></li>
						<li><a href="#">企业定制</a></li>
						<li><a href="#">活动专业</a></li>
						<li><a href="#">食尚资讯</a></li>
						<li><a href="#">依谷扶贫</a></li>
					</ul>
				</div>
			</div>	
</div>
			`;
			return this.each(function() {
				$(this).html(html);
				
			})
		}
	})
})