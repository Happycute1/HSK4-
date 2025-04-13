// 获取语音合成接口
const synth = window.speechSynthesis;

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  
  // 设置语音参数（可选）
  utterance.rate = 1; // 语速
  utterance.pitch = 1; // 语调
  utterance.volume = 1; // 音量

  // 播放语音
  synth.speak(utterance);
}

const words = [
    {
        "word": "爱情",
        "pinyin": "ài qíng",
        "meaning": "ຄວາມຮັກ",
        "example1": "我只想要简单的爱情。",
        "example2": "我给你的爱情还不够吗？"
    },
    {
        "word": "安排",
        "pinyin": "ān pái",
        "meaning": "ຈັດການ",
        "example1": "他安排好了明天的会议。",
        "example2": "我们要学会安排时间。"
    },
    {
        "word": "安全",
        "pinyin": "ān quán",
        "meaning": "ປອດໄພ",
        "example1": "这个地方很安全。",
        "example2": "我们要注意交通安全。"
    },
    {
        "word": "按时",
        "pinyin": "àn shí",
        "meaning": "ຕາມເວລา",
        "example1": "他总是按时完成作业。",
        "example2": "你要按时吃药。"
    },
    {
        "word": "按照",
        "pinyin": "àn zhào",
        "meaning": "ອີງຕາມ",
        "example1": "按照计划，我们明天出发。",
        "example2": "请按照老师的要求做。"
    },
    {
        "word": "百分之",
        "pinyin": "bǎi fēn zhī",
        "meaning": "ເປີເຊັນ(ໃຊ້ຢູ່ທາງໜ້າຂອງຕົວເລກ)",
        "example1": "百分之五十的学生喜欢运动。",
        "example2": "百分之十的人喜欢跳舞"
    },
    {
        "word": "棒",
        "pinyin": "bàng",
        "meaning": "ເກັ່ງ,ຄັກ",
        "example1": "你很棒。",
        "example2": "这个电影真的很棒。"
    },
    {
        "word": "包子",
        "pinyin": "bāo zi",
        "meaning": "ຊາລະເປົາ",
        "example1": "我早上吃了两个包子。",
        "example2": "这家店的包子很好吃。"
    },
    {
        "word": "保护",
        "pinyin": "bǎo hù",
        "meaning": "ປົກປ້ອງ,ປົກປັກຮັກສາ",
        "example1": "我们要保护动物。",
        "example2": "保护环境是每个人的责任。"
    },
    {
        "word": "保证",
        "pinyin": "bǎo zhèng",
        "meaning": "ຮັບປະກັນ",
        "example1": "我保证以后不再迟到了。",
        "example2": "这个产品有质量保证。"
    },
    {
        "word": "报名",
        "pinyin": "bào míng",
        "meaning": "ສະໝັກ/ລົງຊື່",
        "example1": "很多人报名参加这次活动。",
        "example2": "我已经报了名。"
    },
    {
        "word": "抱",
        "pinyin": "bào",
        "meaning": "ກອດ,ອຸ້ມ",
        "example1": "她抱着一个孩子。",
        "example2": "儿子抱着妈妈哭。"
    },
    {
        "word": "抱歉",
        "pinyin": "bào qiàn",
        "meaning": "ຂໍໂທດ",
        "example1": "很抱歉，我迟到了。",
        "example2": "我感到十分抱歉。"
    },
    {
        "word": "倍",
        "pinyin": "bèi",
        "meaning": "ເທົ່າ(1,2ເທົ່າ)",
        "example1": "三倍，四倍",
        "example2": "他的收入比我多两倍。"
    },
    {
        "word": "本来",
        "pinyin": "běn lái",
        "meaning": "ເດີມທີ່",
        "example1": "他本来打算去旅行的，但突然下雨。他就不去了。",
        "example2": "这件事本来很简单。"
    },
    {
        "word": "笨",
        "pinyin": "bèn",
        "meaning": "ໂງ່, ບໍ່ສະຫຼາດ",
        "example1": "他看起来很笨，但其实很聪明。",
        "example2": "别做这么笨的事。"
    },
    {
        "word": "比如",
        "pinyin": "bǐ rú",
        "meaning": "ເຊັ່ນ,ຕົວຢ່າງເຊັ່ນ:",
        "example1": "我喜欢很多水果，比如苹果和香蕉。",
        "example2": "有很多运动可以选择，比如跑步和游泳。"
    },
    {
        "word": "毕业",
        "pinyin": "bì yè",
        "meaning": "ຮຽນຈົບ",
        "example1": "他去年毕业了。",
        "example2": "他刚毕业就结婚了。"
    },
    {
        "word": "遍",
        "pinyin": "biàn",
        "meaning": "ຄັ້ງ,ເທື່ອ",
        "example1": "我把这本书读了三遍。",
        "example2": "请再说一遍。"
    },
    {
        "word": "标准",
        "pinyin": "biāo zhǔn",
        "meaning": "ມາດຕະຖານ, ໄດ້ມາດຕະຖານ",
        "example1": "这个标准太高了。",
        "example2": "这是一个标准的答案。"
    },
    {
        "word": "表格",
        "pinyin": "biǎo gé",
        "meaning": "ຕາຕະລາງ,ແບບຟອມ",
        "example1": "请填写这张表格。",
        "example2": "这个表格很容易理解。"
    },
    {
        "word": "表示",
        "pinyin": "biǎo shì",
        "meaning": "ສະແດງ(ທ່າທີ,ຄວາມຄິດຫຼືຄວາມຮູ້ສຶກ),ສະແດງວ່າ",
        "example1": "他这么说表示他不爱你。",
        "example2": "大家向他表示欢迎。"
    },
    {
        "word": "表演",
        "pinyin": "biǎo yǎn",
        "meaning": "ສະແດງ(ດ້ານສິລະປະ,ທັກສະຕ່າງໆ)",
        "example1": "他们表演的很不错。",
        "example2": "我想去看京剧表演。"
    },
    {
        "word": "表扬",
        "pinyin": "biǎo yáng",
        "meaning": "ຊົມເຊີຍ",
        "example1": "老师表扬了他的努力。",
        "example2": "他受到了很多人的表扬。"
    },
    {
        "word": "饼干",
        "pinyin": "bǐng gān",
        "meaning": "ຂະຫນົມປັງກອບ,ບິສກິສ",
        "example1": "我喜欢吃饼干。",
        "example2": "她给孩子们买了一些饼干。"
    },
    {
        "word": "并且",
        "pinyin": "bìng qiě",
        "meaning": "ແລະ,ແລະຍັງ....ອີກດ້ວຍ",
        "example1": "他学习很努力，并且成绩很好。",
        "example2": "这个地方很漂亮，并且很安静。"
    },
    {
        "word": "博士",
        "pinyin": "bó shì",
        "meaning": "ດອກເຕີ້,ປະລິນຍາເອກ",
        "example1": "我想在北京读博士。",
        "example2": "我毕业博士后再工作。"
    },
    {
        "word": "不得不",
        "pinyin": "bù dé bù",
        "meaning": "ຕ້ອງ(ຈຳເປັນຕ້ອງ)",
        "example1": "我不得不告诉他。",
        "example2": "我不得不承认他是对的。"
    },
    {
        "word": "不管",
        "pinyin": "bù guǎn",
        "meaning": "ບໍ່ວ່າ,ບໍ່ສົນໃຈ",
        "example1": "不管天气怎么样，我们都要去跑步。",
        "example2": "不过有多忙，还每天都复习中文。"
    },
    {
        "word": "不过",
        "pinyin": "bù guò",
        "meaning": "ແຕ່ວ່າ(ນ້ຳໜັກນ້ອຍກວ່າ但是,ເປັນການປະຕິເສດແບບຖະໜອມນ້ຳໃຈ)",
        "example1": "他很聪明，不过有点懒。",
        "example2": "饭菜很好吃，不过有点儿贵。"
    },
    {
        "word": "不仅",
        "pinyin": "bù jǐn",
        "meaning": "ບໍ່ພຽງແຕ່(ຄືກັບ不但）",
        "example1": "他不仅会说英语，还会说法语。",
        "example2": "他不仅漂亮，还很聪明。"
    },
    {
        "word": "部分",
        "pinyin": "bù fèn",
        "meaning": "ສ່ວນ,ພາກສ່ວນ",
        "example1": "这个计划的一部分已经完成了。",
        "example2": "他只吃了小部分食物。"
    },
    {
        "word": "擦",
        "pinyin": "cā",
        "meaning": "ເຊັດ,ຖູ",
        "example1": "他正在擦桌子。",
        "example2": "请擦一下窗户。"
    },
    {
        "word": "猜",
        "pinyin": "cāi",
        "meaning": "ເດົາ,ຄາດຄະເນ",
        "example1": "我能猜一猜，我喜欢吃什么？",
        "example2": "我猜他今天不会来了。"
    },
    {
        "word": "材料",
        "pinyin": "cái liào",
        "meaning": "ເອກະສານ",
        "example1": "我正在准备材料。",
        "example2": "我们正在找一些材料。"
    },
    {
        "word": "参观",
        "pinyin": "cān guān",
        "meaning": "ຍ່ຽມຊົມ,ເຂົ້າຊົມ",
        "example1": "我们明天要去参观博物馆。",
        "example2": "你能不能带我参观这个地方。"
    },
    {
        "word": "餐厅",
        "pinyin": "cān tīng",
        "meaning": "ຫ້ອງອາຫານ，ຮ້ານອາຫານ",
        "example1": "我们在餐厅吃了很好吃的饭。",
        "example2": "这家餐厅的服务很好。"
    },
    {
        "word": "厕所",
        "pinyin": "cè suǒ",
        "meaning": "ຫ້ອງນ້ຳ",
        "example1": "请问，厕所在哪里？",
        "example2": "这个商场的厕很干净。"
    },
    {
        "word": "差不多",
        "pinyin": "chà bù duō",
        "meaning": "ເກືອບ,ພໍໆກັນ",
        "example1": "这个箱子的大小差不多合适。",
        "example2": "我们差不多完成任务了。"
    },
    {
        "word": "长城",
        "pinyin": "cháng chéng",
        "meaning": "ກຳແພງເມືອງຈີນ",
        "example1": "明天我们一起去爬长城吧。",
        "example2": "很多游客都来参观长城。"
    },
    {
        "word": "长江",
        "pinyin": "cháng jiāng",
        "meaning": "ແມ່ນ້ຳແຍງຊີ",
        "example1": "长江是中国最长的河。",
        "example2": "长江有六千三百公里。"
    },
    {
        "word": "尝",
        "pinyin": "cháng",
        "meaning": "ຊິມ",
        "example1": "请尝一下这道菜。",
        "example2": "我尝了一口你做的菜，味道很棒。"
    },
    {
        "word": "场",
        "pinyin": "cháng",
        "meaning": "ຮອບ(ຄຳລັກສະນະນາມຂອງການເຫດການ)",
        "example1": "昨天有一场大雨。",
        "example2": "我们看完了这场比赛。"
    },
    {
        "word": "超过",
        "pinyin": "chāo guò",
        "meaning": "ເກີນ,ເໜືອກວ່າ",
        "example1": "他的成绩超过了其他同学。",
        "example2": "他可能超过18岁了。"
    },
    {
        "word": "成功",
        "pinyin": "chéng gōng",
        "meaning": "ສຳເລັດ,ປະສົບຄວາມສຳເລັດ",
        "example1": "我想成为一个成功的人。",
        "example2": "成功需要努力和坚持。"
    },
    {
        "word": "成为",
        "pinyin": "chéng wéi",
        "meaning": "ກາຍເປັນ",
        "example1": "他想成为一名医生。",
        "example2": "一切都成为了过去。"
    },
    {
        "word": "诚实",
        "pinyin": "chéng shí",
        "meaning": "ຊື່ສັດ, ຄວາມຊື່ສັດ",
        "example1": "他是一个诚实的孩子。",
        "example2": "我们应该做一个诚实的人。"
    },
    {
        "word": "乘坐",
        "pinyin": "chéng zuò",
        "meaning": "ໂດຍສານ",
        "example1": "我们乘坐公交车去学校。",
        "example2": "他乘坐飞机去了国外。"
    },
    {
        "word": "吃惊",
        "pinyin": "chī jīng",
        "meaning": "ຕົກໃຈ",
        "example1": "他非常吃惊。",
        "example2": "这个结果让大家都很吃惊。"
    },
    {
        "word": "重新",
        "pinyin": "chóng xīn",
        "meaning": "ອີກເທື່ອໜຶ່ງ...,ໃໝ່ອີກເທື່ອ",
        "example1": "他决定重新开始学习。",
        "example2": "请重新检查一遍。"
    },
    {
        "word": "抽烟",
        "pinyin": "chōu yān",
        "meaning": "ສູບຢາ",
        "example1": "他喜欢在休息时抽烟。",
        "example2": "抽烟对健康有危害。"
    },
    {
        "word": "出差",
        "pinyin": "chū chāi",
        "meaning": "ອອກໄປເຮັດວຽກນອກ(ຕ່າງຖິ່ນ)",
        "example1": "这个工作让她经常出差。",
        "example2": "这次出差我学到了很多东西。"
    },
    {
        "word": "出发",
        "pinyin": "chū fā",
        "meaning": "ອອກເດີນທາງ",
        "example1": "我们明天早上六点出发。",
        "example2": "我们几点出发？"
    },
    {
        "word": "出生",
        "pinyin": "chū shēng",
        "meaning": "ເກີດ, ກຳເນີດ",
        "example1": "他出生在一个小城市。",
        "example2": "我是在春天出生的。"
    },
    {
        "word": "出现",
        "pinyin": "chū xiàn",
        "meaning": "ປະກົດ, ປະກົດຕົວ,ເກີດຂຶ້ນ",
        "example1": "出现了新情况。",
        "example2": "这个问题经常出现。"
    },
    {
        "word": "厨房",
        "pinyin": "chú fáng",
        "meaning": "ເຮືອນຄົວ",
        "example1": "她在厨房做饭。",
        "example2": "这个厨房很干净。"
    },
    {
        "word": "传真",
        "pinyin": "chuán zhēn",
        "meaning": "ແຟັກ",
        "example1": "请把这份文件传真给我。",
        "example2": "你帮我把材料传真给那家公司。"
    },
    {
        "word": "窗户",
        "pinyin": "chuāng hù",
        "meaning": "ປ່ອງຢ້ຽມ",
        "example1": "请打开窗户。",
        "example2": "这个房间的窗户很大。"
    },
    {
        "word": "词语",
        "pinyin": "cí yǔ",
        "meaning": "ຄຳສັບ",
        "example1": "这个词语很难懂。",
        "example2": "他不理解这个词语的意思。"
    },
    {
        "word": "从来",
        "pinyin": "cóng lái",
        "meaning": "ແຕ່ໃດມາ(ໃຊ້ໃນປະໂຫຍກປະຕິເສດ)",
        "example1": "我从来没有去过那个地方。",
        "example2": "他从来没爱过我。"
    },
    {
        "word": "粗心",
        "pinyin": "cū xīn",
        "meaning": "ບໍ່ລະວັງ, ປະໝາດ",
        "example1": "他太粗心了，犯了很多错误。",
        "example2": "你别太粗心了。"
    },
    {
        "word": "存",
        "pinyin": "cún",
        "meaning": "ເກັບ(ເກັບເງິນ),ທ້ອນເງິນ",
        "example1": "他把钱存进了银行。",
        "example2": "我们要存钱买房子。"
    },
    {
        "word": "错误",
        "pinyin": "cuò wù",
        "meaning": "ຄວາມຜິດ",
        "example1": "这不是我的错误。",
        "example2": "这个答案是错误的。"
    },
    {
        "word": "答案",
        "pinyin": "dá àn",
        "meaning": "ຄໍາຕອບ",
        "example1": "他找到了问题的答案。",
        "example2": "这个答案是正确的。"
    },
    {
        "word": "打扮",
        "pinyin": "dǎ bàn",
        "meaning": "ແຕ່ງຕົວ",
        "example1": "她正在打扮自己去参加聚会。",
        "example2": "今天你打扮很美。"
    },
    {
        "word": "打扰",
        "pinyin": "dǎ rǎo",
        "meaning": "ລົບກວນ",
        "example1": "很抱歉打扰你。",
        "example2": "别打扰他，他在工作。"
    },
    {
        "word": "打印",
        "pinyin": "dǎ yìn",
        "meaning": "ປິ່ນເອກະສານ",
        "example1": "请帮我打印这份文件。",
        "example2": "打印机"
    },
    {
        "word": "打招呼",
        "pinyin": "dǎ zhāo hu",
        "meaning": "ທັກທາຍ",
        "example1": "他经常向别人打招呼。",
        "example2": "见到老师要打招呼。"
    },
    {
        "word": "打折",
        "pinyin": "dǎ zhé",
        "meaning": "ຫລຸດລາຄາ",
        "example1": "这家商店正在打折。",
        "example2": "我买了一件打折的衣服。"
    },
    {
        "word": "打针",
        "pinyin": "dǎ zhēn",
        "meaning": "ສັກຢາ",
        "example1": "孩子害怕打针。",
        "example2": "他去医院打针了。"
    },
    {
        "word": "大夫",
        "pinyin": "dài fū",
        "meaning": "ໝໍ",
        "example1": "这位大夫很有经验。",
        "example2": "你应该去看大夫。"
    },
    {
        "word": "大概",
        "pinyin": "dà gài",
        "meaning": "ປະມານ,ອາດຈະ,ຫນ້າຈະ",
        "example1": "大概有二十个人参加了会议。",
        "example2": "他大概不来了。"
    },
    {
        "word": "大使馆",
        "pinyin": "dà shǐ guǎn",
        "meaning": "ສະຖານທູດ",
        "example1": "他去大使馆办理签证。",
        "example2": "中国大使馆在哪里。"
    },
    {
        "word": "大约",
        "pinyin": "dà yuē",
        "meaning": "ປະມານ,ອາດຈະ,ຫນ້າຈະ",
        "example1": "这个箱子大约重十公斤。",
        "example2": "大约有三十个学生喜欢这个活动。"
    },
    {
        "word": "戴",
        "pinyin": "dài",
        "meaning": "ໃສ່,ສວມ(ໃຊ້ກັບເຄື່ອງປະດັບ)",
        "example1": "他戴着手表。",
        "example2": "她喜欢戴漂亮的项链。"
    },
    {
        "word": "当",
        "pinyin": "dāng",
        "meaning": "ເປັນ(ດຳລົງຕຳແໜ່ງຫຼືອາຊີບ)",
        "example1": "我爸爸当老师。",
        "example2": "我长大了想当医生。"
    },
    {
        "word": "当时",
        "pinyin": "dāng shí",
        "meaning": "ໃນເວລານັ້ນ,ຕອນນັ້ນ",
        "example1": "当时我不在家。",
        "example2": "他当时非常紧张。"
    },
    {
        "word": "刀",
        "pinyin": "dāo",
        "meaning": "ມີດ",
        "example1": "他用刀切水果。",
        "example2": "这把刀很锋利。"
    },
    {
        "word": "导游",
        "pinyin": "dǎo yóu",
        "meaning": "ໄກ້ນຳທ່ຽວ(guide)",
        "example1": "这个导游很积极。",
        "example2": "我们跟着导游参观了博物馆。"
    },
    {
        "word": "到处",
        "pinyin": "dào chù",
        "meaning": "ທຸກທີ່,ທຸກຫົນທຸກແຫ່ງ",
        "example1": "孩子们在公园里到处跑。",
        "example2": "上海到处都很美。"
    },
    {
        "word": "到底",
        "pinyin": "dào dǐ",
        "meaning": "ແທ້ໆແລ້ວ",
        "example1": "你到底想怎么样？",
        "example2": "你到底想吃什么？"
    },
    {
        "word": "倒",
        "pinyin": "dǎo/dào",
        "meaning": "ເຫຍັ້ນ,ເທ",
        "example1": "他不小心倒了。",
        "example2": "你帮我倒杯茶吧。"
    },
    {
        "word": "道歉",
        "pinyin": "dào qiàn",
        "meaning": "ຂໍໂທດ,ກ່າວຄຳຂໍໂທດ",
        "example1": "他向我道歉了。",
        "example2": "我真心向你道歉。"
    },
    {
        "word": "得",
        "pinyin": "de/dé/děi",
        "meaning": " ຕ້ອງ(děi),ໄດ້ຮັບ（dé）",
        "example1": "你得好好写作业。",
        "example2": "他得到了一个礼物。"
    },
    {
        "word": "得意",
        "pinyin": "dé yì",
        "meaning": "ເພິງພໍໃຈເກີນໄປ,ດີໃຈເກີນໄປ",
        "example1": "你别得意的太早了。",
        "example2": "不要太得意，还有很多工作要做。"
    },
    {
        "word": "地点",
        "pinyin": "dì diǎn",
        "meaning": "ສະຖານທີ່",
        "example1": "我们约好了见面的地点。",
        "example2": "这个地点很适合野餐。"
    },
    {
        "word": "地球",
        "pinyin": "dì qiú",
        "meaning": "ໂລກ,ໜ່ວຍໂລກ",
        "example1": "保护地球是我们的责任。",
        "example2": "地球上的生命都很宝贵。"
    },
    {
        "word": "地址",
        "pinyin": "dì zhǐ",
        "meaning": "ທີ່ຢູ່",
        "example1": "请告诉我你的地址。",
        "example2": "我把信寄到了他的地址。"
    },
    {
        "word": "登机牌",
        "pinyin": "dēng jī pái",
        "meaning": "ໃບຂຶ້ນຍົນ",
        "example1": "请出示你的登机牌。",
        "example2": "他找不到他的登机牌了。"
    },
    {
        "word": "等",
        "pinyin": "děng",
        "meaning": "ຖ້າ,ລໍຖ້າ/ແລະອື່ນໆ(等等)",
        "example1": "他在等公交车。",
        "example2": "我喜欢水果，如苹果、香蕉等等。"
    },
    {
        "word": "低",
        "pinyin": "dī",
        "meaning": "ຕ່ໍາ",
        "example1": "这座山很低。",
        "example2": "他的声音很低。"
    },
    {
        "word": "底",
        "pinyin": "dǐ",
        "meaning": "ປາຍ",
        "example1": "我一月底就能回家了。",
        "example2": "今年底我们就毕业了。"
    },
    {
        "word": "调查",
        "pinyin": "diào chá",
        "meaning": "ສືບສວນ,ສຳຫຼວດ",
        "example1": "我们正在调查这件事情。",
        "example2": "我们需要调查市场情况。"
    },
    {
        "word": "掉",
        "pinyin": "diào",
        "meaning": "ຕົກ,ຫຼົ່ນ",
        "example1": "他的钥匙掉了。",
        "example2": "树叶从树上掉下来了。"
    },
    {
        "word": "丢",
        "pinyin": "diū",
        "meaning": "ຕົກເຫ່ຍເສຍຫາຍ",
        "example1": "我的钱包丢了。",
        "example2": "我丢垃圾了。"
    },
    {
        "word": "动作",
        "pinyin": "dòng zuò",
        "meaning": "ທ່າທາງ",
        "example1": "他的动作很快。",
        "example2": "她做出的这个动作很美。"
    },
    {
        "word": "堵车",
        "pinyin": "dǔ chē",
        "meaning": "ລົດຕິດ",
        "example1": "今天早上堵车很严重。",
        "example2": "我们因为堵车迟到了。"
    },
    {
        "word": "肚子",
        "pinyin": "dù zi",
        "meaning": "ທ້ອງ",
        "example1": "他肚子饿了。",
        "example2": "她的肚子有点疼。"
    },
    {
        "word": "短信",
        "pinyin": "duǎn xìn",
        "meaning": "ຂໍ້ຄວາມ(SMS),ເມສເສດ",
        "example1": "我收到了一条短信。",
        "example2": "他经常用短信和朋友联系。"
    },
    {
        "word": "对话",
        "pinyin": "duì huà",
        "meaning": "ສົນທະນາ,ບົດສົນທະນາ",
        "example1": "别让别人听到我们的对话。",
        "example2": "请用英语和我对话。"
    },
    {
        "word": "对面",
        "pinyin": "duì miàn",
        "meaning": "ດ້ານຫນ້າ,ດ້ານກົງກັນຂ້າມ",
        "example1": "商场在我们学校对面。",
        "example2": "对面的那个人是谁？"
    },
    {
        "word": "对于",
        "pinyin": "duì yú",
        "meaning": "ສຳຫຼັບ,ຕໍ່",
        "example1": "对于这个问题，我有不同的看法。",
        "example2": "漂亮对于女人很重要。"
    },
    {
        "word": "儿童",
        "pinyin": "ér tóng",
        "meaning": "ເດັກນ້ອຍ",
        "example1": "今天是儿童节。",
        "example2": "你已经长大了，不是儿童了。"
    },
    {
        "word": "而",
        "pinyin": "ér",
        "meaning": "ແລະ, ແຕ່(ແປໄດ້2ຄວາມໝາຍ,ເບິ່ງຈາກສະຖານະການ)",
        "example1": "他聪明而勤奋。",
        "example2": "这个西瓜大而不甜。"
    },
    {
        "word": "发生",
        "pinyin": "fā shēng",
        "meaning": "ເກີດຂຶ້ນ",
        "example1": "昨天发生了一件奇怪的事情。",
        "example2": "这个事故是什么时候发生的？"
    },
    {
        "word": "发展",
        "pinyin": "fā zhǎn",
        "meaning": "ພັດທະນາ",
        "example1": "这个城市发展得很快。",
        "example2": "怎样才能发展我们的经济。"
    },
    {
        "word": "法律",
        "pinyin": "fǎ lǜ",
        "meaning": "ກົດໝາຍ",
        "example1": "我们应该尊重法律。",
        "example2": "这条法律对保护环境很重要。"
    },
    {
        "word": "烦恼",
        "pinyin": "fán nǎo",
        "meaning": "ກຸ້ມໃຈ，ເລື່ອງກຸ້ມໃຈ",
        "example1": "他有很多烦恼。",
        "example2": "这件事让我很烦恼。"
    },
    {
        "word": "反对",
        "pinyin": "fǎn duì",
        "meaning": "ຄັດຄ້ານ",
        "example1": "他反对这个计划。",
        "example2": "我表示反对。"
    },
    {
        "word": "方法",
        "pinyin": "fāng fǎ",
        "meaning": "ວິທີ,ວິທີການ",
        "example1": "他找到了一个好方法来解决问题。",
        "example2": "学习语言有很多的方法。"
    },
    {
        "word": "方面",
        "pinyin": "fāng miàn",
        "meaning": "ດ້ານ, ທາງດ້ານ",
        "example1": "我在经济方面不太理解。",
        "example2": "我不适合这个方面。"
    },
    {
        "word": "翻译",
        "pinyin": "fān yì",
        "meaning": "ແປພາສາ",
        "example1": "他正在翻译一本书。",
        "example2": "这个翻译很准确。"
    },
    {
        "word": "方向",
        "pinyin": "fāng xiàng",
        "meaning": "ທິດທາງ",
        "example1": "你知道去车站的方向吗？",
        "example2": "我们应该走哪个方向？"
    },
    {
        "word": "房东",
        "pinyin": "fáng dōng",
        "meaning": "ເຈົ້າຂອງຫ້ອງເຊົ່າ",
        "example1": "我们的房东很好。",
        "example2": "我今天要去找房东。"
    },
    {
        "word": "放弃",
        "pinyin": "fàng qì",
        "meaning": "ຍອມແພ້,ສະຫຼະຖິ້ມ，ຖອດໃຈ,ລົ້ມເລີກ",
        "example1": "他没有放弃自己的梦想。",
        "example2": "这次机会你千万不要放弃。"
    },
    {
        "word": "放暑假",
        "pinyin": "fàng shǔ jià",
        "meaning": "ປິດເທີມລະດູຮ້ອນ",
        "example1": "孩子们放暑假了很开心。",
        "example2": "我们打算在放暑假的时候去旅行。"
    },
    {
        "word": "放松",
        "pinyin": "fàng sōng",
        "meaning": "ຜ່ອນຄາຍ",
        "example1": "考完试了该放松放松。",
        "example2": "周末我们应该放松一下。"
    },
    {
        "word": "份",
        "pinyin": "fèn",
        "meaning": "ຊຸດ(ຄຳລັກສະນະນາມຂອງເອກະສານ,ໜັງສືພິມໆລໆ)",
        "example1": "我要一份报纸。",
        "example2": "他买了三份礼物。"
    },
    {
        "word": "丰富",
        "pinyin": "fēng fù",
        "meaning": "ອຸດົມສົມບູນ,ຫຼາກຫຼາຍ,ເຮັດໃຫ້ຫຼາຍຂື່້ນ",
        "example1": "这个地区的自然资源很丰富。",
        "example2": "阅读可以丰富我们的知识。"
    },
    {
        "word": "否则",
        "pinyin": "fǒu zé",
        "meaning": "ຖ້າບໍ່ເຊັ່ນນັ້ນ",
        "example1": "你要努力学习，否则就会让父母失望。",
        "example2": "我们必须按时完成任务，否则会有麻烦。"
    },
    {
        "word": "符合",
        "pinyin": "fú hé",
        "meaning": "ສອດຄ່ອງກັບ",
        "example1": "他的想法符合实际情况。",
        "example2": "他的条件不符合我们的要求。"
    },
    {
        "word": "父亲",
        "pinyin": "fù qīn",
        "meaning": "ພໍ່, ບິດາ",
        "example1": "他的父亲是一名医生。",
        "example2": "我很爱我的父亲。"
    },
    {
        "word": "付款",
        "pinyin": "fù kuǎn",
        "meaning": "ການຈ່າຍເງິນ",
        "example1": "他用信用卡付款。",
        "example2": "你还没付款呢。"
    },
    {
        "word": "负责",
        "pinyin": "fù zé",
        "meaning": "ຮັບຜິດຊອບ",
        "example1": "他负责照顾妈妈。",
        "example2": "他对工作很负责。"
    },
    {
        "word": "复印",
        "pinyin": "fù yìn",
        "meaning": "ກ໊ອບປີ້ເອກະສານ",
        "example1": "请帮我复印这份文件。",
        "example2": "他正在复印一些资料。"
    },
    {
        "word": "复杂",
        "pinyin": "fù zá",
        "meaning": "ສະຫຼັບຊັບຊ້ອນ",
        "example1": "这个问题很复杂。",
        "example2": "我现在的心情很复杂。"
    },
    {
        "word": "富",
        "pinyin": "fù",
        "meaning": "ລວຍ,ມີເງິນ",
        "example1": "他越来越富了。。",
        "example2": "我想成为富人。"
    },
    {
        "word": "改变",
        "pinyin": "gǎi biàn",
        "meaning": "ປ່ຽນແປງ, ການປ່ຽນແປງ",
        "example1": "他改变了主意。",
        "example2": "他突然改变了计划。"
    },
    {
        "word": "干杯",
        "pinyin": "gān bēi",
        "meaning": "ຕຳຈອກ,ໝົດແກ້ວ",
        "example1": "跟你干一杯",
        "example2": "干杯!干杯!"
    },
    {
        "word": "赶",
        "pinyin": "gǎn",
        "meaning": "ໄລ່,ໄລ່ຕາມ",
        "example1": "他在赶蚊子。",
        "example2": "我们要赶时间。"
    },
    {
        "word": "敢",
        "pinyin": "gǎn",
        "meaning": "ກ້າ",
        "example1": "我不敢让爸爸知道。",
        "example2": "你敢不敢告诉他你爱他。"
    },
    {
        "word": "感动",
        "pinyin": "gǎn dòng",
        "meaning": "ຊາບຊຶ້ງໃຈ,ຕຶ້ນຕັນໃຈ",
        "example1": "这个故事很让人感动。",
        "example2": "我很感动"
    },
    {
        "word": "感觉",
        "pinyin": "gǎn jué",
        "meaning": "ຮູ້ສືກ, ຄວາມຮູ້ສຶກ",
        "example1": "我感觉很累。",
        "example2": "我对你没有感觉。"
    },
    {
        "word": "感情",
        "pinyin": "gǎn qíng",
        "meaning": "ອາລົມຄວາມຮູ້ສຶກ(ໃນທາງຄວາມຮັກ,ຄວາມຜູກພັນ)",
        "example1": "他对你感情很深。",
        "example2": "我们俩的感情一直都很好。"
    },
    {
        "word": "感谢",
        "pinyin": "gǎn xiè",
        "meaning": "ຂອບໃຈ",
        "example1": "我非常感谢你的帮助。",
        "example2": "他感谢大家的支持。"
    },
    {
        "word": "干",
        "pinyin": "gàn",
        "meaning": "ເຮັດ(ໃຊ້ໃນພາສາເວົ້າ)",
        "example1": "他在干家务。",
        "example2": "我们一起干这项工作吧。"
    },
    {
        "word": "刚",
        "pinyin": "gāng",
        "meaning": "ພວມ,ຫາກໍ",
        "example1": "他刚回来。",
        "example2": "我刚吃完饭。"
    },
    {
        "word": "高速公路",
        "pinyin": "gāo sù gōng lù",
        "meaning": "ທາງດ່ວນ",
        "example1": "我们在上高速公路。",
        "example2": "今天他们要修高速公路。"
    },
    {
        "word": "胳膊",
        "pinyin": "gē bo",
        "meaning": "ແຂນ",
        "example1": "他的胳膊受伤了。",
        "example2": "我胳膊断了。"
    },
    {
        "word": "各",
        "pinyin": "gè",
        "meaning": "ແຕ່ລະ",
        "example1": "我们各自有自己的任务。",
        "example2": "各个国家都有自己的文化。"
    },
    {
        "word": "工资",
        "pinyin": "gōng zī",
        "meaning": "ເງິນເດືອນ",
        "example1": "他的工资很高。",
        "example2": "这个月的工资还没发。"
    },
    {
        "word": "公里",
        "pinyin": "gōng lǐ",
        "meaning": "ກິໂລແມັດ",
        "example1": "那儿离这儿有八公里。",
        "example2": "你跑了几公里？"
    },
    {
        "word": "功夫",
        "pinyin": "gōng fu",
        "meaning": "ກັງຟູ，ຝີມື",
        "example1": "他学功夫很多年了。",
        "example2": "他很有功夫。"
    },
    {
        "word": "共同",
        "pinyin": "gòng tóng",
        "meaning": "ຮ່ວມກັນ，ນຳກັນ (public)",
        "example1": "我们有共同的目标。",
        "example2": "他们共同努力完成了任务。"
    },
    {
        "word": "购物",
        "pinyin": "gòu wù",
        "meaning": "ຊື້ເຄື່ອງຊື້ຂອງ(shopping)",
        "example1": "她喜欢在周末购物。",
        "example2": "我们去超市购物吧。"
    },
    {
        "word": "够",
        "pinyin": "gòu",
        "meaning": "ພໍ,ພຽງພໍ",
        "example1": "这些钱够买这本书吗？",
        "example2": "你钱够吗？"
    },
    {
        "word": "估计",
        "pinyin": "gū jì",
        "meaning": "ຄາດຄະເນ,ຄາດເດົາ",
        "example1": "我估计他明天会来。",
        "example2": "这个估计很准确。"
    },
    {
        "word": "鼓励",
        "pinyin": "gǔ lì",
        "meaning": "ໃຫ້ກຳລັງໃຈ",
        "example1": "老师鼓励我们努力学习。",
        "example2": "他的话鼓励了我。"
    },
    {
        "word": "故意",
        "pinyin": "gù yì",
        "meaning": "ຕັ້ງໃຈ,ເຈດຕະນາ",
        "example1": "他故意把书放在那儿。",
        "example2": "对不起，我不是故意的。"
    },
    {
        "word": "顾客",
        "pinyin": "gù kè",
        "meaning": "ລູກຄ້າ",
        "example1": "这家商店有很多顾客。",
        "example2": "他是我们的老顾客。"
    },
    {
        "word": "挂",
        "pinyin": "guà",
        "meaning": "ແຂວນ,ຫ້ອຍ",
        "example1": "他把衣服挂上。",
        "example2": "墙上挂着一件衣服。"
    },
    {
        "word": "关键",
        "pinyin": "guān jiàn",
        "meaning": " ມີຄວາມສໍາຄັນທີ່ສຸດ,ປັດໄຈສຳຄັນ",
        "example1": "努力是解决问题的关键。",
        "example2": "这个问题很关键。"
    },
    {
        "word": "观众",
        "pinyin": "guān zhòng",
        "meaning": "ຜູ້ຊົມ",
        "example1": "这场表演有很多观众。",
        "example2": "观众们对表演很满意。"
    },
    {
        "word": "管理",
        "pinyin": "guǎn lǐ",
        "meaning": "ບໍລິຫານ",
        "example1": "他负责管理这个公司。",
        "example2": "这个学校的管理很严格。"
    },
    {
        "word": "光",
        "pinyin": "guāng",
        "meaning": "ແສງ,ພຽງແຕ່(ຄືກັບ只）",
        "example1": "灯光很亮。",
        "example2": "他光学习，哪儿都不去。"
    },
    {
        "word": "广播",
        "pinyin": "guǎng bō",
        "meaning": "ລາຍການວິທະຍຸ,ອອກອາກາດ(ປະກາດ)",
        "example1": "电台正在广播新闻。",
        "example2": "我喜欢听广播。"
    },
    {
        "word": "广告",
        "pinyin": "guǎng gào",
        "meaning": "ໂຄສະນາ",
        "example1": "电视上有很多广告。",
        "example2": "我们要花钱做广告。"
    },
    {
        "word": "逛",
        "pinyin": "guàng",
        "meaning": "ຍ່າງຫຼິ້ນ",
        "example1": "她喜欢逛商场。",
        "example2": "我们去公园逛逛吧。"
    },
    {
        "word": "规定",
        "pinyin": "guī dìng",
        "meaning": "ກຳນົດ, ຂໍ້ກຳນົດກົດລະບຽບ",
        "example1": "学校规定学生要按时到校。",
        "example2": "我们要遵守这些规定。"
    },
    {
        "word": "国籍",
        "pinyin": "guó jí",
        "meaning": "ສັນຊາດ",
        "example1": "他的国籍是中国。",
        "example2": "你是什么国籍？"
    },
    {
        "word": "国际",
        "pinyin": "guó jì",
        "meaning": "ສາກົນ",
        "example1": "这是一个国际会议。",
        "example2": "他在国际上很有名。"
    },
    {
        "word": "果汁",
        "pinyin": "guǒ zhī",
        "meaning": "ນໍ້າຫມາກໄມ້",
        "example1": "我喜欢喝苹果汁。",
        "example2": "请给我一杯果汁。"
    },
    {
        "word": "过程",
        "pinyin": "guò chéng",
        "meaning": "ຂັ້ນຕອນດຳເນີນການ,ຂະບວນການ",
        "example1": "这个项目的过程很复杂。",
        "example2": "在学习的过程中他很努力。"
    },
    {
        "word": "海洋",
        "pinyin": "hǎi yáng",
        "meaning": "ທະເລ,ມະຫາສະໝຸດ",
        "example1": "海洋里有很多生物。",
        "example2": "他喜欢在海边看海洋的风景。"
    },
    {
        "word": "害羞",
        "pinyin": "hài xiū",
        "meaning": "ເຂີນ,ອາຍ,ຂີ້ອາຍ",
        "example1": "这个小女孩很害羞，不敢和陌生人说话。",
        "example2": "他是一个很害羞的人"
    },
    {
        "word": "寒假",
        "pinyin": "hán jià",
        "meaning": "ພັກເທີມລະດູໜາວ",
        "example1": "终于放寒假了。",
        "example2": "这次放寒假你打算去哪儿玩？"
    },
    {
        "word": "汗",
        "pinyin": "hàn",
        "meaning": "ເຫື່ອ",
        "example1": "我刚跑完出了很多汗。",
        "example2": "天热的时候，容易出汗。"
    },
    {
        "word": "航班",
        "pinyin": "háng bān",
        "meaning": "ຖ້ຽວບິນ",
        "example1": "这趟航班推迟了。",
        "example2": "他预订了明天的航班。"
    },
    {
        "word": "好处",
        "pinyin": "hǎo chù",
        "meaning": "ປະໂຫຍດ,ຂໍ້ດີ",
        "example1": "多读书有很多好处。",
        "example2": "运动对健康有好处。"
    },
    {
        "word": "好像",
        "pinyin": "hǎo xiàng",
        "meaning": "ເໝືອນກັບວ່າ,ຄ້າຍກັບວ່າ,ຄືວ່າ",
        "example1": "他好像很开心的样子。",
        "example2": "外面好像下雨了。"
    },
    {
        "word": "号码",
        "pinyin": "hào mǎ",
        "meaning": "ໝາຍເລກ,ເບີໂທ",
        "example1": "请告诉我你的电话号码。",
        "example2": "你的电话号码是多少？"
    },
    {
        "word": "合格",
        "pinyin": "hé gé",
        "meaning": "ໄດ້ມາດຕະຖານ",
        "example1": "这个货物质量合格。",
        "example2": "他是一个合格的父亲。"
    },
    {
        "word": "合适",
        "pinyin": "hé shì",
        "meaning": "ເຫມາະສົມ",
        "example1": "这件衣服对你很合适。",
        "example2": "我们需要找一个合适的时间见面。"
    },
    {
        "word": "盒子",
        "pinyin": "hé zi",
        "meaning": "ກ່ອງ",
        "example1": "他把玩具放在盒子里。",
        "example2": "我有三个盒子。"
    },
    {
        "word": "后悔",
        "pinyin": "hòu huǐ",
        "meaning": "ເສຍໃຈພາຍຫຼັງ,ກິນແໜງ",
        "example1": "他后悔以前没有好好学习。",
        "example2": "别做让自己后悔的事。"
    },
    {
        "word": "厚",
        "pinyin": "hòu",
        "meaning": "ໜາ",
        "example1": "这本书很厚。",
        "example2": "他穿了一件厚外套。"
    },
    {
        "word": "互联网",
        "pinyin": "hù lián wǎng",
        "meaning": "ອິນເຕີເນັດ",
        "example1": "互联网给我们的生活带来了很多方便。",
        "example2": "使用互联网学习新知识。"
    },
    {
        "word": "互相",
        "pinyin": "hù xiāng",
        "meaning": "ເຊິ່ງກັນແລະກັນ",
        "example1": "他们互相帮助。",
        "example2": "朋友之间应该互相尊重。"
    },
    {
        "word": "护士",
        "pinyin": "hù shi",
        "meaning": "ພະຍາບານ",
        "example1": "这位护士很漂亮。",
        "example2": "护士在医院里照顾病人。"
    },
    {
        "word": "怀疑",
        "pinyin": "huái yí",
        "meaning": "ສົງໃສ",
        "example1": "我怀疑她说是假的。",
        "example2": "我怀疑他有别的女人。"
    },
    {
        "word": "回忆",
        "pinyin": "huí yì",
        "meaning": "ຄວາມຊົງຈຳ,ຫວນກັບໄປຄິດຮອດ(ຍ້ອນຄວາມຊົງຈຳ)",
        "example1": "他回忆起了童年的美好时光。",
        "example2": "一切都变成了美好的回忆。"
    },
    {
        "word": "活动",
        "pinyin": "huó dòng",
        "meaning": "ຢືດເສັ້ນຢືດສາຍ,ເຄື່ອນໄຫວ",
        "example1": "他们在公园里活动。",
        "example2": "学校安排了很多有趣的活动。"
    },
    {
        "word": "活泼",
        "pinyin": "huó pō",
        "meaning": "ມີຊີວິດຊີວາ,ລ່າເລີງ",
        "example1": "这个小女孩很活泼。",
        "example2": "孩子们性格好活泼。"
    },
    {
        "word": "火",
        "pinyin": "huǒ",
        "meaning": "ໄຟ",
        "example1": "小心火，很危险。",
        "example2": "火太大"
    },
    {
        "word": "获得",
        "pinyin": "huò dé",
        "meaning": "ໄດ້ຮັບ",
        "example1": "他获得了老师的表扬",
        "example2": "我们获得了成功。"
    },
    {
        "word": "积极",
        "pinyin": "jī jí",
        "meaning": "ກະຕືລືລົ້ນ",
        "example1": "他学习很积极。",
        "example2": "我们要积极面对生活中的挑战。"
    },
    {
        "word": "积累",
        "pinyin": "jī lěi",
        "meaning": "ສະສົມ,ສັ່ງສົມ",
        "example1": "慢慢积累经验。",
        "example2": "积累知识"
    },
    {
        "word": "基础",
        "pinyin": "jī chǔ",
        "meaning": "ພື້ນຖານ,ຮາກຖານ",
        "example1": "我有英语基础。",
        "example2": "我对这个方面有基础。"
    },
    {
        "word": "激动",
        "pinyin": "jī dòng",
        "meaning": "ຕື່ນເຕັ້ນ,ເຮັດໃຫ້ຕື່ນເຕັ້ນ",
        "example1": "他很激动，因为要见到偶像了。",
        "example2": "这个消息激动了所有的人。）"
    },
    {
        "word": "及时",
        "pinyin": "jí shí",
        "meaning": "ທັນເວລາ,ທັນທ່ວງທີ",
        "example1": "他及时赶到了机场。",
        "example2": "发现了问题就要及时解决。"
    },
    {
        "word": "即使",
        "pinyin": "jí shǐ",
        "meaning": "ເຖິງແມ່ນວ່າ,ຕໍ່ໃຫ້",
        "example1": "即使下雨，我们也会去公园。",
        "example2": "即使遇到困难，他也不轻易放弃。"
    },
    {
        "word": "计划",
        "pinyin": "jì huà",
        "meaning": "ແຜນ, ກາຂວາງແຜນ",
        "example1": "我已经计划好了这次旅行。",
        "example2": "这个计划很完美。"
    },
    {
        "word": "记者",
        "pinyin": "jì zhě",
        "meaning": "ນັກຂ່າວ",
        "example1": "这位记者正在采访一位名人。",
        "example2": "记者们都在关注这个事件。"
    },
    {
        "word": "技术",
        "pinyin": "jì shù",
        "meaning": "ເຕັກໂນໂລຊີ,ເທັກນິກ",
        "example1": "他在技术方面很有能力。",
        "example2": "现代技术改变了我们的生活。"
    },
    {
        "word": "既然",
        "pinyin": "jì rán",
        "meaning": "ໃນເມື່ອ.....",
        "example1": "既然你已经决定了，那就去做吧。",
        "example2": "既然他生病了，我们就不要打扰他。"
    },
    {
        "word": "继续",
        "pinyin": "jì xù",
        "meaning": "ຕໍ່ໄປ,ຕໍ່ເນື່ອງ",
        "example1": "你继续努力吧。",
        "example2": "你继续说吧。"
    },
    {
        "word": "寄",
        "pinyin": "jì",
        "meaning": "ສົ່ງ(ທາງໄປສະນີ)",
        "example1": "他给朋友寄了一封信。",
        "example2": "我要寄一个包裹回家。"
    },
    {
        "word": "加班",
        "pinyin": "jiā bān",
        "meaning": "ເຮັດວຽກເກີນເວລາ （OT，OVERTIME）",
        "example1": "他经常加班到很晚才回家。",
        "example2": "为了完成任务，我们不得不加班。"
    },
    {
        "word": "加油站",
        "pinyin": "jiā yóu zhàn",
        "meaning": "ປໍ້ານ້ຳມັນ",
        "example1": "前面有一个加油站。",
        "example2": "我们在加油站加油。"
    },
    {
        "word": "家具",
        "pinyin": "jiā jù",
        "meaning": "ເຟີນິເຈີ້",
        "example1": "他买了一些新家具。",
        "example2": "这个房间的家具都是新的。"
    },
    {
        "word": "假",
        "pinyin": "jiǎ",
        "meaning": "ປອມ",
        "example1": "他说的话都是假的。",
        "example2": "这个消息是假的。"
    },
    {
        "word": "价格",
        "pinyin": "jià gé",
        "meaning": "ລາຄາ",
        "example1": "这个商品的价格很高。",
        "example2": "这个东西价格多少？"
    },
    {
        "word": "坚持",
        "pinyin": "jiān chí",
        "meaning": "ຍຶດໝັ້ນ,ເຮັດຢ່າງສະໝໍ່າສະເໝີ",
        "example1": "他坚持每天锻炼。",
        "example2": "我们要坚持自己的梦想。"
    },
    {
        "word": "减肥",
        "pinyin": "jiǎn féi",
        "meaning": "ຫລຸດນ້ຳໜັກ",
        "example1": "她正在努力减肥。",
        "example2": "我太胖了，打算减肥。"
    },
    {
        "word": "减少",
        "pinyin": "jiǎn shǎo",
        "meaning": "ຫຼຸດລົງ",
        "example1": "我现在的收入减少了很多。",
        "example2": "他的体重减少了很多。"
    },
    {
        "word": "建议",
        "pinyin": "jiàn yì",
        "meaning": "ສະເຫນີ,ຂໍ້ສະເໜີ",
        "example1": "他给了我一个很好的建议。",
        "example2": "我建议你多休息。"
    },
    {
        "word": "将来",
        "pinyin": "jiāng lái",
        "meaning": "ອະນາຄົດ",
        "example1": "现在不努力工作，将来老了怎么办？",
        "example2": "不要为将来的事情感到烦恼。"
    },
    {
        "word": "奖金",
        "pinyin": "jiǎng jīn",
        "meaning": "ລາງວັນ",
        "example1": "他获得了奖金。",
        "example2": "公司给员工发放了奖金。"
    },
    {
        "word": "降低",
        "pinyin": "jiàng dī",
        "meaning": "ຫຼຸດລົງ",
        "example1": "你能不能降低开车的速度？",
        "example2": "你降低一点声音。"
    },
    {
        "word": "降落",
        "pinyin": "jiàng luò",
        "meaning": "ລົງຈອດ(ຍົນ)",
        "example1": "飞机正在降落。",
        "example2": "飞机什么时候降落？"
    },
    {
        "word": "交",
        "pinyin": "jiāo",
        "meaning": "ສົ່ງ,ສົ່ງໃຫ້ ແລະ ຄົບຫາ",
        "example1": "他交了作业。",
        "example2": "最近我交了个朋友。"
    },
    {
        "word": "交流",
        "pinyin": "jiāo liú",
        "meaning": "ແລກປ່ຽນ,ສື່ສານ",
        "example1": "我们一起交流看法吧。",
        "example2": "我喜欢跟中国人交流。"
    },
    {
        "word": "交通",
        "pinyin": "jiāo tōng",
        "meaning": "ການຄົມມະນາຄົມ,ສັນຈອນ",
        "example1": "我们要解决交通问题。",
        "example2": "我们要遵守交通规则。"
    },
    {
        "word": "郊区",
        "pinyin": "jiāo qū",
        "meaning": "ເຂດຊານເມືອງ",
        "example1": "他住在城市的郊区。",
        "example2": "郊区的空气很好。"
    },
    {
        "word": "骄傲",
        "pinyin": "jiāo ào",
        "meaning": "ຫຍິ່ງ,ພູມໃຈ",
        "example1": "我想让父母为我感到骄傲",
        "example2": "他太骄傲了。"
    },
    {
        "word": "饺子",
        "pinyin": "jiǎo zi",
        "meaning": "ກ້ຽວ",
        "example1": "中国人喜欢在春节吃饺子。",
        "example2": "她包的饺子很好吃。"
    },
    {
        "word": "教授",
        "pinyin": "jiào shòu",
        "meaning": "ສາດສະດາຈານ",
        "example1": "这位教授在大学里教学。",
        "example2": "他是一位有名的教授。"
    },
    {
        "word": "教育",
        "pinyin": "jiào yù",
        "meaning": "ການສຶກສາ,ອົບຮົມສັ່ງສອນ",
        "example1": "教育对一个人的成长很重要。",
        "example2": "父母应该教育好孩子。"
    },
    {
        "word": "接受",
        "pinyin": "jiē shòu",
        "meaning": "ຍອມຮັບ",
        "example1": "到时间接受现实了。",
        "example2": "我们要学会接受不同的意见。"
    },
    {
        "word": "接着",
        "pinyin": "jiē zhe",
        "meaning": "ຕໍ່,ຕໍ່ໄປ",
        "example1": "吃完饭我们接着工作。",
        "example2": "请你接着说。"
    },
    {
        "word": "节",
        "pinyin": "jié",
        "meaning": "ເທດສະການ/ຄາບຮຽນ",
        "example1": "春节是中国最重要的节日。",
        "example2": "你们一天上几节课？"
    },
    {
        "word": "节约",
        "pinyin": "jié yuē",
        "meaning": "ປະຫຍັດ",
        "example1": "我们要节约用电。",
        "example2": "他是一个非常节约的人。"
    },
    {
        "word": "结果",
        "pinyin": "jié guǒ",
        "meaning": "ຜົນລັບ,ຜົນໄດ້ຮັບ",
        "example1": "他努力学习的结果是取得了好成绩。",
        "example2": "我试了很多次，结果还是不成功。"
    },
    {
        "word": "解释",
        "pinyin": "jiě shì",
        "meaning": "ອະທິບາຍ/ຄຳອະທິບາຍຫຼືຄຳຊີ້ແຈງ",
        "example1": "他向我解释了这个问题。",
        "example2": "这个解释很清楚。"
    },
    {
        "word": "尽管",
        "pinyin": "jǐn guǎn",
        "meaning": "ເຖິງແມ້ວ່າ(ຄືກັບ虽然）",
        "example1": "尽管天气不好，我们还是去爬山了。",
        "example2": "尽管他很累，但他还是坚持完成了工作。"
    },
    {
        "word": "紧张",
        "pinyin": "jǐn zhāng",
        "meaning": "ຕື່ນເຕັ້ນ，ເຄັ່ງຄຽດ",
        "example1": "他在考试前很紧张。",
        "example2": "放松一点儿，别紧张。"
    },
    {
        "word": "进行",
        "pinyin": "jìn xíng",
        "meaning": "ດຳເນີນການ",
        "example1": "会议正在进行中。",
        "example2": "他们正在进行讨论。"
    },
    {
        "word": "禁止",
        "pinyin": "jìn zhǐ",
        "meaning": "ຫ້າມ",
        "example1": "这里禁止吸烟。",
        "example2": "上课时间禁止手机。"
    },
    {
        "word": "京剧",
        "pinyin": "jīng jù",
        "meaning": "ງິ້ວປັກກິ່ງ",
        "example1": "他喜欢看京剧。",
        "example2": "今天我要去看京剧表演。"
    },
    {
        "word": "经济",
        "pinyin": "jīng jì",
        "meaning": "ເສດຖະກິດ",
        "example1": "这个国家的经济发展很快。",
        "example2": "经济发展了，生活更好了。"
    },
    {
        "word": "经历",
        "pinyin": "jīng lì",
        "meaning": "ປະສົບ(ຜ່ານ),ປະສົບການ(ທີ່ປະສົບພົບເຈີ)",
        "example1": "他经历了很多困难。",
        "example2": "去上海旅游是我难忘的经历。"
    },
    {
        "word": "经验",
        "pinyin": "jīng yàn",
        "meaning": "ປະສົບການ(ທີ່ສະສົມ)",
        "example1": "他有丰富的工作经验。",
        "example2": "我们要学习他的经验。"
    },
    {
        "word": "精彩",
        "pinyin": "jīng cǎi",
        "meaning": "ພິເສດ",
        "example1": "今晚的节目非常精彩。",
        "example2": "他讲了一个精彩的故事。"
    },
    {
        "word": "景色",
        "pinyin": "jǐng sè",
        "meaning": "ວິວ,ທິວທັດ",
        "example1": "这里的景色很美。",
        "example2": "我喜欢春天的景色。"
    },
    {
        "word": "警察",
        "pinyin": "jǐng chá",
        "meaning": "ຕຳຫຼວດ",
        "example1": "我想成为一名警察。",
        "example2": "有事情可以找警察帮忙。"
    },
    {
        "word": "竞争",
        "pinyin": "jìng zhēng",
        "meaning": "ແຂ່ງຂັນ,ການແຂ່ງຂັນ",
        "example1": "你不要跟他竞争",
        "example2": "市场竞争非常激烈。"
    },
    {
        "word": "竟然",
        "pinyin": "jìng rán",
        "meaning": "ບໍ່ຄາດຄິດເລີຍວ່າ",
        "example1": "他竟然通过了这次考试。",
        "example2": "他竟然做出了这样的事。"
    },
    {
        "word": "镜子",
        "pinyin": "jìng zi",
        "meaning": "ແວ່ນ(ແວ່ນແຍງ)",
        "example1": "她在照镜子。",
        "example2": "墙上挂着一面镜子。"
    },
    {
        "word": "究竟",
        "pinyin": "jiū jìng",
        "meaning": "ແນວໃດກັນແທ້，.....ກັນແທ້",
        "example1": "他究竟是怎么想的？",
        "example2": "究竟发生了什么事情？"
    },
    {
        "word": "举",
        "pinyin": "jǔ",
        "meaning": "ຍົກ",
        "example1": "他举手回答问题。",
        "example2": "请老师举个例子"
    },
    {
        "word": "举办",
        "pinyin": "jǔ bàn",
        "meaning": "ຈັດ(ຈັດກອງປະຊຸມ,ຈັດກິດຈະກຳ,ງານຕ່າງໆ)",
        "example1": "学校举办了一场运动会。",
        "example2": "今天我们要举办一个聚会"
    },
    {
        "word": "举行",
        "pinyin": "jǔ xíng",
        "meaning": "ຈັດ(ຈັດງານ,ຈັດກິດຈະກຳ)",
        "example1": "我们举行了一个活动。",
        "example2": "会议在北京举行"
    },
    {
        "word": "拒绝",
        "pinyin": "jù jué",
        "meaning": "ປະຕິເສດ",
        "example1": "他拒绝了我的邀请",
        "example2": "她拒绝接受礼物。"
    },
    {
        "word": "距离",
        "pinyin": "jù lí",
        "meaning": "ໄລຍະຫ່າງ，ຫ່າງ",
        "example1": "这个城市到那个城市的距离很远。",
        "example2": "我们距离目标越来越近了"
    },
    {
        "word": "聚会",
        "pinyin": "jù huì",
        "meaning": "ງານລ້ຽງ/ຮວມຕົວກັນ,ຊຸມນຸມກັນ",
        "example1": "我们周末有个聚会。",
        "example2": "我今天要跟老同学聚会。"
    },
    {
        "word": "开玩笑",
        "pinyin": "kāi wán xiào",
        "meaning": "ຢອກ",
        "example1": "他经常和朋友们开玩笑。",
        "example2": "别开玩笑了。"
    },
    {
        "word": "开心",
        "pinyin": "kāi xīn",
        "meaning": "ມີຄວາມສຸກ, ດີໃຈ",
        "example1": "孩子们在公园里玩得很开心。",
        "example2": "听到这个好消息，她很开心。"
    },
    {
        "word": "看法",
        "pinyin": "kàn fǎ",
        "meaning": "ຄວາມຄິດເຫັນ",
        "example1": "对于这个问题，每个人都有自己的看法。",
        "example2": "大家的看法都不一样。"
    },
    {
        "word": "考虑",
        "pinyin": "kǎo lǜ",
        "meaning": "ພິຈາລະນາ,ໄຕ່ຕອງ",
        "example1": "他考虑了很久才做决定。",
        "example2": "请重新考虑这个问题。"
    },
    {
        "word": "烤鸭",
        "pinyin": "kǎo yā",
        "meaning": "ປິ້ງເປັດ",
        "example1": "北京烤鸭很有名。",
        "example2": "我喜欢吃烤鸭。"
    },
    {
        "word": "科学",
        "pinyin": "kē xué",
        "meaning": "ວິທະຍາສາດ",
        "example1": "科学技术对社会发展很重要。",
        "example2": "他在科学方面取得了很大的成功。"
    },
    {
        "word": "棵",
        "pinyin": "kē",
        "meaning": "ຕົ້ນ(ຄຳລັກສະນະນາມຂອງຕົ້ນໄມ້)",
        "example1": "院子里有一棵大树。",
        "example2": "他种了五棵苹果树。"
    },
    {
        "word": "咳嗽",
        "pinyin": "ké sou",
        "meaning": "ເປັນໄອ,ເຈັບຄໍ",
        "example1": "他咳嗽得很厉害。",
        "example2": "吃点药，能缓解咳嗽。"
    },
    {
        "word": "可怜",
        "pinyin": "kě lián",
        "meaning": "ໜ້າສົງສານ/ສົງສານ",
        "example1": "这个可怜的孩子失去了父母。",
        "example2": "我可怜他。"
    },
    {
        "word": "可是",
        "pinyin": "kě shì",
        "meaning": "ແຕ່, ແຕ່ວ່າ",
        "example1": "他想去旅行，可是没有时间。",
        "example2": "天气很好，可是我要工作。不能出去玩。"
    },
    {
        "word": "可惜",
        "pinyin": "kě xī",
        "meaning": "ໜ້າເສຍດາຍ",
        "example1": "很可惜，他错过了这个机会。",
        "example2": "这是一件让人觉得可惜。"
    },
    {
        "word": "客厅",
        "pinyin": "kè tīng",
        "meaning": "ຫ້ອງນອກຮັບແຂກ",
        "example1": "我们在客厅看电视。",
        "example2": "客厅里有很多家具。"
    },
    {
        "word": "肯定",
        "pinyin": "kěn dìng",
        "meaning": "ແນ່ນອນ,ຍອມຮັບ",
        "example1": "他肯定了我的想法。",
        "example2": "你肯定记错。"
    },
    {
        "word": "空",
        "pinyin": "kōng",
        "meaning": "ວ່າງເປົ່າ",
        "example1": "这个盒子是空的。",
        "example2": "你有空了吗？"
    },
    {
        "word": "空气",
        "pinyin": "kōng qì",
        "meaning": "ອາກາດ",
        "example1": "山上的空气很清新。",
        "example2": "我们要保护好空气环境。"
    },
    {
        "word": "恐怕",
        "pinyin": "kǒng pà",
        "meaning": "ຢ້ານວ່າ",
        "example1": "恐怕要下雨了，我们快回家吧。",
        "example2": "恐怕来不及了。"
    },
    {
        "word": "苦",
        "pinyin": "kǔ",
        "meaning": "ຂົມ",
        "example1": "这种药很苦。",
        "example2": "我不喜欢吃苦味。"
    },
    {
        "word": "矿泉水",
        "pinyin": "kuàng quán shuǐ",
        "meaning": "ນ້ຳແຮ່,ນ້ໍາແຮ່ທາດ",
        "example1": "他每天都喝一瓶矿泉水。",
        "example2": "运动后喝矿泉水对身体好。"
    },
    {
        "word": "困",
        "pinyin": "kùn",
        "meaning": "ງ່ວງ,ຢາກນອນ",
        "example1": "他昨晚没睡好，现在很困。",
        "example2": "你看起来很困。"
    },
    {
        "word": "困难",
        "pinyin": "kùn nán",
        "meaning": "/ຄວາມຫຍຸ້ງຍາກລຳບາກ",
        "example1": "我遇到过了很多困难。",
        "example2": "这个数学题对我来说很困难。"
    },
    {
        "word": "垃圾桶",
        "pinyin": "lā jī tǒng",
        "meaning": "ຖັງຂີ້ເຫຍື້ອ",
        "example1": "请把垃圾扔进垃圾桶里。",
        "example2": "街道旁边都有垃圾桶。"
    },
    {
        "word": "拉",
        "pinyin": "lā",
        "meaning": "ດຶງ",
        "example1": "他拉着行李箱走在路上。",
        "example2": "他拉着我的手。"
    },
    {
        "word": "辣",
        "pinyin": "là",
        "meaning": "ເຜັດ",
        "example1": "四川菜通常很辣。",
        "example2": "我不太能吃辣的食物。"
    },
    {
        "word": "来不及",
        "pinyin": "lái bù jí",
        "meaning": "ບໍ່ທັນ（ເວລາ）",
        "example1": "世界里竟来不及了。",
        "example2": "现在已经太晚了，来不及改变计划了。"
    },
    {
        "word": "来得及",
        "pinyin": "lái de jí",
        "meaning": "ທັນ(ທັນເວລາ)",
        "example1": "现在去还来得及。",
        "example2": "如果你现在出发，应该来得及参加会议。"
    },
    {
        "word": "来自",
        "pinyin": "lái zì",
        "meaning": "ມາຈາກ",
        "example1": "这位留学生来自法国。",
        "example2": "这种水果来自老挝。"
    },
    {
        "word": "懒",
        "pinyin": "lǎn",
        "meaning": "ຄ້ານ,ຂີ້ຄ້ານ",
        "example1": "他太懒了，不愿意做家务。",
        "example2": "这个孩子有点懒，需要多鼓励。"
    },
    {
        "word": "浪费",
        "pinyin": "làng fèi",
        "meaning": "ສິ້ນເປືອງ",
        "example1": "这样花钱太浪费了。",
        "example2": "跟你谈恋爱很浪费时间。"
    },
    {
        "word": "浪漫",
        "pinyin": "làng màn",
        "meaning": "ໂລແມນຕິກ",
        "example1": "谁都需要浪漫的爱情",
        "example2": "这个餐厅的氛围很浪漫。"
    },
    {
        "word": "老虎",
        "pinyin": "lǎo hǔ",
        "meaning": "ເສືອ",
        "example1": "我们应该保护老虎。",
        "example2": "这只小老虎很可爱。"
    },
    {
        "word": "冷静",
        "pinyin": "lěng jìng",
        "meaning": "ໃຈເຢັນ",
        "example1": "你应该冷静冷静。",
        "example2": "先冷静一下，再做决定。"
    },
    {
        "word": "礼拜天",
        "pinyin": "lǐ bài tiān",
        "meaning": "ວັນອາທິດ",
        "example1": "礼拜天我们一家喜欢去公园散步。",
        "example2": "很多商店在礼拜天会打折。"
    },
    {
        "word": "礼貌",
        "pinyin": "lǐ mào",
        "meaning": "ມາລະຍາດ",
        "example1": "他是个很有礼貌的孩子。",
        "example2": "我们应该对人有礼貌。"
    },
    {
        "word": "理发",
        "pinyin": "lǐ fà",
        "meaning": "ຕັດຜົມ",
        "example1": "他去理发店理发了。",
        "example2": "我的头发长了，我要去理发。"
    },
    {
        "word": "理解",
        "pinyin": "lǐ jiě",
        "meaning": "ເຂົ້າໃຈ",
         "example1": "我理解你的心情。",
        "example2": "我不理解老师讲的内容。"
    },
    {
        "word": "理想",
        "pinyin": "lǐ xiǎng",
        "meaning": "ອຸດົມການ,ຄວາມໃຝ່ຝັນ",
        "example1": "他的理想是成为一名医生。",
        "example2": "你的理想是什么？"
    },
    {
        "word": "力气",
        "pinyin": "lì qi",
        "meaning": "ແຮງ",
        "example1": "他的力气很大，能搬起很重的东西。",
        "example2": "我今天的力气都用完了。"
    },
    {
        "word": "厉害",
        "pinyin": "lì hài",
        "meaning": "ເກັ່ງ,ຮ້າຍແຮງ",
        "example1": "他打篮球很厉害。",
        "example2": "我感冒的很厉害。"
    },
    {
        "word": "例如",
        "pinyin": "lì rú",
        "meaning": "ຍົກຕົວຢ່າງເຊັ່ນ",
        "example1": "很多水果都很有营养，例如苹果和香蕉。",
        "example2": "他喜欢很多运动，例如跑步和游泳。"
    },
    {
        "word": "俩",
        "pinyin": "liǎ",
        "meaning": "ສອງອັນ,ສອງຄົນ（ຫຍໍ້ຈາກ两个）",
        "example1": "他们俩是好朋友。",
        "example2": "这俩苹果都很新鲜。"
    },
    {
        "word": "连",
        "pinyin": "lián",
        "meaning": "ແມ້ແຕ່（ຂະໜາດ）....(ໃຊ້ຄູ່ກັບ都，还，也）",
        "example1": "我累得连饭都不想吃。",
        "example2": "连小孩子都知道这个道理。"
    },
    {
        "word": "联系",
        "pinyin": "lián xì",
        "meaning": "ຕິດຕໍ່ສື່ສານ/ເຊື່ອມໂຍງ",
        "example1": "我经常跟他联系。",
        "example2": "这两件事情之间有什么联系吗？"
    },
    {
        "word": "凉快",
        "pinyin": "liáng kuai",
        "meaning": "ເຢັນສະບາຍ",
        "example1": "这里很凉快，适合休息。",
        "example2": "下过雨后，天气变得凉快了。"
    },
    {
        "word": "零钱",
        "pinyin": "líng qián",
        "meaning": "ເງິນຍ່ອຍ,ເງິນນ້ອຍ,ເງິນຄ່າຂະຫນົມ",
        "example1": "你有零钱吗？我需要坐公交车。",
        "example2": "他把零钱都放在钱包里了。"
    },
    {
        "word": "另外",
        "pinyin": "lìng wài",
        "meaning": "ອີກ,ອີກຢ່າງ, ນອກຈາກນັ້ນ (ສັງເກດຈາກສະຖານະການ)",
        "example1": "我们还有另外一个计划。",
        "example2": "他学习很好，另外，他还很喜欢运动。"
    },
    {
        "word": "留",
        "pinyin": "liú",
        "meaning": "ຢູ່ຕໍ່,ເກັບ,ເກັບໄວ້",
        "example1": "我还想留在这儿两天。",
        "example2": "请把这本书留给我。"
    },
    {
        "word": "流利",
        "pinyin": "liú lì",
        "meaning": "ຄ່ອງແຄ້ວ,ລື່ນໄຫຼ",
        "example1": "他英语说得很流利。",
        "example2": "这个学生的汉语写作很流利。"
    },
    {
        "word": "流行",
        "pinyin": "liú xíng",
        "meaning": "ເປັນທີ່ນິຍົມ,ດັງ",
        "example1": "这种音乐在年轻人中很流行。",
        "example2": "这部电影非常流行。"
    },
    {
        "word": "旅行",
        "pinyin": "lǚ xíng",
        "meaning": "ການທ່ອງທ່ຽວ",
        "example1": "我打算去北京旅行。",
        "example2": "我喜欢旅行。可是没时间。"
    },
    {
        "word": "乱",
        "pinyin": "luàn",
        "meaning": "ຫຍຸ້ງເຫຍິງ,ບໍ່ເປັນລະບຽບ,ມົ້ວ",
        "example1": "他的房间很乱。",
        "example2": "你不能乱说。"
    },
    {
        "word": "律师",
        "pinyin": "lǜ shī",
        "meaning": "ທະນາຍຄວາມ",
        "example1": "他是一名优秀的律师。",
        "example2": "如果你有法律问题，可以请律师帮助。"
    },
    {
        "word": "麻烦",
        "pinyin": "má fán",
        "meaning": "ລົບກວນ,ຫຍຸ້ງຍາກ",
        "example1": "麻烦你帮我一下。",
        "example2": "这件事很麻烦。"
    },
    {
        "word": "马虎",
        "pinyin": "mǎ hu",
        "meaning": "ສະເພົ່າ,ບໍ່ລະອຽດ,ບໍ່ລະວັງ(ປະໝາດຄືກັບ 粗心）",
        "example1": "这事儿不能马虎。",
        "example2": "我们做事不能太马虎。"
    },
    {
        "word": "满",
        "pinyin": "mǎn",
        "meaning": "ເຕັມ",
        "example1": "杯子里的水满了。",
        "example2": "酒店住满了。"
    },
    {
        "word": "毛",
        "pinyin": "máo",
        "meaning": "ຂົນ",
        "example1": "这件毛衣是羊毛做的。",
        "example2": "他的手上有很多毛。"
    },
    {
        "word": "毛巾",
        "pinyin": "máo jīn",
        "meaning": "ຜ້າເຊັດ(ຜ້າຂົນໜູ)",
        "example1": "他用毛巾擦了擦脸。",
        "example2": "请给我一条干净的毛巾。"
    },
    {
        "word": "美丽",
        "pinyin": "měືອງຫລິ້ງ,měືອງຫລິ້ງ",
        "meaning": "ງາມ",
        "example1": "这个花园很美丽。",
        "example2": "她是一个美丽的女孩。"
    },
    {
        "word": "梦",
        "pinyin": "mèng",
        "meaning": "ຝັນ,ຄວາມຝັນ",
        "example1": "他做了一个奇怪的梦。",
        "example2": "他梦想成为一名科学家。"
    },
    {
        "word": "迷路",
        "pinyin": "mí lù",
        "meaning": "ຫຼົງທາງ",
        "example1": "他们在森林里迷路了。",
        "example2": "小心别迷路了。"
    },
    {
        "word": "密码",
        "pinyin": "mì mǎ",
        "meaning": "ລະຫັດ",
        "example1": "他忘记了电脑的密码。",
        "example2": "请输入正确的密码。"
    },
    {
        "word": "免费",
        "pinyin": "miǎn fèi",
        "meaning": "ຟຣີ",
        "example1": "今天的饭都是免费的",
        "example2": "这瓶水是免费的吗？"
    },
    {
        "word": "秒",
        "pinyin": "miǎo",
        "meaning": "ວິນາທີ",
        "example1": "我刚跑了 10 秒，累死我了。",
        "example2": "请等我一下，就几秒钟。"
    },
    {
        "word": "民族",
        "pinyin": "mín zú",
        "meaning": "ຊົນເຜົ່າ",
        "example1": "中国有 56 个民族。",
        "example2": "每个民族都有自己独特的文化。"
    },
    {
        "word": "母亲",
        "pinyin": "mǔ qīn",
        "meaning": "ແມ່,ມານດາ",
        "example1": "他的母亲很努力。",
        "example2": "我很想我的母亲。"
    },
    {
        "word": "目的",
        "pinyin": "mù dì",
        "meaning": "ຈຸດປະສົງ",
        "example1": "他学习英语的目的是为了出国留学。",
        "example2": "我们做这件事的目的是什么？"
    },
    {
        "word": "耐心",
        "pinyin": "nài xīn",
        "meaning": "ອົດທົນ,ມີຄວາມອົດທົນ",
        "example1": "老师对学生很有耐心。",
        "example2": "做这件事需要耐心。"
    },
    {
        "word": "难道",
        "pinyin": "nán dào",
        "meaning": ".......ຫວາ,ຕິ!!!(ເປັນຄຳປະຊົດ)",
        "example1": "难道你不知道这件事吗？",
        "example2": "难道他真的会放弃吗？"
    },
    {
        "word": "难受",
        "pinyin": "nán shòu",
        "meaning": "ບໍ່ສະບາຍ,ທຸກໃຈ",
        "example1": "他感冒了，感觉很难受。",
        "example2": "听到这个消息，她心里很难受。"
    },
    {
        "word": "内",
        "pinyin": "nèi",
        "meaning": "ໃນ,ພາຍໃນ",
        "example1": "盒子内有一些糖果。",
        "example2": "这是内部文件。"
    },
    {
        "word": "内容",
        "pinyin": "nèi róng",
        "meaning": "ເນື້ອໃນ",
        "example1": "这本书的内容很有趣。",
        "example2": "请告诉我报告的主要内容。"
    },
    {
        "word": "能力",
        "pinyin": "néng lì",
        "meaning": "ຄວາມສາມາດ",
        "example1": "他的工作能力很强。",
        "example2": "我们要提高自己的能力。"
    },
    {
        "word": "年龄",
        "pinyin": "nián líng",
        "meaning": "ອາຍຸ",
        "example1": "他的年龄比我大。",
        "example2": "他的年龄是10岁的。"
    },
    {
        "word": "弄",
        "pinyin": "nòng",
        "meaning": "ເຮັດ",
        "example1": "他把房间弄乱了。",
        "example2": "我帮妈妈弄饭。"
    },
    {
        "word": "暖和",
        "pinyin": "nuǎn huo",
        "meaning": "ອົບອຸ່ນ",
        "example1": "今天天气很暖和。",
        "example2": "穿上这件衣服会更暖和。"
    },
    {
        "word": "偶尔",
        "pinyin": "ǒu ěr",
        "meaning": "ບາງເທື່ອ,ບາງຄັ້ງບາງຄາວ",
        "example1": "他偶尔会去看电影。",
        "example2": "偶尔吃点甜食也不错。"
    },
    {
        "word": "排队",
        "pinyin": "pái duì",
        "meaning": "ຕໍ່ແຖວ,ລຽນແຖວ",
        "example1": "大家在银行门口排队等办理业务。",
        "example2": "学生们在学校食堂门口排队买饭。"
    },
    {
        "word": "排列",
        "pinyin": "pái liè",
        "meaning": "ລຽງລຳດັບ,ຈັດລຽງ",
        "example1": "他把书排列得很整齐。",
        "example2": "这些花排列在一起很漂亮。"
    },
    {
        "word": "判断",
        "pinyin": "pàn duàn",
        "meaning": "ຕັດສິນ",
        "example1": "他判断出正确的答案。",
        "example2": "你的判断很正确。"
    },
    {
        "word": "陪",
        "pinyin": "péi",
        "meaning": "....ຢູ່ເປັນໝູ່,ນຳ(ຢູ່ນຳ,ໄປນຳ)",
        "example1": "妈妈陪我去医院。",
        "example2": "他喜欢有人陪他聊天。"
    },
    {
        "word": "批评",
        "pinyin": "pī píng",
        "meaning": "ວິຈານ,ຕຳຫນິ",
        "example1": "老师批评了他的错误。",
        "example2": "妈妈批评了我。"
    },
    {
        "word": "皮肤",
        "pinyin": "pí fū",
        "meaning": "ຜິວໜັງ",
        "example1": "他的皮肤很白。",
        "example2": "要注意保护皮肤。"
    },
    {
        "word": "脾气",
        "pinyin": "pí qi",
        "meaning": "ອາລົມ,ນິໄສ(ເວົ້າເຖິງການໂມໂຫງ່າຍ,ອາລົມຮ້ອນ)",
        "example1": "他的脾气很好。",
        "example2": "别乱发脾气。"
    },
    {
        "word": "篇",
        "pinyin": "piān",
        "meaning": "ບົດ,ເລື່ອງ(ຄຳລັກສະນະນາມຂອງບົດຄວາມ,ເລື່ອງ)",
        "example1": "他写了一篇文章。",
        "example2": "这本书里有很多篇故事。"
    },
    {
        "word": "骗",
        "pinyin": "piàn",
        "meaning": "ຕົວະ",
        "example1": "他骗了我的钱。",
        "example2": "不要骗别人，要诚实。"
    },
    {
        "word": "乒乓球",
        "pinyin": "pīng pāng qiú",
        "meaning": "ກິລາປິງປອງ",
        "example1": "他喜欢打乒乓球。",
        "example2": "乒乓球是一项很受欢迎的运动。"
    },
    {
        "word": "平时",
        "pinyin": "píng shí",
        "meaning": "ຕາມປົກກະຕິ,ເປັນປົກກະຕິ",
        "example1": "他平时喜欢看书。",
        "example2": "平时要注意锻炼身体。"
    },
    {
        "word": "破",
        "pinyin": "pò",
        "meaning": "ຂາດ,ແຕກ",
        "example1": "他把杯子打破了。",
        "example2": "这件衣服破了。"
    },
    {
        "word": "葡萄",
        "pinyin": "pú táo",
        "meaning": "ໝາກອາງຸ່ນ",
        "example1": "他喜欢吃葡萄。",
        "example2": "这串葡萄看起来很新鲜。"
    },
    {
        "word": "普通",
        "pinyin": "pǔ tōng",
        "meaning": "ທຳມະດາ,ທົ່ວໄປ",
        "example1": "他是一个普通人。",
        "example2": "这是一件很普通的事情。"
    },
    {
        "word": "普通话",
        "pinyin": "pǔ tōng huà",
        "meaning": "ພາສາຈີນກາງ",
        "example1": "他能说一口流利的普通话。",
        "example2": "学习普通话对交流很重要。"
    },
    {
        "word": "其次",
        "pinyin": "qí cì",
        "meaning": "ຕໍ່ມາ, ຮອງລົງມາ(ມັກໃຊ້ຄູ່ກັບ首先）",
        "example1": "首先，我们先回宿舍；其次，我们才去踢足球。",
        "example2": "这是最重要的，其次才是那个。"
    },
    {
        "word": "其中",
        "pinyin": "qí zhōng",
        "meaning": "ໃນນັ້ນ,ໃນນັ້ນມີ",
        "example1": "这些水果中，其中苹果是我最喜欢的。",
        "example2": "我们班有很多学生，其中一些很聪明。"
    },
    {
        "word": "气候",
        "pinyin": "qì hòu",
        "meaning": "ພູມອາກາດ",
        "example1": "我还不太熟悉中国的气候。",
        "example2": "气候变化对环境有很大影响。"
    },
    {
        "word": "千万",
        "pinyin": "qiān wàn",
        "meaning": "ເດັດຂາດ,ສິບລ້ານ",
        "example1": "这个城市有千万人口。",
        "example2": "你千万不要忘记带钥匙。"
    },
    {
        "word": "签证",
        "pinyin": "qiān zhèng",
        "meaning": "ວີຊ່າ(visa)",
        "example1": "他正在申请签证。",
        "example2": "没有签证不能进入这个国家。"
    },
    {
        "word": "敲",
        "pinyin": "qiāo",
        "meaning": "ເຄາະ,ຕີ",
        "example1": "我敲了好几下门，但一直没人来开。",
        "example2": "吃饭的时候别敲桌子。"
    },
    {
        "word": "桥",
        "pinyin": "qiáo",
        "meaning": "ຂົວ,ສະພານ",
        "example1": "小河上有一座桥，方便大家过河。",
        "example2": "我们从桥上走过。"
    },
    {
        "word": "巧克力",
        "pinyin": "qiǎo kè lì",
        "meaning": "ຊ໊ອກໂກແລັດ",
        "example1": "她喜欢吃巧克力。",
        "example2": "巧克力是很多人喜欢的甜品。"
    },
    {
        "word": "亲戚",
        "pinyin": "qīn qi",
        "meaning": "ຍາດພີ່ນ້ອງ",
        "example1": "他去拜访亲戚了。",
        "example2": "我们家有很多亲戚。"
    },
    {
        "word": "轻",
        "pinyin": "qīng",
        "meaning": "ເບົາ",
        "example1": "这个箱子很轻，我能提起来。",
        "example2": "请轻声说话，别打扰别人。"
    },
    {
        "word": "轻松",
        "pinyin": "qīng sōng",
        "meaning": "ສະບາຍໆ,ຊິວໆ",
        "example1": "他觉得这个工作很轻松。",
        "example2": "听了一会儿音乐，心情变得很轻松。"
    },
    {
        "word": "情况",
        "pinyin": "qíng kuàng",
        "meaning": "ສະຖານະການ",
        "example1": "他了解了事情的详细情况。",
        "example2": "现在是什么情况。"
    },
    {
        "word": "穷",
        "pinyin": "qióng",
        "meaning": "ທຸກຈົນ",
        "example1": "他小时候家里很穷。",
        "example2": "这个地区比较穷，需要更多的帮助。"
    },
    {
        "word": "区别",
        "pinyin": "qū bié",
        "meaning": "ຄວາມແຕກຕ່າງ/ແຍກ,ແຍກແຍະ",
        "example1": "这两个单词有什么区别？",
        "example2": "你能区别这两种颜色吗？"
    },
    {
        "word": "取",
        "pinyin": "qǔ",
        "meaning": "ເອົາ,ຈັບເອົາ/ຖອນ(ຖອນເງິນ)",
        "example1": "他去银行取钱了。",
        "example2": "请把书从书架上取下来。"
    },
    {
        "word": "全部",
        "pinyin": "quán bù",
        "meaning": "ທັງໝົດ",
        "example1": "他把全部的钱都花光了。",
        "example2": "老师要求我们把作业全部做完才能回家"
    },
    {
        "word": "缺点",
        "pinyin": "quē diǎn",
        "meaning": "ຂໍ້ເສຍ,ຂໍ້ບົກພ່ອງ",
        "example1": "每个人都有自己的缺点。",
        "example2": "这杯子的缺点是容易碎。"
    },
    {
        "word": "缺少",
        "pinyin": "quē shǎo",
        "meaning": "ຂາດແຄນ",
        "example1": "这个菜缺少一点盐，所以不太好吃。",
        "example2": "他缺少经验，所以工作起来有些困难。"
    },
    {
        "word": "却",
        "pinyin": "què",
        "meaning": "ພັດວ່າ",
        "example1": "他很努力，却没有取得好成绩。",
        "example2": "外面下着雨，他却坚持要去上学。"
    },
    {
        "word": "确实",
        "pinyin": "què shí",
        "meaning": "ແທ້ໆ",
        "example1": "这是一个确实的消息。",
        "example2": "他确实是一个很聪明的人。"
    },
    {
        "word": "然而",
        "pinyin": "rán ér",
        "meaning": "ແຕ່ວ່າ",
        "example1": "大家都认为这件事很难完成，然而他却成功做到了。",
        "example2": "天气很好，然而我们却不能出去玩。"
    },
    {
        "word": "热闹",
        "pinyin": "rè nào",
        "meaning": "ຄຶກຄັກ",
        "example1": "节日里，大街上很热闹。",
        "example2": "他喜欢热闹的氛围。"
    },
    {
        "word": "任何",
        "pinyin": "rèn hé",
        "meaning": "ໃດໆ,ໃດໆເລີຍ",
        "example1": "任何问题都可以问老师。",
        "example2": "我不喜欢任何一种蔬菜。"
    },
    {
        "word": "任务",
        "pinyin": "rèn wù",
        "meaning": "ພາລະກິດ",
        "example1": "他完成了一项重要的任务。",
        "example2": "我们的任务是保护环境。"
    },
    {
        "word": "扔",
        "pinyin": "rēng",
        "meaning": "ໂຍນ/ຖິ້ມ",
        "example1": "不要乱扔垃圾。",
        "example2": "他把球扔给了我。"
    },
    {
        "word": "仍然",
        "pinyin": "réng rán",
        "meaning": "ຍັງຄົງ",
        "example1": "虽然下雨了，他仍然坚持跑步。",
        "example2": "这么多年过去了，他仍然记得那件事。"
    },
    {
        "word": "日记",
        "pinyin": "rì jì",
        "meaning": "ບັນທຶກປະຈຳວັນ(Dairy)",
        "example1": "他每天都写日记。",
        "example2": "这本日记记录了他的成长历程。"
    },
    {
        "word": "入口",
        "pinyin": "rù kǒu",
        "meaning": "ທາງເຂົ້່າ",
        "example1": "这是商场的入口在哪儿？",
        "example2": "他在找学校入口。"
    },
    {
        "word": "散步",
        "pinyin": "sàn bù",
        "meaning": "ຍ່າງຫລິ້ນ(ແບບອອກກຳລັງກາຍ)",
        "example1": "晚饭后，我们一起去散步。",
        "example2": "他喜欢在公园散步。"
    },
    {
        "word": "森林",
        "pinyin": "sēn lín",
        "meaning": "ປ່າໄມ້",
        "example1": "他们在森林里迷路了。",
        "example2": "森林里有很多野生动物。"
    },
    {
        "word": "沙发",
        "pinyin": "shā fā",
        "meaning": "ໂຊຟາ",
        "example1": "他坐在沙发上看电视。",
        "example2": "这个沙发很舒服。"
    },
    {
        "word": "伤心",
        "pinyin": "shāng xīn",
        "meaning": "ເສຍໃຈ",
        "example1": "听到这个消息，她很伤心。",
        "example2": "他的玩具坏了，他很伤心。"
    },
    {
        "word": "商量",
        "pinyin": "shāng liang",
        "meaning": "ປຶກສາຫາລື",
        "example1": "他们正在商量旅行的计划。",
        "example2": "这件事我们需要商量一下。"
    },
    {
        "word": "稍微",
        "pinyin": "shāo wēi",
        "meaning": "ໜ້ອຍໜຶ່ງ,ໜ້ອຍດຽວ",
        "example1": "请稍微等一下，我马上就来。",
        "example2": "今天的气温比昨天稍微高了一点。"
    },
    {
        "word": "勺子",
        "pinyin": "sháo zi",
        "meaning": "ບ່ວງ",
        "example1": "他用勺子喝汤。",
        "example2": "桌子上有一把勺子。"
    },
    {
        "word": "社会",
        "pinyin": "shè huì",
        "meaning": "ສັງຄົມ",
        "example1": "我们从小要学着适应社会。",
        "example2": "随着社会的发展，人们的生活越来越好。"
    },
    {
        "word": "申请",
        "pinyin": "shēn qǐng",
        "meaning": "ຮ້ອງຂໍ,ຍື່ນຄຳຮ້ອງຂໍ/ຄຳຮ້ອງ",
        "example1": "他申请了一份新工作。",
        "example2": "他的申请得到了批准。"
    },
    {
        "word": "深",
        "pinyin": "shēn",
        "meaning": "ເລິກ/ເລິກເຊິ່ງ",
        "example1": "这条河很深，不要下去游泳。",
        "example2": "他对这个问题有很深的理解。"
    },
    {
        "word": "甚至",
        "pinyin": "shèn zhì",
        "meaning": "ແມ້ກະທັງ......./ເຖິງຂັ້ນ........",
        "example1": "他很喜欢读书，甚至每天都要读几个小时。",
        "example2": "他学习很努力，成绩很好，甚至每次考试都是第一名。"
    },
    {
        "word": "生活",
        "pinyin": "shēng huó",
        "meaning": "ຊີວິດ,ການດຳລົງຊີວິດ",
        "example1": "我们每天都要好好生活。",
        "example2": "他在这个城市生活了很多年。"
    },
    {
        "word": "生命",
        "pinyin": "shēng mìng",
        "meaning": "ຊີວິດ",
        "example1": "生命是宝贵的，我们要珍惜它。",
        "example2": "你是我生命中的贵人"
    },
    {
        "word": "生意",
        "pinyin": "shēng yì",
        "meaning": "ທຸລະກິດ",
        "example1": "他的生意做得很成功。",
        "example2": "最近生意不太好做。"
    },
    {
        "word": "省",
        "pinyin": "shěng",
        "meaning": "ປະຫຍັດ/ແຂວງ",
        "example1": "他来自四川省。",
        "example2": "我们要节省用水。"
    },
    {
        "word": "剩",
        "pinyin": "shèng",
        "meaning": "ເຫຼືອ",
        "example1": "盘子里还剩一些菜。",
        "example2": "工作还剩很多，我们要加快速度。"
    },
    {
        "word": "失败",
        "pinyin": "shī bài",
        "meaning": "ລົ້ມເຫຼວ,ພ່າຍແພ້",
        "example1": "他失败了很多次，但从不放弃。",
        "example2": "这次失败让他学到了很多东西。"
    },
    {
        "word": "失望",
        "pinyin": "shī wàng",
        "meaning": "ຜິດຫວັງ",
        "example1": "他对这次考试的结果很失望。",
        "example2": "他的表现让大家失望了。"
    },
    {
        "word": "师傅",
        "pinyin": "shī fu",
        "meaning": "ຊ່າງ,ຄູ(ໃຊ້ເອີ້ນຜູ້ທີ່ເຮັດອາຊີບຕ່າງໆແບບໃຫ້ກຽດ)",
        "example1": "他跟着师傅学习手艺。",
        "example2": "师傅，帮我修一下手表。"
    },
    {
        "word": "十分",
        "pinyin": "shí fēn",
        "meaning": "ສຸດໆ,ຢ່າງຫຍິ່ງ",
        "example1": "他十分喜欢这个礼物。",
        "example2": "这个地方的风景十分美丽。"
    },
    {
        "word": "实际",
        "pinyin": "shí jì",
        "meaning": "ຕາມຄວາມເປັນຈິງ, ຄວາມເປັນຈິງ",
        "example1": "我们要根据实际来做事。",
        "example2": "这和实际情况不符。"
    },
    {
        "word": "实在",
        "pinyin": "shí zài",
        "meaning": "ແທ້ໆ",
        "example1": "我实在太累了",
        "example2": "这个问题实在是太难了。"
    },
    {
        "word": "使",
        "pinyin": "shǐ",
        "meaning": "ເຮັດໃຫ້",
        "example1": "他的话使我很开心。",
        "example2": "这事儿使爸爸很不高兴。"
    },
    {
        "word": "使用",
        "pinyin": "shǐ yòng",
        "meaning": "ນຳໃຊ້",
        "example1": "他会使用电脑进行工作。",
        "example2": "他们使用什么语言交流。"
    },
    {
        "word": "世纪",
        "pinyin": "shì jì",
        "meaning": "ສະຕະວັດ",
        "example1": "我们生活在21世纪，科技发展很快。",
        "example2": "上个世纪的很多东西现在已经看不到了。"
    },
    {
        "word": "是否",
        "pinyin": "shì fǒu",
        "meaning": "ແມ່ນຫຼືບໍ່",
        "example1": "我不知道他是否会来参加会议。",
        "example2": "请告诉我这个消息是否真实。"
    },
    {
        "word": "适合",
        "pinyin": "shì hé",
        "meaning": "ເຫມາະສົມ, ເຫມາະສົມກັບ",
        "example1": "这个男人不太适合你。",
        "example2": "这种鞋子适合运动时穿。"
    },
    {
        "word": "适应",
        "pinyin": "shì yìng",
        "meaning": "ປັບຕົວ,ປັບຕົວໃຫ້ເຂົ້າກັບ",
        "example1": "他很快就适应了新的环境。",
        "example2": "我们要学会适应变化。"
    },
    {
        "word": "收",
        "pinyin": "shōu",
        "meaning": "ຮັບ/ເກັບ,ຈັດເກັບ",
        "example1": "他不收我给的礼物。",
        "example2": "快下雨了，你去收衣服吧。"
    },
    {
        "word": "收入",
        "pinyin": "shōu rù",
        "meaning": "ລາຍຮັບ",
        "example1": "他的收入很高。",
        "example2": "我们要努力提高家庭收入。"
    },
    {
        "word": "收拾",
        "pinyin": "shōu shi",
        "meaning": "ຈັດເກັບ",
        "example1": "他正在收拾房间。",
        "example2": "请收拾一下你的玩具。"
    },
    {
        "word": "首都",
        "pinyin": "shǒu dū",
        "meaning": "ນະຄອນຫລວງ",
        "example1": "北京是中国的首都。",
        "example2": "这个国家的首都是一个现代化的城市。"
    },
    {
        "word": "首先",
        "pinyin": "shǒu xiān",
        "meaning": "ກ່ອນອື່ນ(ມັກໃຊ້ຄູ່ກັບ其次）",
        "example1": "首先，我们要明确目标。",
        "example2": "首先我们要找出问题，其次才能想办法解决。"
    },
    {
        "word": "受不了",
        "pinyin": "shòu bù liǎo",
        "meaning": "ຮັບບໍ່ໄດ້",
        "example1": "天气太热了，我受不了了。",
        "example2": "这袋菜太辣了，我受不了。"
    },
    {
        "word": "受到",
        "pinyin": "shòu dào",
        "meaning": "ໄດ້ຮັບ(ສິ່ງທີ່ເປັນນາມມະທຳ,ສຳຜັດບໍ່ໄດ້)",
        "example1": "他受到了老师的表扬。",
        "example2": "我受到了你们的帮助。"
    },
    {
        "word": "售货员",
        "pinyin": "shòu huò yuán",
        "meaning": "ພະນັກງານຂາຍເຄື່ອງ",
        "example1": "售货员热情地为顾客服务。",
        "example2": "这位售货员很有耐心。"
    },
    {
        "word": "输",
        "pinyin": "shū",
        "meaning": "ແພ້",
        "example1": "他在比赛中输了。",
        "example2": "我们不能输了这场比赛。"
    },
    {
        "word": "熟悉",
        "pinyin": "shú xī",
        "meaning": "ຄຸ້ນເຄີຍ,ເຄີຍຊິນ",
        "example1": "我跟他不太熟悉。",
        "example2": "我对这儿不太熟悉"
    },
    {
        "word": "数量",
        "pinyin": "shù liàng",
        "meaning": "ຈຳນວນ",
        "example1": "这个商店里商品的数量很多。",
        "example2": "这个学校的学生数量是1880个人"
    },
    {
        "word": "数字",
        "pinyin": "shù zì",
        "meaning": "ຕົວເລກ",
        "example1": "请写下这些数字。",
        "example2": "这个数字太低了。"
    },
    {
        "word": "帅",
        "pinyin": "shuài",
        "meaning": "ຫລໍ່",
        "example1": "他长得很帅。",
        "example2": "这位运动员的动作很帅。"
    },
    {
        "word": "顺便",
        "pinyin": "shùn biàn",
        "meaning": "ແວະ,ຖືໂອກາດ",
        "example1": "我去超市的时候，顺便买了些水果。",
        "example2": "你回来的时候，顺便给我买点儿零食吧。"
    },
    {
        "word": "顺利",
        "pinyin": "shùn lì",
        "meaning": "ລາບລື່ນ",
        "example1": "他顺利地完成了任务。",
        "example2": "这次旅行进行得很顺利。"
    },
    {
        "word": "顺序",
        "pinyin": "shùn xù",
        "meaning": "ລຳດັບ",
        "example1": "请按照顺序回答问题。",
        "example2": "演出的顺序不能改变。"
    },
    {
        "word": "说明",
        "pinyin": "shuō míng",
        "meaning": "ອະທິບາຍ,ຊີ້ແຈງ/ຄຳອະທິບາຍ,ຊີ້ແຈງ",
        "example1": "请说明一下这个问题的原因。",
        "example2": "这是一份详细的说明。"
    },
    {
        "word": "硕士",
        "pinyin": "shuò shì",
        "meaning": "ປະລິນຍາໂທ",
        "example1": "他是硕士研究生。",
        "example2": "他正在读硕士。"
    },
    {
        "word": "死",
        "pinyin": "sǐ",
        "meaning": "ຕາຍ",
        "example1": "这只鸟死了。",
        "example2": "他累得要死。"
    },
    {
        "word": "速度",
        "pinyin": "sù dù",
        "meaning": "ຄວາມໄວ",
        "example1": "汽车的速度很快。",
        "example2": "我们要提高工作速度。"
    },
    {
        "word": "塑料袋",
        "pinyin": "sù liào dài",
        "meaning": "ຖົງພລາສຕິກ",
        "example1": "请不要使用一次性塑料袋。",
        "example2": "我们应该减少塑料袋的使用。"
    },
    {
        "word": "酸",
        "pinyin": "suān",
        "meaning": "ສົ້ມ",
        "example1": "这个柠檬很酸。",
        "example2": "我喜欢吃酸的。"
    },
    {
        "word": "随便",
        "pinyin": "suí biàn",
        "meaning": "ຕາມສະບາຍ,ແລ້ວແຕ່",
        "example1": "你随便坐。",
        "example2": "他随便吃了点东西就走了。"
    },
    {
        "word": "随着",
        "pinyin": "suí zhe",
        "meaning": "ຕາມ..../ຕາມທີ່......",
        "example1": "随着时间的推移，他变得越来越成熟。",
        "example2": "随着科技的发展，我们的生活变得更方便了。"
    },
    {
        "word": "孙子",
        "pinyin": "sūn zi",
        "meaning": "ຫຼານ",
        "example1": "他的孙子很可爱。",
        "example2": "这位老人经常和他的孙子一起玩。"
    },
    {
        "word": "所有",
        "pinyin": "suǒ yǒu",
        "meaning": "ທັງໝົດ",
        "example1": "现在所有的问题都解决了。",
        "example2": "所有的人都尊重他。"
    },
    {
        "word": "台",
        "pinyin": "tái",
        "meaning": "ເຄື່ອງ(ຄຳລັກສະນະນາມຂອງເຄື່ອງໃຊ້ໄຟຟ້າ)",
        "example1": "他买了一台新电脑。",
        "example2": "这台洗衣机坏了。"
    },
    {
        "word": "抬",
        "pinyin": "tái",
        "meaning": "ຍົກ,ເງີຍ",
        "example1": "他们一起抬着桌子。",
        "example2": "他抬头看我。"
    },
    {
        "word": "态度",
        "pinyin": "tài dù",
        "meaning": "ທ່າທີ,ທັດສະນະຄະຕິ",
        "example1": "你应该改变你的态度。",
        "example2": "这家酒店的服务态度很好。"
    },
    {
        "word": "谈",
        "pinyin": "tán",
        "meaning": "ລົມ(ແບບທາງການ)",
        "example1": "他们在谈生意。",
        "example2": "我们来谈一谈这个计划吧。"
    },
    {
        "word": "弹钢琴",
        "pinyin": "tán gāng qín",
        "meaning": "ຫລິ້ນເປຍໂນ （piano）",
        "example1": "她会弹钢琴。",
        "example2": "他每天都花时间弹钢琴。"
    },
    {
        "word": "汤",
        "pinyin": "tāng",
        "meaning": "ແກງ",
        "example1": "他喜欢喝汤。",
        "example2": "妈妈做的汤很好喝。"
    },
    {
        "word": "糖",
        "pinyin": "táng",
        "meaning": "ນ້ຳຕານ,ຂະໜົມອົມ",
        "example1": "她喜欢吃糖。",
        "example2": "不要吃太多的糖，对牙齿不好。"
    },
    {
        "word": "躺",
        "pinyin": "tǎng",
        "meaning": "ນອນ(ນອນຫລິ້ນແຕ່ບໍ່ຫລັບ)",
        "example1": "他躺在沙发上休息。",
        "example2": "我喜欢躺在床上看书。"
    },
    {
        "word": "趟",
        "pinyin": "tàng",
        "meaning": "ຄັ້ງ,ເທື່ອ",
        "example1": "他去了一趟北京。",
        "example2": "我今天要去两趟银行。"
    },
    {
        "word": "讨论",
        "pinyin": "tǎo lùn",
        "meaning": "ອະພິປາຍ",
        "example1": "我们正在讨论这个问题。",
        "example2": "他们正在进行讨论。"
    },
    {
        "word": "讨厌",
        "pinyin": "tǎo yàn",
        "meaning": "ລຳຄານ,ຊັງ",
        "example1": "他讨厌吃胡萝卜。",
        "example2": "我讨厌那个人。"
    },
    {
        "word": "特点",
        "pinyin": "tè diǎn",
        "meaning": "ລັກສະນະພິເສດ,ຈຸດພິເສດ",
        "example1": "这个地方的特点是风景优美。",
        "example2": "你一个人都有自己的特点。"
    },
    {
        "word": "提",
        "pinyin": "tí",
        "meaning": "ຫິ້ວ/ຍົກ",
        "example1": "他提了一个很好的建议。",
        "example2": "请帮我提一下这个包。"
    },
    {
        "word": "提供",
        "pinyin": "tí gōng",
        "meaning": "ອຳນວຍໃຫ້",
        "example1": "谢谢您为我们提供方便。",
        "example2": "他为我们提供了很多有用的信息。"
    },
    {
        "word": "提前",
        "pinyin": "tí qián",
        "meaning": "......ລ່ວງຫນ້າ",
        "example1": "他提前到达了机场。",
        "example2": "我们要提前一个小时准备。"
    },
    {
        "word": "提醒",
        "pinyin": "tí xǐng",
        "meaning": "ເຕືອນ,ເຕືອນສະຕິ",
        "example1": "妈妈提醒我记得带伞。",
        "example2": "请给他提个醒儿。"
    },
    {
        "word": "填空",
        "pinyin": "tián kòng",
        "meaning": "ເຕີມຊ່ອງຫວ່າງ",
        "example1": "请在空格处填空。",
        "example2": "他正在做填空练习。"
    },
    {
        "word": "条件",
        "pinyin": "tiáo jiàn",
        "meaning": "ເງື່ອນໄຂ",
        "example1": "他满足了工作的条件。",
        "example2": "他给我提出了一个条件。"
    },
    {
        "word": "停",
        "pinyin": "tíng",
        "meaning": "ຢຸດ",
        "example1": "车停在路边。",
        "example2": "红灯亮了，汽车停了下来。"
    },
    {
        "word": "挺",
        "pinyin": "tǐng",
        "meaning": "ຫຼາຍ(ໃຊ້ຄູ່ກັບ的）",
        "example1": "他挺聪明的。",
        "example2": "今天天气挺热的"
    },
    {
        "word": "通过",
        "pinyin": "tōng guò",
        "meaning": "ຜ່ານ/ຜ່ານການ",
        "example1": "他通过了考试。",
        "example2": "通过努力，他取得了成功。"
    },
    {
        "word": "通知",
        "pinyin": "tōng zhī",
        "meaning": "ແຈ້ງ,ແຈ້ງການ",
        "example1": "老师通知我们明天考试。",
        "example2": "你收到通知了吗？"
    },
    {
        "word": "同情",
        "pinyin": "tóng qíng",
        "meaning": "ເຫັນອົກເຫັນໃຈ",
        "example1": "他很同情那个可怜的孩子。",
        "example2": "我们对他表示同情。"
    },
    {
        "word": "同时",
        "pinyin": "tóng shí",
        "meaning": "ໃນເວລາດຽວກັນ/ຂະນະດຽວກັນ",
        "example1": "他同时做两件事。",
        "example2": "他喜欢音乐，同时也喜欢画画。"
    },
    {
        "word": "推",
        "pinyin": "tuī",
        "meaning": "ຍູ້",
        "example1": "请推门。",
        "example2": "他推着一辆自行车。"
    },
    {
        "word": "推迟",
        "pinyin": "tuī chí",
        "meaning": "ເລື່ອນເວລາອອກໄປ (delay)",
        "example1": "会议推迟到下周了。",
        "example2": "由于天气原因，比赛推迟了。"
    },
    {
        "word": "脱",
        "pinyin": "tuō",
        "meaning": "ຖອດ,ແກ້",
        "example1": "他脱掉了外套。",
        "example2": "请先脱鞋再进入房间。"
    },
    {
        "word": "袜子",
        "pinyin": "wà zi",
        "meaning": "ຖົງຕີນ",
        "example1": "他的袜子破了一个洞。",
        "example2": "请把袜子洗一下。"
    },
    {
        "word": "完全",
        "pinyin": "wán quán",
        "meaning": "ທັງໝົດ.....ເລີຍ",
        "example1": "他完全理解了这个问题。",
        "example2": "这是一个完全正确的答案。"
    },
    {
        "word": "网球",
        "pinyin": "wǎng qiú",
        "meaning": "ກິລາເທນນິສ",
        "example1": "他喜欢打网球。",
        "example2": "这个网球比赛很精彩。"
    },
    {
        "word": "网站",
        "pinyin": "wǎng zhàn",
        "meaning": "ເວັບໄຊ້(website)",
        "example1": "他经常在这个网站上购物。",
        "example2": "这个网站提供了很多有用的信息。"
    },
    {
        "word": "往往",
        "pinyin": "wǎng wǎng",
        "meaning": "ມັກຈະ",
        "example1": "他往往在周末去爬山。",
        "example2": "冬天往往会下雪。"
    },
    {
        "word": "危险",
        "pinyin": "wēi xiǎn",
        "meaning": "ອັນຕະລາຍ",
        "example1": "过马路时要小心，很危险的",
        "example2": "这个地方很危险。"
    },
    {
        "word": "卫生间",
        "pinyin": "wèi shēng jiān",
        "meaning": "ຫ້ອງນ້ຳ",
        "example1": "卫生间在哪里？",
        "example2": "这个卫生间很干净。"
    },
    {
        "word": "味道",
        "pinyin": "wèi dào",
        "meaning": "ລົດຊາດ",
        "example1": "这个菜的味道很好。",
        "example2": "你喜欢什么样的味道？"
    },
    {
        "word": "温度",
        "pinyin": "wēn dù",
        "meaning": "ອຸນຫະພູມ",
        "example1": "今天的温度有点高。",
        "example2": "今天温度比较低，你多穿点儿。"
    },
    {
        "word": "文章",
        "pinyin": "wén zhāng",
        "meaning": "ບົດຄວາມ",
        "example1": "我写了一篇关于春天的文章。",
        "example2": "这本书的文章很有趣。"
    },
    {
        "word": "污染",
        "pinyin": "wū rǎn",
        "meaning": "ມົນລະພິດ,ເປັນມົນລະພິດ",
        "example1": "为了保护环境，我们要减少空气污染。",
        "example2": "环境污染是个严重的问题。"
    },
    {
        "word": "无",
        "pinyin": "wú",
        "meaning": "ບໍ່ມີ",
        "example1": "今天无作业，可以早点回家。",
        "example2": "这个盒子里无东西。"
    },
    {
        "word": "无聊",
        "pinyin": "wú liáo",
        "meaning": "ໜ້າເບື່ອ",
        "example1": "这个电影很无聊，我看不下去了。",
        "example2": "周末一个人在家很无聊。"
    },
    {
        "word": "无论",
        "pinyin": "wú lùn",
        "meaning": "ເຖິງແມ້ວ່າ(ຄ້າຍກັບ不管）",
        "example1": "无论天气怎么样，他都坚持锻炼。",
        "example2": "无论谁来，我们都欢迎。"
    },
    {
        "word": "误会",
        "pinyin": "wù huì",
        "meaning": "ເຂົ້າໃຈຜິດ",
        "example1": "他误会了我的意思。",
        "example2": "你误会了，先听我解释。"
    },
    {
        "word": "西红柿",
        "pinyin": "xī hóng shì",
        "meaning": "ໝາກເລັ່ນ",
        "example1": "他喜欢吃西红柿炒鸡蛋。",
        "example2": "超市里的西红柿很新鲜。"
    },
    {
        "word": "吸引",
        "pinyin": "xī yǐn",
        "meaning": "ດຶງດູດ",
        "example1": "这部电影吸引了很多观众。",
        "example2": "美丽的风景吸引着游客。"
    },
    {
        "word": "咸",
        "pinyin": "xián",
        "meaning": "ເຄັມ",
        "example1": "这个菜太咸了，没法吃。",
        "example2": "他不喜欢太咸的食物。"
    },
    {
        "word": "现金",
        "pinyin": "xiàn jīn",
        "meaning": "ເງິນສົດ",
        "example1": "他用现金支付了购物费用。",
        "example2": "我没有现金。"
    },
    {
        "word": "羡慕",
        "pinyin": "xiàn mù",
        "meaning": "ອິດສາ(ໃນທາງທີ່ດີ)",
        "example1": "他很羡慕朋友的新自行车。",
        "example2": "我羡慕她的好身材。"
    },
    {
        "word": "相反",
        "pinyin": "xiāng fǎn",
        "meaning": "ກົງກັນຂ້າມ",
        "example1": "我和你的想法相反。",
        "example2": "我以为他会生气，相反，他却笑了"
    },
    {
        "word": "相同",
        "pinyin": "xiāng tóng",
        "meaning": "ຄ້າຍຄືກັນ",
        "example1": "他们穿着相同颜色的衣服。",
        "example2": "这两个问题有相同的答案。"
    },
    {
        "word": "香",
        "pinyin": "xiāng",
        "meaning": "ຫອມ",
        "example1": "花园里的花很香。",
        "example2": "妈妈做的饭菜很香。"
    },
    {
        "word": "详细",
        "pinyin": "xiáng xì",
        "meaning": "ລະອຽດ,ມີລາຍລະອຽດ",
        "example1": "他详细地介绍了这个项目。",
        "example2": "请给我一份详细的报告。"
    },
    {
        "word": "响",
        "pinyin": "xiǎng",
        "meaning": "ດັງ,ນັນ,ນັນຫູ",
        "example1": "闹钟响了，你怎么还不起床。",
        "example2": "这个音乐声音太响了。"
    },
    {
        "word": "橡皮",
        "pinyin": "xiàng pí",
        "meaning": "ຢາງລຶບ",
        "example1": "他用橡皮擦掉了错误的答案。",
        "example2": "我的橡皮不见了。"
    },
    {
        "word": "消息",
        "pinyin": "xiāo xi",
        "meaning": "ຂໍ້ຄວາມ,ຂ່າວສານ",
        "example1": "他听到了一个好消息。",
        "example2": "这个消息是真的假的"
    },
    {
        "word": "小吃",
        "pinyin": "xiǎo chī",
        "meaning": "ຂະຫນົມ",
        "example1": "他喜欢吃各种小吃。",
        "example2": "我最喜欢的小吃是糖葫芦。"
    },
    {
        "word": "小伙子",
        "pinyin": "xiǎo huǒ zi",
        "meaning": "ເດັກຊາຍ(ຜູ້ບ່າວ)",
        "example1": "那个小伙子挺帅的。",
        "example2": "那个小伙子在打篮球。"
    },
    {
        "word": "小说",
        "pinyin": "xiǎo shuō",
        "meaning": "ນິຍາຍ",
        "example1": "他喜欢读小说。",
        "example2": "这本小说很受欢迎。"
    },
    {
        "word": "笑话",
        "pinyin": "xiào hua",
        "meaning": "ມຸກຕະລົກ",
        "example1": "他讲了一个笑话，大家都笑了。",
        "example2": "这个笑话很有趣。"
    },
    {
        "word": "效果",
        "pinyin": "xiào guǒ",
        "meaning": "ປະສິດທິພາບ",
        "example1": "这种药的效果很好。",
        "example2": "他的努力取得了好的效果。"
    },
    {
        "word": "心情",
        "pinyin": "xīn qíng",
        "meaning": "ອາລົມ",
        "example1": "他今天心情很好。",
        "example2": "听音乐可以让心情变好。"
    },
    {
        "word": "辛苦",
        "pinyin": "xīn kǔ",
        "meaning": "ຫຍຸ້ງຍາກລຳບາກ",
        "example1": "他工作很辛苦。",
        "example2": "在郊区生活没有那么辛苦。"
    },
    {
        "word": "信封",
        "pinyin": "xìn fēng",
        "meaning": "ຈົດໝາຍ",
        "example1": "我去把信封寄给妈妈。",
        "example2": "桌子上有一个信封。"
    },
    {
        "word": "信息",
        "pinyin": "xìn xī",
        "meaning": "ຂໍ້ຄວາມ",
        "example1": "他在网上获取了很多信息。",
        "example2": "这条信息很重要。"
    },
    {
        "word": "信心",
        "pinyin": "xìn xīn",
        "meaning": "ຄວາມໝັ້ນໃຈ",
        "example1": "他对自己很有信心。",
        "example2": "我们要有信心面对困难。"
    },
    {
        "word": "行",
        "pinyin": "xíng",
        "meaning": "ໄດ້",
        "example1": "你看这么做行不行？",
        "example2": "行了，行了"
    },
    {
        "word": "醒",
        "pinyin": "xǐng",
        "meaning": "ຕື່ນ",
        "example1": "他早上六点就醒了。",
        "example2": "这个消息让他醒了。"
    },
    {
        "word": "兴奋",
        "pinyin": "xīng fèn",
        "meaning": "ຕື່ນເຕັ້ນ(ແບບດີໃຈ)",
        "example1": "他很兴奋能去旅行。",
        "example2": "这个好消息让大家兴奋起来。"
    },
    {
        "word": "幸福",
        "pinyin": "xìng fú",
        "meaning": "ມີຄວາມສຸກ, ຄວາມສຸກ",
        "example1": "一家人在一起就是幸福。",
        "example2": "我感到很幸福。"
    },
    {
        "word": "性别",
        "pinyin": "xìng bié",
        "meaning": "ເພດ",
        "example1": "我们应该尊重不同性别的人。",
        "example2": "这份表格需要填写性别信息。"
    },
    {
        "word": "性格",
        "pinyin": "xìng gé",
        "meaning": "ນິໄສ",
        "example1": "他的性格很活泼。",
        "example2": "不同的人有不同的性格。"
    },
    {
        "word": "修理",
        "pinyin": "xiū lǐ",
        "meaning": "ແປງ,ສ້ອມແປງ",
        "example1": "他会修理自行车。",
        "example2": "你帮我修一下我的手表。"
    },
    {
        "word": "学期",
        "pinyin": "xué qī",
        "meaning": "ເທີມ(ເທີມຮຽນ)",
        "example1": "这个学期我们要好好学习了。",
        "example2": "新学期马上就要开始了。"
    },
    {
        "word": "许多",
        "pinyin": "xǔ duō",
        "meaning": "ຫຼາຍ（ຫຼາຍກວ່າ多）",
        "example1": "他有许多朋友。",
        "example2": "许多人喜欢看电影。"
    },
    {
        "word": "压力",
        "pinyin": "yā lì",
        "meaning": "ຄວາມກົດດັນ",
        "example1": "他工作压力很大。",
        "example2": "我妈妈的话给我了很大压力。"
    },
    {
        "word": "呀",
        "pinyin": "yā",
        "meaning": "ຄຳອຸທານຫຼືລົງທ້າຍປະໂຫຍກເພື່ອເຕີມນ້ຳສຽງ",
        "example1": "呀，你怎么来了！",
        "example2": "这花好漂亮呀！"
    },
    {
        "word": "牙膏",
        "pinyin": "yá gāo",
        "meaning": "ຢາຖູແຂ້ວ",
        "example1": "他每天都用牙膏刷牙。",
        "example2": "这种牙膏很好。"
    },
    {
        "word": "亚洲",
        "pinyin": "yà zhōu",
        "meaning": "ທະວີບອາຊີ",
        "example1": "中国位于亚洲。",
        "example2": "亚洲有很多不同的国家和文化。"
    },
    {
        "word": "严格",
        "pinyin": "yán gé",
        "meaning": "ເຂັ້ມງວດ",
        "example1": "老师对学生很严格。",
        "example2": "我们学校的规定很严格。"
    },
    {
        "word": "严重",
        "pinyin": "yán zhòng",
        "meaning": "ຮ້າຍແຮງ",
        "example1": "这个问题很严重，需要尽快解决。",
        "example2": "他的病很严重。"
    },
    {
        "word": "研究",
        "pinyin": "yán jiū",
        "meaning": "ວິໄຈ,ການວິໄຈ",
        "example1": "他正在研究这种药。",
        "example2": "我打算深入研究一下这个问题。"
    },
    {
        "word": "盐",
        "pinyin": "yán",
        "meaning": "ເກືອ",
        "example1": "炒菜时要放点儿的盐。",
        "example2": "少吃点盐"
    },
    {
        "word": "眼镜",
        "pinyin": "yǎn jìng",
        "meaning": "ແວ່ນຕາ",
        "example1": "他戴着眼镜看书。",
        "example2": "我的眼镜找不到了。"
    },
    {
        "word": "演出",
        "pinyin": "yǎn chū",
        "meaning": "ການສະແດງ(ຄ້າຍກັບ表演）",
        "example1": "他们正在准备一场演出。",
        "example2": "他演出了一部很受欢迎的电影。"
    },
    {
        "word": "演员",
        "pinyin": "yǎn yuán",
        "meaning": "ນັກສະແດງ",
        "example1": "这个演员的表演很精彩。",
        "example2": "他想成为一名演员。"
    },
    {
        "word": "阳光",
        "pinyin": "yáng guāng",
        "meaning": "ແສງແດດ",
        "example1": "阳光从窗户照了进来。",
        "example2": "我喜欢在阳光下散步，感觉很舒服。"
    },
    {
        "word": "养成",
        "pinyin": "yǎng chéng",
        "meaning": "ປູກຝັງເປັນນິໄສ/ຝຶກເປັນນິໄສ",
        "example1": "他养成了每天早起的习惯。",
        "example2": "他养成了爱读书的习惯。"
    },
    {
        "word": "样子",
        "pinyin": "yàng zi",
        "meaning": "ຮູບຮ່າງ,ແບບ",
        "example1": "他生气的样子很可怕。",
        "example2": "这棵树长得很奇怪的样子。"
    },
    {
        "word": "邀请",
        "pinyin": "yāo qǐng",
        "meaning": "ເຊີນ,ເຊີນຊວນ/ຄຳເຊີນ",
        "example1": "他邀请我参加他的生日聚会。",
        "example2": "我收到了一份邀请。"
    },
    {
        "word": "要是",
        "pinyin": "yào shi",
        "meaning": "ຖ້າ(ຖ້າຫາກວ່າ,ຄ້າຍກັບ如果）",
        "example1": "要是明天天气好，我们就去公园。",
        "example2": "要是他来了，记得通知我。"
    },
    {
        "word": "钥匙",
        "pinyin": "yào shi",
        "meaning": "ກະແຈ",
        "example1": "他找不到自己的钥匙了。",
        "example2": "请把钥匙给我。"
    },
    {
        "word": "也许",
        "pinyin": "yě xǔ",
        "meaning": "ອາດຈະ",
        "example1": "也许他已经回家了。",
        "example2": "也许明天会下雨。"
    },
    {
        "word": "叶子",
        "pinyin": "yè zi",
        "meaning": "ໃບໄມ້",
        "example1": "树上的叶子都变黄了。",
        "example2": "这片叶子很漂亮。"
    },
    {
        "word": "页",
        "pinyin": "yè",
        "meaning": "ຫນ້າ",
        "example1": "这本书有很多页。",
        "example2": "请翻到第五页。"
    },
    {
        "word": "一切",
        "pinyin": "yī qiè",
        "meaning": "ທັງໝົດ/ທຸກສິ່ງທຸກຢ່າງ",
        "example1": "他拥有一切他想要的东西。",
        "example2": "我把一切给你了你了。"
    },
    {
        "word": "以",
        "pinyin": "yǐ",
        "meaning": "ໃຊ້/ດ້ວຍ",
        "example1": "他以优异的成绩毕业。",
        "example2": "以水带酒。"
    },
    {
        "word": "以为",
        "pinyin": "yǐ wéi",
        "meaning": "ຄິດວ່າ(ຄິດແບບຮູ້ທີຫຼັງແລ້ວ)",
        "example1": "他以为我生气了，其实我没有。",
        "example2": "不要以为自己什么都懂。"
    },
    {
        "word": "艺术",
        "pinyin": "yì shù",
        "meaning": "ສິລະປະ",
        "example1": "他对艺术很感兴趣。",
        "example2": "他有说话的艺术。"
    },
    {
        "word": "意见",
        "pinyin": "yì jiàn",
        "meaning": "ຄວາມຄິດເຫັນ",
        "example1": "我们应该听别人的意见。",
        "example2": "大家对这个计划有不同的意见。"
    },
    {
        "word": "因此",
        "pinyin": "yīn cǐ",
        "meaning": "ດັ່ງນັ້ນ",
        "example1": "他努力学习，因此取得了好成绩。",
        "example2": "我也经历过失败，因此很理解你现在的心情。"
    },
    {
        "word": "引起",
        "pinyin": "yǐn qǐ",
        "meaning": "ກໍ່ໃຫ້ເກີດ,ເຮັດໃຫ້ເກີດ",
        "example1": "他的演讲引起了大家的兴趣。",
        "example2": "这个情况引起误会。"
    },
    {
        "word": "印象",
        "pinyin": "yìn xiàng",
        "meaning": "ຄວາມປະທັບໃຈ,ປະທັບໃຈ",
        "example1": "他给我留下了深刻的印象。",
        "example2": "这次旅行给我很好的印象。"
    },
    {
        "word": "应聘",
        "pinyin": "yìng pìn",
        "meaning": "ສະໝັກງານ",
        "example1": "  这家公司正在招聘，我想去应聘。",
        "example2": "你要去哪家应聘？"
    },
    {
        "word": "赢",
        "pinyin": "yíng",
        "meaning": "ຊະນະ",
        "example1": "他在比赛中赢了。",
        "example2": "我们要努力赢得这次比赛。"
    },
    {
        "word": "永远",
        "pinyin": "yǒng yuǎn",
        "meaning": "ຕະຫຼອດໄປ",
        "example1": "他永远是我的好朋友。",
        "example2": "我永远不会放弃理想。"
    },
    {
        "word": "勇敢",
        "pinyin": "yǒng gǎn",
        "meaning": "ກ້າຫານ",
        "example1": "他是一个勇敢的人。",
        "example2": "我们要勇敢地面对挑战。"
    },
    {
        "word": "优点",
        "pinyin": "yōu diǎn",
        "meaning": "ຂໍ້ດີ",
        "example1": "他有很多优点。",
        "example2": "我们要学习别人的优点。"
    },
    {
        "word": "优秀",
        "pinyin": "yōu xiù",
        "meaning": "ດີເລີດ,ເກັ່ງ",
        "example1": "他是一名优秀的学生。",
        "example2": "这位运动员很优秀。"
    },
    {
        "word": "幽默",
        "pinyin": "yōu mò",
        "meaning": "ຕະລົກ",
        "example1": "他说话很幽默。",
        "example2": "他的幽默让大家很开心。"
    },
    {
        "word": "尤其",
        "pinyin": "yóu qí",
        "meaning": "ໂດຍສະເພາແມ່ນ",
        "example1": "他喜欢运动，尤其喜欢篮球。",
        "example2": "这个地方的风景很美，尤其是在春天。"
    },
    {
        "word": "由",
        "pinyin": "yóu",
        "meaning": "ໂດຍ.....",
        "example1": "这个决定由他来做。",
        "example2": "这本书是由他写的。"
    },
    {
        "word": "由于",
        "pinyin": "yóu yú",
        "meaning": "ເນື່ອງຈາກ",
        "example1": "由于天气原因，比赛推迟了。",
        "example2": "由于他的努力，他取得了成功。"
    },
    {
        "word": "邮局",
        "pinyin": "yóu jú",
        "meaning": "ຫ້ອງການໄປສະນີ",
        "example1": "他去邮局寄信了。",
        "example2": "附近有一个邮局吗？"
    },
    {
        "word": "友好",
        "pinyin": "yǒu hǎo",
        "meaning": "ເປັນມິດ(friendly)",
        "example1": "他是一个很友好的人。",
        "example2": "这个城市的人们对游客很友好。"
    },
    {
        "word": "友谊",
        "pinyin": "yǒu yì",
        "meaning": "ມິດຕະພາບ",
        "example1": "他们之间的友谊很深厚。",
        "example2": "我们要珍惜这份友谊。"
    },
    {
        "word": "有趣",
        "pinyin": "yǒu qù",
        "meaning": "ຫນ້າສົນໃຈ",
        "example1": "这个故事很有趣。",
        "example2": "他是一个有趣的人。"
    },
    {
        "word": "于是",
        "pinyin": "yú shì",
        "meaning": "ດັ່ງນັ້ນ,ສະນັ້ນ",
        "example1": "他生病了，于是请假回家了。",
        "example2": "外面下雨了，于是我们决定在家看电视。"
    },
    {
        "word": "愉快",
        "pinyin": "yú kuài",
        "meaning": "ມີຄວາມສຸກ",
        "example1": "今天我过得很愉快。",
        "example2": "大家在一起玩得很愉快。"
    },
    {
        "word": "与",
        "pinyin": "yǔ",
        "meaning": "ກັບ, ແລະ",
        "example1": "我与他一起工作。",
        "example2": "见到你我非常兴奋与激动。"
    },
    {
        "word": "羽毛球",
        "pinyin": "yǔ máo qiú",
        "meaning": "ດອກປີກໄກ່",
        "example1": "他喜欢打羽毛球。",
        "example2": "我们经常一起打羽毛球。"
    },
    {
        "word": "语法",
        "pinyin": "yǔ fǎ",
        "meaning": "ຫຼັກໄວຍາກອນ",
        "example1": "学习语法对掌握语言很重要。",
        "example2": "他的语法知识很丰富。"
    },
    {
        "word": "语言",
        "pinyin": "yǔ yán",
        "meaning": "ພາສາ",
        "example1": "他会说多种语言。",
        "example2": "语言是交流的重要工具。"
    },
    {
        "word": "预习",
        "pinyin": "yù xí",
        "meaning": "ຮຽນກ່ອນ(ກຽມຕົວກ່ອນຮຽນ)",
        "example1": "先预习一遍。",
        "example2": "预习可以帮助我们更好地理解知识。"
    },
    {
        "word": "原来",
        "pinyin": "yuán lái",
        "meaning": "ເດີມ,ເດີມທີ",
        "example1": "这是原来的计划。",
        "example2": "原来他是我的邻居。"
    },
    {
        "word": "原谅",
        "pinyin": "yuán liàng",
        "meaning": "ໃຫ້ອະໄພ,ຍົກໂທດ",
        "example1": "请原谅我的错误。",
        "example2": "他希望得到她的原谅。"
    },
    {
        "word": "原因",
        "pinyin": "yuán yīn",
        "meaning": "ເຫດຜົນ",
        "example1": "你能告诉我原因吗？",
        "example2": "他迟到的原因是堵车。"
    },
    {
        "word": "约会",
        "pinyin": "yuē huì",
        "meaning": "ການນັດພົບ",
        "example1": "他们在约会。",
        "example2": "他有一个约会。"
    },
    {
        "word": "阅读",
        "pinyin": "yuè dú",
        "meaning": "ອ່ານ",
        "example1": "他喜欢阅读各种书籍。",
        "example2": "每天阅读可以提高我们的知识水平。"
    },
    {
        "word": "云",
        "pinyin": "yún",
        "meaning": "ເມກ",
        "example1": "天空中有很多白云。",
        "example2": "黑云满天。"
    },
    {
        "word": "允许",
        "pinyin": "yǔn xǔ",
        "meaning": "ອະນຸຍາດ, ອະນຸຍາດໃຫ້",
        "example1": "老师允许我们课后休息一会儿。",
        "example2": "不经过允许，不可以进入。"
    },
    {
        "word": "杂志",
        "pinyin": "zá zhì",
        "meaning": "ວາລະສານ",
        "example1": "我喜欢阅读杂志。",
        "example2": "这本杂志的内容很有趣。"
    },
    {
        "word": "咱们",
        "pinyin": "zán men",
        "meaning": "ພວກເຮົາ",
        "example1": "咱们一起去看电影吧。",
        "example2": "咱们要努力完成这个任务。"
    },
    {
        "word": "暂时",
        "pinyin": "zàn shí",
        "meaning": "ຊົ່ວຄາວ",
        "example1": "他暂时住在朋友家。",
        "example2": "这个问题暂时无法解决。"
    },
    {
        "word": "脏",
        "pinyin": "zāng",
        "meaning": "ເປື້ອນ,ບໍ່ສະອາດ",
        "example1": "他的衣服很脏。",
        "example2": "请把脏衣服洗一下。"
    },
    {
        "word": "责任",
        "pinyin": "zé rèn",
        "meaning": "ຄວາມຮັບຜິດຊອບ",
        "example1": "每个人都有自己的责任。",
        "example2": "他不想承担责任。"
    },
    {
        "word": "增加",
        "pinyin": "zēng jiā",
        "meaning": "ເພີ່ມຂຶ້ນ",
        "example1": "他的体重增加了。",
        "example2": "学校想增加学校数量。"
    },
    {
        "word": "占线",
        "pinyin": "zhàn xiàn",
        "meaning": "ຕິດສາຍ,ສາຍບໍ່ຫວ່າງ(ສາຍໂທ)",
        "example1": "电话占线，我打不通。",
        "example2": "我打电话给你了，但一直占线。"
    },
    {
        "word": "招聘",
        "pinyin": "zhāo pìn",
        "meaning": "ຮັບສະໝັກງານ",
        "example1": "他们公司正在招聘新员工。",
        "example2": "这家餐厅最近在招聘服务员。"
    },
    {
        "word": "照",
        "pinyin": "zhào",
        "meaning": "ຖ່າຍ,ສ່ອງ",
        "example1": "他照了一张照片。",
        "example2": "阳光照进了窗户。"
    },
    {
        "word": "真正",
        "pinyin": "zhēn zhèng",
        "meaning": "ແທ້ຈິງ, ຢ່າງແທ້ຈິງ",
        "example1": "他是真正的英雄。",
        "example2": "他真正地理解了这个问题。"
    },
    {
        "word": "整理",
        "pinyin": "zhěng lǐ",
        "meaning": "ຈັດລະບຽບ",
        "example1": "他正在整理房间。",
        "example2": "请整理一下你的文件。"
    },
    {
        "word": "正常",
        "pinyin": "zhèng cháng",
        "meaning": "ປົກກະຕິ,ທຳມະດາ",
        "example1": "他不是正常人。",
        "example2": "这种情况是正常的。"
    },
    {
        "word": "正好",
        "pinyin": "zhèng hǎo",
        "meaning": "ພໍດີ",
        "example1": "正好12点了，我们一起去吃饭吧。",
        "example2": "我正好有空，可以帮你。"
    },
    {
        "word": "正确",
        "pinyin": "zhèng què",
        "meaning": "ຖືກຕ້ອງ, ມີຄວາມຖືກຕ້ອງ",
        "example1": "他的答案是正确的。",
        "example2": "我们要做出正确的选择。"
    },
    {
        "word": "正式",
        "pinyin": "zhèng shì",
        "meaning": "ເປັນທາງການ, ມີຄວາມເປັນທາງການ",
        "example1": "这是一个正式的会议。",
        "example2": "他穿着正式的服装参加婚礼。"
    },
    {
        "word": "证明",
        "pinyin": "zhèng míng",
        "meaning": "ພິສູດ,ຢັ້ງຢືນ",
        "example1": "让时间来证明一切。",
        "example2": "我可以证明他没骗你。"
    },
    {
        "word": "之",
        "pinyin": "zhī",
        "meaning": "ຂອງ(ຄ້າຍກັບ的ສ່ວນຫລາຍທາງຫລັງຈະເປັນຄຳພະຍາງດຽວ)",
        "example1": "北京之春天气比较暖和。",
        "example2": "我们正在走向成功之路。"
    },
    {
        "word": "支持",
        "pinyin": "zhī chí",
        "meaning": "ສະໜັບສະໜູນ",
        "example1": "我们支持他的决定。",
        "example2": "他得到了大家的支持。"
    },
    {
        "word": "知识",
        "pinyin": "zhī shi",
        "meaning": "ຄວາມຮູ້",
        "example1": "他有丰富的知识。",
        "example2": "学习知识对我们很重要。"
    },
    {
        "word": "直接",
        "pinyin": "zhí jiē",
        "meaning": "ໂດຍກົງ",
        "example1": "他直接表达了自己的想法。",
        "example2": "这是一个直接的方法。"
    },
    {
        "word": "值得",
        "pinyin": "zhí dé",
        "meaning": "ຄຸ້ມຄ່າ",
        "example1": "这本书值得读。",
        "example2": "这辆车买的很值得。"
    },
    {
        "word": "职业",
        "pinyin": "zhí yè",
        "meaning": "ອາຊີບ",
        "example1": "我理想的职业是老师。",
        "example2": "不同的职业有不同的要求。"
    },
    {
        "word": "植物",
        "pinyin": "zhí wù",
        "meaning": "ພືດ",
        "example1": "花园里有各种各样的植物。",
        "example2": "植物对环境有重要作用。"
    },
    {
        "word": "只好",
        "pinyin": "zhǐ hǎo",
        "meaning": "ຈຳຕ້ອງ,ຈຳເປັນຕ້ອງ(ຄ້າຍກັບ不得不）",
        "example1": "外面下雨了，他只好待在家里。",
        "example2": "没有其他办法，我只好放弃。"
    },
    {
        "word": "只要",
        "pinyin": "zhǐ yào",
        "meaning": "ພຽງແຕ່, ພຽງແຕ່ວ່າ",
        "example1": "只要你努力，就一定能成功。",
        "example2": "只要有时间，我就会去锻炼。"
    },
    {
        "word": "指",
        "pinyin": "zhǐ",
        "meaning": "ຊີ້,ຊີ້ໃຫ້ເຫັນ",
        "example1": "饭馆在哪？你指给我看看。",
        "example2": "老师指的问题很重要。"
    },
    {
        "word": "至少",
        "pinyin": "zhì shǎo",
        "meaning": "ຢ່າງນ້ອຍ",
        "example1": "至少有十个人参加了会议。",
        "example2": "你至少要提前十分钟到。"
    },
    {
        "word": "质量",
        "pinyin": "zhì liàng",
        "meaning": "ຄຸນນະພາບ",
        "example1": "这家工厂生产的产品质量很好。",
        "example2": "我们要保证产品的质量。"
    },
    {
        "word": "重",
        "pinyin": "zhòng",
        "meaning": "ຫນັກ",
        "example1": "这个箱子很重。",
        "example2": "我比你重两公斤。"
    },
    {
        "word": "重点",
        "pinyin": "zhòng diǎn",
        "meaning": "ຈຸດຫລັກ/ຈຸດສຳຄັນ",
        "example1": "这是我们课的重点。",
        "example2": "这个问题的重点是什么？"
    },
    {
        "word": "重视",
        "pinyin": "zhòng shì",
        "meaning": "ມີຄວາມສົນໃຈ, ໃຫ້ຄວາມສຳຄັນກັບ",
        "example1": "我们要重视环境保护。",
        "example2": "他很重视学习。"
    },
    {
        "word": "周围",
        "pinyin": "zhōu wéi",
        "meaning": "ອ້ອມຂ້າງ,ຮອບຂ້າງ",
        "example1": "房子周围有很多树。",
        "example2": "他周围的人都是很坏。"
    },
    {
        "word": "主意",
        "pinyin": "zhǔ yi",
        "meaning": "ຄວາມຄິດ，idea",
        "example1": "他想出了一个好主意。",
        "example2": "这个主意真棒。"
    },
    {
        "word": "祝贺",
        "pinyin": "zhù hè",
        "meaning": "ອວຍພອນ,ຊົມເຊີຍ",
        "example1": "我们祝贺他取得了成功。",
        "example2": "祝贺你当上了校长。"
    },
    {
        "word": "著名",
        "pinyin": "zhù míng",
        "meaning": "ມີຊື່ສຽງ",
        "example1": "他是一位著名的科学家。",
        "example2": "这位明星很著名。"
    },
    {
        "word": "专门",
        "pinyin": "zhuān mén",
        "meaning": "ເປັນພິເສດ/ໂດຍສະເພາະ",
        "example1": "他专门研究历史。",
        "example2": "这是专门教中文的学校。"
    },
    {
        "word": "专业",
        "pinyin": "zhuān yè",
        "meaning": "ວິຊາຊີບ/ເປັນມືອາຊີບ",
        "example1": "他的专业是国际贸易。",
        "example2": "这位医生很专业。"
    },
    {
        "word": "转",
        "pinyin": "zhuǎn",
        "meaning": "ຫັນ/ໝຸນ",
        "example1": "他转身离开了房间。",
        "example2": "我们应该向左转。"
    },
    {
        "word": "赚",
        "pinyin": "zhuàn",
        "meaning": "ຫາເງິນ",
        "example1": "他通过做生意赚了很多钱。",
        "example2": "这份工作能赚多少钱？"
    },
    {
        "word": "准确",
        "pinyin": "zhǔn què",
        "meaning": "ຖືກຕ້ອງແມ່ນຍຳ",
        "example1": "他的回答很准确。",
        "example2": "我们需要准确的信息。"
    },
    {
        "word": "准时",
        "pinyin": "zhǔn shí",
        "meaning": "ຕົງເວລາ",
        "example1": "他总是准时到达学校。",
        "example2": "这个会议要求准时参加。"
    },
    {
        "word": "仔细",
        "pinyin": "zǐ xì",
        "meaning": "ລະອຽດ,ມີຄວາມລະອຽດ",
        "example1": "他仔细地检查了作业。",
        "example2": "他是一个仔细的人。"
    },
    {
        "word": "自然",
        "pinyin": "zì rán",
        "meaning": "ທຳມະຊາດ/ເປັນທຳມະຊາດ",
        "example1": "我们应该保护自然。",
        "example2": "她的笑容很自然。"
    },
    {
        "word": "自信",
        "pinyin": "zì xìn",
        "meaning": "ເຊື່ອໃຈ,ໝັ້ນໃຈໃນຕົວເອງ",
        "example1": "他是一个很自信的人。",
        "example2": "自信是成功的关键。"
    },
    {
        "word": "总结",
        "pinyin": "zǒng jié",
        "meaning": "ສະຫລຸບ",
        "example1": "他总结了这次会议的要点。",
        "example2": "他总结了这次考试的错题。"
    },
    {
        "word": "租",
        "pinyin": "zū",
        "meaning": "ເຊົ່າ",
        "example1": "他租了一间房子。",
        "example2": "我们可以租车去旅行。"
    },
    {
        "word": "最好",
        "pinyin": "zuì hǎo",
        "meaning": "ດີທີ່ສຸດ,ດີທີ່ສຸດແມ່ນ",
        "example1": "这是我吃过的最好吃的蛋糕。",
        "example2": "你最好早点起床。"
    },
    {
        "word": "尊重",
        "pinyin": "zūn zhòng",
        "meaning": "ເຄົາລົບ",
        "example1": "我们应该尊重他人的意见。",
        "example2": "大家应该互相尊重。"
    },
    {
        "word": "左右",
        "pinyin": "zuǒ yòu",
        "meaning": "ປະມານ(ໃຊ້ຢູ່ທ້າຍຈຳນວນ)",
        "example1": "他有一米八左右高。",
        "example2": "他好像18岁左右。"
    },
    {
        "word": "作家",
        "pinyin": "zuò jiā",
        "meaning": "ນັກຂຽນ",
        "example1": "他是一位著名的作家。",
        "example2": "这位作家的作品很受欢迎。"
    },
    {
        "word": "作用",
        "pinyin": "zuò yòng",
        "meaning": "ບົດບາດ/ຜົນລັບ",
        "example1": "这种药有什么作用？",
        "example2": "教育对人的成长有重要作用。"
    },
    {
        "word": "作者",
        "pinyin": "zuò zhě",
        "meaning": "ນັກຂຽນ",
        "example1": "你知道这本书的作者是谁吗？",
        "example2": "这首歌的作者很年轻。"
    },
    {
        "word": "座",
        "pinyin": "zuò",
        "meaning": "ທີ່，ແຫ່ງ(ຄຳລັກສະນະນາມຂອງເມືອງ,ພູຜາໆລໆ)",
        "example1": "我爬过那座山。",
        "example2": "这座城市很美丽。"
    },
    {
        "word": "座位",
        "pinyin": "zuò wèi",
        "meaning": "ບ່ອນນັ່ງ",
        "example1": "请坐在你的座位上。",
        "example2": "这个电影院的座位很舒服。"
    }



        // 更多HSK1词汇...
];

function loadWords() {
    const wordTableBody = document.getElementById('wordTable').getElementsByTagName('tbody')[0];
    wordTableBody.innerHTML = ''; // 清空现有列表

    words.forEach(word => {
        const row = wordTableBody.insertRow();
        row.insertCell(0).textContent = word.word;
        row.insertCell(1).innerHTML = `<span class="pinyin">${word.pinyin}</span>`;
        row.insertCell(2).textContent = word.meaning;
        row.insertCell(3).innerHTML = `<span>${word.example1}</span> <button onclick="speakText('${word.example1}')">听一听</button>`;
        row.insertCell(4).innerHTML = `<span>${word.example2}</span> <button onclick="speakText('${word.example2}')">听一听</button>`;
        const cell = row.insertCell(5);
        cell.innerHTML = `<button onclick="speakText('${word.word}')">听单词</button>`;
    });
}

function searchWord() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const wordTableBody = document.getElementById('wordTable').getElementsByTagName('tbody')[0];
    const rows = wordTableBody.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const wordCell = rows[i].getElementsByTagName('td')[0];
        if (wordCell) {
            const word = wordCell.textContent.toUpperCase();
            if (word.indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    }
}

// 加载单词列表
loadWords();