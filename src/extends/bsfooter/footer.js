//先引入jquery,并且定义一个bsheader模块
define(['jquery'], function($) {
	return $.fn.extend({
		bsfooter: function(option) {
			var html = `
				<!-- 底部 -->
				<div id="bottom">
							<div class="bottom_top">
								<div class="container">
									<ul>
										<li>
											<div class="pic" style="margin-left: -10px;">
												<img src="img/bottom_top1.jpg">
											</div>
											<div>
												<h3>次日到达</h3>
												<p>当天16点前下单第二天送达</p>
											</div>
										</li>
										<li>
											<div class="pic">
												<img src="img/bottom_top2.jpg">
											</div>
											<div>
												<h3>货到付款</h3>
												<p>货到网银多种支付方式</p>
											</div>
										</li>
										<li>
											<div class="pic">
												<img src="img/bottom_top3.jpg">
											</div>
											<div>
												<h3>冷链配送</h3>
												<p>基地到餐桌全程冷链</p>
											</div>
										</li>
										<li>
											<div class="pic">
												<img src="img/bottom_top4.jpg">
											</div>
											<div>
												<h3>24小时退换货</h3>
												<p>专业解答 为您解惑</p>
											</div>
										</li>
										<li>
											<div class="pic">
												<img src="img/bottom_top5.jpg">
											</div>
											<div class="text">
												<h3>基地优选食材</h3>
												<p>依谷更懂您的需求</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="bottom_c">
								<div class="container">
									<div class="fl">
										<div class="fl_kuang">
											<h3>依谷有话说:</h3>
											<div class="kuang_img">
												<a href="#"><img src="img/bottom_c.jpg"></a>
											</div>
											<div class="kuang_new">
												<div>
													<h4><a href="#" title="关于系统升级客户热线、物流配送暂停服务公告">关于系统升级客户热线、物流配送暂停服务公告</a></h4>
													<p><a href="#" title="关于系统升级客户热线、物流配送暂停服务公告">尊敬的客户： 您好！为了能给客户带来更好的服务，依谷网将于3月11日—3月13日对网站系统进行设备检修和升级，期间客服热线、在线咨询及物流配送暂不提供服务，3月14日起恢复正常咨询及物流配送。给您带来不便敬请谅解，感谢您对依谷网的支持！</a></p>
												</div>
												<div>
													<h4><a href="#" title="关于客户热线4001100755暂停服务的通知">关于客户热线4001100755暂停服务的通知</a></h4>
													<p><a href="#" title="关于客户热线4001100755暂停服务的通知">尊敬的依谷网客户：您好，值此新春佳节来临之际，为了不影响您正常购物，现将春节期间客服电话服务和放假时间事项公告如下：1、由于中国移动的基站设备故障正在维修，现4001100755客服电话暂时无法正常使用。2、放假时间：2月15日—2月23日。如有不便，敬请谅解。依谷网在此感谢您长久以来对我们的信任与支持。</a></p>
												</div>
												<div>
													<h4><a href="#" title="春节期间依谷网快递停发通知！">春节期间依谷网快递停发通知！</a></h4>
													<p><a href="#" title="春节期间依谷网快递停发通知！">亲爱的谷东们：您好！由于临近年关以及大雪天气原因，快递已经开始停发部分省份的收件业务！我们将于2月5日停止广东省外的快递发货，2月10日停止广东省内的快递发货，2月15日停止深圳市的订单，超时订单将协调至年后配送2月23日恢复正常发货。</a></p>
												</div>
											</div>
										</div>
										<div class="list">
											<dl>
												<dt>购物指南</dt>
												<dd><a href="#">会员注册</a></dd>
												<dd><a href="#">套餐卡使用方法</a></dd>
												<dd><a href="#">谷穗卡使用方法</a></dd>
												<dd><a href="#">积分兑换</a></dd>
											</dl>
											<dl>
												<dt>付款方式</dt>
												<dd><a href="#">线上支付</a></dd>
												<dd><a href="#">发票说明</a></dd>
												<dd><a href="#">货到付款</a></dd>
												<dd><a href="#">余额支付</a></dd>
											</dl>
											<dl>
												<dt>商品配送</dt>
												<dd><a href="#">买家自取</a></dd>
												<dd><a href="#">配送时间</a></dd>
												<dd><a href="#">冷链配送</a></dd>
												<dd><a href="#">送货范围及费用</a></dd>
											</dl>
											<dl>
												<dt>售后服务</dt>
												<dd><a href="#">签收与评价</a></dd>
												<dd><a href="#">常见问题</a></dd>
												<dd><a href="#">退换货说明</a></dd>
												<dd><a href="#">品质保障</a></dd>
											</dl>	
										</div>
									</div>
									<div class="fr">
										<div class="fr_img">
											<ul>
												<li><a href="#"><img src="img/bottom_c1.jpg"></a></li>
												<li><a href="#"><img src="img/bottom_c2.jpg"></a></li>
												<li><a href="#"><img src="img/bottom_c3.jpg"></a></li>
												<li><a href="#"><img src="img/bottom_c4.jpg"></a></li>
											</ul>
										</div>
										<div class="fr_ewm">
											<ul>
												<li>
													<h4>依谷微信</h4>
													<img src="img/erweima.jpg">
												</li>
												<li style="float: right;">
													<h4>依谷网APP</h4>
													<img src="img/erweima2.jpg">
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="bottom_b">
								<div class="container">
									<ul class="list_t">
										<li><a href="#">关于依谷</a></li>
										<li><a href="#">加入依谷</a></li>
										<li><a href="#">联系依谷</a></li>
										<li><a href="#">免责声明</a></li>
										<li><a href="#">友情链接</a></li>
										<li><a href="#">依谷资讯</a></li>
										<li><a href="#">网站地图</a></li>
										<li><a href="#">客服在线</a></li>
									</ul>
									<div class="list_img">
										<a href="#"><img src="img/bottom1.png"></a>
										<a href="#"><img src="img/bottom2.jpg"></a>
										<a href="#"><img src="img/bottom3.jpg"></a>
										<a href="#"><img src="img/bottom4.jpg"></a>
										<a href="#"><img src="img/bottom5.jpg"></a>
										<a href="#"><img src="img/bottom6.jpg"></a>
										<a href="#"><img src="img/bottom7.jpg"></a>
									</div>
									<div class="list_text">
										<p>Copyright © 2010-2018 所有图片均受著作权保护，未经许可任何单位与个人不得使用、复制、转载、摘编，违者必究法律责任。</p>
										<p><a href="#">粤ICP备11016505号-9</a>| All Rights Reserved 深圳依谷网版权所有 网络实名：<a href="#">依谷网</a></p>
									</div>
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


console.log("footer");