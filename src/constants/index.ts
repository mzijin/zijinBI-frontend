/**
 * @author
 * CreateTime 2023/5/7 15:24
 * 全局变量,需要替换全局变量的来这里替换就可以
 */

/**
 * 项目logo
 */
import loginImage from '../../public/loginImage.png';
import logo from '../../public/logo.svg';
import registerImage from '../../public/registerImage.jpg';

export const IMAGES = [
  import('../../public/schoolimage/image.jpg'),
  import('../../public/schoolimage/image2.jpg'),
  import('../../public/schoolimage/image3.png'),
  import('../../public/schoolimage/image4.png'),
  import('../../public/schoolimage/image5.png'),
];

export const SYSTEM_LOGO = logo;

export const LOGIN_BACKGROUND_IMAGE = loginImage;

export const REGISTER_BACKGROUND_IMAGE = registerImage;

/**
 * shier介绍
 */

export const CHART_TYPE_SELECT = [
  { value: '折线图', label: '折线图' },
  { value: '柱状图', label: '柱状图' },
  { value: '雷达图', label: '雷达图' },
  { value: '条形图', label: '条形图' },
  { value: '散点图', label: '散点图' },
  { value: '正负条形图', label: '正负条形图' },
  { value: '柱状图框选', label: '柱状图框选' },
  {
    value: 'divider',
    label: '-----------------------多列数据建议选择如下的图表类型-----------------------',
    disabled: true,
  },
  { value: '饼图', label: '饼图' },
  { value: '树图', label: '树图' },
  { value: '热力图', label: '热力图' },
  { value: '漏斗图', label: '漏斗图' },
  { value: '区域图', label: '区域图' },
  { value: '堆叠条形图', label: '堆叠条形图' },
  { value: '玫瑰图', label: '玫瑰图' },
];

/**
 * 默认头像
 */
export const DEFAULT_AVATAR_URL =
  'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56d6f5ad1d8747f484d6c2666b5a7961~tplv-k3u1fbpfcp-zoom-crop-mark:1512:1512:1512:851.awebp?';

export const selectGender = [
  { value: '男', label: '男' },
  { value: '女', label: '女' },
];
export const selectUserStatus = [
  { value: 0, label: '正常' },
  { value: 1, label: '注销' },
];
export const selectUserRole = [
  { value: 'user', label: '普通用户' },
  { value: 'admin', label: '管理员' },
  { value: 'ban', label: '封号' },
];
export const WELCOME = 'https://blog.csdn.net/m0_70638653?spm=1000.2115.3001.5343';
export const XUXI = 'https://yupi.icu/';
