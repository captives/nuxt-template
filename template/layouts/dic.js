const dic = [
  {
    //班级
    classList: [
      { name: "1班", value: "1" },
      { name: "2班", value: "2" },
      { name: "3班", value: "3" },
      { name: "4班", value: "4" },
      { name: "5班", value: "5" },
      { name: "6班", value: "6" },
      { name: "7班", value: "7" },
      { name: "8班", value: "8" },
      { name: "9班", value: "9" },
      { name: "10班", value: "10" },
      { name: "11班", value: "11" },
      { name: "12班", value: "12" },
      { name: "13班", value: "13" },
      { name: "14班", value: "14" },
      { name: "15班", value: "15" },
      { name: "16班", value: "16" },
      { name: "17班", value: "17" },
      { name: "18班", value: "18" },
      { name: "19班", value: "19" },
      { name: "20班", value: "20" },
      { name: "21班", value: "21" },
      { name: "22班", value: "22" },
      { name: "23班", value: "23" },
      { name: "24班", value: "24" },
      { name: "25班", value: "25" },
      { name: "26班", value: "26" },
      { name: "27班", value: "27" },
      { name: "28班", value: "28" },
      { name: "29班", value: "29" },
      { name: "30班", value: "30" },
      { name: "31班", value: "31" },
      { name: "32班", value: "32" },
      { name: "33班", value: "33" },
      { name: "34班", value: "34" },
      { name: "35班", value: "35" },
      { name: "36班", value: "36" },
      { name: "37班", value: "37" },
      { name: "38班", value: "38" },
      { name: "39班", value: "39" },
      { name: "40班", value: "40" },
      { name: "41班", value: "41" },
      { name: "42班", value: "42" },
      { name: "43班", value: "43" },
      { name: "44班", value: "44" },
      { name: "45班", value: "45" },
      { name: "46班", value: "46" },
      { name: "47班", value: "47" },
      { name: "48班", value: "48" },
      { name: "49班", value: "49" },
      { name: "50班", value: "50" },
    ],
    // 是否重点关注
    isImportant: [
      { value: true, name: "是" },
      { value: false, name: "否" },
    ],
    // 课程顾问状态
    onlyQuit: [
      { value: false, name: "在职" },
      { value: true, name: "离职" },
    ],
    // 跟踪结果
    trackResult: [
      { value: "继续电话", name: "继续电话" },
      { value: "参加俱乐部", name: "参加俱乐部" },
      { value: "预约成功", name: "预约成功" },
      { value: "无兴趣", name: "无兴趣" },
      { value: "电话无回应", name: "电话无回应" },
      { value: "再次提交", name: "再次提交" },
      { value: "电话号码不正确", name: "电话号码不正确" },
      { value: "无法联络上", name: "无法联络上" },
      { value: "非本市", name: "非本市" },
      { value: "年龄过小", name: "年龄过小" },
      { value: "超龄", name: "超龄" },
    ],
    // 沟通次数
    communicate: [
      { value: "0", name: "0" },
      { value: "1", name: "1" },
      { value: "2", name: "2" },
      { value: "3", name: "3" },
      { value: "4", name: "4" },
      { value: "5", name: "5" },
      { value: "10", name: "5次以上" },
    ],
    // 意向度
    intention: [
      { value: "大", name: "大" },
      { value: "一般", name: "一般" },
      { value: "小", name: "小" },
      { value: "没有", name: "没有" },
    ],
    // 是否有效-查询
    isValid: [
      { value: "1", name: "有效" },
      { value: "0", name: "无效" },
      { value: "3", name: "未确认" },
    ],
    // 是否有效2-输入
    isValid2: [
      { value: "1", name: "有效" },
      { value: "2", name: "无效" },
    ],
    // 无效类型
    invalidType: [
      { value: "1", name: "小学一年级-二年级" },
      { value: "2", name: "SPY或供应商虚假来电" },
      { value: "3", name: "任何成人课程" },
      { value: "4", name: "广告、招聘类" },
      { value: "5", name: "精锐内部人员" },
      { value: "6", name: "客户投诉电话" },
      { value: "7", name: "1个月内的2次或多次来电" },
      { value: "8", name: "内部测试电话" },
      { value: "10", name: "找人或找总部" },
      { value: "11", name: "在读学员" },
    ],
    // 性别
    sex: [
      { value: 0, name: "女" },
      { value: 1, name: "男" },
    ],
    // 报告类型
    reportType: [
      { value: "1", name: "CC未签约分析报告" },
      { value: "2", name: "入学测试" },
    ],
    // 联系人身份
    contactIdentity: [
      { value: "父亲", name: "父亲" },
      { value: "母亲", name: "母亲" },
      // {"value": "祖父", "name": "祖父",},
      // {"value": "祖母", "name": "祖母",},
      // {"value": "外公", "name": "外公",},
      // {"value": "外婆", "name": "外婆",},
      { value: "其他", name: "其他" },
    ],
    // 线索来源（推荐登记）
    sourceClues1: [
      { value: "电话呼出", name: "电话呼出" },
      { value: "电话呼入", name: "电话呼入" },
      { value: "主动上门", name: "主动上门" },
    ],
    // 线索来源（线索录入type 为1或者43）
    sourceClues2: [
      { value: "电话呼入", name: "电话呼入" },
      { value: "Local其他", name: "Local其他" },
    ],
    // 线索来源（线索录入type 不为1或者43）
    sourceClues3: [
      { value: "主动上门", name: "主动上门" },
      { value: "拉访", name: "拉访" },
      { value: "Local其他", name: "Local其他" },
    ],
    // 线索客户类型
    sourceClues4: [
      { value: "电话呼入", name: "电话呼入" },
      { value: "电话呼出", name: "电话呼出" },
      { value: "主动上门", name: "主动上门" },
      { value: "电话中心呼出", name: "电话中心呼出" },
      { value: "在线咨询", name: "在线咨询" },
      { value: "拉访", name: "拉访" },
      { value: "其它", name: "其它" },
      { value: "Local其他", name: "Local其他" },
    ],
    // 呼入类型
    incomingType: [
      { value: "电话呼入", name: "电话呼入" },
      { value: "在线咨询", name: "在线咨询" },
    ],
    // 海域
    sea: [
      { value: "1", name: "新海" },
      { value: "2", name: "个人海" },
      { value: "3", name: "公海" },
      { value: "4", name: "死海" },
    ],
    // 审核状态
    checkStatus: [
      { value: "0", name: "待审批" },
      { value: "1", name: "已审核" },
      { value: "2", name: "驳回" },
    ],
    // 转校状态
    turnStatus: [
      { value: "0", name: "未处理" },
      { value: "1", name: "已完成" },
      { value: "2", name: "取消" },
      { value: "3", name: "驳回" },
    ],
    //坐席
    seat: [
      { value: "1", name: "电脑客户端" },
      { value: "2", name: "IP电话" },
    ],
    // cities, //省市区

    //年级
    grades: [],
    //学科
    subject: [],
    //学员状态
    leadsstatus: [],
    //渠道大类
    bigclass: [],
    //校区
    hrcodedepts: [],
    // 教育顾问（初始化）
    sales: [],
    //渠道小类
    smallclass: [],
    // 教育顾问（根据选择校区）
    // deptsales: [],
  },
];

export default dic;
