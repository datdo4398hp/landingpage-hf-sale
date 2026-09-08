import { LoanPackage, FAQItem, FinancialPartner, NewsArticle } from '../types';

export const LOAN_PACKAGES: LoanPackage[] = [
  {
    id: 'vay-mua-oto',
    name: 'Vay mua ô tô',
    badge: 'Lãi suất ưu đãi',
    iconName: 'car',
    // minAmount: 100000000,
    // maxAmount: 3000000000,
    minTermMonths: 12,
    maxTermMonths: 96,
    interestRateFrom: 0.65,
    description: 'Hỗ trợ nguồn vốn tài trợ mua xe ô tô mới hoặc xe đã qua sử dụng với hạn mức lên đến 70% giá trị xe, thủ tục nhanh chóng, duyệt hồ sơ linh hoạt.',
    // benefits: [
    //   'Hạn mức cho vay đến 70% giá trị xe',
    //   'Thời gian vay linh hoạt',
    //   'Lãi suất cạnh tranh chỉ từ 6 - 9%/tháng',
    //   'Chấp nhận thế chấp bằng chính chiếc xe mua',
    //   'Xử lí hồ sơ nhanh chóng',
    // ],
    benefits: [
      'Xử lí hồ sơ nhanh chóng',
      'Lãi suất ưu đãi, hấp dẫn',
      'Lãi suất cạnh tranh, số tiền vay linh hoạt',
      'Thời gian vay linh hoạt',
      'Thời gian vay theo thu nhập thực tế, phương thức trả nợ linh hoạt, tài sản bảo đảm đa dạng',
      'Trải nghiệm vượt trội',
      'Thủ tục đơn giản, thời gian phê duyệt nhanh chóng, đội ngũ tư vấn sẵn sàng hỗ trợ 24/7',
      'Thời gian vay tối đa: 96 tháng',
      'Số tiền vay tối đa 70% giá trị xe nếu thế chấp bằng chính chiếc xe mua và 100% giá trị xe nếu thế chấp tài sản bảo đảm khác'

    ],
    eligibilityRequirements: [
      'Công dân Việt Nam từ 18 - 65 tuổi',
      'Có nguồn thu nhập ổn định đảm bảo khả năng trả nợ',
      'Không có nợ xấu tại các TCTD (CIC)'
    ],
    requiredDocs: [
      'CCCD gắn chip chính chủ',
      'Đăng kí xe/Giấy đăng kiểm (nếu xe chưa sang tên)',
      'Bảo hiểm',
      'Hợp đồng mua bán xe & Giấy đặt cọc',
      'Giấy tờ chứng minh thu nhập (Bảng lương/Sao kê/Hợp đồng cho thuê)'
    ],
    popularTag: true
  },
  {
    id: 'vay-mua-nha',
    name: 'Vay mua nhà',
    badge: 'Hạn mức lớn',
    iconName: 'home',
    // minAmount: 200000000,
    // maxAmount: 10000000000,
    minTermMonths: 24,
    maxTermMonths: 300,
    interestRateFrom: 0.55,
    description: 'Giải pháp tài chính toàn diện giúp bạn sở hữu ngôi nhà mơ ước, căn hộ chung cư hoặc đất ở với thời hạn vay lên đến 25 năm và lãi suất ưu đãi.',
    // benefits: [
    //   'Hạn mức cho vay lên đến 75% giá trị bất động sản',
    //   'Thời hạn vay dài hạn đến 25 năm (300 tháng)',
    //   'Lãi suất ưu đãi cố định trong những năm đầu',
    //   'Phương thức trả nợ linh hoạt phù hợp dòng tiền'
    // ],
    benefits: [
      'Mức vay cạnh tranh',
      'Số tiền vay lên tới 100% giá trị nhà đất, tối đa 50 tỷ đồng / khoản vay',
      'Thời hạn vay, kỳ nợ linh hoạt',
      'Kỳ trả nợ gốc linh hoạt theo thu nhập thực tế nhưng chu kỳ trả nợ gốc không quá 03 tháng',
      'Xử lý hồ sơ nhanh chóng',
      'Thủ tục đơn giản, thời gian phê duyệt nhanh chóng, đội ngũ tư vấn sẵn sàng hỗ trợ 24/7'

    ],
    eligibilityRequirements: [
      'Công dân Việt Nam từ 18 đến không quá 75 tuổi (tại thời điểm kết thúc khoản vay)',
      // 'Có tài sản bảo đảm là BĐS định mua hoặc BĐS khác',
      'Có thu nhập ổn định đủ khả năng trả gốc và lãi'
    ],
    requiredDocs: [
      'CCCD gắn chip / Giấy xác nhận tình trạng hôn nhân',
      'Giấy tờ pháp lý BĐS (Sổ hồng/Sổ đỏ/Hợp đồng mua bán)',
      'Chứng minh nguồn thu nhập trả nợ'
    ]
  },
  {
    id: 'vay-kinh-doanh',
    name: 'Vay kinh doanh',
    badge: 'Bổ sung vốn lưu động',
    iconName: 'briefcase',
    // minAmount: 50000000,
    // maxAmount: 5000000000,
    minTermMonths: 6,
    maxTermMonths: 120,
    interestRateFrom: 0.7,
    description: 'Nguồn vốn tiếp sức cho cá nhân, hộ kinh doanh và doanh nghiệp nhỏ mở rộng quy mô, mua sắm trang thiết bị và bổ sung vốn lưu động.',
    // benefits: [
    //   'Hạn mức cho vay linh hoạt lên tới 5 tỷ đồng',
    //   'Thời gian vay từ 6 đến 120 tháng',
    //   'Hình thức giải ngân và trả nợ linh hoạt theo chu kỳ kinh doanh',
    //   'Lãi suất ưu đãi chỉ từ 0.70%/tháng'
    // ],
    benefits: [
      'Bổ sung vốn đầu tư sản xuất kinh doanh',
      'Bổ sung nhanh chóng và kịp thời vốn đầu tư tài sản cố định',
      'Lãi suất ưu đãi, đa dạng đối tượng khách hàng',
      'Đối tượng vay là cá nhân tự kinh doanh, chủ hộ kinh doanh, chủ hộ sở hữu doanh nghiệp tư nhân',
      'Phương thức trả nợ linh hoạt',
      'Phù hợp với thu nhập từ hoạt động kinh doanh',
      'Công dân Việt Nam từ 18-65 tuổi',
      'Có nhu cầu vay vống trung dài hạn đầu tư tài sản cố định, mở rộng sản xuất kinh doanh',

    ],
    eligibilityRequirements: [
      'Chủ hộ kinh doanh/Doanh nghiệp/Tiểu thương có địa điểm kinh doanh rõ ràng',
      'Có kinh nghiệm hoạt động trong ngành nghề từ 6 tháng trở lên',
      'Phương án kinh doanh khả thi và có lợi nhuận',
      'Có tài sản đảm bảo là bất động sản (ô tô, giấy tờ có giá trị)'
    ],
    requiredDocs: [
      'CCCD chủ kinh doanh/Giấy ĐKKD (nếu có)',
      'Sổ sách ghi chép doanh thu/Sao kê tài khoản kinh doanh',
      'Giấy tờ tài sản bảo đảm (nếu vay thế chấp)'
    ]
  },
  {
    id: 'vay-tieu-dung-the-chap',
    name: 'Vay tiêu dùng thế chấp',
    badge: 'Lãi suất cạnh tranh',
    iconName: 'shield-check',
    // minAmount: 50000000,
    // maxAmount: 2000000000,
    minTermMonths: 12,
    maxTermMonths: 120,
    interestRateFrom: 0.75,
    description: 'Khoản vay dùng tài sản bảo đảm (BĐS, xe ô tô, sổ tiết kiệm) để đáp ứng mọi nhu cầu tiêu dùng lớn như du học, khám chữa bệnh, trang trí nội thất.',
    // benefits: [
    //   'Hạn mức cho vay đến 100% nhu cầu tiêu dùng',
    //   'Lãi suất thấp hơn hẳn so với vay tín chấp',
    //   'Thời hạn vay dài giúp chia nhỏ số tiền trả hàng tháng',
    //   'Duyệt hồ sơ nhanh chóng, thủ tục đơn giản'
    // ],
    benefits: [
      'Có nhu cầu vay vốn để thanh toán các chi phí tiêu dùng hàng ngày',
      'Phương thức vay linh hoạt',
      'Duyệt hồ sơ nhanh chóng, thủ tục đơn giản',
      'Thủ tục đơn giản, thời gian phê duyệt nhanh chóng, đội ngũ tư vấn sẵn sàng hỗ trợ 24/7'
    ],
    eligibilityRequirements: [
      'Đối tượng khách hàng là công dân Việt Nam từ 18 tuổi đến không quá 75 tuổi tại thời điểm kết thúc khoản vay',
      'Có mức thu nhập bình quân từ 5 triệu đồng/tháng trở lên',
      'Có tài sản bảo đảm (bất động sản, ô tô, giấy tờ có giá trị) thuộc quyền sở hữu/sử dụng hợp pháp',
    ],
    requiredDocs: [
      'CCCD gắn chip chính chủ',
      'Giấy tờ chứng minh quyền sở hữu tài sản bảo đảm',
      'Chứng minh thu nhập hàng tháng'
    ]
  }
];

export const FINANCIAL_PARTNERS: FinancialPartner[] = [
  { name: 'VPBank', logoText: 'VPBank', subText: 'Ngân hàng TMCP Việt Nam Thịnh Vượng', badgeColor: 'bg-emerald-600', category: 'bank' },
  { name: 'TPBank', logoText: 'TPBank', subText: 'Ngân hàng TMCP Tiên Phong', badgeColor: 'bg-purple-600', category: 'bank' },
  { name: 'VIB', logoText: 'VIB', subText: 'Ngân hàng Quốc Tế', badgeColor: 'bg-blue-600', category: 'bank' },
  { name: 'FE CREDIT', logoText: 'FE CREDIT', subText: 'Công ty Tài chính VPBank SMBC', badgeColor: 'bg-red-600', category: 'finance_company' },
  { name: 'HOME CREDIT', logoText: 'HOME CREDIT', subText: 'Tập đoàn Tài chính Tiêu dùng', badgeColor: 'bg-red-500', category: 'finance_company' },
  { name: 'MIRAE ASSET', logoText: 'MIRAE ASSET', subText: 'Finance Company', badgeColor: 'bg-amber-600', category: 'finance_company' },
  { name: 'SHB FINANCE', logoText: 'SHB FINANCE', subText: 'Tài chính Ngân hàng SHB', badgeColor: 'bg-orange-600', category: 'finance_company' },
  { name: 'LOTTE FINANCE', logoText: 'LOTTE FINANCE', subText: 'Công ty Tài chính Lotte', badgeColor: 'bg-rose-600', category: 'finance_company' },
  { name: 'HD SAISON', logoText: 'HD SAISON', subText: 'Công ty Tài chính HD SAISON', badgeColor: 'bg-yellow-600', category: 'finance_company' }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Vay tín chấp là gì?',
    answer: 'Vay tín chấp là hình thức vay vốn không cần tài sản thế chấp (như nhà đất, xe cộ). Đơn vị tài chính duyệt khoản vay dựa hoàn toàn vào uy tín cá nhân, lịch sử tín dụng CIC và khả năng trả nợ (thu nhập hàng tháng) của người vay.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Lãi suất vay tín chấp tại Viet P2P được tính như thế nào?',
    answer: 'Lãi suất vay tín chấp tại Viet P2P dao động từ 0.95% đến 1.8%/tháng tùy thuộc vào gói vay, điểm tín dụng CIC và hồ sơ minh chứng thu nhập của bạn. Tất cả lãi suất và các chi phí liên quan đều được công khai minh bạch rõ ràng trong hợp đồng trước khi ký duyệt.',
    category: 'interest'
  },
  {
    id: 'faq-3',
    question: 'Thời gian xét duyệt và giải ngân là bao lâu?',
    answer: 'Với hình thức Vay nhanh online qua eKYC, hệ thống AI hỗ trợ xét duyệt chỉ trong 15-30 phút. Các gói vay tiêu dùng hoặc vay theo lương thông thường sẽ được duyệt và giải ngân về tài khoản ngân hàng của bạn trong vòng 24h làm việc.',
    category: 'approval'
  },
  {
    id: 'faq-4',
    question: 'Ai có thể đăng ký vay tín chấp tại Viet P2P?',
    answer: 'Công dân Việt Nam trong độ tuổi từ 18 đến 60 tuổi, có CCCD gắn chip hợp lệ, có nguồn thu nhập ổn định từ 4.5 triệu VNĐ/tháng trở lên và không có nợ xấu thuộc nhóm 3, 4, 5 trên hệ thống CIC.',
    category: 'approval'
  },
  {
    id: 'faq-5',
    question: 'Có những khoản phí nào khi vay tín chấp?',
    answer: 'Viet P2P cam kết KHÔNG thu bất kỳ khoản phí tư vấn hay phí hồ sơ trước nào. Chi phí khoản vay chỉ bao gồm lãi suất đã niêm yết và phí bảo hiểm khoản vay (tự nguyện, giúp chi trả khoản vay khi gặp rủi ro sức khỏe bất khả kháng).',
    category: 'interest'
  },
  {
    id: 'faq-6',
    question: 'Thanh toán khoản vay hàng tháng bằng cách nào?',
    answer: 'Bạn có thể dễ dàng thanh toán khoản vay hàng tháng ngay trên ứng dụng Viet P2P, hoặc chuyển khoản qua Internet Banking, ví điện tử MoMo/ZaloPay, hoặc tại các điểm thu hộ như VNPost, Thế Giới Di Động, FPT Shop.',
    category: 'repayment'
  },
  {
    id: 'faq-7',
    question: 'Thông tin cá nhân của tôi có được bảo mật không?',
    answer: 'Viet P2P áp dụng tiêu chuẩn bảo mật dữ liệu cao nhất (mã hóa SSL 256-bit, chứng nhận ISO 27001). Thông tin đăng ký của bạn hoàn toàn được bảo mật, tuyệt đối không tiết lộ cho bên thứ ba ngoại trừ đối tác thẩm định tín dụng chính thức.',
    category: 'security'
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'vietp2p-thong-bao-lich-nghi-le-quoc-khanh-02-9-2026',
    title: '🇻🇳 VIETP2P | THÔNG BÁO LỊCH NGHỈ LỄ QUỐC KHÁNH 02/9/2026 🇻🇳',
    summary: 'VietP2P trân trọng thông báo đến Quý khách hàng và Quý đối tác lịch nghỉ lễ Quốc Khánh 02/9/2026. Mọi yêu cầu sẽ được xử lý ngay sau kỳ nghỉ.',
    content: `
      <h2>Thông báo lịch nghỉ lễ Quốc Khánh 02/9/2026</h2>
      <p>VietP2P trân trọng thông báo đến Quý khách hàng và Quý đối tác lịch nghỉ lễ Quốc Khánh 02/9/2026.</p>
      <p>Trong thời gian nghỉ lễ, đội ngũ Viet P2P sẽ tiếp tục hỗ trợ qua kênh trực tuyến. Mọi hồ sơ và yêu cầu sẽ được xử lý ngay sau khi kết thúc kỳ nghỉ.</p>
      <h2>Thời gian nghỉ lễ</h2>
      <p>VietP2P nghỉ lễ từ ngày 01/09/2026 đến hết ngày 02/09/2026 và sẽ hoạt động bình thường trở lại từ ngày 03/09/2026.</p>
      <h2>Liên hệ trong kỳ nghỉ</h2>
      <p>Quý khách hàng có thể liên hệ qua:</p>
      <ul>
        <li>Hotline: <strong>1900 571 239</strong></li>
        <li>Email: cskh@viet-p2p.com</li>
        <li>App Viet P2P</li>
      </ul>
    `,
    category: 'Tin Nội bộ',
    author: 'Ban Truyền thông Viet P2P',
    publishedDate: '01/09/2026',
    readTime: '2 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    tags: ['Thông báo', 'Nghỉ lễ', 'Quốc Khánh'],
    sourceUrl: 'https://viet-p2p.com/vietp2p-thong-bao-lich-nghi-le-quoc-khanh-02-9-2026.html'
  },
  {
    id: 'news-2',
    slug: 'gia-vang-ngay-19-07-2026',
    title: 'Giá vàng ngày 19/07/2026: Vàng miếng SJC và vàng nhẫn biến động ra sao?',
    summary: 'Cập nhật giá vàng miếng SJC, vàng nhẫn ngày 19/07/2026. Khảo sát thị trường cho thấy nhiều biến động đáng chú ý cần theo dõi.',
    content: `
      <h2>Giá vàng ngày 19/07/2026</h2>
      <p>Giá vàng miếng SJC, vàng nhẫn ngày 19/7/2026 theo khảo sát thị trường tiếp tục ghi nhận nhiều biến động đáng chú ý.</p>
      <h2>Diễn biến thị trường vàng</h2>
      <p>Thị trường vàng trong nước tiếp tục theo sát xu hướng vàng thế giới với biên độ dao động trong phiên giao dịch sáng ngày 19/07/2026.</p>
      <h2>Khuyến nghị đầu tư</h2>
      <p>Các chuyên gia tài chính khuyến nghị nhà đầu tư cần thận trọng, theo dõi sát diễn biến thị trường quốc tế trước khi đưa ra quyết định mua/bán.</p>
      <p>Nếu bạn cần vốn để đầu tư, Viet P2P cung cấp các gói vay với lãi suất minh bạch, thủ tục đơn giản và giải ngân nhanh chóng.</p>
    `,
    category: 'Tin tức',
    author: 'Ban Biên tập Viet P2P',
    publishedDate: '19/07/2026',
    readTime: '3 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    tags: ['Giá vàng', 'SJC', 'Thị trường tài chính'],
    sourceUrl: 'https://viet-p2p.com/gia-vang-ngay-19-07-2026.html'
  },
  {
    id: 'news-3',
    slug: 'cap-nhat-lai-suat-gui-tiet-kiem-tai-quay',
    title: 'Cập nhật lãi suất gửi tiết kiệm tại quầy: So sánh 49 ngân hàng mới nhất',
    summary: 'Tính đến thời điểm hiện tại, Việt Nam có 49 ngân hàng hoạt động. Bài viết cập nhật biểu lãi suất tiết kiệm tại quầy mới nhất từ các ngân hàng lớn.',
    content: `
      <h2>Tổng quan lãi suất tiết kiệm hiện tại</h2>
      <p>Tính đến thời điểm hiện tại, Việt Nam có 49 ngân hàng hoạt động. Lãi suất tiết kiệm tại quầy tiếp tục có nhiều thay đổi theo diễn biến của chính sách tiền tệ.</p>
      <h2>Các ngân hàng có lãi suất cao nhất</h2>
      <p>Hiện nay, một số ngân hàng cổ phần tư nhân đang áp dụng mức lãi suất tiết kiệm kỳ hạn 12 tháng hấp dẫn, dao động từ 5.0% đến 6.5%/năm tại quầy.</p>
      <h2>Lưu ý khi gửi tiết kiệm</h2>
      <ul>
        <li>Chỉ gửi tiền tại các tổ chức tín dụng được Ngân hàng Nhà nước cấp phép</li>
        <li>Bảo hiểm tiền gửi tối đa 125 triệu đồng/người/tổ chức</li>
        <li>Cần thận trọng với các lời mời gửi lãi suất cao bất thường</li>
      </ul>
    `,
    category: 'Kiến thức vay',
    author: 'Ban Biên tập Viet P2P',
    publishedDate: '15/07/2026',
    readTime: '5 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80',
    tags: ['Lãi suất', 'Tiết kiệm', 'Ngân hàng'],
    sourceUrl: 'https://viet-p2p.com/cap-nhat-lai-suat-gui-tiet-kiem-tai-quay.html'
  },
  {
    id: 'news-4',
    slug: 'ngan-hang-len-tieng-ve-hinh-thuc-gui-tiet-kiem-lai-suat-18-20-nam',
    title: 'Ngân hàng lên tiếng về hình thức gửi tiết kiệm lãi suất 18-20%/năm, rút gốc bất cứ lúc nào',
    summary: 'Thời gian gần đây, trên mạng xã hội xuất hiện nhiều lời mời gọi gửi tiền với lãi suất cực cao 18-20%/năm. Ngân hàng Nhà nước đã lên tiếng cảnh báo.',
    content: `
      <h2>Cảnh báo từ Ngân hàng Nhà nước</h2>
      <p>Thời gian gần đây, trên mạng xã hội xuất hiện nhiều lời mời gọi gửi tiền với lãi suất 18-20%/năm, cam kết rút gốc bất cứ lúc nào. Đây là mức lãi suất bất thường, vượt xa khung lãi suất huy động của các tổ chức tín dụng được cấp phép.</p>
      <h2>Dấu hiệu nhận biết</h2>
      <ul>
        <li>Hứa hẹn lãi suất quá cao so với thị trường (trên 10%/năm)</li>
        <li>Không có giấy phép hoạt động của Ngân hàng Nhà nước</li>
        <li>Áp lực phải giới thiệu người khác tham gia</li>
        <li>Hợp đồng mơ hồ, không rõ ràng</li>
      </ul>
      <h2>Khuyến cáo</h2>
      <p>Người dân cần tỉnh táo, chỉ giao dịch với các tổ chức tín dụng có giấy phép hoạt động hợp pháp và kiểm tra kỹ thông tin trước khi đầu tư.</p>
    `,
    category: 'Tin tức',
    author: 'Ban Biên tập Viet P2P',
    publishedDate: '10/07/2026',
    readTime: '4 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    tags: ['Cảnh báo tài chính', 'Lãi suất cao', 'An toàn tài chính'],
    sourceUrl: 'https://viet-p2p.com/ngan-hang-len-tieng-ve-hinh-thuc-gui-tiet-kiem-lai-suat-18-20-nam-rut-goc-bat-cu-luc-nao.html'
  },
  {
    id: 'news-5',
    slug: 'go-ap-luc-thanh-khoan-ngan-hang-tang-toc-bo-sung-nguon-von',
    title: 'Gỡ áp lực thanh khoản, ngân hàng tăng tốc bổ sung nguồn vốn',
    summary: 'Trong bối cảnh tăng trưởng tín dụng tiếp tục vượt xa tốc độ huy động vốn, các ngân hàng đang tăng tốc bổ sung nguồn lực tài chính.',
    content: `
      <h2>Tín dụng vượt huy động</h2>
      <p>Trong bối cảnh tăng trưởng tín dụng tiếp tục vượt xa tốc độ huy động, nhiều ngân hàng đang đẩy mạnh các giải pháp bổ sung thanh khoản để đáp ứng nhu cầu vay vốn ngày càng tăng của doanh nghiệp và người dân.</p>
      <h2>Các giải pháp đang được triển khai</h2>
      <ul>
        <li>Tăng lãi suất huy động để thu hút tiền gửi</li>
        <li>Phát hành trái phiếu ngân hàng</li>
        <li>Tăng cường hợp tác với các tổ chức tài chính quốc tế</li>
        <li>Mở rộng mạng lưới hợp tác với các nền tảng P2P</li>
      </ul>
      <h2>Ảnh hưởng đến người vay</h2>
      <p>Người vay cần nắm bắt thông tin thị trường để tận dụng các cơ hội vay vốn với lãi suất tốt. Viet P2P luôn duy trì mức lãi suất cạnh tranh và minh bạch cho khách hàng.</p>
    `,
    category: 'Tin tức',
    author: 'Ban Biên tập Viet P2P',
    publishedDate: '05/07/2026',
    readTime: '4 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
    tags: ['Thanh khoản', 'Ngân hàng', 'Tín dụng'],
    sourceUrl: 'https://viet-p2p.com/go-ap-luc-thanh-khoan-ngan-hang-tang-toc-bo-sung-nguon-von.html'
  },
  {
    id: 'news-6',
    slug: 'ngan-hang-day-manh-tin-dung-cho-nguoi-mua-nha-o-thuc',
    title: 'Ngân hàng đẩy mạnh tín dụng cho người mua nhà ở thực',
    summary: 'Dòng vốn tín dụng bất động sản đang có xu hướng dịch chuyển mạnh sang phân khúc người mua nhà ở thực, thay vì đầu cơ.',
    content: `
      <h2>Xu hướng tín dụng bất động sản mới</h2>
      <p>Dòng vốn tín dụng bất động sản đang có xu hướng dịch chuyển mạnh sang phân khúc nhà ở thực với nhiều chính sách ưu đãi từ ngân hàng nhằm hỗ trợ người dân có nhu cầu sở hữu nhà.</p>
      <h2>Các gói vay mua nhà ưu đãi</h2>
      <p>Nhiều ngân hàng thương mại đang triển khai gói tín dụng với lãi suất ưu đãi trong 1-3 năm đầu cho người mua nhà lần đầu, đặc biệt là nhà ở xã hội và nhà thương mại giá vừa phải.</p>
      <h2>Điều kiện vay mua nhà tại Viet P2P</h2>
      <ul>
        <li>Hạn mức vay lên đến 5 tỷ đồng</li>
        <li>Thời hạn vay tối đa 25 năm</li>
        <li>Lãi suất cạnh tranh, minh bạch</li>
        <li>Thủ tục đơn giản, hỗ trợ tư vấn tận tâm</li>
      </ul>
    `,
    category: 'Kiến thức vay',
    author: 'Chuyên gia Viet P2P',
    publishedDate: '28/06/2026',
    readTime: '5 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    tags: ['Vay mua nhà', 'Bất động sản', 'Tín dụng'],
    sourceUrl: 'https://viet-p2p.com/ngan-hang-day-manh-tin-dung-cho-nguoi-mua-nha-o-thuc.html'
  },
  {
    id: 'news-7',
    slug: 'ban-do-doanh-thu-ngan-hang-quy-i-2026',
    title: 'Bản đồ doanh thu ngân hàng quý I/2026: VietinBank lên ngôi, VPBank tăng tốc mạnh',
    summary: 'Quý I/2026 ghi nhận nhiều biến động đáng chú ý trong cuộc đua doanh thu ngân hàng. VietinBank dẫn đầu, VPBank bứt phá ấn tượng.',
    content: `
      <h2>Toàn cảnh doanh thu ngân hàng quý I/2026</h2>
      <p>Quý I/2026 ghi nhận nhiều biến động đáng chú ý trong cuộc đua doanh thu của ngành ngân hàng, với VietinBank tiếp tục giữ vị trí dẫn đầu và VPBank tăng tốc mạnh mẽ.</p>
      <h2>VietinBank dẫn đầu</h2>
      <p>VietinBank duy trì vị trí top đầu về tổng doanh thu với mức tăng trưởng ổn định, nhờ chiến lược phát triển tín dụng bán lẻ và dịch vụ ngân hàng số hiệu quả.</p>
      <h2>VPBank bứt phá</h2>
      <p>VPBank ghi nhận mức tăng trưởng ấn tượng trong quý I/2026, đặc biệt ở mảng tín dụng tiêu dùng và cho vay cá nhân, phản ánh nhu cầu vay vốn ngày càng tăng của người dân.</p>
      <h2>Xu hướng tổng thể</h2>
      <p>Toàn ngành ghi nhận tín dụng tăng trưởng tích cực, trong đó tín dụng tiêu dùng và vay mua nhà tiếp tục là động lực chính.</p>
    `,
    category: 'Tin tức',
    author: 'Ban Phân tích Viet P2P',
    publishedDate: '20/06/2026',
    readTime: '6 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Ngân hàng', 'Doanh thu', 'VietinBank', 'VPBank'],
    sourceUrl: 'https://viet-p2p.com/ban-do-doanh-thu-ngan-hang-quy-i-2026-vietinbank-len-ngoi-vpbank-tang-toc-manh.html'
  },
  {
    id: 'news-8',
    slug: 'vib-va-visa-mo-rong-hop-tac-he-sinh-thai-thanh-toan-so',
    title: 'VIB và Visa mở rộng hợp tác, thúc đẩy hệ sinh thái thanh toán số tại Việt Nam',
    summary: 'Trong chiến lược tăng tốc phát triển mảng thẻ và thanh toán số, Ngân hàng VIB và Visa đã ký kết mở rộng hợp tác chiến lược.',
    content: `
      <h2>Hợp tác chiến lược VIB - Visa</h2>
      <p>Trong chiến lược tăng tốc phát triển mảng thẻ và thanh toán số, Ngân hàng VIB và tập đoàn Visa đã chính thức ký kết hợp đồng hợp tác mở rộng, nhằm thúc đẩy hệ sinh thái thanh toán số tại Việt Nam.</p>
      <h2>Các điểm nổi bật của hợp tác</h2>
      <ul>
        <li>Phát triển các dòng thẻ tín dụng và ghi nợ mới với nhiều ưu đãi</li>
        <li>Tích hợp công nghệ thanh toán không tiếp xúc</li>
        <li>Mở rộng mạng lưới chấp nhận thẻ</li>
        <li>Phát triển giải pháp thanh toán cho thương mại điện tử</li>
      </ul>
      <h2>Ý nghĩa với thị trường</h2>
      <p>Sự hợp tác này không chỉ mang lại thêm tiện ích cho người dùng mà còn góp phần thúc đẩy mục tiêu chuyển đổi số ngành tài chính - ngân hàng Việt Nam.</p>
    `,
    category: 'Tin tức',
    author: 'Ban Biên tập Viet P2P',
    publishedDate: '15/06/2026',
    readTime: '4 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
    tags: ['VIB', 'Visa', 'Thanh toán số', 'Fintech'],
    sourceUrl: 'https://viet-p2p.com/vib-va-visa-mo-rong-hop-tac-thuc-day-he-sinh-thai-thanh-toan-so-tai-viet-nam.html'
  },
  {
    id: 'news-9',
    slug: 'vpbank-va-ncb-dan-dau-tang-truong-tin-dung-quy-i-2026',
    title: 'VPBank và NCB dẫn đầu tăng trưởng tín dụng quý I/2026',
    summary: 'Tăng trưởng tín dụng của ngành ngân hàng đã khởi sắc ngay từ những tháng đầu năm 2026. VPBank và NCB ghi nhận mức tăng ấn tượng nhất.',
    content: `
      <h2>Tín dụng khởi sắc từ đầu năm</h2>
      <p>Tăng trưởng tín dụng của ngành ngân hàng đã khởi sắc ngay từ những tháng đầu năm 2026, với nhiều ngân hàng ghi nhận mức tăng trưởng vượt kế hoạch.</p>
      <h2>VPBank dẫn đầu tăng trưởng</h2>
      <p>VPBank ghi nhận tỷ lệ tăng trưởng tín dụng cao nhất trong quý I/2026, đặc biệt trong phân khúc cho vay cá nhân và doanh nghiệp vừa và nhỏ.</p>
      <h2>NCB bứt phá ngoạn mục</h2>
      <p>NCB (Ngân hàng Quốc Dân) cũng ghi nhận mức tăng trưởng tín dụng ấn tượng trong quý đầu năm, phản ánh chiến lược đẩy mạnh cho vay bán lẻ của ngân hàng này.</p>
      <h2>Tác động đến thị trường vay</h2>
      <p>Tăng trưởng tín dụng mạnh đồng nghĩa với việc người vay có nhiều lựa chọn hơn. Viet P2P luôn sẵn sàng kết nối bạn với nguồn vốn phù hợp nhất.</p>
    `,
    category: 'Tin tức',
    author: 'Ban Phân tích Viet P2P',
    publishedDate: '10/06/2026',
    readTime: '5 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    tags: ['VPBank', 'NCB', 'Tín dụng', 'Tăng trưởng'],
    sourceUrl: 'https://viet-p2p.com/vpbank-va-ncb-dan-dau-tang-truong-tin-dung-quy-i-2026.html'
  }
];
