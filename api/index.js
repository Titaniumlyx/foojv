var serverUrl="http://www.fooju.cn/fjw/api.php?";
var api = {
    serverUrl:'http://www.fooju.cn',
    login:serverUrl+"s=Login/login",/*登录*/
    register:serverUrl+"s=Login/register",/*注册*/
    used_lists:serverUrl+"s=Product/used_lists",/*二手房列表*/
    retal_lists:serverUrl+"s=Product/retal_lists",/*租房房列表*/
    used_detail:serverUrl+"s=Product/used_detail",/*二手房详情*/
    adLists:serverUrl+"s=Advertisement/lists",/*广告列表*/
    adDetail:serverUrl+"s=Advertisement/detail",/*广告详情*/
    bottomLists:serverUrl+"s=Bottom/lists",/*底部网站管理列表*/
    bottomDetail:serverUrl+"s=Bottom/detail",/*底部网站管理详情*/
    regionLists:serverUrl+"s=Basics/region_lists",/*区域*/
    region_detail:serverUrl+"s=Basics/region_detail",/*区域详情*/
    Agentlists:serverUrl+"s=Agent/lists",/*经济人列表*/
    Agentdetail:serverUrl+"s=Agent/detail",/*经济人详情*/
    Userlists:serverUrl+"s=User/lists",/*会员列表*/
    Userdetail:serverUrl+"s=User/detail",/*会员详情*/
    Storelists:serverUrl+"s=Store/lists",/*门店列表*/
    Storedetail:serverUrl+"s=Store/detail",/*门店详情*/
    encyTop:serverUrl+"s=Ency/encyTop",/*门店详情*/
    indexLeaderboard:serverUrl+"s=Advertisement/indexLeaderboard",/*pc通栏广告*/
    usedDropdown:serverUrl+"s=Basics/drop_down_pc",/*二手房筛选条件*/
    houseCollect:serverUrl+"s=Operation/houseCollect",/*房源收藏*/
    houseCollectCancel:serverUrl+"s=Operation/houseCollectCancel",/*房源收藏*/
    agentCollect:serverUrl+"s=Operation/agentCollect",/*经济人收藏*/
    agentCollectCancel:serverUrl+"s=Operation/agentCollectCancel",/*取消经济人收藏*/
    userCollectAgent:serverUrl+"s=Operation/userCollectAgent",/*我的经济人*/
    agentLists:serverUrl+"s=Agent/lists",/*经纪人列表*/
    new_lists:serverUrl+"s=Product/new_lists",/*新房列表*/
    village_lists:serverUrl+"s=Village/lists",/*小区列表*/
    village_school:serverUrl+"s=Village/school",/*小区列表*/
    VillageDetail:serverUrl+"s=Village/detail",/*小区详情*/
    ProductRetal_detail:serverUrl+"s=Product/retal_detail",/*租房详情*/
    ProductNew_detail:serverUrl+"s=Product/new_detail",/*新房详情*/
    EncyEncyType:serverUrl+"s=Ency/encyType",/*百科分类*/
    EncyEncyList:serverUrl+"s=Ency/encyList",/*百科分类列表*/
    EncyEncyDetail:serverUrl+"s=Ency/encyDetail",/*百科详情*/
    EncyEncyTypeList:serverUrl+"s=Ency/encyTypeList",/*百科全部分类*/
    CalculatorNewHouseTax:serverUrl+"s=Calculator/newHouseTax",/*新房税率计算*/
    CalculatorUsedHouseTax:serverUrl+"s=Calculator/usedHouseTax",/*二手房税率计算*/
    CalculatorIndex:serverUrl+"s=Calculator/index",/*房贷计算*/
    OperationUser:serverUrl+"s=Operation/user",/*帮我找房*/
    OperationOwner:serverUrl+"s=Operation/owner",/*我是业主*/
    OperationAssess:serverUrl+"s=Operation/assess",/*房屋估价*/
    villageCollectList:serverUrl+"s=Operation/villageCollectList",/*小区收藏列表*/
    collectVillage:serverUrl+"s=Operation/villageCollect",/*收藏/取消小区收藏*/
    manyCollectCancel:serverUrl+"s=Operation/manyCollectCancel",/*收藏/取消小区收藏*/
    manyVillageCollectCancel:serverUrl+"s=Operation/manyVillageCollectCancel",/*批量取消小区收藏列表*/
    userCollect:serverUrl+"s=Operation/userCollect",/*我的关注*/
    mapHouseList:serverUrl+"s=Map/mapHouseList",/*地图找房*/
    mapHouseVillage:serverUrl+"s=Map/mapHouseVillage",/*地图找房,小区列表*/
    barrageAd:serverUrl+"s=Advertisement/barrageAd",/*弹幕广告*/
    rentLabelShaixuan:serverUrl+"s=Basics/label",/*租房筛选标签*/
    updateInfo:serverUrl+"s=Login/update",/*租房筛选标签*/
    t_login:serverUrl+"Login/t_login",/*三方登陆*/
    getUrl:serverUrl+"s=Msg/getUrl",/*三方登陆*/
    recommend:serverUrl+"s=Product/recommend/plat/2",/*推荐*/
    recommendNew:serverUrl+"s=Product/recommend_pc",/*推荐*/
    regionListCopy:serverUrl+"s=Basics/regionListCopy",/*推荐*/

    // http://114.215.83.139/fjw/api.php?s=Village/school/h_type/new
    paramToUrl:function(a,b){
        var str="";
        for (var o in b){
            if(b[o] instanceof Array){
                str+="/"+o+"/"+b[o].join();
            }else{
                str+="/"+o+"/"+b[o];
            }
        }
        return a+str
    },
    to:function (href) {
        if(href != ""){
            window.open(href);
        }
        // window.location.href=href
    }
};
