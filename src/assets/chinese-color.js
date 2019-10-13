
// 数据来源：https://github.com/zerosoul/chinese-colorsiki/日本传统色系

const chineseColors = [
  {
    "id": "0-0",
    "hex": "#ffb3a7",
    "name": "粉红",
    "intro": "即浅红色。别称：妃色、杨妃色、湘妃色、妃红色",
    "figure": "flower.moon.png?o=0.8"
  },
  {
    "id": "0-1",
    "hex": "#ed5736",
    "name": "妃色",
    "intro": "妃红色。古同\"绯\"，粉红色。杨妃色湘妃色粉红皆同义。"
  },
  {
    "id": "0-2",
    "hex": "#f00056",
    "name": "品红",
    "intro": "比大红浅的红色（这里的\"品红\"估计是指的\"一品红\"，是基于大红色系的，和现在我们印刷用色的\"品红M100\"不是一个概念）"
  },
  {
    "id": "0-3",
    "hex": "#f47983",
    "name": "桃红",
    "intro": "桃花的颜色，比粉红略鲜润的颜色。（不大于M70的色彩，有时可加入适量黄色）"
  },
  {
    "id": "0-4",
    "hex": "#db5a6b",
    "name": "海棠红",
    "intro": "淡紫红色、较桃红色深一些，是非常妩媚娇艳的颜色。",
    "figure": "flower.moon.png?o=0.6"
  },
  {
    "id": "0-5",
    "hex": "#f20c00",
    "name": "石榴红",
    "intro": "石榴花的颜色，高色度和纯度的红色。"
  },
  { "id": "0-6", "hex": "#c93756", "name": "樱桃色", "intro": "鲜红色" },
  {
    "id": "0-7",
    "hex": "#f05654",
    "name": "银红",
    "intro": "银朱和粉红色颜料配成的颜色。多用来形容有光泽的各种红色，尤指有光泽浅红。"
  },
  {
    "id": "0-8",
    "hex": "#ff2121",
    "name": "大红",
    "intro": "正红色，三原色中的红，传统的中国红，又称绛色（RGB色中的R255系列明度）",
    "figure": "long.png?width=20rem"
  },
  {
    "id": "0-9",
    "hex": "#8c4356",
    "name": "绛紫",
    "intro": "紫中略带红的颜色",
    "figure": "fenyue.png"
  },
  { "id": "0-10", "hex": "#c83c23", "name": "绯红", "intro": "艳丽的深红" },
  {
    "id": "0-11",
    "hex": "#9d2933",
    "name": "胭脂",
    "intro": "1，女子装扮时用的胭脂的颜色。2，国画暗红色颜料"
  },
  {
    "id": "0-12",
    "hex": "#ff4c00",
    "name": "朱红",
    "intro": "朱砂的颜色，比大红活泼，也称铅朱朱色丹色（在YM对等的情况下，适量减少红色的成分就是该色的色彩系列感觉）"
  },
  { "id": "0-13", "hex": "#ff4e20", "name": "丹", "intro": "丹砂的鲜艳红色" },
  { "id": "0-14", "hex": "#f35336", "name": "彤", "intro": "赤色" },
  { "id": "0-15", "hex": "#cb3a56", "name": "茜色", "intro": "茜草染的色彩，呈深红色" },
  { "id": "0-16", "hex": "#ff2d51", "name": "火红", "intro": "火焰的红色，赤色" },
  { "id": "0-17", "hex": "#c91f37", "name": "赫赤", "intro": "深红，火红。泛指赤色、火红色。" },
  {
    "id": "0-18",
    "hex": "#ef7a82",
    "name": "嫣红",
    "intro": "鲜艳的红色",
    "figure": "jinyu.png?o=0.8"
  },
  {
    "id": "0-19",
    "hex": "#ff0097",
    "name": "洋红",
    "intro": "色橘红（这个色彩方向不太对，通常洋红指的是倾向于M100系列的红色，应该削弱黄色成分。）"
  },
  { "id": "0-20", "hex": "#ff3300", "name": "炎", "intro": "引申为红色" },
  { "id": "0-21", "hex": "#c3272b", "name": "赤", "intro": "本义火的颜色，即红色" },
  {
    "id": "0-22",
    "hex": "#a98175",
    "name": "绾",
    "intro": "绛色；浅绛色",
    "figure": "luohong.png?position=top"
  },
  { "id": "0-23", "hex": "#c32136", "name": "枣红", "intro": "即深红（色相不变，是深浅变化）" },
  {
    "id": "0-24",
    "hex": "#b36d61",
    "name": "檀",
    "intro": "浅红色，浅绛色"
  },
  { "id": "0-25", "hex": "#be002f", "name": "殷红", "intro": "发黑的红色。" },
  {
    "id": "0-26",
    "hex": "#dc3023",
    "name": "酡红",
    "intro": "像饮酒后脸上泛现的红色，泛指脸红"
  },
  {
    "id": "0-27",
    "hex": "#f9906f",
    "name": "酡颜",
    "intro": "饮酒脸红的样子。亦泛指脸红色",
    "figure": "meinv.png?o=0.9&width=18rem"
  },
  {
    "id": "1-0",
    "hex": "#fff143",
    "name": "鹅黄",
    "intro": "淡黄色（鹅嘴的颜色，高明度微偏红黄色）",
    "figure": "huofenghuang.png"
  },
  { "id": "1-1", "hex": "#faff72", "name": "鸭黄", "intro": "小鸭毛的黄色" , "isDark": true},
  { "id": "1-2", "hex": "#eaff56", "name": "樱草色", "intro": "淡黄色" },
  {
    "id": "1-3",
    "hex": "#ffa631",
    "name": "杏黄",
    "intro": "成熟杏子的黄色（Y100M20~30感觉的色彩，比较常用且有浓郁中国味道）",
    "figure": "lianiao.png"
  },
  { "id": "1-4", "hex": "#ff8c31", "name": "杏红", "intro": "成熟杏子偏红色的一种颜色" },
  {
    "id": "1-5",
    "hex": "#ff8936",
    "name": "橘黄",
    "intro": "柑橘的黄色。",
    "figure": "liahudie.png"
  },
  {
    "id": "1-6",
    "hex": "#ffa400",
    "name": "橙黄",
    "intro": "同上。（Y100M50感觉的色彩，现代感比较强。广告上用得较多）"
  },
  { "id": "1-7", "hex": "#ff7500", "name": "橘红", "intro": "柑橘皮所呈现的红色。" },
  {
    "id": "1-8",
    "hex": "#ffc773",
    "name": "姜黄",
    "intro": "中药名。别名黄姜。为姜科植物姜黄的根茎。又指人脸色不正,呈黄白色"
  },
  { "id": "1-9", "hex": "#f0c239", "name": "缃色", "intro": "浅黄色" },
  {
    "id": "1-10",
    "hex": "#fa8c35",
    "name": "橙色",
    "intro": "界于红色和黄色之间的混合色"
  },
  { "id": "1-11", "hex": "#b35c44", "name": "茶色", "intro": "一种比栗色稍红的棕橙色至浅棕色" },
  {
    "id": "1-12",
    "hex": "#a88462",
    "name": "驼色",
    "intro": "一种比咔叽色稍红而微淡、比肉桂色黄而稍淡和比核桃棕色黄而暗的浅黄棕色"
  },
  { "id": "1-13", "hex": "#c89b40", "name": "昏黄", "intro": "形容天色、灯光等呈幽暗的黄色" },
  { "id": "1-14", "hex": "#60281e", "name": "栗色", "intro": "栗壳的颜色。即紫黑色" },
  {
    "id": "1-15",
    "hex": "#b25d25",
    "name": "棕色",
    "intro": "棕毛的颜色,即褐色。1，在红色和黄色之间的任何一种颜色2，适中的暗淡和适度的浅黑。"
  },
  {
    "id": "1-16",
    "hex": "#827100",
    "name": "棕绿",
    "intro": "绿中泛棕色的一种颜色",
    "figure": "bottom.qunshan.png?width=100%"
  },
  { "id": "1-17", "hex": "#7c4b00", "name": "棕黑", "intro": "深棕色。" },
  { "id": "1-18", "hex": "#9b4400", "name": "棕红", "intro": "红褐色。" },
  { "id": "1-19", "hex": "#ae7000", "name": "棕黄", "intro": "浅褐色。" },
  { "id": "1-20", "hex": "#9c5333", "name": "赭", "intro": "赤红如赭土的颜料,古人用以饰面" },
  { "id": "1-21", "hex": "#955539", "name": "赭色", "intro": "红色、赤红色。" },
  { "id": "1-22", "hex": "#ca6924", "name": "琥珀", "intro": "" },
  { "id": "1-23", "hex": "#6e511e", "name": "褐色", "intro": "黄黑色" },
  {
    "id": "1-24",
    "hex": "#d3b17d",
    "name": "枯黄",
    "intro": "干枯焦黄"
  },
  {
    "id": "1-25",
    "hex": "#e29c45",
    "name": "黄栌",
    "intro": "一种落叶灌木，花黄绿色,叶子秋天变成红色。木材黄色可做染料。",
    "figure": "heyue.png"
  },
  {
    "id": "1-26",
    "hex": "#896c39",
    "name": "秋色",
    "intro": "1，中常橄榄棕色,它比一般橄榄棕色稍暗,且稍稍绿些。2，古以秋为金,其色白,故代指白色。",
    "figure": "fenshu.png"
  },
  {
    "id": "1-27",
    "hex": "#d9b611",
    "name": "秋香色",
    "intro": "浅橄榄色浅黄绿色。（直接在Y中掺入k10~30可得到不同浓淡的该类色彩）"
  },
  { "id": "2-0", "hex": "#bddd22", "name": "嫩绿", "intro": "像刚长出的嫩叶的浅绿色" },
      { "id": "2-1", "hex": "#c9dd22", "name": "柳黄", "intro": "像柳树芽那样的浅黄色" },
      { "id": "2-2", "hex": "#afdd22", "name": "柳绿", "intro": "柳叶的青绿色" },
      {
        "id": "2-3",
        "hex": "#789262",
        "name": "竹青",
        "intro": "竹子的绿色",
        "figure": "mozhu.png"
      },
      { "id": "2-4", "hex": "#a3d900", "name": "葱黄", "intro": "黄绿色，嫩黄色" },
      {
        "id": "2-5",
        "hex": "#9ed900",
        "name": "葱绿",
        "intro": "1，浅绿又略显微黄的颜色2，草木青翠的样子"
      },
      { "id": "2-6", "hex": "#0eb83a", "name": "葱青", "intro": "淡淡的青绿色" },
      { "id": "2-7", "hex": "#0eb840", "name": "葱倩", "intro": "青绿色" },
      { "id": "2-8", "hex": "#0aa344", "name": "青葱", "intro": "翠绿色,形容植物浓绿" },
      {
        "id": "2-9",
        "hex": "#00bc12",
        "name": "油绿",
        "intro": "光润而浓绿的颜色。以上几种绿色都是明亮可爱的色彩。"
      },
      { "id": "2-10", "hex": "#0c8918", "name": "绿沈", "intro": "（沉）深绿" },
      {
        "id": "2-11",
        "hex": "#1bd1a5",
        "name": "碧色",
        "intro": "1，青绿色。2，青白色,浅蓝色。",
        "figure": "hehua3.png"
      },
      { "id": "2-12", "hex": "#2add9c", "name": "碧绿", "intro": "鲜艳的青绿色" },
      {
        "id": "2-13",
        "hex": "#48c0a3",
        "name": "青碧",
        "intro": "鲜艳的青蓝色",
        "figure": "guohua.hua.png"
      },
      {
        "id": "2-14",
        "hex": "#3de1ad",
        "name": "翡翠色",
        "intro": "1，翡翠鸟羽毛的青绿色。2，翡翠宝石的颜色。（C-Y≥30的系列色彩，多与白色配合以体现清新明丽感觉，与黑色配合效果不好该色个性柔弱，会被黑色牵制）"
      },
      { "id": "2-15", "hex": "#40de5a", "name": "草绿", "intro": "绿而略黄的颜色。" },
      {
        "id": "2-16",
        "hex": "#00e09e",
        "name": "青色",
        "intro": "1，一类带绿的蓝色,中等深浅,高度饱和。3，本义是蓝色。4，一般指深绿色。5，也指黑色。6，四色印刷中的一色。2，特指三补色中的一色。",
        "figure": "hehuaqingting.png"
      },
      { "id": "2-17", "hex": "#00e079", "name": "青翠", "intro": "鲜绿", "figure": "song.png" },
      {
        "id": "2-18",
        "hex": "#c0ebd7",
        "name": "青白",
        "intro": "白而发青,尤指脸没有血色",
        "figure": "xia.png",
         "isDark": true
      },
      {
        "id": "2-19",
        "hex": "#e0eee8",
        "name": "鸭卵青",
        "intro": "淡青灰色，极淡的青绿色",
        "figure": "shuanghe2.png",
         "isDark": true
      },
      {
        "id": "2-20",
        "hex": "#bbcdc5",
        "name": "蟹壳青",
        "intro": "深灰绿色",
        "figure": "guohua.hehua2.png"
      },
      {
        "id": "2-21",
        "hex": "#424c50",
        "name": "鸦青",
        "intro": "鸦羽的颜色。即黑而带有紫绿光的颜色。"
      },
      {
        "id": "2-22",
        "hex": "#00e500",
        "name": "绿色",
        "intro": "1，在光谱中介于蓝与黄之间的那种颜色。2，本义青中带黄的颜色。3，引申为黑色，如绿鬓乌黑而光亮的鬓发。代指为青春年少的容颜。（现代色彩研究中，把绿色提高到了一个重要的位置，和其它红黄兰三原色并列研究，称做\"心理原色\"之一）"
      },
      { "id": "2-23", "hex": "#9ed048", "name": "豆绿", "intro": "浅黄绿色" },
      {
        "id": "2-24",
        "hex": "#96ce54",
        "name": "豆青",
        "intro": "浅青绿色",
        "figure": "right.bottom.huaping.png?width=8rem&o=0.8"
      },
      {
        "id": "2-25",
        "hex": "#7bcfa6",
        "name": "石青",
        "intro": "淡灰绿色",
        "figure": "right.bottom.honghehua.png"
      },
      {
        "id": "2-26",
        "hex": "#2edfa3",
        "name": "玉色",
        "intro": "玉的颜色，高雅的淡绿、淡青色",
        "figure": "jinyu.png"
      },
      {
        "id": "2-27",
        "hex": "#7fecad",
        "name": "缥",
        "intro": "绿色而微白",
        "figure": "right.bottom.hongmujin.png"
      },
      {
        "id": "2-28",
        "hex": "#a4e2c6",
        "name": "艾绿",
        "intro": "艾草的颜色。偏苍白的绿色",
        "figure": "yunshan.png"
      },
      {
        "id": "2-29",
        "hex": "#21a675",
        "name": "松柏绿",
        "intro": "经冬松柏叶的深绿",
        "figure": "guohua.hehua.png"
      },
      {
        "id": "2-30",
        "hex": "#057748",
        "name": "松花绿",
        "intro": "亦作\"松花\"、\"松绿\"。偏黑的深绿色,墨绿。",
        "figure": "hudie.png?width=10rem"
      },
      {
        "id": "2-31",
        "hex": "#bce672",
        "name": "松花色",
        "intro": "浅黄绿色。（松树花粉的颜色）《红楼梦》中提及松花配桃红为娇艳"
      },
      {
        "id": "3-0",
        "hex": "#44cef6",
        "name": "蓝",
        "intro": "三原色的一种。像晴天天空的颜色（这里的蓝色指的不是RGB色彩中的B，而是CMY色彩中的C）"
      },
      {
        "id": "3-1",
        "hex": "#177cb0",
        "name": "靛青",
        "intro": "也叫\"蓝靛\"。用蓼蓝叶泡水调和与石灰沉淀所得的蓝色染料。呈深蓝绿色（靛，发音dian四声，有些地方将蓝墨水称为\"靛水\"或者\"兰靛水\"）",
        "figure": "hehua.caise.png?width=17rem&o=0.7"
      },
      {
        "id": "3-2",
        "hex": "#065279",
        "name": "靛蓝",
        "intro": "由植物(例如靛蓝或菘蓝属植物)得到的蓝色染料",
        "figure": "moon.png"
      },
      {
        "id": "3-3",
        "hex": "#3eede7",
        "name": "碧蓝",
        "intro": "青蓝色",
        "figure": "wave.png?width=100%"
      },
      {
        "id": "3-4",
        "hex": "#70f3ff",
        "name": "蔚蓝",
        "intro": "类似晴朗天空的颜色的一种蓝色",
        "figure": "he.png"
      },
      {
        "id": "3-5",
        "hex": "#4b5cc4",
        "name": "宝蓝",
        "intro": "鲜艳明亮的蓝色（英文中为RoyalBlue即皇家蓝色，是皇室选用的色彩，多和小面积纯黄色（金色）配合使用。）"
      },
      {
        "id": "3-6",
        "hex": "#a1afc9",
        "name": "蓝灰色",
        "intro": "一种近于灰略带蓝的深灰色",
        "figure": "left.bottom.mutong.png"
      },
      { "id": "3-7", "hex": "#2e4e7e", "name": "藏青", "intro": "蓝而近黑" },
      { "id": "3-8", "hex": "#3b2e7e", "name": "藏蓝", "intro": "蓝里略透红色" },
      {
        "id": "3-9",
        "hex": "#4a4266",
        "name": "黛",
        "intro": "别名：黛色，黛螺。青黑色的颜料。古代女子用以画眉。绘画或画眉所使用的青黑色颜料，代指女子眉妩。"
      },
      { "id": "3-10", "hex": "#426666", "name": "黛绿", "intro": "墨绿", "figure": "honghua.png" },
      {
        "id": "3-11",
        "hex": "#425066",
        "name": "黛蓝",
        "intro": "深蓝色",
        "figure": "left.mei.png?position=left"
      },
      { "id": "3-12", "hex": "#574266", "name": "黛紫", "intro": "深紫色" },
      {
        "id": "3-13",
        "hex": "#8d4bbb",
        "name": "紫色",
        "intro": "蓝和红组成的颜色。古人以紫为祥瑞的颜色。代指与帝王、皇宫有关的事物",
        "figure": "right.bottom.qunshan.png"
      },
      { "id": "3-14", "hex": "#815463", "name": "紫酱", "intro": "浑浊的紫色" },
      { "id": "3-15", "hex": "#815476", "name": "酱紫", "intro": "紫中略带红的颜色" },
      { "id": "3-16", "hex": "#4c221b", "name": "紫檀", "intro": "檀木的颜色，也称乌檀色乌木色" },
      { "id": "3-17", "hex": "#003371", "name": "绀青绀紫", "intro": "纯度较低的深紫色" },
      { "id": "3-18", "hex": "#56004f", "name": "紫棠", "intro": "黑红色" },
      { "id": "3-19", "hex": "#801dae", "name": "青莲", "intro": "偏蓝的紫色" },
      { "id": "3-20", "hex": "#4c8dae", "name": "群青", "intro": "深蓝色", "figure": "meihua.png" },
      {
        "id": "3-21",
        "hex": "#b0a4e3",
        "name": "雪青",
        "intro": "浅蓝紫色",
        "figure": "mujin.png"
      },
      {
        "id": "3-22",
        "hex": "#cca4e3",
        "name": "丁香色",
        "intro": "紫丁香的颜色，浅浅的紫色，很娇柔淡雅的色彩",
        "figure": "huaniao.png"
      },
      {
        "id": "3-23",
        "hex": "#edd1d8",
        "name": "藕色",
        "intro": "浅灰而略带红的颜色",
        "figure": "jianzhi.png?width=20rem&opacity=0.6"
      },
      {
        "id": "3-24",
        "hex": "#e4c6d0",
        "name": "藕荷色",
        "intro": "浅紫而略带红的颜色",
        "figure": "meinv2.png"
      },
      {
        "id": "4-0",
        "hex": "#75878a",
        "name": "苍色",
        "intro": "即各种颜色掺入黑色后的颜色",
        "figure": "qunshan.png?width=100%"
      },
      {
        "id": "4-1",
        "hex": "#519a73",
        "name": "苍翠",
        "intro": "",
        "figure": "lvzhu.png?width=18rem"
      },
      {
        "id": "4-2",
        "hex": "#a29b7c",
        "name": "苍黄",
        "intro": "",
        "figure": "guilinshanshui.png"
      },
      {
        "id": "4-3",
        "hex": "#7397ab",
        "name": "苍青",
        "intro": "",
        "figure": "liangduohua.png?width=12rem"
      },
      { "id": "4-4", "hex": "#395260", "name": "苍黑", "intro": "", "figure": "sundown.png" },
      {
        "id": "4-5",
        "hex": "#d1d9e0",
        "name": "苍白",
        "intro": "准确的说是掺入不同灰度级别的灰色",
        "figure": "fanchuan.png",
        "isDark": true
      },
      {
        "id": "5-0",
        "hex": "#88ada6",
        "name": "水色",
        "intro": "",
        "figure": "hehuayu.png?width=16rem"
      },
      {
        "id": "5-1",
        "hex": "#f3d3e7",
        "name": "水红",
        "intro": "",
        "figure": "hehua2.png?width=18rem"
      },
      {
        "id": "5-2",
        "hex": "#d4f2e7",
        "name": "水绿",
        "intro": "",
        "figure": "yu.png?width=17rem"
      },
      {
        "id": "5-3",
        "hex": "#d2f0f4",
        "name": "水蓝",
        "intro": "",
        "figure": "moon.png?width=18rem"
      },
      {
        "id": "5-4",
        "hex": "#d3e0f3",
        "name": "淡青",
        "intro": "",
        "figure": "huaping.png?width=18rem"
      },
      { "id": "5-5", "hex": "#30dff3", "name": "湖蓝", "intro": "", "figure": "shuanghe.png" },
      {
        "id": "5-6",
        "hex": "#25f8cb",
        "name": "湖绿",
        "intro": "皆是浅色。深色淡色，颜色深的或浅的，不再一一列出。",
        "figure": "hehua.caise.png"
      },
      {
        "id": "6-0",
        "hex": "#ffffff",
        "name": "精白",
        "intro": "纯白，洁白，净白，粉白。",
        "figure": "meihua.shuimo.png",
        "isDark": true
      },
      { "id": "6-1", "hex": "#fffbf0", "name": "象牙白", "intro": "乳白色", "figure": "pomo.png" ,
      "isDark": true},
      {
        "id": "6-2",
        "hex": "#f2fdff",
        "name": "雪白",
        "intro": "如雪般洁白",
        "figure": "meihua.pink.png",
        "isDark": true
      },
      {
        "id": "6-3",
        "hex": "#d6ecf0",
        "name": "月白",
        "intro": "淡蓝色",
        "figure": "fenhua.png",
        "isDark": true
      },
      { "id": "6-4", "hex": "#f2ecde", "name": "缟", "intro": "白色", "figure": "meihua.pink.png" ,
      "isDark": true},
      {
        "id": "6-5",
        "hex": "#e0f0e9",
        "name": "素",
        "intro": "白色，无色",
        "figure": "qunshan.png?width=100%",
        "isDark": true
      },
      {
        "id": "6-6",
        "hex": "#f3f9f1",
        "name": "荼白",
        "intro": "如荼之白色",
        "figure": "ddh.png?width=16rem",
        "isDark": true
      },
      {
        "id": "6-7",
        "hex": "#e9f1f6",
        "name": "霜色",
        "intro": "白霜的颜色。",
        "figure": "cao.png",
        "isDark": true
      },
      {
        "id": "6-8",
        "hex": "#c2ccd0",
        "name": "花白",
        "intro": "白色和黑色混杂的。斑白的夹杂有灰色的白",
        "figure": "chuan.png",
        "isDark": true
      },
      {
        "id": "6-9",
        "hex": "#fcefe8",
        "name": "鱼肚白",
        "intro": "似鱼腹部的颜色，多指黎明时东方的天色颜色（M5Y5）",
        "figure": "zuibaxian.png?width=100%",
        "isDark": true
      },
      {
        "id": "6-10",
        "hex": "#e3f9fd",
        "name": "莹白",
        "intro": "晶莹洁白",
        "figure": "meinv.png?width=18rem",
        "isDark": true
      },
      {
        "id": "6-11",
        "hex": "#808080",
        "name": "灰色",
        "intro": "黑色和白色混和成的一种颜色",
        "figure": "mutong.png"
      },
      {
        "id": "6-12",
        "hex": "#eedeb0",
        "name": "牙色",
        "intro": "与象牙相似的淡黄色（暖白）",
        "figure": "zhuzi.png?width=14rem",
        "isDark": true
      },
      {
        "id": "6-13",
        "hex": "#f0f0f4",
        "name": "铅白",
        "intro": "铅粉的白色。铅粉，国画颜料，日久易氧化\"返铅\"变黑。铅粉在古时用以搽脸的化妆品。（冷白）",
        "figure": "baishan.png?width=100%",
        "isDark": true
      },
      {
        "id": "7-0",
        "hex": "#622a1d",
        "name": "玄色",
        "intro": "赤黑色，黑中带红的颜色，又泛指黑色"
      },
      { "id": "7-1", "hex": "#3d3b4f", "name": "玄青", "intro": "深黑色" },
      {
        "id": "7-2",
        "hex": "#725e82",
        "name": "乌色",
        "intro": "暗而呈黑的颜色"
      },
      {
        "id": "7-3",
        "hex": "#392f41",
        "name": "乌黑",
        "intro": "深黑；漆黑",
        "figure": "moon.png"
      },
      {
        "id": "7-4",
        "hex": "#161823",
        "name": "漆黑",
        "intro": "非常黑的",
        "figure": "flower.moon.png?o=0.6"
      },
      {
        "id": "7-5",
        "hex": "#50616d",
        "name": "墨色",
        "intro": "即黑色",
        "figure": "huashan.png?width=18rem"
      },

      {
        "id": "7-6",
        "hex": "#758a99",
        "name": "墨灰",
        "intro": "即黑灰",
        "figure": "huizhuzi.png?position=left"
      },
      {
        "id": "7-7",
        "hex": "#000000",
        "name": "黑色",
        "intro": "亮度最低的非彩色的或消色差的物体的颜色；最暗的灰色；与白色截然不同的消色差的颜色；被认为特别属于那些既不能反射、又不能透过能使人感觉到的微小入射光的物体,任何亮度很低的物体颜色。",
        "figure": "moon.png"
      },
      { "id": "7-8", "hex": "#493131", "name": "缁色", "intro": "帛黑色" },
      {
        "id": "7-9",
        "hex": "#312520",
        "name": "煤黑",
        "intro": "别称：象牙黑。都是黑，不过有冷暖之分"
      },
      {
        "id": "7-10",
        "hex": "#5d513c",
        "name": "黧",
        "intro": "黑中带黄的颜色",
        "figure": "denglou1.png?width=14rem&position=top"
      },
      {
        "id": "7-11",
        "hex": "#75664d",
        "name": "黎",
        "intro": "黑中带黄似黎草色",
        "figure": "denglou2.png?width=14rem&position=top"
      },
      {
        "id": "7-12",
        "hex": "#6b6882",
        "name": "黝",
        "intro": "本义为淡黑色或微青黑色。",
        "figure": "benyue.png"
      },
      {
        "id": "7-13",
        "hex": "#665757",
        "name": "黝黑",
        "intro": "（皮肤暴露在太阳光下而晒成的）青黑色"
      },
      {
        "id": "7-14",
        "hex": "#41555d",
        "name": "黯",
        "intro": "深黑色、泛指黑色",
        "figure": "denglouchuan.png"
      },
      {
        "id": "8-0",
        "hex": "#f2be45",
        "name": "赤金",
        "intro": "足金的颜色"
      },
      {
        "id": "8-1",
        "hex": "#eacd76",
        "name": "金色",
        "intro": "平均为深黄色带光泽的颜色"
      },
      {
        "id": "8-2",
        "hex": "#e9e7ef",
        "name": "银白",
        "intro": "带银光的白色",
        "figure": "qiangyan.png",
        "isDark": true
      },
      {
        "id": "8-3",
        "hex": "#bacac6",
        "name": "老银",
        "intro": "金属氧化后的色彩",
        "figure": "right.bottom.yesun.png"
      },
      { "id": "8-4", "hex": "#a78e44", "name": "乌金", "intro": "" },
      {
        "id": "8-5",
        "hex": "#549688",
        "name": "铜绿",
        "intro": "",
        "figure": "right.bottom.hehua.png"
      }

]
module.exports = chineseColors;
