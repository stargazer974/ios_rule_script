/*************************************

项目名称：Batched-多量图片编辑器 解锁订阅
下载地址：https://t.cn/A69YGbhk
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/stargazer974/ios_rule_script/master/1.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = api.revenuecat.com

*************************************/


var chxm1023 = JSON.parse($response.body);
  
const lovebaby = {};
const lovelovebabyforevey = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  lovebaby.headers = $request.headers;
} else if (lovelovebabyforevey && lovelovebabyforevey.subscriber) {
  lovelovebabyforevey.subscriber.subscriptions = lovelovebabyforevey.subscriber.subscriptions || {};
  lovelovebabyforevey.subscriber.entitlements = lovelovebabyforevey.subscriber.entitlements || {};

  const data = {
    "expires_date": "3021-03-14T08:57:58Z",
    "original_purchase_date": "2023-07-27T08:57:58Z",
    "purchase_date": "2023-07-27T08:57:58Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };

  lovelovebabyforevey.subscriber.subscriptions["stress_membership_monthly"] = data;
  lovelovebabyforevey.subscriber.entitlements["StressWatch Pro"] = JSON.parse(JSON.stringify(data));
  lovelovebabyforevey.subscriber.entitlements["StressWatch Pro"].product_identifier = "stress_membership_monthly";

  lovebaby.body = JSON.stringify(lovelovebabyforevey);
}

$done({body : JSON.stringify(chxm1023)});
