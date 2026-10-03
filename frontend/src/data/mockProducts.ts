import type { ComparisonProject, Product, Recommendation } from '../types/product';

export const mockProject: ComparisonProject = {
  title: '帮我选一台办公笔记本',
  productType: '笔记本电脑',
  budget: '5000-7000 元',
  scenario: '办公、写文档、轻度剪辑、经常外出携带',
  priorities: '续航、重量、性能、价格'
};

export const mockProducts: Product[] = [
  {
    id: 'thinkbook-14-plus',
    name: 'ThinkBook 14+ 2024',
    brand: 'Lenovo',
    price: '¥6299',
    category: '轻薄办公本',
    source: 'manual',
    link: 'https://example.com/thinkbook-14-plus',
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
    description: '性能释放较强，接口丰富，适合需要兼顾办公和轻度创作的用户。',
    specs: {
      CPU: 'Intel Core Ultra 5',
      内存: '32GB',
      存储: '1TB SSD',
      屏幕: '14.5 英寸 2.8K 120Hz',
      重量: '约 1.5kg',
      续航: '约 8 小时'
    },
    pros: ['性能余量大', '屏幕素质高', '接口完整'],
    cons: ['机身略重', '高负载风扇声明显'],
    suitableFor: ['办公用户', '学生', '轻度剪辑用户']
  },
  {
    id: 'matebook-14',
    name: 'MateBook 14',
    brand: 'Huawei',
    price: '¥5999',
    category: '高颜值办公本',
    source: 'text',
    link: 'https://example.com/matebook-14',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    description: '屏幕观感好，生态协同便利，适合华为手机用户和日常办公场景。',
    specs: {
      CPU: 'Intel Core Ultra 5',
      内存: '16GB',
      存储: '1TB SSD',
      屏幕: '14.2 英寸 OLED',
      重量: '约 1.31kg',
      续航: '约 9 小时'
    },
    pros: ['屏幕显示优秀', '机身轻薄', '多设备协同好'],
    cons: ['接口偏少', '内存规格选择少'],
    suitableFor: ['移动办公', '华为生态用户', '文档处理']
  },
  {
    id: 'redmibook-pro-14',
    name: 'RedmiBook Pro 14',
    brand: 'Xiaomi',
    price: '¥5299',
    category: '性价比轻薄本',
    source: 'link',
    link: 'https://example.com/redmibook-pro-14',
    imageUrl: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80',
    description: '价格友好，基础配置均衡，适合预算敏感但希望屏幕和性能不差的用户。',
    specs: {
      CPU: 'Intel Core i5',
      内存: '16GB',
      存储: '1TB SSD',
      屏幕: '14 英寸 2.8K 120Hz',
      重量: '约 1.46kg',
      续航: '约 7 小时'
    },
    pros: ['价格优势明显', '屏幕规格不错', '日常性能够用'],
    cons: ['续航一般', '质感不如高端机型'],
    suitableFor: ['预算有限用户', '学生', '轻办公用户']
  }
];

export const mockRecommendations: Recommendation[] = [
  {
    label: '最佳综合推荐',
    productName: 'ThinkBook 14+ 2024',
    reason: '性能、屏幕、接口最均衡，适合希望一台电脑多用几年的办公用户。'
  },
  {
    label: '移动办公推荐',
    productName: 'MateBook 14',
    reason: '重量更轻，屏幕观感好，适合经常携带和重视生态协同的用户。'
  },
  {
    label: '预算有限推荐',
    productName: 'RedmiBook Pro 14',
    reason: '价格最低，核心配置够用，适合把性价比放在第一位的用户。'
  }
];
