// 可以选择三种参数test,dev,prod,rap
profiles = "rap"

rap = {}
dev = {}
test = {}
prod = {}

// rap配置
rap.urlHref = "http://rapapi.org/mockjsdata/25186"
rap.imgurlHref = "http://rapapi.org/mockjsdata/25186"
rap.webPort = 3000


// 开发配置
dev.urlHref = "http://192.168.3.93:20002"
dev.imgurlHref = "http://192.168.3.93/pap/"
dev.webPort = 3000


// 测试配置
test.urlHref = "http://192.168.3.96:20002"
test.imgurlHref = "http://192.168.3.96/pap/"
test.webPort = 20001


// 线上配置
prod.urlHref = "http://imgpap.pxene.com:20002"
prod.imgurlHref = "http://imgpap.pxene.com/"
prod.webPort = 8080