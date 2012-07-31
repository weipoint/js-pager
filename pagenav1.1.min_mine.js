var pageNav = pageNav || {};
pageNav.fn = null;
pageNav.url = null;
pageNav.nav = function (p,pn,url){
	pageNav.url = url;
	if(pn <= 0){
		this.p = 0;this.pn=0;
		return "";//this.pHtml2(1);
	}
	if (pn<p) {p=pn;};
	var re = "";
	if(p <= 0){
		p = 0;
	}else{
		re+=this.pHtml(p-1,pn," < ");
		re+=this.pHtml(0,pn,"1");
	}
	this.p = p;this.pn=pn;

	var start = 1;
	var end = (pn<9)?pn:9;
	if(p>=7){
		re+="...";
		start = p-4;
		var e = p+4;
		end = (pn<e)?pn:e;
	}
	for (var i=start; i < p; i++) {
		re+=this.pHtml(i,pn);
	};
	re+=this.pHtml2(p);
	for (var i=p+1; i < end; i++) {
		re+=this.pHtml(i + 1,pn);
	};
	if (end<pn) {re+="...";
	re+=this.pHtml(pn,pn);
	};
	if ((p+1)<pn) {re+=this.pHtml(p+1,pn," > ");};
	return re;
};
pageNav.pHtml = function(pageNo,pn,showPageNo){
  	showPageNo = showPageNo || pageNo;
//	var H = " <a href='javascript:pageNav.go("+ pageNo+","+ pn+  ");' class='pageNum'>"+ showPageNo+"</a> ";
	var H = " <a href='"+ pageNav.url.replace("{pn}", pageNo) +"' class='pageNum'>" + showPageNo + "</a> ";
	return H;
	
};
pageNav.pHtml2 = function(pageNo){
	var H = " <span class='cPageNum'>"+(pageNo + 1)+"</span> ";
	return H;
};
pageNav.go = function (p,pn,url){
	//$("#pageNav").html(this.nav(p,pn)); //如果使用jQuery可用此句
	document.getElementById("pageNav").innerHTML = this.nav(p, pn, url);
	if (this.fn != null) {this.fn(this.p,this.pn);};
};
