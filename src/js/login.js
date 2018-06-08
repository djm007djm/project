
$(function(){
	yanzhengma();
	// 更换验证码
	$(".codePic").click(function(){
		yanzhengma();
	});

	$("#username").blur(function(){

        var _username = username.value;
        if(/^[1][3-9][\d]{9}$/.test(_username)){
            $("#username").siblings('.correct').show();
        }else if(_username!=""){
        	alert("请输入正确的手机号");
            $("#username").siblings('.correct').hide();
        }
    })


	$("button").click(function(){
		var username = $("#username").val();
		var password = $("#password").val();
		var code = $("#code").val();
		var code2 = $(".codePic").html();	
		// console.log(code,code2)
		if(code===code2){
			$.ajax({
				type:"POST",
				url:"../api/login.php",
				data:{username:username,password:password},
				success:function(data){
                    if(data==="帐号密码正确，登录成功。"){
                    	window.location.href="http://localhost:12345/";
                    	// window.open("http://localhost:12345/");
                    }else if(data==="帐号或密码错误，请重新输入"){
                    	alert(data);
                    	yanzhengma();
                    }
                }
			})
		}else if(code!=code2){
			alert("验证码错误，请重新输入");
			yanzhengma();
		}

	});







	function yanzhengma(){
		var str = "1234567890abcdefghijklnmopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ";
		var output = "";
		for(var i=0;i<4;i++){
			var a = parseInt(Math.random()*str.length);
			output += str[a];
		}
		$(".codePic").html(output);
	}
});