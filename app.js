const structure = {
  八里台: {
    校内食堂: ["一食堂", "二食堂", "三食堂", "清真食堂"],
    校内商业: ["90咖啡馆", "麦当劳", "瑞幸咖啡"],
    校外外卖: ["八里台周边"]
  },
  津南: {
    理科组团: [
      "魔都三兄弟",
      "兰州拉面",
      "肯律轻食",
      "711便利店快餐",
      "原汁味｜美食广场",
      "理科食堂",
      "KFC",
      "瑞幸咖啡",
      "711便利店",
      "独立店铺"
    ],
    文科组团: ["芸锦拉面", "福莲餐厅", "朴大叔拌饭", "橘南小巷", "肯德基", "清真餐厅", "文科食堂", "元和西饼", "蜜雪冰城"],
    校外外卖: ["津南周边"]
  }
};

const balitaiSeedFoods = [
  makeFood({
    source: "canteen",
    campus: "八里台",
    area: "校内食堂",
    place: "一食堂 1F",
    window: "待补充窗口",
    name: "一食堂家常盖饭",
    rating: 4.1,
    reason: "八里台条目已保留，适合到对应食堂后看现场窗口。"
  }),
  makeFood({
    source: "store",
    campus: "八里台",
    area: "校内商业",
    place: "90咖啡馆",
    window: "简餐/饮品",
    name: "90咖啡馆简餐",
    rating: 4.1,
    reason: "适合想在校内商业点买饮品、轻食或简餐。"
  }),
  makeFood({
    source: "delivery",
    campus: "八里台",
    area: "校外外卖",
    place: "八里台周边",
    window: "待采集外卖",
    name: "周边外卖自选",
    rating: 4.0,
    reason: "外卖条目用于保留校外选择，具体店铺可以后续单独维护。"
  })
];

const menuGroups = [
  group("store", "魔都三兄弟", "主食", "招牌酸辣粉、金牌酸辣粉、秘制肉酱酸辣粉、甜辣笋尖酸辣粉、泡椒鸡杂酸辣粉、川香辣子鸡酸辣粉、红烧牛肉酸辣粉、重庆肥肠酸辣粉、招牌小面/米线、金牌小面/米线、秘制肉酱小面/米线、甜辣笋尖小面/米线、泡椒鸡杂小面/米线、姜爆鸭小面/米线、川香辣子鸡小面/米线、红烧牛肉小面/米线、重庆肥肠小面/米线、番茄牛肉小面、番茄牛肉米线、番茄肉丸小面、番茄肉丸米线、原味骨汤抄手、秘制肉酱干拌面/米线、甜辣笋尖干拌面/米线、泡椒鸡杂干拌面/米线、姜爆鸭干拌面/米线、川香辣子鸡干拌面/米线、红烧牛肉干拌面/米线、重庆肥肠干拌面/米线、特色红油抄手、招牌豌杂面、秘制肉酱米线、番茄牛腩小面、番茄肉丸米线"),
  group("store", "魔都三兄弟", "小吃", "招牌酥炸小酥肉、乐山狼牙土豆、秘制里脊肉片、爆汁包浆豆腐、招牌大肉串、火山石烤肠、阿红锅巴土豆、手工红糖糍粑、油炸酥肉条、四喜肉丸、羊肉串、藕盒"),
  group("store", "兰州拉面", "面食类", "牛肉拉面、加肉拉面、青菜拉面、牛肉刀削面、葱油拌面、鸡蛋拉面、红烧牛肉面、牛肉凉面、牛肉烩面、牛肉烩面片、牛肉水饺"),
  group("store", "兰州拉面", "炒面类", "鸡蛋炒拉面、牛肉炒拉面、牛肉炒刀削面、牛肉炒面片、牛肉干拌面、牛肉炸酱面、牛肉泡馍、羊肉泡馍、新疆拌面"),
  group("store", "兰州拉面", "盖面类", "土豆烧牛肉盖面、蘑菇炒牛肉盖面、蒜蓉炒牛肉盖面、木耳炒牛肉盖面、洋葱炒牛肉盖面、西葫芦牛肉盖面、红烧牛肉盖面、红烧鸡块盖面、葱爆牛肉盖面、葱爆羊肉盖面、孜然羊肉盖面、孜然牛肉盖面、酸辣白菜盖面、青椒土豆丝盖面、番茄炒蛋盖面、大盘鸡盖面"),
  group("store", "兰州拉面", "盖饭类", "土豆烧牛肉盖饭、蘑菇炒牛肉盖饭、蒜蓉炒牛肉盖饭、青椒炒牛肉盖饭、木耳炒牛肉盖饭、洋葱炒牛肉盖饭、西葫芦牛肉盖饭、红烧牛肉盖浇饭、红烧鸡块盖饭、葱爆牛肉盖饭、葱爆羊肉盖饭、孜然羊肉盖饭、孜然牛肉盖饭、酸辣白菜盖饭、青椒土豆丝盖饭、番茄炒蛋盖饭、大盘鸡盖饭"),
  group("store", "兰州拉面", "炒饭/凉拌/特色/汤", "蛋炒饭、牛肉炒饭、兰州炒饭、凉拌土豆丝、凉拌西红柿、凉拌黄瓜、凉拌三丝、红烧牛肉、红烧羊肉、葱爆牛肉、葱爆羊肉、孜然牛肉、孜然羊肉、青椒牛肉、番茄炒蛋、青椒土豆丝、红烧鸡块、新疆大盘鸡、水煮炒牛肉、西葫芦炒牛肉、红烧茄子、牛肉清汤、西红柿鸡蛋汤"),
  group("store", "肯律轻食", "轻食", "肯律轻食待补充菜单"),
  group("store", "711便利店快餐", "便利店快餐", "711便利店快餐待补充菜单"),
  group("store", "原汁味｜美食广场", "美食广场", "原汁味美食广场待补充菜单"),

  group("canteen", "理科食堂 1F", "山东杂粮煎饼", "脆饼鸡蛋煎饼、鸡肉肠、肉松、玉米粒、海带丝、土豆丝、里脊肉、鸡柳、烤肠"),
  group("canteen", "理科食堂 1F", "隆江猪肘饭", "隆江猪肘饭"),
  group("canteen", "理科食堂 1F", "超鸡便当", "超鸡便当"),
  group("canteen", "理科食堂 1F", "轻食窗口", "水煮冬瓜、水煮快菜、水煮娃娃菜、水煮金针菇、蒸南瓜、水煮黄瓜、豆腐蒸蛋、胡萝卜山药木耳、水煮鸭肉卷、水煮虾、蒸玉米、煮鸡腿、烤鸡排、鸡胸肉、巴沙鱼、煮牛肉"),
  group("canteen", "理科食堂 1F", "喆叔打卤面", "三鲜打卤面、炸酱面、西红柿鸡蛋面、茄子肉沫、麻酱面、卤蛋、鸡腿、酸菜肉丝拌面、青椒肉丝拌面、土豆肉丁拌面、鱼香肉丝拌面、麻酱鸡丝拌面、葱油拌面"),
  group("canteen", "理科食堂 1F", "千里香手工现包馄饨福鼎肉片", "飘香拌面、青菜面、猪肉大葱水饺、猪肉白菜水饺、馄饨加拌面、芝麻汤圆、玉米排骨汤、茶树菇鸡块汤、山药排骨汤、福鼎肉片、鲜肉馄饨、虾仁馄饨、玉米馄饨、香菇馄饨、全家福馄饨、鸡汤面"),
  group("canteen", "理科食堂 1F", "铁板炒饭", "蛋炒饭、扬州炒饭、酸菜蛋炒饭、鸡蛋火腿炒饭、榨菜肉丝炒饭、鱼豆腐蛋炒饭、青椒肉丝炒饭、玉米鸡丁炒饭、香菇酱蛋炒饭、广式腊肠炒饭、培根蛋炒饭、里脊肉炒饭、五花肉炒饭、牛肉炒饭、鲜肉包、茶叶蛋、蒸饺、黑米粥、小米南瓜粥、牛奶燕麦粥、皮蛋瘦肉粥"),
  group("canteen", "理科食堂 1F", "炖炖湘", "辣椒炒肉、辣子鸡、蟹黄豆腐、湘式椒麻鸡、外婆菜炒鸡蛋、解馋回锅肉、招牌绝味鸡拌饭、可乐鸡翅拌饭、超级卤肉拌饭、荔枝鸡排饭、法式黑椒鸡拌饭、糖醋排骨拌饭、香甜烧鸡拌饭、椒麻手撕鸡拌饭、任意双拼套餐"),
  group("canteen", "理科食堂 1F", "刘二怪山西刀削面", "特色油泼面、素臊子油泼面、西红柿鸡蛋油泼面、鸡块油泼面、鸡丝油泼面、剁椒油泼面、肉臊子油泼面、二合一油泼面、三合一油泼面、酸豆角肉沫拌面、肉臊子拌面、麻酱拌面、烤肉酱拌面、招牌酱拌面、手撕鸡拌面、藤椒鸡拌面、香菇肉酱拌面、金汤酸菜鸡丝面、番茄肥牛面、小酥肉面、肥牛面、粗粮番茄渔粉、粗粮麻辣渔粉、金汤肥牛粉、酸汤肥牛粉"),
  group("canteen", "理科食堂 1F", "麦多馅饼", "照烧鸡肉馅饼、黑椒酱肉馅饼、蜜汁鸡肉馅饼、香辣鸡肉馅饼、麻辣鸡肉馅饼、青椒猪肉馅饼、鸡汁海带、香辣土豆、麻婆豆腐、鱼香茄子、秘制红豆、红枣豆浆、黑芝麻豆浆"),
  group("canteen", "理科食堂 1F", "苗香掉渣饼", "原味掉渣饼、香肠、海带丝、培根、川香鸡柳、里脊肉片、肉松、火腿片、虎皮青椒、炸土豆条"),
  group("canteen", "理科食堂 1F", "朝阳洲牛肉粉面", "蟹黄肉酱拌面/粉、现炖黄牛肉汤面/粉、招牌肉酱拌面/粉、酸豆角肉沫面/粉、湘味辣子鸡面/粉、酸汤牛肉面/粉、老坛酸菜面/粉、白切牛肉汤面/粉、番茄牛肉汤面/粉、湘味炒肉汤面/粉、番茄肉酱拌面/粉、甜辣炸鸡拌面/粉、葱油拌面、南昌拌粉、冒烤鸭干拌粉、椒麻鸡丝拌面/粉、炸蛋、烤饼、兰花串、淀粉肠、大肉肠、黑椒鸡扒"),
  group("canteen", "理科食堂 1F", "其他窗口", "炙烤五花肉、米桥里鲜烫牛肉米线、自选菜"),

  group("canteen", "理科食堂 2F", "张翼德云饺", "猪肉大葱手工水饺、猪肉白菜手工水饺、猪肉茴香手工水饺、猪肉芹菜手工水饺、猪肉酸菜手工水饺、猪肉香菇手工水饺、肉三鲜手工水饺、全家福手工水饺、鲜肉大馄饨、玉米鲜肉大馄饨、马蹄鲜肉大馄饨、皮蛋鲜肉大馄饨、虾仁鲜肉大馄饨、蟹籽鲜肉大馄饨、蟹籽虾仁鲜肉大馄饨、全家福大馄饨、招牌鲜汤、干捞水饺、红油干拌、麻酱干拌、红油麻酱干拌、鲜虾蟹籽馄饨"),
  group("canteen", "理科食堂 2F", "小渝府", "招牌香豌杂面、干溜肉酱面、干溜鸡杂面、宜宾燃面、干溜小面、干溜三鲜面、干溜担担面、鸡丝拌面、香豌燃豆面、干溜牛肉面、飘香拌面、麻辣小面、清汤小面、浓汤豌杂面、霸道牛肉面、老坛酸菜面、浓汤三鲜面、泡椒鸡杂面、浓汤肉臊面、酸菜肉丝面、担担面、麻辣米线、肉酱米线、肉酱拌米线、浓汤酸辣粉、霸道牛肉酸辣粉、酸菜肉丝酸辣粉、鸡杂酸辣粉、老麻抄手、浓汤抄手、干溜抄手、藤椒抄手、红油抄手、小油菜、肉丸、煎蛋、肥肠、虎皮鸡蛋、卤鸡腿"),
  group("canteen", "理科食堂 2F", "热汁米皮｜火锅面", "肉夹馍、牛筋面、热汁米皮、鸡丝米皮、臊子米皮、牛肉米皮、鸡丝牛筋面、臊子牛筋面、火锅素面、火锅鸡面、火锅鱼丸面、火锅牛肉面、火锅排骨面"),
  group("canteen", "理科食堂 2F", "特色安徽板面｜陕西风味面", "牛肉板面、板面+鸡蛋、板面+香肠、板面+狮子头、板面+千叶豆腐、板面套餐全加、辣子刀削面、牛肉刀削面、红烧鸡刀削面、麻辣刀削面、蔬菜刀削面、西红柿刀削面、芥麦面、红烧排骨面、鸡丝拌面、牛肉拌面、西红柿鸡蛋面、麻辣拌面、鸡丝凉面、陕西臊子面"),
  group("canteen", "理科食堂 2F", "云南生烫牛肉米线", "招牌肉酱米线、番茄肉酱米线、麻辣肉酱米线、孜然肉酱米线、生烫牛肉米线"),
  group("canteen", "理科食堂 2F", "青螺馆螺蛳粉", "招牌螺蛳粉、炸蛋螺蛳粉、经典套餐、营养套餐"),
  group("canteen", "理科食堂 2F", "精品套餐", "自选烤盘饭、酱卤猪肉饭、酱烧鸭腿饭、酱脊骨饭、农家蒸肉饭、农家小炒鸡饭、酱卤猪脆骨饭、烤鸡腿饭、锅包肉、溜肉段、酸菜五花肉"),
  group("canteen", "理科食堂 2F", "辣椒炒肉窗口", "湖南辣椒炒肉、焦糖鸡、柠檬手撕鸡、可乐鸡腿饭、重庆辣子鸡、蜜汁土豆鸡、馋娃酱肉饭、临沂小炒鸡、新疆风味爆肉"),
  group("canteen", "理科食堂 2F", "广式烧腊窗口", "广式烤鸭饭、广式叉烧肉、广式猪肘饭、广式豉汁蒸排骨、广式双拼饭、广式蜜汁烤鸡、广式照烧鸡、广式蜜汁鸡排、广式脆皮五花肉、广式潮汕肉卷"),
  group("canteen", "理科食堂 2F", "热汁卤肉饭窗口", "招牌卤肉饭、卤汁肘花饭、卤汁鸡腿饭、卤汁鸭腿饭、卤汁肉肠饭、椒麻手撕鸡肉饭、椒麻手撕鸭肉饭、卤鸡肉饭双拼、椒麻腐竹饭、麻面筋饭、卤汁豆干饭、椒麻土豆片饭、卤汁鸡排饭、卤汁牛肉饭、椒麻五花肉饭、卤五花肉饭双拼"),
  group("canteen", "理科食堂 2F", "香酥鸡米饭窗口", "卤汁香酥鸡米饭、原味香酥鸡米饭、番茄香酥鸡米饭、香辣香酥鸡米饭、千岛香酥鸡米饭、沙拉香酥鸡米饭、卤味鸡腿饭、蜜汁排骨饭、藤椒滑鸡饭、香菇滑鸡饭、骨肉相连饭、孜然煎肉饭"),
  group("canteen", "理科食堂 2F", "缘味先石锅饭窗口", "石锅千叶豆腐、石锅小酥肉、石锅小鲜肉、石锅鸡、石锅孜然肉、石锅肥牛、石锅红烧肉、石锅鸡蛋、石锅豆腐、石锅土豆、石锅焖面、石锅培根金针菇、石锅地三鲜、石锅排骨、石锅鸡蛋+土豆、石锅鸡蛋+千叶豆腐、石锅鸡蛋+豆腐、石锅鸡蛋+小酥肉、石锅鸡蛋+小鲜肉、石锅鸡蛋+鸡块、石锅鸡蛋+腊肠、石锅鸡蛋+培根、石锅鸡蛋+肥牛、石锅豆腐+鸡块、石锅焖面+小酥肉、石锅焖面+小鲜肉、石锅焖面+鸡块"),
  group("canteen", "理科食堂 2F", "其他窗口", "百味炒饭、鲁佬爷油泼鸡、经济快餐窗口、自选菜"),

  group("canteen", "理科食堂 3F", "干锅系列窗口", "干锅五花肉、干锅笋丝、酱香炒鸡、香辣炒鸡"),
  group("canteen", "理科食堂 3F", "重庆小面窗口", "抄手、酱牛肉面/粉、虫草花鸡肉面、肥肠杂面、臊子面/粉、排骨面/粉、牛肉大葱水饺、猪肉白菜水饺、猪肉大葱水饺、猪肉三鲜水饺、半鸡米线/粉、卤肉面/粉"),
  group("canteen", "理科食堂 3F", "自选菜", "自选菜"),

  group("store", "芸锦拉面", "独立经营店", "芸锦拉面待补充菜单", "文科组团"),
  group("store", "福莲餐厅", "独立经营店", "福莲餐厅待补充菜单", "文科组团"),
  group("store", "朴大叔拌饭", "独立经营店", "朴大叔拌饭待补充菜单", "文科组团"),
  group("store", "橘南小巷", "招牌红焖羊肉火锅·秘制烤鱼", "红焖羊肉火锅、秘制烤鱼", "文科组团"),
  group("store", "肯德基", "独立经营店", "肯德基待补充菜单", "文科组团"),

  group("canteen", "清真餐厅", "早餐类", "小米粥、紫米粥、南瓜粥、白米粥、原味豆浆、煮鸡蛋、素包子、豆沙饼、小菜、馅饼", "文科组团"),
  group("canteen", "清真餐厅", "中式炸鸡", "鸡翅、翅中、翅根、香骨鸡、鸡肉条、鸡叉骨、地瓜条、烤奶酪", "文科组团"),
  group("canteen", "清真餐厅", "黔味米粉", "高汤羊肉粉/面、香菇鸡丁粉/面、高汤牛肉粉/面、辣子鸡粉/面、红烧牛肉粉/面、酸菜肉丝米粉/面、泡椒牛肉粉/面、素米粉/面", "文科组团"),
  group("canteen", "清真餐厅", "特色盖浇饭", "青椒鸡块盖浇饭、黑椒鸡排盖浇饭、土豆鸡块盖浇饭、地三鲜盖浇饭、西红柿鸡蛋盖饭、宫保鸡丁盖饭、鱼香肉丝盖饭、孜然鸡丁盖饭", "文科组团"),
  group("canteen", "清真餐厅", "特色小炒", "红烧豆腐、茄子炒豆角、青椒炒鸡蛋、辣子鸡块、新疆大盘鸡（大份、小份）", "文科组团"),

  group("canteen", "文科食堂 1F", "好享扒饭窗口", "红烧肉扒饭、糖醋鸡米花扒饭、老干妈鸡块扒饭、香辣鸡片扒饭、香辣鸭片扒饭、孜然炒鸡扒饭、孜然香酥鸭扒饭、精品鸡腿扒饭、无骨鸡扒饭、可乐鸡扒饭、奥尔良鸡扒饭、黑椒里脊扒饭", "文科组团"),
  group("canteen", "文科食堂 1F", "纯手工水饺", "猪肉大葱水饺、猪肉芹菜水饺、猪肉香菇水饺、茴香鸡蛋水饺", "文科组团"),
  group("canteen", "文科食堂 1F", "一品香包子", "鲜肉小笼包、鲜肉蒸饺、酱肉包、奥尔良鸡肉包、粉条酸豆角包、胡萝卜鸡蛋包、玫瑰豆沙包、牛奶燕麦粥、绿豆百合粥、香米南瓜粥", "文科组团"),
  group("canteen", "文科食堂 1F", "山西刀削面", "西红柿鸡蛋刀削面、招牌小炖肉刀削面、肉沫炸酱刀削面、酸菜肉丝刀削面、香菇鸡丁刀削面、肉沫臊子刀削面、鸡丝拌刀削面、肉臊子拌刀削面、土豆鸡丁刀削面", "文科组团"),
  group("canteen", "文科食堂 1F", "营养快餐窗口", "香辣翅根、黄金鸡排、黑椒烤肠、红烧肉、农家肉卷、肉饼蒸蛋、炖鸡腿、四喜丸子、糖醋鸡米花、宫保鸡丁、手撕包菜、清炒油菜、冬瓜丸子、白菜粉条、冰糖南瓜、芹菜炒肉、辣子鸡丁、千页豆腐炒肉、杏鲍菇炒肉、麻婆豆腐、玉米粒、西葫芦炒肉、咖喱鸡块、麻辣鸭、孜然火腿、菜花炒肉、小酥肉、烧茄子、锅塌里脊、红烧鱼、长豆角炒肉、蒜苔炒肉、奥尔良烤鸡腿、水煮虾、清炒小白菜、粉丝蒸娃娃菜、木须肉、毛豆烧鸡块、黄豆芽粉条、清炒豆芽、清炒海带丝、尖椒炒鸡蛋、干煸土豆片、白玉菇炒肉、虾皮冬瓜、蒜蓉圆白菜、回锅肉、孜然肉片、酸辣藕片、油麦菜花、肉末蒸鸡蛋、南乳鸭块、杏鲍菇炒猪肉、螺丝椒炒猪肉、西葫芦炒猪肉、白菜炖五花肉、水煮肉片、土豆鸡块、芹菜炒五花肉、炸萝卜丸子、粉丝娃娃菜、鱼香杏鲍菇、尖椒扒茄子、蒜蓉蒸金针菇、干锅千页豆腐、地三鲜、蜜汁南瓜、藕片炒火腿", "文科组团"),
  group("canteen", "文科食堂 1F", "螺簸箕", "经典螺蛳粉、港味螺蛳粉、番茄螺蛳粉、鸡汤螺蛳粉、麻酱螺蛳粉、干捞螺蛳粉、南昌拌粉、木耳丝、酸豆角、生菜、花生、腐竹、现炸大炸蛋、网红响铃卷、无骨鸡柳、网红炸香肠、小酥肉、鸡米花", "文科组团"),
  group("canteen", "文科食堂 1F", "山西饼", "大饼、鸡蛋饼、川香鸡柳、火腿片、烤肠、奥尔良腿排、烧饼里脊、面筋串、黑椒鸡排、培根、土豆丝、海带丝、油酥饼、牛肉粉丝饼、猪肉大葱馅饼、青椒饼、土豆饼、豆沙馅饼、白糖馅饼、酱香饼、浓香原味黄豆豆浆、浓香黑芝麻豆浆、现磨红枣豆浆、现磨花生豆浆、现磨黑米红枣豆浆", "文科组团"),
  group("canteen", "文科食堂 1F", "杂粮煎饼&粥铺窗口", "火鸡面、燃面、鲜椒面、酸豆角拌面、圆白菜、火腿片、川香鸡柳、脆皮肠、海带、培根、肉松、奥尔良脆骨肠、小米南瓜粥、牛奶燕麦粥、紫米红枣粥、红糖黑米粥、红枣养生黑米粥、红豆养生粥、皮蛋瘦肉粥、酸辣汤、疙瘩汤、豆腐脑", "文科组团"),
  group("canteen", "文科食堂 1F", "小街特色面窗口", "麻酱拌面、麻辣拌面、老北京肉沫炸酱面、番茄鸡蛋面、油泼面、小街燃面、小街火鸡面、鲜椒拌面、肉沫酸豆角面、小街火鸡拌面、麻酱鸡丝拌面、小街特色汤面、鸡蛋汤面、卤肉汤面、牛肉汤面、鸡腿汤面、辣肉汤面、鸡丝汤面", "文科组团"),
  group("canteen", "文科食堂 1F", "自选菜", "自选菜", "文科组团"),

  group("canteen", "文科食堂 2F", "悦轻荷自选轻食", "照烧鸡腿谷物饭、烟熏鸡腿谷物饭、蒜香鸡腿谷物饭、黑椒鸡腿谷物饭、橄榄鸡块谷物饭、柠檬鸡块谷物饭、金枪鱼谷物饭", "文科组团"),
  group("canteen", "文科食堂 2F", "茶泡饭窗口", "黑椒脆香鸡茶泡饭、沙拉脆香鸡茶泡饭、蜜汁脆香鸡茶泡饭、孜然脆香鸡茶泡饭、柠檬脆香鸡茶泡饭、番茄脆香鸡茶泡饭、香辣脆香鸡茶泡饭、原味脆香鸡茶泡饭、时蔬茶泡饭、菌菇茶泡饭、香辣鸭骨茶泡饭、千叶豆腐茶泡饭", "文科组团"),
  group("canteen", "文科食堂 2F", "烤盘饭", "烤盘饭", "文科组团"),
  group("canteen", "文科食堂 2F", "海南鸡饭窗口", "椒麻鸡饭、照烧鸡饭、奥尔良烧肉饭、鸡排豆腐饭、烧鸭饭、烧鸡饭、泰式豆腐饭、口水鸡饭、白斩鸡饭、柠檬鸡饭、沙拉鸡饭、金牌烧肉饭", "文科组团"),
  group("canteen", "文科食堂 2F", "捞香婆香汁拌饭", "回味鸭腿饭、啫啫鸡腿饭、金牌肘子饭、糖醋烧肉饭、蜜汁烤肉饭、川香鸡鸡饭、火爆鸡丁饭、蜀香火腿饭、辣椒炒肉、鹿茸菇扒米饭、外婆菜鸡蛋、泡椒笋炒肉、农家一碗香、干锅土豆片、擂椒茄子皮蛋、肉沫酸豆角", "文科组团"),
  group("canteen", "文科食堂 2F", "辣肉面馆", "招牌肉臊汤面、招牌辣肉汤面、清汤面、绿蛋清汤面、酸菜肉丝汤面、豌豆肉末汤面、大块卤肉汤面、经典牛肉面、招牌肉臊拌面、麻酱鸡丝拌面、经典麻酱拌面、酸豆角肉沫拌面、招牌辣肉拌面、鸡蛋炸酱面、肉末炸酱面、混合炸酱面", "文科组团"),
  group("canteen", "文科食堂 2F", "云南鲜烫米线", "招牌肉酱米线、招牌肉酱面、干拌肉酱米线、干拌肉酱面、鲜烫牛肉米线、鲜烫牛肉面", "文科组团"),
  group("canteen", "文科食堂 2F", "重庆小面", "清汤面、重庆小面、酸菜肉丝面、西红柿鸡蛋面、碗杂面、小酥肉面、鸡丁拌面、香菇鸡肉面、大块卤肉面、猪肝面、精品牛肉面、酸豆角肉沫面、炸酱面、酸菜肉丝拌面、酸豆角肉沫拌面、鸡丝拌面、双椒鸡丁面、香菇鸡肉拌面、西红柿鸡蛋拌面、鸡渣拌面", "文科组团"),
  group("canteen", "文科食堂 2F", "钵钵鸡&鸡架拌饭", "钵钵鸡、小酥肉、肉卷、蔬菜时蔬、啵啵鱼、蔬菜拌饭、火腿拌饭、鸡腿拌饭、鸡架拌饭、双拼拌饭、鸡胸拌饭、鸡翅尖拌饭、全家福拌饭、蔬菜拌面、火腿拌面、鸡腿拌面、鸡架拌面、双拼拌面、鸡胸拌面、鸡翅尖拌面、全家福拌面", "文科组团"),
  group("canteen", "文科食堂 2F", "麻酱麻辣拌", "麻酱麻辣拌", "文科组团")
];

const foods = [...balitaiSeedFoods, ...menuGroups.flatMap(expandGroup)];
const venues = buildVenues(foods);

const avatars = ["南", "开", "饭", "🍚", "☕", "🥢"];
const aiNames = ["南开干饭研究员", "八里台选择终结者", "津南饭点观察员", "碳水快乐学者", "不纠结同学"];

const state = {
  source: "all",
  campus: "all",
  area: "all",
  place: "all",
  tastes: new Set(),
  tab: "all",
  search: "",
  current: null,
  profile: JSON.parse(localStorage.getItem("nkuProfile") || "null"),
  favorites: new Set(JSON.parse(localStorage.getItem("nkuFavorites") || "[]").filter((id) => venues.some((venue) => venue.id === id))),
  history: JSON.parse(localStorage.getItem("nkuHistory") || "[]").map(normalizeHistoryItem)
};

const $ = (selector) => document.querySelector(selector);
const mainResult = $("#mainResult");
const backupResults = $("#backupResults");
const foodGrid = $("#foodGrid");
const saveBtn = $("#saveBtn");
const dialog = $("#decisionDialog");
const dialogContent = $("#dialogContent");
const dialogKicker = $(".decision-dialog .section-kicker");
const dialogShuffleBtn = $("#dialogShuffle");
const dialogOkBtn = $("#dialogOk");

function group(source, place, window, itemText, area = "理科组团") {
  return {
    source,
    campus: "津南",
    area,
    place,
    window,
    items: itemText.split("、").map((item) => item.trim()).filter(Boolean)
  };
}

function expandGroup(menuGroup) {
  return menuGroup.items.map((name) =>
    makeFood({
      ...menuGroup,
      name,
      rating: inferRating(name),
      reason: "来自已录入的南开校园菜单，可按位置和偏好继续筛选。"
    })
  );
}

function makeFood({ source, campus, area, place, window, name, rating, reason }) {
  const placeInfo = normalizePlace(place);
  const rawText = `${name}${window}${place}`;
  const placeholder = /待补充|占位/.test(rawText);
  const displayWindow = /待补充|待采集/.test(window) ? (source === "delivery" ? "外卖平台" : "现场窗口") : window;
  const displayName = placeholder ? fallbackDishName(source, placeInfo.name, displayWindow) : name;
  return {
    id: slugify([campus, area, placeInfo.name, placeInfo.floor, displayWindow, displayName].join("-")),
    source,
    name: displayName,
    campus,
    area,
    place: placeInfo.name,
    originalPlace: place,
    floor: placeInfo.floor,
    window: displayWindow,
    rating,
    tags: inferTags(displayName, displayWindow),
    reason,
    placeholder
  };
}

function normalizePlace(place) {
  const match = place.match(/\s+(\dF)$/);
  return {
    name: place.replace(/\s+\dF$/, ""),
    floor: match ? match[1] : ""
  };
}

function fallbackDishName(source, place, window) {
  const text = `${place}${window}`;
  if (source === "delivery") return "平台自选";
  if (/咖啡|饮品|冰城|西饼/.test(text)) return "饮品甜品自选";
  if (/轻食/.test(text)) return "轻食自选";
  if (/美食广场|独立经营店|快餐|KFC|肯德基|711/.test(text)) return "到店自选";
  return "现场菜单自选";
}

function slugify(text) {
  let hash = 0;
  for (const char of text) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return `food-${hash.toString(36)}`;
}

function inferRating(name) {
  if (/招牌|金牌|特色|经典|超级|精品/.test(name)) return 4.6;
  if (/牛肉|鸡腿|肥牛|排骨|烤鸭|叉烧|虾仁/.test(name)) return 4.4;
  return 4.2;
}

function inferTags(name, window, place = "") {
  const text = `${name}${window}${place}`;
  const tags = new Set();
  if (/饭|盖浇|拌饭|炒饭|米饭|便当|套餐|石锅|烤盘饭|茶泡饭/.test(text)) tags.add("饭");
  if (/面|拉面|刀削|板面|拌面|小面|油泼|燃面|烩面|凉面|泡馍/.test(text)) tags.add("面");
  if (/粉|米线|螺蛳|米皮|牛筋面|渔粉/.test(text)) tags.add("粉");
  if (/饼|煎饼|馅饼|肉夹馍|烧饼|掉渣饼/.test(text)) tags.add("饼");
  if (/串|烤肠|土豆|豆腐|糍粑|小酥肉|炸蛋|肉卷|鸡翅|鸡叉骨|小吃/.test(text)) tags.add("小吃");
  if (/咖啡|饮品|豆浆|奶茶|冰城|瑞幸|茶|粥/.test(text)) tags.add("饮品");
  if (/甜|红糖|豆沙|糍粑|汤圆|蜜雪|西饼|奶酪|蜜汁|南瓜/.test(text)) tags.add("甜品");
  if (/辣|麻|椒|酸辣|螺蛳|燃面|红油|干锅|麻辣|剁椒|泡椒/.test(text)) tags.add("辣");
  if (/酸|番茄|酸菜|酸豆角|酸汤|柠檬|糖醋/.test(text)) tags.add("酸");
  if (/甜|蜜汁|红糖|糖醋|豆沙|甜辣|奶|南瓜/.test(text)) tags.add("甜");
  if (/酱|卤|烧|炒|烤|孜然|黑椒|咖喱|肉|饭|面|粉|锅/.test(text)) tags.add("咸鲜");
  if (/清汤|水煮|蒸|轻食|谷物|沙拉|黄瓜|南瓜|玉米|青菜|娃娃菜|冬瓜|时蔬|水煮虾|鸡胸|巴沙鱼/.test(text)) {
    tags.add("清淡");
    tags.add("减脂");
  }
  if (/牛肉|羊肉|鸡|鸭|虾|鱼|排骨|肥牛|猪肘|叉烧|五花肉|鸡胸|巴沙鱼|金枪鱼|鸡腿/.test(text)) tags.add("高蛋白");
  if (/咖啡|饮品|奶|甜品|西饼|冰城|豆浆|茶|糍粑|汤圆/.test(text)) tags.add("下午茶");
  if (/早餐|粥|包子|煎饼|豆浆|鸡蛋|馅饼|小笼包|蒸饺/.test(text)) tags.add("早餐");
  if (/自选|烤盘饭|麻辣拌|钵钵鸡|美食广场|到店自选|现场菜单|轻食自选|平台自选/.test(text)) tags.add("自选");
  if (!tags.has("辣")) tags.add("不辣");
  if ([...tags].some((tag) => ["饭", "面", "粉", "饼"].includes(tag)) || /饺|馄饨|套餐|便当|自选/.test(text)) tags.add("正餐");
  if (!tags.size) tags.add("正餐");
  return [...tags];
}

function sourceLabel(source) {
  return { canteen: "食堂", store: "校内商业", delivery: "外卖" }[source] || "不限";
}

function normalizeHistoryItem(item) {
  if (item.venue && item.dish) return item;
  return {
    id: item.id || slugify(`${item.name || "历史推荐"}-${item.time || ""}`),
    venue: item.name || "历史推荐",
    dish: "旧版推荐",
    time: item.time || ""
  };
}

function buildVenues(foodItems) {
  const map = new Map();
  foodItems.forEach((food) => {
    const key = venueKey(food);
    if (!map.has(key)) {
      map.set(key, {
        id: `venue-${slugify(key)}`,
        source: food.source,
        campus: food.campus,
        area: food.area,
        place: food.place,
        floor: food.source === "canteen" ? food.floor : "",
        name: venueName(food),
        windows: new Set(),
        foods: [],
        tags: new Set(),
        rating: 0
      });
    }
    const venue = map.get(key);
    venue.foods.push(food);
    if (food.window) venue.windows.add(food.window);
    food.tags.forEach((tag) => venue.tags.add(tag));
  });

  return [...map.values()].map((venue) => {
    venue.windows = [...venue.windows];
    venue.tags = [...venue.tags];
    venue.rating = venue.foods.reduce((sum, food) => sum + food.rating, 0) / venue.foods.length;
    venue.menuSummary = venue.foods.length === 1 && venue.foods[0].placeholder ? "到店看现场菜单" : `${venue.foods.length} 道可选`;
    return venue;
  });
}

function venueKey(food) {
  if (food.source === "canteen") return [food.source, food.campus, food.area, food.place, food.floor, food.window].join("|");
  return [food.source, food.campus, food.area, food.place].join("|");
}

function venueName(food) {
  if (food.source === "canteen") return food.window === "现场窗口" ? food.place : food.window;
  return food.place;
}

function updateAreaOptions() {
  const campus = $("#campus").value;
  const areaSelect = $("#area");
  const areas = campus === "all" ? [...new Set(Object.values(structure).flatMap((item) => Object.keys(item)))] : Object.keys(structure[campus]);
  areaSelect.innerHTML = `<option value="all">不限区域</option>${areas.map((area) => `<option value="${area}">${area}</option>`).join("")}`;
  state.area = "all";
  updatePlaceOptions();
}

function updatePlaceOptions() {
  const campus = $("#campus").value;
  const area = $("#area").value;
  const placeSelect = $("#place");
  let places = [];
  Object.entries(structure).forEach(([campusName, areaMap]) => {
    if (campus !== "all" && campus !== campusName) return;
    Object.entries(areaMap).forEach(([areaName, list]) => {
      if (area !== "all" && area !== areaName) return;
      places.push(...list);
    });
  });
  places = [...new Set(places)];
  placeSelect.innerHTML = `<option value="all">不限食堂/店铺</option>${places.map((place) => `<option value="${place}">${place}</option>`).join("")}`;
  state.place = "all";
}

function initSelectors() {
  $("#campus").innerHTML = `<option value="all">不限校区</option>${Object.keys(structure)
    .map((campus) => `<option value="${campus}">${campus}</option>`)
    .join("")}`;
  updateAreaOptions();
}

function scoreDish(food) {
  let score = food.rating * 10;
  state.tastes.forEach((taste) => {
    if (food.tags.includes(taste)) score += 9;
  });
  return score;
}

function scoreVenue(venue) {
  let score = venue.rating * 10;
  if (state.source === venue.source) score += 22;
  if (state.campus === "all" || state.campus === venue.campus) score += 16;
  if (state.area === "all" || state.area === venue.area) score += 14;
  if (state.place === "all" || state.place === venue.place) score += 18;
  state.tastes.forEach((taste) => {
    if (venue.tags.includes(taste)) score += 12;
  });
  if (state.favorites.has(venue.id)) score += 5;
  if (venue.foods.length > 1) score += 2;
  return score;
}

function getRankedVenues() {
  return venues
    .filter((venue) => state.source === "all" || venue.source === state.source)
    .filter((venue) => state.campus === "all" || venue.campus === state.campus)
    .filter((venue) => state.area === "all" || venue.area === state.area)
    .filter((venue) => state.place === "all" || venue.place === state.place)
    .map((venue) => ({ ...venue, score: scoreVenue(venue) }))
    .sort((a, b) => b.score - a.score);
}

function pickDish(venue, { random = false, avoidId = "" } = {}) {
  const candidates = venue.foods.filter((food) => food.id !== avoidId);
  const pool = candidates.length ? candidates : venue.foods;
  if (random) return pool[Math.floor(Math.random() * pool.length)];
  return [...pool].sort((a, b) => scoreDish(b) - scoreDish(a))[0];
}

function makeRecommendation(venue, options = {}) {
  return {
    venue,
    dish: pickDish(venue, options),
    score: scoreVenue(venue)
  };
}

function venueLocation(venue) {
  return [sourceLabel(venue.source), venue.campus, venue.area, venue.place, venue.floor].filter(Boolean).join(" · ");
}

function venueDetail(venue) {
  if (venue.source === "canteen") return [venue.place, venue.floor, venue.name === venue.place ? "" : venue.name].filter(Boolean).join(" · ");
  const windows = venue.windows.filter((window) => !/独立经营店|现场窗口|外卖平台/.test(window));
  return windows.length ? `${venue.place} · ${windows.slice(0, 3).join(" / ")}` : venue.place;
}

function recommendationReason(recommendation) {
  const { venue, dish } = recommendation;
  if (dish.placeholder) return `${venue.name} 适合到现场看菜单或自选食材，位置在 ${venueLocation(venue)}。`;
  return `${venue.name} 在 ${venueLocation(venue)}，这次推荐先点「${dish.name}」。`;
}

function renderCurrent(recommendation) {
  const { venue, dish } = recommendation;
  mainResult.innerHTML = `
    <h3>${venue.name}</h3>
    <div class="meta-line">
      ${venueLocation(venue).split(" · ").map((item) => `<span>${item}</span>`).join("")}
    </div>
    <div class="dish-pick">
      <span>推荐菜品</span>
      <strong>${dish.name}</strong>
    </div>
    <p class="reason">${recommendationReason(recommendation)}</p>
    <div class="tag-row">${dish.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
    <div class="result-actions">
      <button class="secondary-action compact-action" type="button" data-dish-shuffle>在这家换一道</button>
      <button class="secondary-action compact-action" type="button" data-preview-menu="${venue.id}">预览菜单</button>
    </div>
  `;
  saveBtn.classList.toggle("active", state.favorites.has(venue.id));
  saveBtn.textContent = state.favorites.has(venue.id) ? "已收藏" : "收藏";
}

function renderDialog(recommendation) {
  const { venue, dish } = recommendation;
  dialogKicker.textContent = "已经替你决定";
  dialogShuffleBtn.hidden = false;
  dialogShuffleBtn.textContent = "换一家";
  dialogOkBtn.textContent = "就吃这家";
  dialogContent.innerHTML = `
    <div class="dialog-food">${venue.name}</div>
    <p>${venueLocation(venue)}</p>
    <div class="dish-pick">
      <span>推荐菜品</span>
      <strong>${dish.name}</strong>
    </div>
    <p>${recommendationReason(recommendation)}</p>
    <div class="tag-row">${dish.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
  `;
  if (dialog.open) return;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function renderMenuPreview(venue) {
  dialogKicker.textContent = "这家的菜单";
  dialogShuffleBtn.hidden = true;
  dialogOkBtn.textContent = "关掉";
  const menuItems = venue.foods
    .slice(0, 80)
    .map(
      (food) => `
        <li>
          <strong>${food.name}</strong>
          <span>${food.tags.slice(0, 5).join(" · ")}</span>
        </li>
      `
    )
    .join("");
  dialogContent.innerHTML = `
    <div class="dialog-food">${venue.name}</div>
    <p>${venueLocation(venue)}</p>
    <p>${venue.foods.length === 1 && venue.foods[0].placeholder ? "这家目前按店铺收录，适合到店后看现场菜单或自选。" : `已收录 ${venue.foods.length} 个可选菜品。`}</p>
    <ul class="menu-preview-list">${menuItems}</ul>
  `;
  if (dialog.open) return;
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}

function renderResult({ random = false, record = true, popup = false } = {}) {
  const ranked = getRankedVenues();
  const pool = ranked.length ? ranked : venues.map((venue) => ({ ...venue, score: scoreVenue(venue) })).sort((a, b) => b.score - a.score);
  const primaryVenue = random ? pool[Math.floor(Math.random() * pool.length)] : pool[0];
  const recommendation = makeRecommendation(primaryVenue, { random });
  const backups = pool.filter((venue) => venue.id !== primaryVenue.id).slice(0, 3);
  state.current = recommendation;
  if (record) addHistory(recommendation);
  renderCurrent(recommendation);
  backupResults.innerHTML = backups
    .map(
      (venue) => {
        const dish = pickDish(venue);
        return `
        <button class="mini-card" type="button" data-pick="${venue.id}">
          <strong>${venue.name}</strong>
          <span>${venueLocation(venue)} · 推荐 ${dish.name}</span>
        </button>
      `;
      }
    )
    .join("");
  renderStats();
  if (popup) renderDialog(recommendation);
}

function renderGrid() {
  const query = state.search.trim().toLowerCase();
  const visible = venues.filter((venue) => {
    if (state.tab === "favorite" && !state.favorites.has(venue.id)) return false;
    if (state.tab !== "all" && state.tab !== "favorite" && venue.source !== state.tab) return false;
    if (!query) return true;
    return [venue.name, venue.campus, venue.area, venue.place, venue.floor, ...venue.windows, ...venue.tags, ...venue.foods.map((food) => food.name)].some((item) =>
      item.toLowerCase().includes(query)
    );
  });

  if (!visible.length) {
    foodGrid.innerHTML = `<div class="empty">暂时没有匹配结果。真实菜单补充后，这里会更有用。</div>`;
    return;
  }

  foodGrid.innerHTML = visible
    .slice(0, 180)
    .map(
      (venue) => {
        const dish = pickDish(venue);
        return `
        <article class="food-card">
          <div class="meta-line"><span>${sourceLabel(venue.source)}</span><span>${venue.campus}</span><span>${venue.area}</span></div>
          <h3>${venue.name}</h3>
          <p>${venueDetail(venue)}</p>
          <div class="dish-preview"><span>推荐</span><strong>${dish.name}</strong></div>
          <div class="tag-row">${venue.tags.slice(0, 5).map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
          <div class="card-footer">
            <strong>${venue.menuSummary}</strong>
            <div class="card-actions">
              <button class="secondary-action compact-action" type="button" data-preview="${venue.id}">预览</button>
              <button class="save-small ${state.favorites.has(venue.id) ? "active" : ""}" type="button" data-save="${venue.id}" aria-label="收藏 ${venue.name}" title="收藏">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 21-1.4-1.3C5.4 15 2 11.9 2 8.1 2 5 4.4 3 7.2 3c1.6 0 3.1.7 4.1 1.8C12.3 3.7 13.8 3 15.4 3 18.2 3 20.6 5 20.6 8.1c0 3.8-3.4 6.9-8.6 11.6L12 21Z"/></svg>
              </button>
            </div>
          </div>
        </article>
      `;
      }
    )
    .join("");
}

function renderCampusMap() {
  $("#campusMap").innerHTML = Object.entries(structure)
    .map(
      ([campus, areas]) => `
        <article class="map-card">
          <h3>${campus}</h3>
          ${Object.entries(areas)
            .map(([area, places]) => `<p><strong>${area}</strong><span>${places.join(" / ")}</span></p>`)
            .join("")}
        </article>
      `
    )
    .join("");
}

function renderStats() {
  $("#favoriteCount").textContent = state.favorites.size;
  $("#historyCount").textContent = state.history.length;
  $("#historyList").innerHTML = state.history.length
    ? state.history
        .slice(0, 6)
        .map((item) => `<div class="history-item"><strong>${item.venue}</strong><span>${item.dish} · ${item.time}</span></div>`)
        .join("")
    : `<div class="empty">还没有推荐历史，点一次“帮我决定”就会出现。</div>`;
}

function addHistory(recommendation) {
  const now = new Date();
  const label = `${now.getMonth() + 1}月${now.getDate()}日 ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  const item = {
    id: `${recommendation.venue.id}-${recommendation.dish.id}`,
    venue: recommendation.venue.name,
    dish: recommendation.dish.name,
    time: label
  };
  state.history = [item, ...state.history.filter((historyItem) => historyItem.id !== item.id)].slice(0, 20);
  localStorage.setItem("nkuHistory", JSON.stringify(state.history));
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  localStorage.setItem("nkuFavorites", JSON.stringify([...state.favorites]));
  renderGrid();
  renderStats();
  if (state.current) {
    saveBtn.classList.toggle("active", state.favorites.has(state.current.venue.id));
    saveBtn.textContent = state.favorites.has(state.current.venue.id) ? "已收藏" : "收藏";
  }
}

function syncFilters() {
  state.campus = $("#campus").value;
  state.area = $("#area").value;
  state.place = $("#place").value;
}

function pickAiProfile() {
  const name = aiNames[Math.floor(Math.random() * aiNames.length)];
  const avatar = avatars[Math.floor(Math.random() * avatars.length)];
  $("#nicknameInput").value = name;
  selectAvatar(avatar);
}

function selectAvatar(avatar) {
  $("#avatarPreview").textContent = avatar;
  document.querySelectorAll("[data-avatar]").forEach((button) => button.classList.toggle("active", button.dataset.avatar === avatar));
}

function saveProfile() {
  const name = $("#nicknameInput").value.trim() || "南开同学";
  const avatar = $("#avatarPreview").textContent || "南";
  state.profile = { name, avatar };
  localStorage.setItem("nkuProfile", JSON.stringify(state.profile));
  applyProfile();
  $("#onboarding").hidden = true;
}

function applyProfile() {
  const profile = state.profile || { name: "南开同学", avatar: "南" };
  $("#userGreeting").textContent = `${profile.name}，今天吃点什么`;
  $("#profileName").textContent = profile.name;
  $("#profileAvatar").textContent = profile.avatar;
}

function initProfile() {
  $("#avatarGrid").innerHTML = avatars.map((avatar) => `<button type="button" data-avatar="${avatar}">${avatar}</button>`).join("");
  selectAvatar(state.profile?.avatar || "南");
  $("#nicknameInput").value = state.profile?.name || "";
  $("#avatarGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-avatar]");
    if (button) selectAvatar(button.dataset.avatar);
  });
  $("#aiProfileBtn").addEventListener("click", pickAiProfile);
  $("#enterBtn").addEventListener("click", saveProfile);
  $("#editProfileBtn").addEventListener("click", openProfileEditor);
  $("#cancelProfileBtn").addEventListener("click", closeProfileEditor);
  if (!state.profile) openProfileEditor({ initial: true });
  applyProfile();
}

function openProfileEditor({ initial = false } = {}) {
  $("#profileFormKicker").textContent = initial ? "第一次见面" : "修改档案";
  $("#loginTitle").textContent = initial ? "先给你的饭点档案起个名" : "改一下你的饭点档案";
  $("#profileFormIntro").textContent = initial ? "昵称和头像只保存在当前浏览器，用来让推荐结果更有个人感。" : "保存后会立刻更新当前浏览器里的头像和昵称。";
  $("#enterBtn").textContent = initial ? "进入网站" : "保存档案";
  $("#cancelProfileBtn").hidden = initial;
  $("#nicknameInput").value = state.profile?.name || "";
  selectAvatar(state.profile?.avatar || "南");
  $("#onboarding").hidden = false;
}

function closeProfileEditor() {
  $("#onboarding").hidden = true;
}

document.querySelectorAll("[data-filter='source'] button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter='source'] button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.source = button.dataset.value;
    renderResult({ record: false });
  });
});

$("#campus").addEventListener("change", () => {
  updateAreaOptions();
  syncFilters();
  renderResult({ record: false });
});

$("#area").addEventListener("change", () => {
  updatePlaceOptions();
  syncFilters();
  renderResult({ record: false });
});

["place"].forEach((id) => {
  $(`#${id}`).addEventListener("change", () => {
    syncFilters();
    renderResult({ record: false });
  });
});

$("#filters").addEventListener("submit", (event) => {
  event.preventDefault();
  syncFilters();
  renderResult({ popup: true });
});

document.querySelectorAll("#tasteChips button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    if (state.tastes.has(button.dataset.value)) state.tastes.delete(button.dataset.value);
    else state.tastes.add(button.dataset.value);
    renderResult({ record: false });
  });
});

$("#randomBtn").addEventListener("click", () => renderResult({ random: true, popup: true }));
dialogShuffleBtn.addEventListener("click", () => renderResult({ random: true, popup: true }));
dialogOkBtn.addEventListener("click", () => dialog.close());
$("#closeDialog").addEventListener("click", () => dialog.close());

backupResults.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pick]");
  if (!button) return;
  const venue = venues.find((item) => item.id === button.dataset.pick);
  if (!venue) return;
  state.current = makeRecommendation(venue);
  addHistory(state.current);
  renderCurrent(state.current);
  renderDialog(state.current);
  renderStats();
});

saveBtn.addEventListener("click", () => {
  if (state.current) toggleFavorite(state.current.venue.id);
});

mainResult.addEventListener("click", (event) => {
  if (event.target.closest("[data-dish-shuffle]")) {
    if (!state.current) return;
    state.current = makeRecommendation(state.current.venue, { random: true, avoidId: state.current.dish.id });
    renderCurrent(state.current);
    renderStats();
  }
  const previewButton = event.target.closest("[data-preview-menu]");
  if (previewButton) {
    const venue = venues.find((item) => item.id === previewButton.dataset.previewMenu);
    if (venue) renderMenuPreview(venue);
  }
});

$("#libraryTabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-tab]");
  if (!button) return;
  document.querySelectorAll("#libraryTabs button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  state.tab = button.dataset.tab;
  renderGrid();
});

$("#searchInput").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderGrid();
});

foodGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-save]");
  if (button) toggleFavorite(button.dataset.save);
  const previewButton = event.target.closest("[data-preview]");
  if (previewButton) {
    const venue = venues.find((item) => item.id === previewButton.dataset.preview);
    if (venue) renderMenuPreview(venue);
  }
});

initSelectors();
initProfile();
renderCampusMap();
renderResult({ record: false });
renderGrid();
renderStats();
