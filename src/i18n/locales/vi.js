export default {
  navigation: {
    documentation: 'Tài liệu',
    about: 'Giới thiệu',
    version: 'v1.0.0',
    contact: 'Liên hệ'
  },
  hero: {
    title: "Tomosia's Ruby",
    header: {
      title: 'High Level MVC',
      subtitle: 'Đơn giản hóa logic nghiệp vụ và phát triển ứng dụng nhanh chóng',
      installButton: 'Cài đặt miễn phí',
      description: 'Thư viện mã nguồn mở <br /> Hãy cùng nhau hoàn thiện'
    }
  },
  knowledgeBanner: {
    heading: 'Chế độ Siêu anh hùng Rails: Đã kích hoạt!',
    description: 'Tại sao phải làm việc với nhiều framework khi bạn có thể trở thành một ninja Rails?',
    highlight: 'Một framework để thống trị tất cả, một HMVC để tìm kiếm chúng',
    installButton: 'Cài đặt miễn phí',
    demoButton: 'Xem demo'
  },
  architecture: {
    heading: 'Kiến Trúc Hoàn Hảo',
    subheading: 'MVC: Thế Hệ Tiếp Theo',
    description: 'Tiến hóa, không Cách mạng - Bởi vì chúng tôi không phá vỡ mà chỉ làm mọi thứ tốt hơn!'
  },
  reasonRefactor: {
    whyChoose: 'Tại sao chọn HMVC',
    heading: {
      main: 'Tái cấu trúc để rõ ràng hơn',
      sub: 'giảm thiểu nợ kỹ thuật'
    },
    blocks: {
      missingAbstractions: {
        title: 'Thiếu trừu tượng hóa',
        description: 'Các framework web xuất sắc trong định tuyến và hiển thị nhưng thường yếu trong việc cấu trúc logic nghiệp vụ. Không có trừu tượng hóa rõ ràng, code trở nên rối rắm, phức tạp và khó bảo trì.'
      },
      solution: {
        title: 'Giải pháp của chúng tôi',
        description: 'HMVC giới thiệu khái niệm trừu tượng "operation", chia logic thành các bước rõ ràng. Điều này cải thiện luồng điều khiển, tăng khả năng bảo trì và làm cho các quy trình phức tạp dễ quản lý hơn.'
      },
      conventions: {
        title: 'Quy ước vững chắc',
        description: 'Với mô hình Railway, HMVC tối ưu hóa xử lý lỗi, giảm thiểu các điều kiện thừa và tăng khả năng tái sử dụng code thông qua kế thừa và kết hợp—tạo ra phát triển sạch sẽ và hiệu quả hơn.'
      }
    },
    videoTour: 'Xem video hướng dẫn'
  },
  ownerSay: {
    title: 'Gặp gỡ những phù thủy đứng sau phép màu ✨',
    founder: {
      name: 'Mr. Anh Nguyễn',
      position: 'CTO, Người sáng lập HMVC',
      quote: 'Tôi đã tạo ra HMVC với tầm nhìn giải quyết các vấn đề phức tạp vốn có trong các ứng dụng quy mô lớn. Bằng cách giới thiệu cấu trúc phân cấp cho mô hình MVC truyền thống, chúng tôi đã thiết lập một cách tiếp cận độc lập với framework, mang lại sự rõ ràng và khả năng bảo trì cho các codebase phức tạp. Thật là tuyệt vời khi thấy kiến trúc này đã giúp nhiều team giảm thiểu nợ kỹ thuật và xây dựng các ứng dụng bền vững hơn.'
    },
    maintainer: {
      name: 'Mr. Minh Tăng',
      position: 'Kiến trúc sư trưởng, Người bảo trì HMVC',
      quote: 'Kế thừa các nguyên tắc nền tảng, tôi đã phát triển nó thành một kiến trúc hiện đại và mạnh mẽ, giải quyết các thách thức phát triển hiện nay. Tôi tập trung vào việc nâng cao trải nghiệm của nhà phát triển thông qua các trừu tượng rõ ràng và các mẫu có thể bảo trì. Tính linh hoạt của kiến trúc cho phép các team áp dụng dần dần vào các dự án hiện có, làm cho nó trở thành giải pháp lý tưởng cho cả phát triển mới và hiện đại hóa hệ thống cũ.'
    }
  },
  enhancedSlider: {
    slides: {
      mvcVsHmvc: {
        title: 'Đối chiếu MVC & HMVC',
        description: 'Trực quan hóa mối quan hệ giữa quy mô codebase và độ phức tạp trong bảo trì. Trong khi Rails truyền thống cho thấy sự tăng trưởng đau đớn theo cấp số nhân khi dự án mở rộng, HMVC duy trì độ phức tạp tuyến tính thông qua tổ chức có cấu trúc và ranh giới rõ ràng. Cách tiếp cận kiến trúc này đảm bảo phát triển bền vững cho cả ứng dụng nhỏ và lớn.'
      },
      overviewLayer: {
        title: 'Tổng quan các Lớp',
        description: 'Một kiến trúc phân lớp chiến lược giúp tối ưu hóa luồng nghiệp vụ từ yêu cầu đến phản hồi. Mỗi lớp có một trách nhiệm riêng biệt: từ xử lý yêu cầu, qua phân quyền và xác thực, đến thực thi logic nghiệp vụ và lưu trữ dữ liệu. Sự phân tách này đảm bảo kiểm thử sạch sẽ, code dễ bảo trì, và ngăn chặn lỗi giữa các lớp trong khi giữ cho logic nghiệp vụ tập trung và thuần khiết.'
      },
      flowControl: {
        title: 'Kiểm soát Luồng',
        description: 'Thực thi các truy vấn trong các chế độ khác nhau và theo dõi tất cả hoạt động của bạn với lịch sử cục bộ, ngăn chặn việc mất mát công việc của bạn.'
      },
      structureProject: {
        title: 'Cấu trúc Dự án',
        description: 'HMVC tổ chức dự án của bạn thành các thành phần module rõ ràng. Cấu trúc cốt lõi bao gồm Controllers cho định tuyến, Operations cho quy trình nghiệp vụ, Forms cho xác thực, Models cho quản lý dữ liệu, và Policies cho phân quyền. Cách tiếp cận module này cho phép phát triển song song, kiểm thử dễ dàng hơn, và tổ chức code có thể bảo trì mở rộng theo sự phát triển của dự án.'
      }
    }
  },
  abstractionLayer: {
    title: 'Các Lớp Trừu Tượng',
    mission: 'SỨ MỆNH CỐT LÕI: ĐẢM BẢO TÍNH BỀN VỮNG CỦA PHẦN MỀM',
    description: [
      'Đạt được kiến trúc phần mềm bền vững và dễ bảo trì',
      'thông qua việc triển khai chiến lược các lớp trừu tượng hiện đại.'
    ],
    sections: {
      slimController: {
        title: 'Controller Tinh Gọn',
        description: [
          'Tối ưu hóa các controller bằng cách loại bỏ hoàn toàn logic nghiệp vụ.',
          'Các controller hiện đại đóng vai trò như người điều phối giao thông - xử lý các yêu cầu HTTP, quản lý định tuyến và ủy thác xử lý cho các Operations chuyên biệt. Sự phân tách này đảm bảo mã nguồn sạch, dễ bảo trì và ranh giới trách nhiệm rõ ràng.'
        ]
      },
      domainModel: {
        title: 'Mô Hình Domain Xuất Sắc',
        description: [
          'Chuyển đổi các model thành các thực thể domain tập trung vào mục đích cốt lõi: quản lý quan hệ dữ liệu và tương tác cơ sở dữ liệu. Bằng cách loại bỏ các vấn đề về logic nghiệp vụ và xác thực, các model trở nên dễ bảo trì và mở rộng hơn. Cách tiếp cận này thúc đẩy tổ chức mã nguồn tốt hơn và tăng cường sự hợp tác của nhóm.'
        ]
      },
      validation: {
        title: 'Lớp Xác Thực Thông Minh',
        description: [
          'Áp dụng cách tiếp cận logic hơn đối với việc xác thực dữ liệu bằng cách chuyển nó vào các đối tượng form chuyên dụng. Sự phân tách này tạo ra ranh giới rõ ràng giữa xác thực dữ liệu và logic nghiệp vụ.',
          'Các đối tượng form xử lý chuyển đổi dữ liệu, quy tắc xác thực và đảm bảo tính toàn vẹn dữ liệu trước khi bất kỳ hoạt động nghiệp vụ nào bắt đầu. Chiến lược xác thực chủ động này ngăn chặn dữ liệu không hợp lệ đến logic nghiệp vụ cốt lõi, giảm lỗi và cải thiện độ tin cậy của hệ thống.'
        ]
      },
      operation: {
        title: 'Logic Nghiệp Vụ Được Điều Phối',
        description: [
          'Operations hoạt động như nhạc trưởng trong bản giao hưởng của ứng dụng, điều phối các quy trình nghiệp vụ phức tạp với sự rõ ràng và chính xác.',
          'Mỗi operation đóng gói một quy trình nghiệp vụ cụ thể, chia nhỏ nó thành các bước tuần tự rõ ràng. Cách tiếp cận có cấu trúc này nâng cao khả năng đọc mã nguồn, tạo điều kiện thuận lợi cho việc kiểm thử và làm cho các quy trình nghiệp vụ phức tạp dễ quản lý hơn. Operations thúc đẩy việc tái sử dụng mã và làm cho logic nghiệp vụ của ứng dụng dễ bảo trì và mở rộng hơn.'
        ]
      }
    }
  },
  common: {
    loading: 'Đang tải...',
    error: 'Đã xảy ra lỗi',
    backToTop: 'Lên đầu trang'
  }
}
